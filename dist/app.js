"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '../public/index.html'));
});
app.get('/page', function (req, res) {
    res.send("this is working");
});
app.listen(config_1.default.port, () => console.log(`Listening at http://localhost:${config_1.default.port}`));
//# sourceMappingURL=app.js.map