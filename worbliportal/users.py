"""
Blueprint routes for our app
"""
# pylint can't find anything for db
# pylint: disable=no-member
import base64
from datetime import datetime
import logging
import uuid
from jwt import ExpiredSignatureError, InvalidTokenError
from sqlalchemy.exc import IntegrityError

from validate_email import validate_email

from flask import Blueprint, jsonify, request
from flask_mail import Message
from worbliportal.custom_error import InvalidUsage
from worbliportal.database import WorkerSessionmaker
from worbliportal.local_settings import FLASK_ENV
from worbliportal.mail import MAIL
from worbliportal.models import object_as_dict, RegistrationRequest, User
from worbliportal.util.token import authorize, decode_auth_token, encode_auth_token

USER_ROUTES = Blueprint('user_Routes', __name__)
session = WorkerSessionmaker() #pylint: disable=invalid-name

@USER_ROUTES.route('/sm123tes654/')
def test_mail():
    """
    testing mail locally, will disable
    """
    msg = Message('Hello', sender='noreply@eosdetroit.com', \
        recipients=['charlie.e.dumont@gmail.com'])
    msg.body = "Hello Flask message sent from Flask-Mail"
    logging.info(msg)
    #MAIL.connect()
    MAIL.send(msg)
    json_dict = {"sent": True}
    return jsonify(json_dict)



@USER_ROUTES.route('/api/registrationRequest/<registration_id>', methods=['DELETE'])
def registration_removal(registration_id):
    """ Invalidate a registration key
    """
    try:
        if invalidate_registration_record_by_code(registration_id):
            json_dict = {"burned": True}
        else:
            msg = "record not found"
            raise InvalidUsage(msg, status_code=404)
        session.commit()
    except InvalidUsage as iux:
        raise iux
    except Exception as exc:
        logging.info(type(exc))
        logging.info(str(exc))
        raise InvalidUsage(str(exc), status_code=400)
    return jsonify(json_dict)

@USER_ROUTES.route('/api/registrationRequest/<registration_id>', methods=['GET'])
def registration_validation(registration_id):
    """ Validate we have a legit registration key
    """
    json_dict = {"recordValid": False}
    try:
        json_dict['recordValid'] = is_valid_registration_record(registration_id)
    except Exception as exc:
        logging.info(type(exc))
        logging.info(str(exc))
        raise InvalidUsage(str(exc), status_code=400)
    return jsonify(json_dict)


@USER_ROUTES.route('/api/registrationRequest/', methods=['POST'])
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
        session.commit()
    except InvalidUsage as iux:
        session.rollback()
        raise iux
    except Exception as exc:
        logging.info(type(exc))
        logging.info(str(exc))
        session.rollback()
        raise InvalidUsage(str(exc), status_code=400)
    finally:
        session.close()

    if FLASK_ENV in ("development", "testing"):
        json_dict = {"success" : True, "registration_code" : registration_code}
    else:
        json_dict = {"success": True}
        send_email(registration_code=registration_code, email=email)
    return jsonify(json_dict)


def send_email(registration_code=None, email=None):
    """
    controller for sending email
    """
    logging.info(registration_code, email)


@USER_ROUTES.route('/api/register/', methods=['POST'])
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
        session.commit()
    except InvalidUsage as iux:
        session.rollback()
        raise iux
    except Exception as exc:
        logging.info(type(exc))
        logging.info(str(exc))
        session.rollback()
        raise InvalidUsage(str(exc), status_code=400)
    finally:
        session.close()
    json_dict = {"success": True}
    return jsonify(json_dict)

@USER_ROUTES.route('/api/login/', methods=['POST'])
def login():
    """ Basic login, sets session for now, will change to JWT later
    """
    try:
        req_json = request.get_json()
        user = session.query(User).filter_by(
            email=req_json['email']).first()
        if not user.is_authenticated(req_json['password']):
            msg = "Invalid password"
            raise InvalidUsage(msg, status_code=401)
        jwt = encode_auth_token(user.id)
    except InvalidUsage as iux:
        raise iux
    except Exception as exc:
        logging.info(type(exc))
        logging.info(str(exc))
        raise InvalidUsage(str(exc), status_code=400)
    #logging.info(str(jwt))
    # This looks like noise, but otherwise we get the b'' wrappers
    # around our jwt
    tmp = base64.urlsafe_b64encode(jwt)
    jtw = tmp.decode('utf-8')
    json_dict = {"success": True, "jwt": jtw}
    return jsonify(json_dict)


