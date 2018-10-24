"""
wsgi wrapper for uwsgi, ngninx or apache
"""
from pf import create_app

APP = create_app()

if __name__ == "__main__":
    APP.run("0.0.0.0", port=5000)
