import { useState } from "react";
import Board from "../Board/Board";

const Game = ({ cells }) => {
  const [team, changeTeam] = useState("X");

  return (
    <>
      <Board cells={cells} team={team} changeTeam={changeTeam} />
      <button
        className="px-4 py-2 m-0 bg-sky-500 rounded-xl hover:bg-sky-600 font-bold text-neutral-800 duration-300 hover:scale-110 hover:text-neutral-200 hover:shadow-xl hover:shadow-slate-transparent"
        onClick={() => {
          cells.map((row) => {
            row.map((cell) => {
              cell.setValue("");
            });
          });
          changeTeam("X");
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Game;
