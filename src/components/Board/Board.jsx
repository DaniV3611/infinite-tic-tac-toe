import { useEffect, useState } from "react";
import Cell from "../Cell/Cell";
import { checkWinner } from "../../lib/cells";

const Board = ({ cells, team, changeTeam }) => {
  const classRow = "h-1/3 flex flex-row";
  const classCell =
    "border-2 border-neutral-0 w-1/3 h-full cursor-pointer flex justify-center items-center text-white";

  let rowIndex = 0;
  let colIndex = 0;

  const check = () => {
    const winner = checkWinner(cells);
    if (winner) {
      alert(`${winner} wins`);
    }
  };

  useEffect(() => {
    check();
  }, [cells]);

  return (
    <div className="w-72 h-72 my-8 border-4 border-neutral-0 rounded-3xl">
      {cells.length > 0 &&
        cells.map((row) => {
          rowIndex += 1;
          colIndex = 0;
          return (
            <div className={`${classRow}`}>
              {row.map((cell) => {
                colIndex += 1;
                let cls = classCell;
                /** Eliminar Bordes */
                cls +=
                  rowIndex !== 2
                    ? rowIndex === 1
                      ? " border-t-0 "
                      : " border-b-0 "
                    : "";
                cls +=
                  colIndex !== 2
                    ? colIndex === 1
                      ? " border-l-0 "
                      : " border-r-0 "
                    : "";
                return (
                  <div className={cls}>
                    <Cell
                      turno={team}
                      setTurno={changeTeam}
                      value={cell.value}
                      setValue={cell.setValue}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      {/* <button
        onClick={() => {
          console.log(cells);
        }}
      >
        Test
      </button> */}
    </div>
  );
};

export default Board;
