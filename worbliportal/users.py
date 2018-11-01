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

from flask import Blueprint, jsonify, render_template, request
from flask_mail import Message
from worbliportal.custom_error import InvalidUsage
from worbliportal.database import WorkerSessionmaker
from worbliportal.local_settings import FLASK_ENV, MAIL_SENDER
from worbliportal.mail import MAIL
from worbliportal.models import object_as_dict, RegistrationRequest, User
from worbliportal.util.token import authorize, decode_auth_token, encode_auth_token

USER_ROUTES = Blueprint('user_Routes', __name__)
session = WorkerSessionmaker() #pylint: disable=invalid-name

#MAIL_SENDER = "worbliportal@eosdetroit.io"


@USER_ROUTES.route('/sm123tes654/')
def test_mail():
    """
    testing mail locally, will disable
    """
    msg = Message('Hello', sender=MAIL_SENDER, \
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
    json_dict = {}
    try:
        request_json = request.get_json()
        logging.info(request_json)
        email = request_json['email']
        optin = request_json['optin']
        if not validate_email(email):
            msg = "invalid email"
            raise InvalidUsage(msg, status_code=400)
        json_dict['registration_code'] = uuid.uuid4().hex
        if FLASK_ENV not in ("development"):
            send_reg_code_email(
                registration_code=json_dict['registration_code'], email=email)
        create_registration_record(email, optin, json_dict['registration_code'])
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

    return jsonify(json_dict)


def send_join_successful_email(email):
    """
    controller for sending email
    """
    logging.info(email)
    msg = Message('Worbli Welcome', sender=MAIL_SENDER, \
        recipients=[email])
    msg.html = render_template('welcome.html')
    logging.info(msg)
    #MAIL.connect()
    MAIL.send(msg)


def send_reg_code_email(registration_code=None, email=None):
    """
    controller for sending reg code email
    """
    logging.info(registration_code, email)
    msg = Message('Worbli Confirmation', sender=MAIL_SENDER, \
        recipients=[email])
    msg.html = render_template('register_email.html', securityCode=registration_code)
    logging.info(msg)
    #MAIL.connect()
    MAIL.send(msg)


@USER_ROUTES.route('/api/register/', methods=['POST'])
def register():
    """ Registration process that creates a user
    """
    try:
        req_json = request.get_json()
        email = req_json['email']
        # validate registration record
        if not validate_registration_record(
                registration_code=req_json['registrationCode'],
                email=email):
            msg = "Registration code and email do not align"
            raise InvalidUsage(msg)
        # validate fields
        validate_user_create_fields(req_json)
        # create user
        user = create_user(req_json)
        jtw = encode_auth_token(user.id)
        tmp = base64.urlsafe_b64encode(jtw)
        jwt = tmp.decode('utf-8')

        session.commit()
        if FLASK_ENV not in ("development"):
            send_join_successful_email(email)
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
    json_dict = {"success": True, 'jwt': jwt}
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


def create_registration_record(email, optin, registration_code):
    """ Method to create a registration record
    """
    try:
        reg_req = RegistrationRequest(
            email=email,
            registration_code=registration_code,
            optin=optin,
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
