import { useEffect, useState } from "react";
import Board from "../Board/Board";
import { checkWinner } from "../../lib/cells";
import toast from "react-hot-toast";

const Game = ({ cells }) => {
  const [team, changeTeam] = useState("X");
  const [locked, setLocked] = useState(false);
  const resetGame = () => {
    cells.map((row) => {
      row.map((cell) => {
        cell.setValue("");
      });
    });
    changeTeam("X");
    setLocked(false);
  };
  const check = () => {
    const winner = checkWinner(cells);
    if (winner) {
      // alert(`${winner} wins`);
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-neutral-800 text-white shadow-around shadow-sky-500 rounded-3xl pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5 justify-center items-center p-4`}
        >
          <h2 className="m-4 text-xl font-bold">{`${winner} wins`}</h2>
          <button
            className="px-4 py-2 m-0 bg-sky-500 rounded-xl hover:bg-sky-600 font-bold text-neutral-800 duration-300 hover:scale-110 hover:text-neutral-200 hover:shadow-xl hover:shadow-slate-transparent"
            onClick={() => {
              toast.dismiss(t.id);
              resetGame();
            }}
          >
            Reset
          </button>
        </div>
      ));
      setLocked(true);
    }
  };
  useEffect(() => {
    check();
  }, [cells]);
  return (
    <>
      <Board
        cells={cells}
        team={team}
        changeTeam={changeTeam}
        locked={locked}
      />
      <button
        className="px-4 py-2 m-0 bg-sky-500 rounded-xl hover:bg-sky-600 font-bold text-neutral-800 duration-300 hover:scale-110 hover:text-neutral-200 hover:shadow-xl hover:shadow-slate-transparent"
        onClick={() => {
          resetGame();
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Game;
