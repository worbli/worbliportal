""" Flask Models file
"""
# Not sure why pylint can't find the database columns and types
# pylint: disable=no-member

from datetime import datetime, timedelta

from flask_bcrypt import Bcrypt

from worbliportal.database import DBH

BCRYPT = Bcrypt()


# It's a database class pylint, chill out
class RegistrationRequest(DBH.Model): # pylint: disable=too-few-public-methods
    """ Table for storing registration requests
    """

    __tablename__ = "registration_request"

    # required name for postgres
    # pylint: disable=invalid-name
    id = DBH.Column(DBH.Integer, primary_key=True, autoincrement=True)
    email = DBH.Column(DBH.String(255), unique=True, nullable=False)
    registration_code = DBH.Column(DBH.String(255), unique=True, nullable=False)
    requested_on = DBH.Column(DBH.DateTime, nullable=False)
    valid_until = DBH.Column(DBH.DateTime, nullable=False)
    valid = DBH.Column(DBH.Boolean, nullable=False, default=False)
    spent_on = DBH.Column(DBH.DateTime, nullable=True)
    voided_on = DBH.Column(DBH.DateTime, nullable=True)
    user = DBH.relationship("User", uselist=False, back_populates="registration_request")

    def __init__(self, email=None, registration_code=None, valid_until=None, valid=False):
        self.email = email
        self.registration_code = registration_code
        self.registered_on = datetime.now()
        now = datetime.now()
        self.requested_on = now
        if valid_until is None:
            valid_until = now + timedelta(hours=48)
        self.valid_until = valid_until
        self.valid = valid

    def __repr__(self):
        return '<User {0}>'.format(self.email)


# Standard DBH.Model declaration
# pylint: disable=too-few-public-methods
class User(DBH.Model):
    """ Table for storing users
    """

    __tablename__ = "users"

    # required name for postgres
    # pylint: disable=invalid-name
    id = DBH.Column(DBH.Integer, primary_key=True, autoincrement=True)
    email = DBH.Column(DBH.String(255), unique=True, nullable=False)
    password = DBH.Column(DBH.String(255), nullable=False)
    registered_on = DBH.Column(DBH.DateTime, nullable=False)
    location = DBH.Column(DBH.String(255), unique=False, nullable=False)
    full_name = DBH.Column(DBH.String(255), unique=False, nullable=False)
    admin = DBH.Column(DBH.Boolean, nullable=False, default=False)
    registration_request_id = DBH.Column(
        DBH.Integer, DBH.ForeignKey('registration_request.id'),
        nullable=False)
    registration_request = DBH.relationship(
        "RegistrationRequest", back_populates="user")


    def __init__(self, email, password, admin=False):
        self.email = email
        self.password = BCRYPT.generate_password_hash(password).decode('utf-8')
        self.registered_on = datetime.now()
        self.admin = admin

    def is_authenticated(self, password):
        """ Quick user check for successful log in
        """
        return bool(BCRYPT.check_password_hash(
            self.password, password))

    def get_id(self):
        """ useful shorcut for retrieving posgresql id
        """
        return self.id

    def __repr__(self):
        return '<User {0}>'.format(self.email)
