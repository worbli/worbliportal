"""
This file contains our app factory
"""
import logging
from logging.config import dictConfig
from flask import  Flask
from flask_migrate import Migrate, MigrateCommand

# integration to come later
MIGRATE = Migrate()

def create_app(extra_config_settings=None):
    """Create a Flask applicaction.
    """
    # Instantiate Flask
    app = Flask(__name__)

    # Load App Config settings
    # Load common settings from 'app/settings.py' file
    #app.config.from_object('worbliportal.settings')
    app.config.from_pyfile('settings.py')
    # Load local settings from 'app/local_settings.py'
    # app.config.from_object('worbliportal.local_settings')
    app.config.from_pyfile('local_settings.py')
    # Load extra config settings from 'extra_config_settings' param
    if extra_config_settings is not None:
        app.config.update(extra_config_settings)
    initialize_extensions(app)
    register_routes(app)
    return app


def register_routes(app):
    """
    Method to easily isolate route registration
    """
    # Import our routes
    from worbliportal.routes import ROUTE_BLUEPRINT
    app.register_blueprint(ROUTE_BLUEPRINT)
    from worbliportal.users import USER_ROUTES as user_routes
    app.register_blueprint(user_routes)
    from worbliportal.lookup import LOOKUP_ROUTES
    app.register_blueprint(LOOKUP_ROUTES)
    from worbliportal.airgrab import AIRGRAB_ROUTES
    app.register_blueprint(AIRGRAB_ROUTES)


def initialize_extensions(app):
    """
    Method to wrap up all extensions that require initialization
    """
    # configure logging
    logging.info("before config")
    dictConfig(LOGGINGCONFIG)
    logging.info("after config")
    # Setup Flask-SQLAlchemy
    from worbliportal.database import DBH
    DBH.init_app(app)
    # Setup bcrypt for use in users
    from worbliportal.models import BCRYPT
    BCRYPT.init_app(app)

    # Setup Flask-Migrate
    MIGRATE.init_app(app, DBH)

    # Setup Flask-Mail
    from worbliportal.mail import MAIL
    MAIL.init_app(app)
    """
    logging.info('mail configured')
    logging.info(app.config['MAIL_SERVER'])
    logging.info(app.config)
    """

    # Setup an error-logger to send emails to app.config.ADMINS
    #init_email_error_handler(app)


def init_email_error_handler(app):
    """
    Initialize a logger to send emails on error-level messages.
    Unhandled exceptions will now send an email message to app.config.ADMINS.
    """
    if app.debug:
        return  # Do not send error emails while developing

    # Retrieve email settings from app.config
    host = app.config['MAIL_SERVER']
    port = app.config['MAIL_PORT']
    from_addr = app.config['MAIL_DEFAULT_SENDER']
    username = app.config['MAIL_USERNAME']
    password = app.config['MAIL_PASSWORD']
    secure = () if app.config.get('MAIL_USE_TLS') else None

    # Retrieve app settings from app.config
    to_addr_list = app.config['ADMINS']
    subject = app.config.get('APP_SYSTEM_ERROR_SUBJECT_LINE', 'System Error')

    # Setup an SMTP mail handler for error-level messages
    from logging.handlers import SMTPHandler

    mail_handler = SMTPHandler(
        mailhost=(host, port),  # Mail host and port
        fromaddr=from_addr,  # From address
        toaddrs=to_addr_list,  # To address
        subject=subject,  # Subject line
        credentials=(username, password),  # Credentials
        secure=secure,
        )
    mail_handler.setLevel(logging.ERROR)
    app.logger.addHandler(mail_handler)

    # Log errors using: app.logger.error('Some error message')

LOGGINGCONFIG = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'default': {
            'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
            }
        },
    'handlers': {
        'wsgi': {
            'class': 'logging.StreamHandler',
            'stream': 'ext://flask.logging.wsgi_errors_stream',
            'formatter': 'default'
            },
        },
    'root': {
        'level': 'INFO',
        'handlers': ['wsgi']
        }
}
