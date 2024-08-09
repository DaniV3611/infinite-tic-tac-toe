import { useState } from "react";

export const generateCells = () => {
  let arr = [];
  for (var i = 0; i < 3; i++) {
    let row = [];
    for (var j = 0; j < 3; j++) {
      row.push(cell());
    }
    arr.push(row);
  }
  return arr;
};

const cell = () => {
  const [value, setValue] = useState("");
  return { value: value, setValue: setValue };
};

export const checkWinner = (cells) => {
  let winner = null;
  for (var i = 0; i < 3; i++) {
    if (
      cells[i][0].value === cells[i][1].value &&
      cells[i][1].value === cells[i][2].value
    ) {
      winner = cells[i][0].value;
      break;
    } else if (
      cells[0][i].value === cells[1][i].value &&
      cells[1][i].value === cells[2][i].value
    ) {
      winner = cells[0][i].value;
      break;
    }
  }
  if (
    cells[0][0].value === cells[1][1].value &&
    cells[1][1].value === cells[2][2].value
  ) {
    winner = cells[0][0].value;
  }
  return winner;
};
