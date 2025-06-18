import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { ChessBoard } from "../components/ChessBoard";
import { useSocket } from "../hooks/useSocket";
import { Chess } from "chess.js";


export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over"; 

export const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());

  // ...existing code...
  useEffect(() => { 
    if (!socket) {
        return;
    }
    socket.onmessage = async (event) => {
        try {
            let message;
            if (event.data instanceof Blob) {
                const text = await event.data.text();
                message = JSON.parse(text);
            } else {
                message = JSON.parse(event.data);
            }
            console.log("Received message:", message);

            switch (message.type) {
                case INIT_GAME:
                    const newGame = new Chess();
                    setChess(newGame);
                    setBoard(newGame.board());
                    break;
                case MOVE:
                    const move = message.payload.move;
                    chess.move(move);
                    setBoard(chess.board());
                    console.log("Move made:", move);
                    break;
                case GAME_OVER:
                    console.log("Game over");
                    break;
            }
        } catch (error) {
            console.error("Error processing message:", error);
        }
    }
  }, [socket, chess]);
// ...existing code...
  
  if (!socket) return <div>Connecting... </div>

  return (
    <div className="justify-center flex">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 w-full"> 
          <div className="col-span-4 w-full flex justify-center">
            <ChessBoard chess =  {chess } setBoard = {setBoard} socket = {socket} board={() => board}/>
          </div>
          <div className="col-span-2 bg-slate-900 w-full">
            <Button onClick={() => {
                  socket.send  (JSON.stringify({ type: INIT_GAME })) 
                
            }}>Play</Button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
