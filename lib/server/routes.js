'use strict';

module.exports = (server) => {
   server.route({  
    method: 'GET',
    path: '/public/{file*}',
    handler: {
      directory: { 
        path: 'public',
        listing: true,
        redirectToSlash: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.redirect('hello');
    }
  });

  server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
      const data = { 
        message1: 'Hello',
        message2: 'Paris, France'
      };
      reply.view('index', data);
    }
  });
};
