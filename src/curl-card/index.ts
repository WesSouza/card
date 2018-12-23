import http from 'http';

import { IOptions } from '../types/CurlCard';

import cardInformationFormat from './cardInformationFormat';

const DefaultPort = 3000;

export default ({ information, port = DefaultPort }: IOptions) => {
  const requestListener = (
    request: http.IncomingMessage,
    response: http.ServerResponse,
  ) => {
    const card = cardInformationFormat(information);
    response.end(card);
  };

  const listen = () => {
    http.createServer(requestListener).listen(port);
  };

  return {
    listen,
  };
};
