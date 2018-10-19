#!/bin/bash

# Update Yum
sudo yum -y update
sudo yum install -y yum-util
sudo yum groupinstall -y development

# Install postgres
sudo yum install -y https://download.postgresql.org/pub/repos/yum/9.6/redhat/rhel-7-x86_64/pgdg-centos96-9.6-3.noarch.rpm
sudo yum install -y postgresql96-server postgresql96-contrib

# configuring and start db
sudo rm -rf /var/lib/pgsql/9.6/data/
sudo /usr/pgsql-9.6/bin/postgresql96-setup initdb
sudo systemctl start postgresql-9.6.service
sudo systemctl enable postgresql-9.6

CONF_DIR="/var/lib/pgsql/9.6/data/"
PG_CONF=${CONF_DIR}postgresql.conf
PG_HBA=${CONF_DIR}pg_hba.conf

# Edit postgresql.conf to change listen address to '*':
sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/" "${PG_CONF}"

# we trust to all, because this is our local development VM
echo "host     all             all             all                     trust" >> "${PG_HBA}"

sudo systemctl stop postgresql-9.6.service
sudo systemctl start postgresql-9.6.service

echo "Postgresql successfully installed"

# Install Python 3.6
sudo yum install -y https://centos7.iuscommunity.org/ius-release.rpm
sudo yum install -y python36u
sudo yum install -y python36u-pip
sudo yum install -y python36u-devel
echo "Python 3 installed"



# Install apache
sudo yum install -y httpd
sudo yum install -y mod_wsgi
sudo systemctl enable httpd.service
sudo systemctl restart httpd.service
echo "Apache 2 installed"


# setup Venv
cd /vagrant
python3.6 -m venv wb
source wb/bin/activate
pip3 install --upgrade pip
pip3 install flask

