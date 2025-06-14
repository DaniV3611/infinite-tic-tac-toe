import XIcon from "./XIcon";
import OIcon from "./OIcon";
import type { CellValue, Player } from "../hooks/useBoard";

interface CellProps {
  value: CellValue;
  movements?: number;
  onClick: () => void;
  disabled?: boolean;
  winner: Player | null;
}

const Cell = ({
  value,
  movements = 0,
  onClick,
  disabled = false,
  winner,
}: CellProps) => {
  return (
    <div
      className="aspect-square bg-gray-200/20 rounded-xl flex items-center justify-center text-2xl sm:text-4xl lg:text-5xl font-bold text-white shadow-lg transition-all duration-200 cursor-pointer relative overflow-hidden border border-white/10"
      onClick={!disabled ? onClick : undefined}
    >
      {/* Efecto de hover */}
      {!winner && !value && (
        <div className="absolute inset-0 bg-radial from-gray-100/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-xl" />
      )}

      {/* Contenido de la celda */}
      <div className="relative z-10">
        {value === "X" && (
          <XIcon
            size={48}
            className="text-green-400 drop-shadow-md drop-shadow-green-400"
            strokeWidth={3}
            animate={movements === 0}
          />
        )}
        {value === "O" && (
          <OIcon
            size={48}
            className="text-blue-400 drop-shadow-md drop-shadow-blue-400"
            strokeWidth={3}
            animate={movements === 0}
          />
        )}
      </div>

      {/* Efecto de pulsación para celdas que están por desaparecer */}
      {!winner && value && movements >= 6 && (
        <div className="absolute inset-0 bg-red-500/30 animate-pulse rounded-xl" />
      )}

      {/* Efecto de pulsación para el ganador */}
      {winner && winner === value ? (
        <div className="absolute inset-0 bg-green-500/30 animate-pulse rounded-xl" />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cell;
