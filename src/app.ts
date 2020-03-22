import config from "./config"

var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(config.port, () => console.log (`Listening at http://localhost:${config.port}`));