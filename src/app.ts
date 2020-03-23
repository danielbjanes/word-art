import {Request, Response } from "express";
import config from "./config"

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function(req: Request, res: Response) {
    res.sendFile(path.join(__dirname + '../public/index.html'));
});

app.get('/page', function(req: Request, res: Response) {
    res.send("this is working")
});

app.listen(config.port, () => console.log (`Listening at http://localhost:${config.port}`));