"""
Blueprint routes for lookup
"""
import logging

from sqlalchemy import func
from sqlalchemy.exc import IntegrityError

from flask import Blueprint, jsonify

from worbliportal.custom_error import InvalidUsage
from worbliportal.database import WorkerSessionmaker
from worbliportal.models import SnapshotBalance


LOOKUP_ROUTES = Blueprint('lookup_Routes', __name__)
session = WorkerSessionmaker() #pylint: disable=invalid-name


@LOOKUP_ROUTES.route('/api/snapshotCheck/<account_name>')
def lookup_snapshot(account_name):
    """
    this looks up agains the snap shot
    """
    balance = lookup_by_account_name(account_name)
    if balance is None:
        msg = "No account found with that name"
        raise InvalidUsage(msg, status_code=404)
    else:
        total = balance.total
    json_dict = {"total": total}

    return jsonify(json_dict)


def lookup_by_account_name(account_name):
    """ Do the actual lookup, return the snapshot
    """
    try:
        account = session.query(SnapshotBalance).filter(
            func.lower(SnapshotBalance.account_name) == account_name.lower()).first()
    except IntegrityError as pie:
        msg = str(pie)
        raise InvalidUsage(msg, status_code=400)
    return account


@LOOKUP_ROUTES.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    """ RESTful error replying
    """
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response
