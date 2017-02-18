'use strict';

const util = require('util');
const hapi = require('hapi');
const config = require('getconfig');

const init = require('./init');
const server = new hapi.Server();

// init connections before registering plugins
init.connections(server, config);
// register plugins
init.registers(server);
// loading views
init.views(server);

server.start((err) => {
  if (err) {
    throw err;
  }
  server.log('info', 'Server running'); 
});