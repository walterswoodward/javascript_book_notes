//  Citation: Codepen, User: @Roni82, Link: https://codepen.io/Roni82/pen/KeVRwG

  function mazeArray(maze) {
    this.answer = null
    this.traverse = function(column, row){
      if(maze[column][row] == 2) {
        console.log("We solved the maze at " + column + ", " + row);
        answer = [column, row]
      } else if(maze[column][row] == 1) {
        console.log("We are on a valid path at ["+column+", "+row+"]");
        maze[column][row] = 9;
        // Down
        if(column < maze.length - 1); {
          this.traverse(column + 1, row);
        } 
        // Right
        if(row < maze[column].length - 1){
          this.traverse(column, row + 1);
        }
        // Up
        if(column > 0){
          this.traverse(column - 1, row);
        }
        // Left
        if(row > 0) {
          this.traverse(column, row - 1);
        }
      } else {
          console.log("You've hit a wall at ["+column+", "+row+"]")
      }
    }

    // Traverse first column of matrix to find entry point
    let init_c = 0
    for (let i = 0; i < maze.length; i++){
        if (maze[i][0] === 1){
            init_c = i
            break
        }
    }
    traverse(init_c,0) // Must start on path!
return answer
   
  }

  var myMaze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 1, 2],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]; 
  
  console.log(mazeArray(myMaze))

