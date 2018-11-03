// Citation: StackExchange, User: Blindman67, Link:
// https://codereview.stackexchange.com/questions/186805/rotate-an-n-%C3%97-n-matrix-90-degrees-clockwise

// For Future Study: 

// This is essentially the same as the forLoops implementation save that it uses
// while loops instead, but it looked interesting to me, so I have placed it
// here for future reference.

// Don't use array destructuring assignment, as it has very poor performance:

function rotatePixels(matrix) {
  var x, y, x1, y1, edge;
  const N = matrix.length;  
  const N1 = N - 1;       
  const N2 = N / 2;    
  x = y = 0; 
  edge = x1 = y1 = N1;
  while (y < N2) {
      while (x < edge) { 
          const a = matrix[y][x];
          matrix[y][x]      = matrix[x1][N1-y1];
          matrix[x1][N1-y1] = matrix[y1][x1];
          matrix[y1][x1]    = matrix[x][y1]; 
          matrix[x][y1]     = a;
          x += 1;
          x1 -= 1;
      }
      x  = y += 1;     
      y1 = x1 = N1-x;
      edge -= 1;
  }
  return matrix;
} 

// 3x3
console.log(rotatePixels([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// 4x4
// console.log(rotateClockwise([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]))


