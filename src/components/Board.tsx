import { useBoard } from "../hooks/useBoard";
import Cell from "./Cell";

const Board = () => {
  const { board, currentPlayer, winner, makeMove, resetGame, isValidMove } =
    useBoard();

  return (
    <div className="flex items-center justify-center">
      <div className="w-[min(95vw,95vh)] sm:w-[min(80vw,80vh)] lg:w-[min(60vw,60vh)] lg:max-w-[600px] aspect-square grid grid-cols-3 grid-rows-3 gap-1 sm:gap-2 p-2 sm:p-4 rounded-2xl backdrop-blur-sm">
        {board.map((cell, index) => (
          <Cell
            key={index}
            value={cell.value}
            movements={cell.movements}
            onClick={() => makeMove(index)}
            disabled={!isValidMove(index)}
            winner={winner}
          />
        ))}
      </div>

      {/* Panel de información del juego */}
      <div className="absolute bottom-4 left-4 bg-black/20 backdrop-blur-sm rounded-lg p-4 text-white">
        <p className="text-sm">
          Jugador actual: <span className="font-bold">{currentPlayer}</span>
        </p>
        {/* <p className="text-sm">
          Estado:{" "}
          <span className="font-bold">
            {gameStatus === "playing"
              ? "Jugando"
              : gameStatus === "won"
              ? "Ganado"
              : "Empate"}
          </span>
        </p> */}
        {winner && (
          <p className="text-sm">
            ¡Ganador:{" "}
            <span className="font-bold text-yellow-400">{winner}</span>!
          </p>
        )}
        <button
          onClick={resetGame}
          className="mt-2 px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-xs transition-colors"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default Board;
