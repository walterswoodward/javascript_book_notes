const forLoop2Hash = matrix => {
  let rows2Zero = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 && rows2Zero.indexOf(i) === -1) {
        rows2Zero.push({ i: i, j: j });
      }
    }
  }

  // This is the only tricky part, wrapping your mind around a triple nested for
  // loop.  If this is difficult, uncomment the console.logs below to help
  // visualize the values being passed in.
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      for (k = 0; k < rows2Zero.length; k++) {
        // console.log(i)
        // console.log(j)
        // console.log(k)
        if (i === rows2Zero[k].i || j === rows2Zero[k].j) {
          matrix[i][j] = 0;
        }
      }
    }
  }
  return matrix;
};

console.log(forLoop2Hash([[1, 2, 3, 4], [5, 0, 7, 8], [9, 10, 11, 0]]));

// McDowells Java Solution (LONGER) translated into Javascript:
const setZeros = matrix => {
  let row = [];
  let column = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      // index 0 is okay since we know all rows are same length
      if (matrix[i][j] == 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  const nullifyRow = (matrix, row) => {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[row][j] = 0;
    }
  };

  const nullifyColumn = (matrix, col) => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  };

  // Nullify Rows
  for (let i = 0; i < row.length; i++) {
    if (row[i]) nullifyRow(matrix, i);
  }
  // Nullify Columns
  for (let j = 0; j < column.length; j++) {
    if (column[j]) nullifyColumn(matrix, j);
  }

  return matrix;
};

console.log(setZeros([[1, 2, 3, 4], [5, 0, 7, 8], [9, 10, 11, 0]]));
