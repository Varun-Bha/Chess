import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col">
      {/* Topbar */}
      <div className="w-full flex justify-between items-center bg-slate-900 text-white px-6 py-4 shadow-md">
        <div className="text-2xl font-bold">ChessMate</div>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">About</a>
          <a href="#" className="hover:text-green-400">Leaderboard</a>
        </div>
      </div>

      {/* Main Section */}
      <div className="pt-8 w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
          {/* Left side - image */}
          <div className="flex justify-center">
            <img src="/chessboard.jpeg" className="max-w-96" />
          </div>

          {/* Right side - text and button */}
          <div className="pt-16">
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold text-white text-center">
                Play chess online on the #1 Site!
              </h1>
            </div>

            <div className="mt-8 flex justify-center">
              <Button onClick={() => navigate("/game")}>
                Play Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
