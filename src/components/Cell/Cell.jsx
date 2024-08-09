import { XIcon, YIcon } from "../Icons/Icons";

const Cell = ({ turno, setTurno, value, setValue, locked }) => {
  return (
    <div
      className="w-full h-full text-3xl p-4"
      onClick={() => {
        if (!locked) {
          if (value === "") {
            setValue(turno);
            setTurno(turno === "X" ? "O" : "X");
          }
        }
      }}
    >
      {value ? value === "X" ? <XIcon /> : <YIcon /> : <></>}
    </div>
  );
};

export default Cell;
