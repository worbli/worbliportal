This contains a Vagrant configuration with Postgresql, python 3.6, apache and supporting apps installed
To run the Vagrant be sure that Vagrant and Virtualbox are installed
you may need to also run
`vagrant plugin install vagrant-vbguest`

Clone this repo
cd to this repos directory
`vagrant up`

# Not implemented yet, configuring the httpd.conf now
# this will start a centos box with ports open at localhost:8080 to run the flask app
# use the following until then
`vagrant ssh`
`cd /vagrant`
`source wb/bin/activate`
`python3.6 app.py`

