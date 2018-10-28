# WORBLI Portal

A web application for processing and claiming WORBLI sharedrops.

## Local Development

1. Download Vagrant and Virtualbox.
2. Run `vagrant up` from the root of the project.
3. Add the vagrant VM IP address to your `/etc/hosts` mapped to the name worbliportal:
```
sudo echo "192.168.33.1    worbliportal" >> /etc/hosts
```
4. Navigate to http://worbliportal:9080 in your browser to hit the app.
5. Local building may require an update to polymer-frontend/src/mixins/worbli-urlsetter.js to reflect correct backend

