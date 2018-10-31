import re
import uuid

from flask import Blueprint, jsonify, request

from worbliportal.database import WorkerSessionmaker, DBH
from worbliportal.util.token import authorize
from worbliportal.custom_error import AirgrabException
from worbliportal.models import SnapshotBalance, AirgrabValidationRequest


AIRGRAB_ROUTES = Blueprint('airgrab_Routes', __name__)
session = WorkerSessionmaker() #pylint: disable=invalid-name
ACCOUNT_CHAR_MAX = 12
WBI_ACCOUNT_CHAR_MIN = 6
EOS_ACCOUNT_CHAR_MIN = 3
EOS_ACCOUNT_NAME_REGEXP = r'^[a-z, 1-5]+(\.?)+$'
WBI_ACCOUNT_NAME_REGEXP = r'^[a-z, 1-5]+$'
VIP_STAKE_THRESHOLD = 100000


@AIRGRAB_ROUTES.route('/api/airgrabRequest/', methods=['POST'])
@authorize
def airgrab_request(user_id):
    """ Initiates a claim to receive a worbli account + WBI airdrop.
    """
    try:
        request_json = request.get_json()
        eos_account_name = request_json['eos_account_name']
        worbli_account_name = request_json['worbli_account_name']
        wbi_owner_pubkey = request_json['wbi_owner_pubkey']
        wbi_active_pubkey = request_json['wbi_active_pubkey']
        snapshot_balance = fetch_snapshot_balance(eos_account_name)
        validate_eos_account(eos_account_name, snapshot_balance)
        validate_worbli_account(worbli_account_name)
        security_code = create_airgrab_record(user_id, 
            worbli_account_name, wbi_owner_pubkey, 
            wbi_active_pubkey, snapshot_balance)
        # commit pending airgrab claim record.
        session.commit()
    except AirgrabException as e:
        session.rollback()
        raise e
    except Exception as exc:
        logging.info(type(exc))
        logging.info(str(exc))
        session.rollback()
        raise InvalidUsage(str(exc), status_code=400)
    finally:
        session.close()

    json_dict = {
        "success" : True, 
        "security_code" : security_code,
        "account_name": eos_account_name
    }
    return jsonify(json_dict)


def validate_eos_account(eos_account_name, snapshot_balance):
    if not (len(eos_account_name) >= EOS_ACCOUNT_CHAR_MIN 
            and len(eos_account_name) <= ACCOUNT_CHAR_MAX
            and bool(re.match(EOS_ACCOUNT_NAME_REGEXP, eos_account_name))):
        msg = "Your EOS account name is invalid. \
        Please enter a name that is 3 to 12 characters and contains only \
        characters a-z, 1-5, and/or '.'"
        raise AirgrabException(msg, status_code=400)
    if not snapshot_balance:
        msg = "EOS account could not be found in the snapshot."
        raise AirgrabException(msg)
    if snapshot_balance.total >= VIP_STAKE_THRESHOLD:
        msg = "Please contact support@worbli.io to continue processing your sharedrop claim."
        raise AirgrabException(msg)


def validate_worbli_account(worbli_account_name):
    if "worbli" in worbli_account_name or not 
            (len(eos_account_name) >= WBI_ACCOUNT_CHAR_MIN and 
            len(eos_account_name) <= ACCOUNT_CHAR_MAX and 
            bool(re.match(WBI_ACCOUNT_NAME_REGEXP, eos_account_name))):
        msg = "The WORBLI account name is invalid. \
        Please enter a name that is 6 to 12 characters and contains only \
        characters a-z and/or 1-5 and does not contain 'worbli'"
        raise AirgrabException(msg, status_code=400)
    snapshot_balance = fetch_snapshot_balance(worbli_account_name)
    existing_claim = fetch_airgrab_record(worbli_account_name)
    if snapshot_balance or existing_claim.completed:
        msg = "The WORBLI account name is already in use. Please try another name."
        raise AirgrabException(msg, status_code=403)
    

def fetch_snapshot_balance(account_name):
    return SnapshotBalance.query.filter(
        SnapshotBalance.account_name == account_name).all()


def fetch_airgrab_record(account_name):
    return AirgrabValidationRequest.query.filter(
        AirgrabValidationRequest.worbli_account_name == account_name).all()


def create_airgrab_record(user_id, worbli_account_name, wbi_owner_pubkey,
        wbi_active_pubkey, snapshot_balance):
    try:
        security_code = uuid.uuid4().hex
        airgrab_req = AirgrabValidationRequest(
            worbli_account_name=worbli_account_name,
            worbli_owner_key=wbi_owner_pubkey,
            worbli_active_key=wbi_active_pubkey,
            security_code=security_code,
            snapshot_balance=snapshot_balance,
            user_id=user_id
        )
        session.add(airgrab_req)
    except IntegrityError as pic:
        msg = "Your WORBLI account already has a pending claim."
        session.rollback()
        raise AirgrabException(msg, status_code=400)
    return security_code


def passed_kyc(user_id):
    pass
