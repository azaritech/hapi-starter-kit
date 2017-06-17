'use strict';

const config = require('getconfig');

module.exports.connection = (server) => {
  server.connection({
    host: config.connections.server.host,
    port: config.connections.server.port,
    labels: config.connections.server.labels
  });
};

// register plugin
module.exports.register = (server, options, next) => {
  require('./routes')(server);
  next();
};
 
module.exports.register.attributes = {
  pkg: require('./package.json')
};