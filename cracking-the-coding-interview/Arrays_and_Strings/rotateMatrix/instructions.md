# Instructions

Given an image represent by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

# Considerations

1. Should the image be rotated left or right, clockwise or counter-clockwise?
2. Do you want to rotate the matrix in place or not e.g. does our function modify the current matrix or return a new one?
  1. If it does modify the existing array, then we need to confirm that the array is a square (NxN) -- otherwise we will not be able to rotate the matrix.
3. For this solution we assume that we are rotating 90 degrees clockwise, in place, and that 

# Visualization

Given:
// [3,2,1]
// [6,5,4]
// [9,8,7]

Switch:
// Top
// (0,0) --> (0,2)
// (0,1) --> (1,2)
// (0,2) --> (2,2)

// Left
// (2,0) --> (0,0)
// (1,0) --> (0,1)
// (0,0) --> (0,2)

// Right
// (0,2) --> (2,2)
// (1,2) --> (2,1)
// (2,2) --> (2,0)

// Bottom
// (2,2) --> (2,0)
// (2,1) --> (1,0)
// (2,0) --> (0,0)

Return:
// [3,2,1]
// [6,5,4]
// [9,8,7]


