import http from 'http';

import { Options } from '../types/CurlCard';

import cardInformationFormat from './cardInformationFormat';
import rainbowBox from './rainbowBox';

const DefaultPort = 3000;

export default ({ information, port = DefaultPort }: Options) => {
  const requestListener = (
    request: http.IncomingMessage,
    response: http.ServerResponse,
  ) => {
    const content = cardInformationFormat(information);
    const box = rainbowBox({ content });

    response.end(box);
  };

  const listen = () => {
    http.createServer(requestListener).listen(port);
  };

  return {
    listen,
  };
};
