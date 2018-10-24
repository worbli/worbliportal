"""
database handle and possibly config
"""

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from local_settings import SQLALCHEMY_DATABASE_URI

DBH = SQLAlchemy()
# testing fixutres expect this name
engine = create_engine(SQLALCHEMY_DATABASE_URI) #pylint: disable=invalid-name
WorkerSessionmaker = sessionmaker(bind=engine)#pylint: disable=invalid-name
# create a Session
session = WorkerSessionmaker()
