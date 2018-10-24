"""
Blueprint routes for our app
"""
from flask import Blueprint, jsonify, request
from pf.custom_error import InvalidUsage

ROUTE_BLUEPRINT = Blueprint('route_blueprint', __name__)

### These three routes exist to prove the box
### is running feel free to remove after the fact
@ROUTE_BLUEPRINT.route("/")
def index():
    """
    Prove the routes are working
    """
    return "Hello There"


@ROUTE_BLUEPRINT.route("/", methods=['POST'])
def echo():
    """
    Prove the routes are working
    """
    request_json = request.get_json()
    return jsonify(request_json)


@ROUTE_BLUEPRINT.route("/errorTest")
def error_please():
    """
    Prove the routes are working
    """
    msg = "record not found"
    raise InvalidUsage(msg, status_code=400)


@ROUTE_BLUEPRINT.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    """ RESTful error replying
    """
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response
