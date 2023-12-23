function isValidSudoku(board: string[][]): boolean {
  const rowsSet = new Set<string>();
  const colsSet = new Set<string>();
  const cellsSet = new Set<string>();

  for (let row = 0; row < board.length; row++) {
    const cellRow = Math.floor(row / 3);

    for (let col = 0; col < board[row].length; col++) {
      const value = board[row][col];

      const cellCol = Math.floor(col / 3);

      const rowLabel = `${row}:${value}`;
      const colLabel = `${col}:${value}`;
      const cellLabel = `${cellRow}${cellCol}:${value}`;

      if (rowsSet.has(rowLabel)) return false;
      if (colsSet.has(colLabel)) return false;
      if (cellsSet.has(cellLabel)) return false;

      if (value !== ".") {
        rowsSet.add(rowLabel);
        colsSet.add(colLabel);
        cellsSet.add(cellLabel);
      }
    }
  }

  return true;
}

// First solution
// function isValidSudoku(board: string[][]): boolean {
//   const cellsMap = new Map<string, Set<string>>();
//   const rowsMap = new Map<number, Set<string>>();
//   const colsMap = new Map<number, Set<string>>();

//   for (let row = 0; row < board.length; row++) {
//     let currentRowSet = rowsMap.get(row);

//     if (!currentRowSet) {
//       currentRowSet = new Set<string>();
//       rowsMap.set(row, currentRowSet);
//     }

//     for (let col = 0; col < board[row].length; col++) {
//       const currentValue = board[row][col];
//       let currentColSet = colsMap.get(col);

//       if (!currentColSet) {
//         currentColSet = new Set<string>();

//         colsMap.set(col, currentColSet);
//       }

//       if (currentRowSet.has(currentValue)) return false;
//       if (currentColSet.has(currentValue)) return false;

//       const celRow = Math.floor(row / 3);
//       const celCol = Math.floor(col / 3);

//       let currentCellSet = cellsMap.get(`${celRow}${celCol}`);

//       if (!currentCellSet) {
//         currentCellSet = new Set<string>();

//         cellsMap.set(`${celRow}${celCol}`, currentCellSet);
//       }

//       if (currentCellSet.has(currentValue)) return false;

//       if (currentValue !== ".") {
//         currentRowSet.add(currentValue);
//         currentColSet.add(currentValue);
//         currentCellSet.add(currentValue);
//       }
//     }
//   }

//   return true;
// }
