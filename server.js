'use strict';

require('dotenv').config({silent: true});

var server = require('./server-app');
var port = process.env.PORT || 3000;

server.listen(port, function() {

    console.log('Server running on port: %d', port);
});