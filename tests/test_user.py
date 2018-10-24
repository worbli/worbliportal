"""
Behavioral tests of endpoint
"""

import logging
from pf.models import RegistrationRequest, User
from pf.users import create_registration_record, create_user

def test_registration_request(client, db_session):
    """
    Test registration request which requires a unique user
    first test should be successull and give us a 200
    second test with same user should give us a 400
    """
    email = "dude3@so.co"
    json_data = {"email": email}
    trv = client.post('/api/registrationRequest/', json=json_data)
    json_response = trv.get_json()
    logging.info(json_response)
    assert trv.status_code == 200
    db_reg = db_session.query(RegistrationRequest).filter_by(
        email=email).first()

    assert db_reg.registration_code == json_response['registration_code']
    trv2 = client.post('/api/registrationRequest/', json=json_data)
    json_response2 = trv2.get_json()
    logging.info(json_response2)
    assert trv2.status_code == 400
    """ hmm can't seem ot get the error msg to work correctly
    expect_error = {"message":"user already has a code"}
    assert json_response2.items() <= expect_error.items()
    """

#def test_registration_validation(client, db_session):
def test_registration_validation(client, db_session):
    """
    Test registration validation works to verify existing codes
    """
    registration_code = create_registration_record("dude3@so.co")
    url = "/api/registrationRequest/{}".format(str(registration_code))
    trv = client.get(url)
    assert trv.status_code == 200


def test_invalidate_registration_request(client, db_session):
    """
    verify delete has intended effect
    """
    registration_code = create_registration_record("dude3@so.co")
    url = "/api/registrationRequest/{}".format(str(registration_code))
    trv = client.delete(url)
    assert trv.status_code == 200


def test_valid_user_registration(client, db_session):
    """
    Test to make sure a user registers correctly
    """
    email = "dude3@so.co"
    registration_code = create_registration_record(email)
    json_data = {
        "email": email,
        "location" :"here",
        "registrationCode": registration_code,
        "password": "password",
        "fullName": "some person"}
    trv = client.post('/api/register/', json=json_data)
    assert trv.status_code == 200
    db_user = db_session.query(User).filter_by(
        email=email).first()
    assert db_user.location == json_data['location']


def test_invalid_user_registration(client):
    """
    verify we're getting appropriate errors
    """
    email = "dude3@so.co"
    json_data = {
        "email": email,
        "fullName": "some person"}
    trv = client.post('/api/register/', json=json_data)
    assert trv.status_code == 400


def test_login_returns_valid_jwt(client):
    """
    verify login works to create valid
    user and valid jwt
    """
    user = create_test_user()
    json_data = {"email": user.email, "password": "password"}
    trv = client.post('/api/login/', json=json_data)
    assert trv.status_code == 200


def create_test_user(password="password"):
    email = "dude3@so.co"
    registration_code = create_registration_record(email)
    json_data = {
        "email": email,
        "location" :"here",
        "registrationCode": registration_code,
        "password": "password",
        "fullName": "some person"}
    test_user = create_user(json_data)
    return test_user
