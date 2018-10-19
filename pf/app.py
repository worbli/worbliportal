from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask.bcrypt import Bcrypt
import os

app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

bcrypt = Bcrypt(app)
db = SQLAlchemy(app)

import models


@app.route('/')
def hello():
    return "Hello World!"

if __name__ == '__main__':
    app.run("0.0.0.0", port=5000)
