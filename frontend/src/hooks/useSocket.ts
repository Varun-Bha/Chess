import { useEffect, useState } from "react";

const WS_URL = "wss://chess-awtg.onrender.com";
const RECONNECT_DELAY = 3000; // 3 seconds

export const useSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket;
    let reconnectTimeout: number;

    const connectWebSocket = () => {
      ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        setSocket(ws);
        console.log('WebSocket connected');
      }

      ws.onclose = () => {
        setSocket(null);
        console.log('WebSocket disconnected, attempting to reconnect...');
        reconnectTimeout = setTimeout(connectWebSocket, RECONNECT_DELAY);
      }

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      }
    }

    connectWebSocket();

    return () => {
      ws?.close();
      clearTimeout(reconnectTimeout);
    }
  }, []);

  return socket;
};