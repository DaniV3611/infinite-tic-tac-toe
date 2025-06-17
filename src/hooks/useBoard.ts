import { useState, useCallback } from "react";

export type Player = "X" | "O";
export type CellValue = Player | null;
export type CellT = {
  value: CellValue;
  movements: number;
};
export type Board = CellT[];
export type GameStatus = "playing" | "won" | "draw";

interface GameState {
  board: Board;
  currentPlayer: Player;
  gameStatus: GameStatus;
  winner: Player | null;
}

interface UseBoardReturn {
  board: Board;
  currentPlayer: Player;
  gameStatus: GameStatus;
  winner: Player | null;
  makeMove: (index: number) => boolean;
  resetGame: () => void;
  isValidMove: (index: number) => boolean;
}

const WINNING_COMBINATIONS = [
  [0, 1, 2], // Fila superior
  [3, 4, 5], // Fila media
  [6, 7, 8], // Fila inferior
  [0, 3, 6], // Columna izquierda
  [1, 4, 7], // Columna media
  [2, 5, 8], // Columna derecha
  [0, 4, 8], // Diagonal principal
  [2, 4, 6], // Diagonal secundaria
];

const createInitialBoard = (): Board =>
  Array(9).fill({ value: null, movements: 0 });

const checkWinner = (board: Board): Player | null => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (
      board[a].value &&
      board[a].value === board[b].value &&
      board[a].value === board[c].value
    ) {
      return board[a].value as Player;
    }
  }
  return null;
};

const isBoardFull = (board: Board): boolean => {
  return board.every((cell) => cell.value !== null);
};

const getGameStatus = (
  board: Board
): { status: GameStatus; winner: Player | null } => {
  const winner = checkWinner(board);
  if (winner) {
    return { status: "won", winner };
  }
  if (isBoardFull(board)) {
    return { status: "draw", winner: null };
  }
  return { status: "playing", winner: null };
};

export const useBoard = (): UseBoardReturn => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const initialBoard = createInitialBoard();
    return {
      board: initialBoard,
      currentPlayer: "X",
      gameStatus: "playing",
      winner: null,
    };
  });

  const isValidMove = useCallback(
    (index: number): boolean => {
      return (
        index >= 0 &&
        index < 9 &&
        // Si la celda esta vacia o es la sexta jugada (6 movimientos)
        (gameState.board[index].value === null ||
          gameState.board[index].movements === 5) &&
        gameState.gameStatus === "playing"
      );
    },
    [gameState.board, gameState.gameStatus]
  );

  const makeMove = useCallback(
    (index: number): boolean => {
      if (!isValidMove(index)) {
        return false;
      }

      setGameState((prevState) => {
        // Crear una copia profunda del tablero
        const newBoard = prevState.board.map((cell) => ({
          value: cell.value,
          movements: cell.value ? cell.movements + 1 : 0,
        }));

        // Colocar la nueva pieza
        newBoard[index] = {
          value: prevState.currentPlayer,
          movements: 0,
        };

        // Limpiar celdas que llegaron a 6 movimientos
        newBoard.forEach((cell) => {
          if (cell.movements > 5) {
            cell.value = null;
            cell.movements = 0;
          }
        });

        const { status, winner } = getGameStatus(newBoard);

        return {
          board: newBoard,
          currentPlayer: prevState.currentPlayer === "X" ? "O" : "X",
          gameStatus: status,
          winner,
        };
      });

      return true;
    },
    [isValidMove]
  );

  const resetGame = useCallback(() => {
    setGameState({
      board: createInitialBoard(),
      currentPlayer: "X",
      gameStatus: "playing",
      winner: null,
    });
  }, []);

  return {
    board: gameState.board,
    currentPlayer: gameState.currentPlayer,
    gameStatus: gameState.gameStatus,
    winner: gameState.winner,
    makeMove,
    resetGame,
    isValidMove,
  };
};
