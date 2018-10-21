""" Flask Models file
"""
from datetime import datetime, timedelta
# Can't get pylint to respect the venv
# pylint: disable=import-error
import jwt
from app import app, bcrypt, db
# Can't get pylint to respect the venv
# pylint: disable=import-error
#from sqlalchemy.dialects.postgresql import JSON


# Standard db.Model declaration
# pylint: disable=too-few-public-methods
class RegistrationRequest(db.Model):
    """ Table for storing registration requests
    """

    __tablename__ = "registration_request"

    # required name for postgres
    # pylint: disable=invalid-name
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    registration_code = db.Column(db.String(255), unique=True, nullable=False)
    requested_on = db.Column(db.DateTime, nullable=False)
    valid_until = db.Column(db.DateTime, nullable=False)
    valid = db.Column(db.Boolean, nullable=False, default=False)
    spent_on = db.Column(db.DateTime, nullable=True)
    voided_on = db.Column(db.DateTime, nullable=True)
    user = db.relationship("User", uselist=False, back_populates="registration_request")

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


# Standard db.Model declaration
# pylint: disable=too-few-public-methods
class User(db.Model):
    """ Table for storing users
    """

    __tablename__ = "users"

    # required name for postgres
    # pylint: disable=invalid-name
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    registered_on = db.Column(db.DateTime, nullable=False)
    location = db.Column(db.String(255), unique=True, nullable=False)
    full_name = db.Column(db.String(255), unique=True, nullable=False)
    admin = db.Column(db.Boolean, nullable=False, default=False)
    registration_request_id = db.Column(
        db.Integer, db.ForeignKey('registration_request.id'),
        nullable=False)
    registration_request = db.relationship(
        "RegistrationRequest", back_populates="user")


    def __init__(self, email, password, admin=False):
        self.email = email
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')
        self.registered_on = datetime.now()
        self.admin = admin

    def is_authenticated(self, password):
        """ Quick user check for successful log in
        """
        return bool(bcrypt.check_password_hash(
            self.password, password))

    @staticmethod
    def encode_auth_token(user_id):
        """
        Generates the Auth Token
        :return: string
        """
        try:
            payload = {
                'exp': datetime.utcnow() + timedelta(days=2),
                'iat': datetime.utcnow(),
                'sub': user_id
            }
            return jwt.encode(
                payload,
                app.config.get('SECRET_KEY'),
                algorithm='HS256'
            )
        #pylint: disable=broad-except
        except Exception as exc:
            return exc

    @staticmethod
    def decode_auth_token(auth_token):
        """
        Decodes the auth token
        :param auth_token:
        :return: integer|string
        """
        try:
            payload = jwt.decode(auth_token, app.config.get('SECRET_KEY'))
            return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'

    def get_id(self):
        """ useful shorcut for retrieving posgresql id
        """
        return self.id

    def __repr__(self):
        return '<User {0}>'.format(self.email)
