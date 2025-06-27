import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-slate-950 flex items-center justify-center px-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl items-center gap-10">
        {/* Chessboard Image */}
        <div className="flex justify-center">
          <img
            src="/chessboard.jpeg"
            alt="Chessboard"
            className="max-w-96 rounded-xl shadow-2xl"
          />
        </div>

        {/* Text & Buttons */}
        <div className="pt-8 md:pt-0 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Play chess online on the #1 Site!
          </h1>
          <p className="text-gray-300 text-lg">
            Challenge your friends, improve your skills, and join tournaments!
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-4">
            <Button onClick={() => navigate("/game")} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow">
              Play Online
            </Button>
            <Button onClick={() => navigate("/learn")} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow">
              Learn Chess
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
