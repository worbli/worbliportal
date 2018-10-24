"""
Basic config file for running tests
"""
# Pytest expects certain names
# pylint: disable=redefined-outer-name

import logging
import pytest
from pf import create_app
from pf.database import DBH

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
def database(app):
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
    client = app.test_client()
    yield client
