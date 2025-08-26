const jsonServer = require('json-server');
const path = require('path');
const serverless = require('serverless-http');

// Create the json-server app
const server = jsonServer.create();
// Point it to our db.json file. Note the path adjustment.
const router = jsonServer.router(
  path.join(__dirname, '../../packages/api/db.json')
);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Wrap the server with the serverless handler
module.exports.handler = serverless(server);
