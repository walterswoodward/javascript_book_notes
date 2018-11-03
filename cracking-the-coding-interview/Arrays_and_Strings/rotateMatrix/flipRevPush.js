// Returns NEW matrix using For Loops:
const flipRevPush = (matrix) => {
let newMatrix = []
for (let i = 0; i < matrix.length; i++){
  row = []
  for (let j = 0; j < matrix[i].length; j++){
    row.push(matrix[j][i])
  }
  newMatrix.push(row.reverse())
}
return newMatrix
}
console.log(solution([
  [1,2,3],
  [4,5,6],
  [7,8,9],
])) // should be: ​​​​​[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]​​​​​

