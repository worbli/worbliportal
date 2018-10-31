""" Flask Models file
"""
# Not sure why pylint can't find the database columns and types
# pylint: disable=no-member

from datetime import datetime, timedelta

from flask_bcrypt import Bcrypt
from sqlalchemy import inspect

from worbliportal.database import DBH

BCRYPT = Bcrypt()


# It's a database class pylint, chill out
class RegistrationRequest(DBH.Model): # pylint: disable=too-few-public-methods
    """ Table for storing registration requests
    """

    __tablename__ = "registration_requests"

    # required name for postgres
    # pylint: disable=invalid-name
    id = DBH.Column(DBH.Integer, primary_key=True, autoincrement=True)
    email = DBH.Column(DBH.String(255), unique=True, nullable=False)
    registration_code = DBH.Column(DBH.String(255), unique=True, nullable=False)
    requested_on = DBH.Column(DBH.DateTime, nullable=False)
    valid_until = DBH.Column(DBH.DateTime, nullable=False)
    valid = DBH.Column(DBH.Boolean, nullable=False, default=False)
    optin = DBH.Column(DBH.Boolean, nullable=False, default=False)
    spent_on = DBH.Column(DBH.DateTime, nullable=True)
    voided_on = DBH.Column(DBH.DateTime, nullable=True)
    user = DBH.relationship("User", uselist=False, back_populates="registration_request")

    def __init__(#pylint:disable=too-many-arguments
            self, email=None, registration_code=None, valid_until=None, valid=False,
            optin=False):
        self.email = email
        self.registration_code = registration_code
        self.registered_on = datetime.now()
        now = datetime.now()
        self.requested_on = now
        self.optin = optin
        if valid_until is None:
            valid_until = now + timedelta(days=48)
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
    firstname = DBH.Column(DBH.String(255), unique=False, nullable=False)
    lastname = DBH.Column(DBH.String(255), unique=False, nullable=False)
    admin = DBH.Column(DBH.Boolean, nullable=False, default=False)
    registration_request_id = DBH.Column(
        DBH.Integer, DBH.ForeignKey('registration_requests.id'),
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


class AirgrabValidationRequest(DBH.Model): # pylint: disable=too-few-public-methods
    """ Table for storing airgrab validation requests.
    """

    __tablename__ = "airgrab_validation_requests"
    # required name for postgres
    # pylint: disable=invalid-name
    id = DBH.Column(DBH.Integer, primary_key=True, autoincrement=True)
    worbli_account_name = DBH.Column(DBH.String(12), unique=True, nullable=False)
    worbli_owner_key = DBH.Column(DBH.String(57), nullable=False)
    worbli_active_key = DBH.Column(DBH.String(57), nullable=False)
    security_code = DBH.Column(DBH.String(64), unique=True, nullable=False)
    completed = DBH.Column(DBH.Boolean, nullable=False, default=False)
    snapshot_balance = DBH.relationship("SnapshotBalance")
    snapshot_balance_id = DBH.Column(
        DBH.Integer, DBH.ForeignKey('snapshot_balances.id'),
        nullable=False)
    user = DBH.relationship("User", uselist=False)
    user_id = DBH.Column(DBH.Integer, DBH.ForeignKey('users.id'), nullable=False)

    def __init__(self, worbli_account_name=None,worbli_owner_key=None,
            worbli_active_key=None, security_code=None, snapshot_balance=None,
            user_id=None):
        self.worbli_account_name = worbli_account_name
        self.worbli_owner_key = worbli_owner_key
        self.worbli_active_key = worbli_active_key
        self.security_code = security_code
        self.snapshot_balance_id = snapshot_balance.id
        self.user_id = user_id


class SnapshotBalance(DBH.Model): # pylint: disable=too-few-public-methods,too-many-instance-attributes
    """ Table for storing EOS snapshot balances.
    """

    __tablename__ = "snapshot_balances"
    # required name for postgres
    # pylint: disable=invalid-name
    id = DBH.Column(DBH.Integer, primary_key=True, autoincrement=True)
    account_name = DBH.Column(DBH.String(12), unique=True, nullable=False)
    owner_key = DBH.Column(DBH.String(57), nullable=False)
    active_key = DBH.Column(DBH.String(57), nullable=False)
    total_nostake = DBH.Column(DBH.Float, nullable=False)
    staked = DBH.Column(DBH.Float, nullable=False)
    delegated = DBH.Column(DBH.Float, nullable=False)
    total = DBH.Column(DBH.Float, nullable=False)
    creation_time = DBH.Column(DBH.DateTime, nullable=False)

    def __init__(self, account_name=None, owner_key=None, active_key=None, total_nostake=None,#pylint: disable=too-many-arguments
                 staked=None, delegated=None, total=None, creation_time=None):
        self.account_name = account_name
        self.owner_key = owner_key
        self.active_key = active_key
        self.total_nostake = total_nostake
        self.staked = staked
        self.delegated = delegated
        self.total = total
        self.creation_time = creation_time

def object_as_dict(obj):
    """ helper function to turns a row into a dict
    """
    return {col.key: getattr(obj, col.key)
            for col in inspect(obj).mapper.column_attrs}
