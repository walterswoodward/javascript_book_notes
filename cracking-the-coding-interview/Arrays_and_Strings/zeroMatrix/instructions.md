# Instructions

Write a algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

# Considerations

1. We can assume that the dimensions of the input matrix are NOT equal.
2. Careful not to make the mistake of iterating through the matrix and replacing all corresponding rows and columns with 0's each time you find a zero otherwise you may run into the issue of overwriting more values as 0 then required. This is easily avoided if you just split your logic into two sections:
  1. Iterate through the matrix and record the location of each of the zero's in the original matrix.
  2. Iterate a second time through the matrix, this time zeroing out any rows or columns corresponding to the values in your record. 