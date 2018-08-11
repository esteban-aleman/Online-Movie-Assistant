'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

var message = require('./routes/message');
app.post('/api/message',message);

var suggestion = require('./routes/suggestion');
app.post('/api/suggestion',suggestion);

module.exports = app;