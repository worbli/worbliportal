"""
Basic config file for running tests
"""
# Pytest expects certain names
# pylint: disable=redefined-outer-name

import logging
import pytest
from worbliportal import create_app
from worbliportal.database import DBH

logging.basicConfig(level=logging.DEBUG)

@pytest.fixture(scope='session')
def app():
    """
    Fixture for making Session-wide test application
    """
    my_app = create_app()
    with my_app.app_context():
        DBH.init_app(my_app)
        yield my_app

@pytest.fixture(scope='session')
def database(app): #pylint:disable=unused-argument
    """
    not sure i have to setup more
    """
    #return DBH
    yield DBH

@pytest.fixture(scope='session')
def _db(database):
    """
    required for pytest-flask-sqlalchemy
    """
    return database

@pytest.fixture()
def client(app):
    """
    client for handling restful calls
    """
    client = app.test_client()
    yield client
