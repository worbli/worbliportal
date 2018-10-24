"""
This file contains our app factory
"""
from flask import  Flask
from flask_migrate import Migrate, MigrateCommand

# integration to come later
#mail = Mail()
MIGRATE = Migrate()

def create_app(extra_config_settings=None):
    """Create a Flask applicaction.
    """
    # Instantiate Flask
    app = Flask(__name__)

    # Load App Config settings
    # Load common settings from 'app/settings.py' file
    app.config.from_object('settings')
    # Load local settings from 'app/local_settings.py'
    app.config.from_object('local_settings')
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
    from pf.routes import ROUTE_BLUEPRINT
    app.register_blueprint(ROUTE_BLUEPRINT)
    from pf.users import USER_ROUTES as user_routes
    app.register_blueprint(user_routes)


def initialize_extensions(app):
    """
    Method to wrap up all extensions that require initialization
    """
    # Setup Flask-SQLAlchemy
    from pf.database import DBH
    DBH.init_app(app)
    # Setup bcrypt for use in users
    from pf.models import BCRYPT
    BCRYPT.init_app(app)

    # Setup Flask-Migrate
    MIGRATE.init_app(app, DBH)

    # Setup Flask-Mail
    #mail.init_app(app)

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
    import logging
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