@USER_ROUTES.route('/api/login/<token>')
def token_verification(token):
    """ Endpoint for the Front end to verify a token a client is holding is
    still valid
    """
    try:
        decode_auth_token(token)
    except ExpiredSignatureError:
        msg = "expired token"
        raise InvalidUsage(msg, status_code=401)
    except InvalidTokenError:
        msg = "invalid token"
        raise InvalidUsage(msg, status_code=403)
    json_dict = {"tokenValid": True}
    return jsonify(json_dict)


@USER_ROUTES.route('/api/userDetails/')
@authorize
def get_user_details(user_id):
    """
    simple endpoint to return a json object
    with user basics
    """
    logging.info("user_id")
    logging.info(user_id)
    json_dict = {}
    try:
        user = session.query(User).get(user_id)
        if user is None:
            # we should never get here because of the authorize decorator
            msg = "user not found"
            raise InvalidUsage(msg, status_code=404)
        json_dict = object_as_dict(user)
        json_dict.pop('admin')
        json_dict.pop('password')
        json_dict.pop('registered_on')
        json_dict.pop('registration_request_id')
    except InvalidUsage as iux:
        raise iux
    except Exception as exc:
        msg = str(exc)
        raise InvalidUsage(msg, status_code=400)
    return jsonify(json_dict)


@USER_ROUTES.route('/api/protected/')
@authorize
def protected_test(user_id):
    """ POC end point to show that
    Auth tokens are correct
    """
    json_dict = {"who rules": "you do, you rule"}
    json_dict['tokenContent'] = user_id
    return jsonify(json_dict)


def create_user(params):
    """ User creator from params,
        assumes valid registration code
    """
    try:
        user = User(params['email'], params['password'])
        user.location = params['location']
        registration_record = session.query(RegistrationRequest).filter_by(
            registration_code=params['registrationCode']).first()
        user.registration_request = registration_record
        user.registered_on = datetime.now()
        user.firstname = params["firstname"]
        user.lastname = params["lastname"]
        session.add(user)
    except IntegrityError as pic:
        logging.info(pic)
        msg = "Invalid parameters"
        session.rollback()
        raise InvalidUsage(msg, status_code=400)
    except Exception as exc:
        logging.info(type(exc))
        logging.info(str(exc))
        raise InvalidUsage(str(exc), status_code=400)
    return user


def validate_user_create_fields(params):
    """ Method to check for appropriate fields being present
    """
    registration_args = ['email', 'firstname', 'lastname', 'password', 'location']
    for key in registration_args:
        if key not in params.keys():
            details = "we don't have %s key" % key
            logging.info(details)
            raise InvalidUsage(details)


def validate_registration_record(registration_code=None, email=None):
    """ Method to verify registration code is good and aligns with
        email provided
    """
    registration_record = session.query(RegistrationRequest).filter_by(
        registration_code=registration_code).first()
    if registration_record is None:
        return False
    if not registration_record.email == email:
        return False
    return True


def invalidate_registration_record_by_code(registration_code, invalidation_type='voided'):
    """ Method to find and invalidate registration record
    """
    try:
        registration_record = session.query(RegistrationRequest).filter_by(
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
    except IntegrityError as pic:
        logging.info(pic)
        msg = "invalid code"
        session.rollback()
        raise InvalidUsage(msg, status_code=400)
    except Exception as exc:
        raise exc
    return True


def create_registration_record(email):
    """ Method to create a registration record
    """
    try:
        registration_code = uuid.uuid4().hex
        reg_req = RegistrationRequest(
            email=email,
            registration_code=registration_code,
            valid=True)
        session.add(reg_req)
    except IntegrityError as pic:
        logging.info(pic)
        msg = "user already has a code"
        session.rollback()
        raise InvalidUsage(msg, status_code=400)

    return registration_code


def is_valid_registration_record(registration_code):
    """ Method to validate registration record """
    try:
        registration_record = session.query(RegistrationRequest).filter_by(
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


@USER_ROUTES.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    """ RESTful error replying
    """
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response
