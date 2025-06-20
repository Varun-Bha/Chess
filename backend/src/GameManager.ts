import { WebSocket } from 'ws';
import { INIT_GAME } from './messages';
import { Game } from './Game';
 
export class GameManager {
  private games: Game[];
  private pendingUser: WebSocket | null = null;
  private users: WebSocket[];


  constructor() {
    this.games = [];
    this.pendingUser = null;
    this.users = []; 
   }

  addUser(socket: WebSocket){
    this.users.push(socket);
    this.addHandler(socket);

  }

  removeUser(socket: WebSocket){
    this.users = this.users.filter(user => user !== socket);
    
  }

  private addHandler(socket: WebSocket ){
    socket.on('message', (data) => {
        const message = JSON.parse(data.toString());
        
        if (message.type === INIT_GAME) {
          if (this.pendingUser){
            const game = new Game(this.pendingUser, socket);
            this.games.push(game);
            this.pendingUser = null    ;

          } else {
            this.pendingUser = socket;
          }
        }    

        if (message.type === 'move') {
            console.log("inside move")
            const game = this.games.find(g => g.player1 === socket || g.player2 === socket);
            if (game) {
                console.log("inside makemove")
                game.makeMove(socket, message.move);
            }    
        }
  })
}
}