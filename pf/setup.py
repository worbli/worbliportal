from setuptools import setup

setup(
    name='worbli-portal',
    packages=['worbli-portal'],
    include_package_data=True,
    install_requires=[
        'flask==1.0',
        'flask_sqlalchemy==2.3.0',
        'flask_talisman==0.4.0',
        'psycopg2==2.7.5',
        'funcy==1.8.0',
        'uwsgi',
        'flask-cors',
        'flask-seasurf',
        'mysqlclient',
        'Flask-Mobility',
        'Flask_Babel',
    ],
)
