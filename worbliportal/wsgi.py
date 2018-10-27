"""
wsgi wrapper for uwsgi, ngninx or apache
"""
from flask_cors import CORS
from worbliportal import create_app

APP = create_app()
CORS(APP)
if __name__ == "__main__":
    APP.run("0.0.0.0", port=5000)
