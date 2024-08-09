import { Toaster } from "react-hot-toast";
import Game from "./components/Game/Game";
import { generateCells } from "./lib/cells";

const App = () => {
  return (
    <div className="bg-neutral-800 flex justify-center items-center flex-col p-14 rounded-3xl shadow-around shadow-slate-transparent">
      <h1 className="font-bold text-3xl text-neutral-200 m-0">Tic Tac Toe</h1>
      <Game cells={generateCells()} />
      <Toaster />
    </div>
  );
};

export default App;
