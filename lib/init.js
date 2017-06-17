'use strict';

module.exports.connections = (server) => {
  require('./server').connection(server);
};

module.exports.registers = (server) => {
  server.register([{
      register: require('./logs').register,
      options: require('./logs').options
    }, {
      register: require('vision')
    }, {
      register: require('inert')
    }, {
      register: require('./server').register,
      select: ['server']
    }], (err) => {
      if (err) {
        throw err;
      }
  });
};

module.exports.views = (server) => {
  server.views({  
    engines: {
        html: require('handlebars')
    },
    path: __dirname + '/views',
    layout: false
    //layoutPath: 'views/layout',
    //layout: 'default',
    //helpersPath: 'views/helpers',
    //partialsPath: 'views/partials'
  });
}