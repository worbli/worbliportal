"""
Behavioral tests of endpoint
"""

import logging
from pf.models import RegistrationRequest
from pf.users import create_registration_record

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
    expect_error = {"message":"user already has a code"}
    assert json_response2.items() <= expect_error.items()

#def test_registration_validation(client, db_session):
def test_registration_validation(client):
    """
    Test registration validation works to verify existing codes
    """
    registration_code = create_registration_record("dude3@so.co")
    url = "/api/registrationRequest/{}".format(str(registration_code))
    logging.info(url)
    logging.info(registration_code)
    trv = client.get(url)
    assert trv.status_code == 200


def test_invalidate_registration_request(client):
    """
    verify delete has intended effect
    """
    pass

def test_valid_user_registration(client):
    """
    Test to make sure a user regsiters correctly
    """
    pass

def test_invalid_user_registration(client):
    """
    verify we're getting appropriate errors
    """
    pass

def test_login_returns_valid_jwt(client):
    """
    verify login works to create valid
    user and valid jwt
    """
    pass
