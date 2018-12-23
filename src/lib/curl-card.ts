import http from 'http';

const DefaultPort = 3000;

interface IOptions {
  port?: number;
}

export default ({ port = DefaultPort }: IOptions = {}) => {
  const requestListener = (
    request: http.IncomingMessage,
    response: http.ServerResponse,
  ) => {
    response.end('Hello world.');
  };

  const listen = () => {
    http.createServer(requestListener).listen(port);
  };

  return {
    listen,
  };
};
