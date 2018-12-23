const http = require('http');

const DefaultPort = 3000;

module.exports = () => {
  const requestListener = (request, response) => {
    response.end('Hello world.');
  };

  const listen = (port = DefaultPort) => {
    http.createServer(requestListener).listen(port);
  };

  return {
    listen,
  };
};
