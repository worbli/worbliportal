"""
Behavior and unit tests for lookup
"""

from datetime import datetime
import logging

from worbliportal.lookup import lookup_by_account_name
from worbliportal.models import SnapshotBalance

def test_lookup_endpoint(client, db_session):
    """
    verifies correct results from valid account name
    """
    _insert_into_snapshot(db_session)
    url = "/api/snapshotCheck"
    success_url = "{}/{}".format(url, 'dave')
    logging.info(success_url)
    trv = client.get(success_url)
    json_response = trv.get_json()
    assert trv.status_code == 200
    assert json_response['total'] == 3.93
    failure_url = "{}/{}".format(url, "todd")
    trv2 = client.get(failure_url)
    assert trv2.status_code == 404
    json_response2 = trv2.get_json()

    logging.info(json_response2)
    assert json_response2['message'] == "No account found with that name"


def test_lookup_by_account_name(db_session):
    """
    verifies we're looking up by account name
    """
    _insert_into_snapshot(db_session)
    result = lookup_by_account_name('Dave')
    assert result.owner_key == '123'
    result = lookup_by_account_name('dave')
    assert result.owner_key == '123'

def _insert_into_snapshot(db_session, account_name='Dave'):
    kwargs = {"account_name":account_name, "owner_key":'123', "active_key":'abc',
              "total_nostake":1.23, "staked":1.3, "delegated":1.4, "total":3.93,
              "creation_time":datetime.now()}
    sbs = SnapshotBalance(**kwargs)
    db_session.add(sbs)
