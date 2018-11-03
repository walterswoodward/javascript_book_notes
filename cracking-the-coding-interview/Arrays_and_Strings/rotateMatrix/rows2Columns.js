// Just for fun:
// Converts all rows to columns

// [1, 2 ,3 ,4 ] 
// [5 ,6 ,7 ,8 ]
// [9 ,10,11,12]

// TO

// [1 ,5 ,9 ]
// [2 ,6 ,10]
// [3 ,7 ,11]
// [4 ,8 ,12]

const rows2Columns = matrix => {
  let newMatrix = [];
  n = matrix.length;
  row = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!newMatrix[j]) {
        newMatrix[j] = [matrix[i][j]];
      } else {
        newMatrix[j].push(matrix[i][j])
      }
    }
  }
  return newMatrix
};

console.log(rows2Columns([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
