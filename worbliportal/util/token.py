"""
JWT handlers and decorate
"""

import base64
from datetime import datetime, timedelta
from functools import wraps
import logging
import jwt
from flask import request
from worbliportal.custom_error import InvalidUsage
from worbliportal.local_settings import SECRET_KEY

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
            SECRET_KEY,
            algorithm='HS256'
        )
    #pylint: disable=broad-except
    except Exception as exc:
        return exc

def decode_auth_token(auth_token):
    """
    Decodes the auth token
    :param auth_token:
    :return: integer|string
    """
    try:
        payload = jwt.decode(auth_token, SECRET_KEY)
        return payload['sub']
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'


def authorize(fff):
    """ Validates a user has a token
    and the token was one of ours and is
    still valid, returns user_id
    """
    @wraps(fff)
    def decorated_function(*args, **kws):
        if not 'Authorization' in request.headers:
            msg = 'no token'
            raise InvalidUsage(msg, status_code=401)
        user = None
        token = request.headers['Authorization'][7:]
        token = base64.urlsafe_b64decode(token)

        try:
            user = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])['sub']
        except Exception as exc:
            logging.info("token exception %s", str(exc))
            msg = 'invalid token'
            raise InvalidUsage(msg, status_code=401)

        return fff(user, *args, **kws)
    return decorated_function
