import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

// filepath: backend/src/index.ts
const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;
const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();
// Handle WebSocket connections

wss.on('connection', function connection(ws) { 
    gameManager.addUser(ws);
  ws.on('disconnect', () => gameManager.removeUser(ws));

});


