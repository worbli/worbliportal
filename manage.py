"""This file sets up a command line manager.

Use "python manage.py" for a list of available commands.
Use "python manage.py runserver" to start the development web server on localhost:5001.
Use "python manage.py runserver --help" for additional runserver options.
"""

from flask_migrate import MigrateCommand
from flask_script import Manager

from worbliportal import create_app

# Setup Flask-Script with command line commands
MANAGER = Manager(create_app)
MANAGER.add_command('db', MigrateCommand)

if __name__ == "__main__":
    # python manage.py                      # shows available commands
    # python manage.py runserver --help     # shows available runserver options
    MANAGER.run()
