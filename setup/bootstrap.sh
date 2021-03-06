#!/bin/bash

# Update Yum
sudo yum -y update
sudo yum install -y yum-util epel-release policycoreutils-python wget net-tools certbot-nginx
sudo yum groupinstall -y development

# Install postgres
sudo yum install -y https://download.postgresql.org/pub/repos/yum/9.6/redhat/rhel-7-x86_64/pgdg-centos96-9.6-3.noarch.rpm
sudo yum install -y postgresql96-server postgresql96-contrib

# Install nodejs
cd /opt
if [ ! -f /opt/node-v11.0.0-linux-x64.tar.gz ]; then
wget https://nodejs.org/download/release/v11.0.0/node-v11.0.0-linux-x64.tar.gz
fi

sudo tar --strip-components 1 -xzvf node-v* -C /usr
sudo npm install polymer-cli --unsafe-perm -g
sudo npm install prpl-server -g
sudo npm install pm2 -g |

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
#echo "host     all             all             all                     trust" >> "${PG_HBA}"
echo "
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     trust
# IPv4 local connections:
host    all             all             127.0.0.1/32           trust
# IPv6 local connections:
host    all             all             ::1/128                trust
# Allow replication connections from localhost, by a user with the
# replication privilege.
#local   replication     postgres                                peer
host     all             all             all                     trust
" > "${PG_HBA}"
sudo systemctl stop postgresql-9.6.service
sudo systemctl start postgresql-9.6.service
echo "Postgresql successfully installed"


# Install Python 3.6
sudo yum install -y https://centos7.iuscommunity.org/ius-release.rpm
sudo yum install -y python36u
sudo yum install -y python36u-pip
sudo yum install -y python36u-devel
echo "Python 3 installed"


# Install nginx
sudo yum install -y nginx

if [ ! -f /etc/nginx/conf.d/worbliportal.conf ]; then
    echo 'server {
        server_name backend.worbliportal;
        listen 9000;
        location / {
            include uwsgi_params;
            uwsgi_pass unix:/opt/worbliportal/worbliportal.sock;
        }
    }

    server {
    	server_name frontend.worbliportal worbliportal;
    	listen 80;
    	location / {
    		proxy_pass http://localhost:8080;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
    	}
    }' > /etc/nginx/conf.d/worbliportal.conf
fi

sudo systemctl enable nginx
sudo systemctl restart nginx
echo "Nginx installed"

# create deploy user
sudo su -c "useradd deploy -s /bin/bash -m -g wheel -G nginx"

# selinux
sudo semanage permissive -a httpd_t 

# Initialize DB
sudo -u postgres psql -c "CREATE USER deploy WITH PASSWORD 'test101';"
sudo -u postgres createdb deploy
sudo -u postgres createdb worbliportal
sudo -u postgres psql -c "grant all privileges on database worbliportal to deploy;"


# setup virtualenv
cd /vagrant
python3.6 -m venv /opt/worbliportal-venv
chown -R deploy:wheel /opt/worbliportal-venv
sudo -u deploy -H sh -c "source /opt/worbliportal-venv/bin/activate; pip3.6 install --upgrade pip"

# copy source to deployment directory
if [ -f /opt/worbliportal/worbliportal/local_settings.py ]; then
    mv /opt/worbliportal/worbliportal/local_settings.py /tmp
fi
if [ -f /opt/worbliportal/polymer-frontend/config.js ]; then
    mv /opt/worbliportal/polymer-frontend/config.js /tmp
fi

if [ ! -d /opt/worbliportal ]; then
mkdir /opt/worbliportal
fi

cp -rf /vagrant/* /opt/worbliportal/

if [ -f /tmp/local_settings.py ]; then
    mv /tmp/local_settings.py /opt/worbliportal/worbliportal/
fi
if [ -f /tmp/config.js ]; then
     mv /tmp/config.js /opt/worbliportal/polymer-frontend
fi

echo 'deploy   ALL=(ALL)      NOPASSWD: ALL' | sudo EDITOR='tee -a' visudo
sudo chown -R deploy:nginx /opt/worbliportal

# Initialize Frontend
cd /opt/worbliportal/polymer-frontend
sudo -u deploy -H sh -c "npm run clean"
sudo -u deploy -H sh -c "npm install --unsafe-perm"
sudo -u deploy -H sh -c "npm run build"
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u deploy --hp /home/deploy
sudo -u deploy -H sh -c "pm2 start --name worbliportal npm -- start; sleep 2; pm2 save"


if [ ! -f /opt/worbliportal/worbliportal/local_settings.py ]; then
    LOCAL_SETTINGS="/opt/worbliportal/worbliportal/local_settings.py"
    touch "${LOCAL_SETTINGS}"
    SECRET_KEY=`openssl rand -base64 32`
    echo "
SQLALCHEMY_DATABASE_URI = \"postgresql://deploy:test101@localhost:5432/worbliportal\"
FLASK_ENV = \"development\"
SECRET_KEY = '${SECRET_KEY}'
" >  "${LOCAL_SETTINGS}"
fi
sudo chown deploy:nginx /opt/worbliportal/worbliportal/local_settings.py

# Initialize Backend
#sudo -u deploy -H sh -c "pip3.6 install -e /opt/worbliportal"

/opt/worbliportal-venv/bin/pip3.6 install -e /opt/worbliportal
cd /opt/worbliportal

/opt/worbliportal-venv/bin/python3.6 manage.py db init
/opt/worbliportal-venv/bin/python3.6 manage.py db migrate
/opt/worbliportal-venv/bin/python3.6 manage.py db upgrade

if [ ! -f /home/deploy/snapshot_imported ]; then
sudo -u deploy -H sh -c "cd /opt/worbliportal/setup; /opt/worbliportal-venv/bin/python /opt/worbliportal/setup/import_snapshot.py; touch /home/deploy/snapshot_imported"
fi

# install and enable service
echo "[Unit]
Description=uWSGI instance to serve worbliportal
After=network.target

[Service]
User=deploy
Group=nginx
WorkingDirectory=/opt/worbliportal/worbliportal
Environment="PATH=/opt/worbliportal-venv/bin"
ExecStart=/opt/worbliportal-venv/bin/uwsgi --ini wsgi.ini

[Install]
WantedBy=multi-user.target
" > /etc/systemd/system/worbliportal.service

sudo systemctl enable worbliportal.service
sudo systemctl restart worbliportal.service

if [ ! -f /home/deploy/touched_hosts ]; then
echo "127.0.0.1   worbliportal backend.worbliportal frontend.worbliportal" >> /etc/hosts
touch /home/deploy/touched_hosts
fi
