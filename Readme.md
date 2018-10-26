# WORBLI Portal

A web application for processing and claiming WORBLI sharedrops.

## Local Development

1. Download Vagrant and Virtualbox.
2. Run `vagrant up` from the root of the project.
3. Add the vagrant VM IP address to your `/etc/hosts` mapped to the name worbliportal.local.
```
sudo echo "192.168.33.1    worbliportal.local" >> /etc/hosts
```
4. Navigate to http://worbliportal.local:9080 to hit the app.