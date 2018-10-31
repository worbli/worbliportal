"""
Our custom errors are placed here
"""
import logging

class InvalidUsage(Exception):
    """ RESTful error replying
    """
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        """ Standard dictionary implementation
        """
        rva = dict(self.payload or ())
        rva['message'] = self.message
        return rva


class AirgrabException(Exception):
    """ RESTful error replying
    """
    status_code = 403

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        """ Standard dictionary implementation
        """
        rva = dict(self.payload or ())
        rva['message'] = self.message
        return rva
