from app import db
import datetime
from datetime import timedelta
from sqlalchemy.dialects.postgresql import JSON

class RegistrationRequest(db.Model):
    __tablename__ = "registration_request"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    registration_code = db.Column(db.String(255), unique=True, nullable=False)
    requested_on = db.Column(db.DateTime, nullable=False)
    valid_until = db.Column(db.DateTime, nullable=False)
    valid = db.Column(db.Boolean, nullable=False, default=False)
    spent_on = db.Column(db.DateTime, nullable=True)
    voided_on = db.Column(db.DateTime, nullable=False)

    def __init__(self, email, registration_code, valid_until=None):
        self.email = email
        self.registration_code = registration_code
        self.registered_on = datetime.datetime.now()
        if valid_until is None:
            now = datetime.now()
            valid_until = now + timedelta(hours=48)
        self.valid_until = valid_until

class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    registered_on = db.Column(db.DateTime, nullable=False)
    admin = db.Column(db.Boolean, nullable=False, default=False)

    def __init__(self, email, password, admin=False):
        self.email = email
        self.password = bcrypt.generate_password_hash(password)
        self.registered_on = datetime.datetime.now()
        self.admin = admin

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.id

    def __repr__(self):
        return '<User {0}>'.format(self.email)


