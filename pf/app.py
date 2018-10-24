""" Our base app, should probably be moved into __init__ for modern
    flask standards
"""
from datetime import datetime
import logging
from logging.config import dictConfig
import os
import uuid
# Can't get pylint to respect the venv
# pylint: disable=import-error
from flask import Flask, jsonify, request, session
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from validate_email import validate_email

# This is expected name for flask
# pylint: disable=invalid-name
app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

bcrypt = Bcrypt(app)
db = SQLAlchemy(app)

# This needs to happen after the db is created to avoid
# circular dependency, will be fixed when we moved to
# app being created as a factory in __init__
# pylint: disable=wrong-import-position
import models

# Logging details
dictConfig({
    'version': 1,
    'formatters': {'default': {
        'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
    }},
    'handlers': {'wsgi': {
        'class': 'logging.StreamHandler',
        'stream': 'ext://flask.logging.wsgi_errors_stream',
        'formatter': 'default'
    }},
    'root': {
        'level': 'INFO',
        'handlers': ['wsgi']
    }
})


class InvalidUsage(Exception):
    """ RESTful error replying
    """
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        logging.info("In InvalidUsage init status_code is %s", status_code)
        if status_code is not None:
            self.status_code = status_code
        logging.info("In InvalidUsage init status_code is %s", status_code)
        self.payload = payload

    def to_dict(self):
        """ Standard dictionary implementation
        """
        rva = dict(self.payload or ())
        rva['message'] = self.message
        return rva

@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    """ RESTful error replying
    """
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response

@app.route('/')
def hello():
    """ Placeholder proof of concept
    """
    return "Hello World!"

@app.route('/api/registrationRequest/<registration_id>', methods=['GET', 'DELETE'])
def registration_validation(registration_id):
    """ Validate we have a legit registration key
    """
    if request.method == 'GET':
        json_dict = {"recordValid": False}
        try:
            json_dict['recordValid'] = is_valid_registration_record(registration_id)
        except Exception as exc:
            logging.info(type(exc))
            logging.info(str(exc))
            raise InvalidUsage(str(exc), status_code=400)
        return jsonify(json_dict)
    if request.method == 'DELETE':
        try:
            if invalidate_registration_record_by_code(registration_id):
                json_dict = {"burned": True}
            else:
                msg = "record not found"
                raise InvalidUsage(msg, status_code=404)
        except InvalidUsage as iux:
            raise iux
        except Exception as exc:
            logging.info(type(exc))
            logging.info(str(exc))
            raise InvalidUsage(str(exc), status_code=400)
        return json_dict


# Todo: Replace returning registration with email send
@app.route('/api/registrationRequest/', methods=['POST'])
def registration_request():
    """ First step in registration is requesting a registration key be
    emailed to a user, this verifies the email doesn't have an outstanding
    reg key and sends it back to the front end
    """
    try:
        request_json = request.get_json()
        email = request_json['email']
        if not validate_email(email):
            msg = "invalid email"
            raise InvalidUsage(msg, status_code=400)
        registration_code = create_registration_record(email)
    except InvalidUsage as iux:
        raise iux
    except Exception as exc:
        logging.info(type(exc))
        logging.info(str(exc))
        raise InvalidUsage(str(exc), status_code=400)
    return jsonify(registration_code)


@app.route('/api/register/', methods=['POST'])
def register():
    """ Registration process that creates a user
    """
    try:
        req_json = request.get_json()
        # validate registration record
        if not validate_registration_record(
                registration_code=req_json['registrationCode'],
                email=req_json['email']):
            msg = "Registration code and email do not align"
            raise InvalidUsage(msg)
        # validate fields
        validate_user_create_fields(req_json)
        # create user
        create_user(req_json)
    except InvalidUsage as iux:
        raise iux
    except Exception as exc:
        logging.info(type(exc))
        logging.info(str(exc))
        raise InvalidUsage(str(exc), status_code=400)
    json_dict = {"success": True}
    return jsonify(json_dict)

@app.route('/api/login/', methods=['POST'])
def login():
    """ Basic login, sets session for now, will change to JWT later
    """
    try:
        req_json = request.get_json()
        user = db.session.query(models.User).filter_by(
            email=req_json['email']).first()
        if not user.is_authenticated(req_json['password']):
            msg = "Invalid password"
            raise InvalidUsage(msg, status_code=401)
        session['logged_in'] = True
    except InvalidUsage as iux:
        raise iux
    except Exception as exc:
        logging.info(type(exc))
        logging.info(str(exc))
        raise InvalidUsage(str(exc), status_code=400)
    json_dict = {"success": True}
    return jsonify(json_dict)

# Todo: replace InvalidUsage with custom exception
def create_user(params):
    """ User creator from params,
        assumes valid registration code
    """
    try:
        user = models.User(params['email'], params['password'])
        user.location = params['location']
        registration_record = db.session.query(models.RegistrationRequest).filter_by(
            registration_code=params['registrationCode']).first()
        user.registration_request = registration_record
        user.registered_on = datetime.now()
        user.full_name = params["fullName"]
        db.session.add(user)
        db.session.commit()
        db.session.close()
    except Exception as exc:
        logging.info(type(exc))
        logging.info(str(exc))
        raise InvalidUsage(str(exc), status_code=400)


# Todo: replace InvalidUsage with custom exception
def validate_user_create_fields(params):
    """ Method to check for appropriate fields being present
    """
    registration_args = ['email', 'fullName', 'password', 'location']
    for key in registration_args:
        if key not in params.keys():
            details = "we don't have %s key" % key
            logging.info(details)
            raise InvalidUsage(details)


def validate_registration_record(registration_code=None, email=None):
    """ Method to verify registration code is good and aligns with
        email provided
    """
    registration_record = db.session.query(models.RegistrationRequest).filter_by(
        registration_code=registration_code).first()
    if registration_record is None:
        return False
    if not registration_record.email == email:
        return False
    return True


# Todo: replace general exception with custom exception
def invalidate_registration_record_by_code(registration_code, invalidation_type='voided'):
    """ Method to find and invalidate registration record
    """
    try:
        registration_record = db.session.query(models.RegistrationRequest).filter_by(
            registration_code=registration_code).first()
        if registration_record is None:
            return False
        registration_record.valid = False
        if invalidation_type == 'voided':
            registration_record.voided_on = datetime.now()
        elif invalidation_type == 'spent':
            registration_record.spent_on = datetime.now()
        else:
            raise Exception('improper invalidation')
        db.session.commit()
        db.session.close()
    except Exception as exc:
        raise exc
    return True


def create_registration_record(email):
    """ Method to create a registration record
    """
    registration_code = uuid.uuid4().hex
    reg_req = models.RegistrationRequest(
        email=email,
        registration_code=registration_code,
        valid=True)
    db.session.add(reg_req)
    db.session.commit()
    db.session.close()
    return registration_code

def is_valid_registration_record(registration_code):
    """ Method to validate registration record """
    try:
        registration_record = db.session.query(models.RegistrationRequest).filter_by(
            registration_code=registration_code).first()
        if registration_record is None:
            return False
        if registration_record.valid is False or \
            registration_record.spent_on is not None or \
            registration_record.voided_on is not None:
            return False
    except Exception as exc:
        raise exc
    return True



if __name__ == '__main__':
    app.run("0.0.0.0", port=5000)
