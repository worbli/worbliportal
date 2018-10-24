"""
Settings that are common to all environments
"""
import os

# Application settings
APP_NAME = "Base Flask Facotry"
APP_SYSTEM_ERROR_SUBJECT_LINE = APP_NAME + " system error"

# Flask settings
CSRF_ENABLED = True

# Flask-SQLAlchemy settings
SQLALCHEMY_ECHO = False
SQLALCHEMY_TRACK_MODIFICATIONS = True

# Required name
# pylint: disable=invalid-name
basedir = os.path.abspath(os.path.dirname(__file__))
