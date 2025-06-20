import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Landing = () => {
  const navigate = useNavigate();

  return <div className="w-full min-h-screen bg-slate-950 flex items-center justify-center px-4">
          <div className="pt-8 w-full">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full"> 
              <div className="flex justify-center">
                <img src={"/chessboard.jpeg"} className="max-w-96" />
              </div>

              <div className="pt-16">
                <div className="flex justify-center">
                  <h1 className="text-4xl font-bold text-white">
                    Play chess online on the #1 Site!
                  </h1>
                </div>

                <div className="mt-8 flex justify-center">     
                    <Button onClick={() => {
                      navigate("/game");
                    }} 
                  >
                    Play Online
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>

};
