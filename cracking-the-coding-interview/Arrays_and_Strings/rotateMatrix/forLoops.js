// Citation: Stack Overflow, User: Aryan Firouzian, Link: https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript

function rotateCounterClockwise(a) {
  var n = a.length;
  for (var i = 0; i < n / 2; i++) {
    for (var j = i; j < n - i - 1; j++) {
      var tmp = a[i][j];
      a[i][j] = a[j][n - i - 1];
      a[j][n - i - 1] = a[n - i - 1][n - j - 1];
      a[n - i - 1][n - j - 1] = a[n - j - 1][i];
      a[n - j - 1][i] = tmp;
    }
  }
  return a;
}

// Note for clarification:

// Notice the following intial values:
// matrix[i][j] - top-left corner
// matrix[n - j - 1][i] -- bottom-left corner
// matrix[n - i - 1][n - j - 1] -- bottom-right corner
// matrix[j][n-i-1] - top-right corner

// Visualization

// [1, 2, 3] --> [7 ,4 ,1]
// [4, 5, 6] --> [8 ,5 ,2]
// [7, 8, 9] --> [9 ,6 ,3]

// Step-by-Step Breakdown

// Replace [0,0] with value at [2,0]
// Replace [2,0] with value at [2,2]
// Replace [2,2] with value at [0,2]
// Replace [0,2] with value at [0,0] (stored in temp variable)

// Replace [0,1] with value at [1,0]
// Replace [1,0] with value at [2,1]
// Replace [2,1] with value at [1,2]
// Replace [1,2] with value at [0,1] (stored in temp variable)


function rotateClockwise(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n / 2; i++) {
    
    for (let j = i; j < n - i - 1; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
  return matrix;
}

// 3x3
console.log(rotateClockwise([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// 4x4
// console.log(rotateClockwise([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]))
