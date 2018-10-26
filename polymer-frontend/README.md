# Worbli Portal

### Polymer PRPL Server Installation Guide


##### Prerequisites

Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    sudo npm install polymer-cli --unsafe-perm -g

Install [PRPL-Server](https://www.npmjs.com/package/prpl-server)

    npm install prpl-server -g

Install [nginx](https://www.nginx.com/)

    sudo apt-get install nginx

Install [PM2](http://pm2.keymetrics.io/)

    npm install pm2 -g |


##### Build

    npm run build

##### Start service with PM2

    pm2 start npm -- start

##### Proxy with nginx

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/testnetapi.worbli.io;
        server_name _;

        location / {
                proxy_pass http://localhost:8080;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
}
```

##### Change Endpoint

in this file `/src/routes/network-route.js` loicate the web component called `worbli-rpc ` and change the endpoint atribute.

#### Change or add logo's 

Change the images to match the bp name as found in get info and append _100x100,png (not jpg) `/images/bp-logos`
