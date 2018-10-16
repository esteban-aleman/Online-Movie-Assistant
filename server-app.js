'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('./dist'));
app.use(bodyParser.json());

var watson = require('./server-routes/watson');
app.post('/watsonApi/message',watson);

var movies = require('./server-routes/movieDB');
app.post('/moviesApi/retrieve',movies);

module.exports = app;