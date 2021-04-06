import config from '@config/baseConfig';
import WebSocket from './Websocket';

let websockets = [] as WebSocket[];

const initWebSockets = () => {
  websockets = [];
  config.websocket.forEach((wsURL) => {
    const ws = new WebSocket(
      wsURL,
      JSON.parse(window.sessionStorage.getItem('currentUser') || '{"userId":"","token":""}').token,
    );
    websockets.push(ws);
  });
};

const getWebSocket = (index?: number) => {
  if (index) {
    return websockets[index];
  }
  return websockets[0];
};

const closeWebSockets = () => {
  websockets.forEach((ws) => {
    // 断开ws连接
    ws.close();
  });
};

export { initWebSockets, closeWebSockets };
export default getWebSocket;
