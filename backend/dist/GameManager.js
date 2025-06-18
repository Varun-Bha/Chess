"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
const ws_1 = require("ws");
class GameManager {
    constructor() {
        this.clients = new Set();
    }
    addUser(ws) {
        this.clients.add(ws);
        ws.on('message', (message) => {
            const data = JSON.parse(message);
            // Broadcast the message to all other clients
            this.clients.forEach(client => {
                if (client !== ws && client.readyState === ws_1.WebSocket.OPEN) {
                    client.send(message);
                }
            });
        });
    }
    removeUser(ws) {
        this.clients.delete(ws);
    }
}
exports.GameManager = GameManager;
