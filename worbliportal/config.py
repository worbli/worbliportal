""" Config file for flask apps
"""
import os
# Name expected by flask
# pylint: disable=invalid-name
basedir = os.path.abspath(os.path.dirname(__file__))


# No methods required, this is as expected for flask
# pylint: disable=too-few-public-methods
class Config(object):
    """ Basic config object for flask
    """
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = 'RbUrTjnJRfucNdnnJGC1HQ'
    SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']


class ProductionConfig(Config):
    """ Basic config object for flask
    """
    DEBUG = False


class StagingConfig(Config):
    """ Basic config object for flask
    """
    DEVELOPMENT = True
    DEBUG = True


class DevelopmentConfig(Config):
    """ Basic config object for flask
    """
    DEVELOPMENT = True
    DEBUG = True


class TestingConfig(Config):
    """ Basic config object for flask
    """
    TESTING = True
