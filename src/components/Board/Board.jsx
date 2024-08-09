import Cell from "../Cell/Cell";

const Board = ({ cells, team, changeTeam, locked }) => {
  const classRow = "h-1/3 flex flex-row";
  const classCell =
    "border-2 border-neutral-0 w-1/3 h-full cursor-pointer flex justify-center items-center text-white";

  let rowIndex = 0;
  let colIndex = 0;

  return (
    <div className="w-72 h-72 my-8 border-4 border-neutral-0 rounded-3xl">
      {cells.length > 0 &&
        cells.map((row, row_index) => {
          rowIndex += 1;
          colIndex = 0;
          return (
            <div key={`row${row_index}`} className={`${classRow}`}>
              {row.map((cell, cell_index) => {
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
                  <div
                    className={cls}
                    key={`div-cell${row_index},${cell_index}`}
                  >
                    <Cell
                      key={`cell${row_index},${cell_index}`}
                      turno={team}
                      setTurno={changeTeam}
                      value={cell.value}
                      setValue={cell.setValue}
                      locked={locked}
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
