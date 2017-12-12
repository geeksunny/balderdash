/**
 * This approach does not work with the current JK29LP model.
 * We need to get around the SSL cert check. Take a look at
 * the tool called `sslstrip` as a possible solution.
 */

const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const app = express();

const options = {
    cert: fs.readFileSync('cert.pem')
};

app.all('*', function(req, res, next) {
    console.log("Request received.");
    console.log(JSON.stringify(req));
    next();
});

http.createServer(app).listen(80);
console.log("Listening on 80.");
https.createServer(options, app).listen(443);
console.log("Listening on 443.");