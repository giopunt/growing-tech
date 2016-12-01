var Game = function(){
  var playerToken = "X";
  var results = {
    wins: " wins",
    in_progress: "in progress",
    draw: "draw"
  };

  var board = [
    ["","",""],
    ["","",""],
    ["","",""]
  ];

  var cycleToken = function() {
    playerToken = playerToken === "X" ? "O" : "X";
  };

  function checkColumns() {
    for (var col = 2; col >= 0; col--) {
      if (board[0][col] == playerToken && board[1][col] == playerToken && board[2][col] == playerToken) {
        return true;
      }
    }
    return false;
  }

  function checkRows() {
    for (var row = 2; row >= 0; row--) {
      if (board[row][0] == playerToken && board[row][1] == playerToken && board[row][2] == playerToken) {
        return true;
      }
    }
    return false;
  }

  function checkDiagonals() {
    var win1 = board[0][0] == playerToken && board[1][1] == playerToken && board[2][2] == playerToken;
    var win2 = board[0][2] == playerToken && board[1][1] == playerToken && board[2][0] == playerToken;
    return win1 || win2;
  }

  function checkDraw(){
    for (var row = 2; row >= 0; row--) {
      for (var column = 2; column >= 0; column--) {
        if (board[row][column] === "") {
          return false;
        }
      }
    }
    return true;
  }

  var checkResult = function() {
    var result = (checkColumns() || checkRows() || checkDiagonals() ) ? playerToken + results.wins : results.in_progress;
    if(checkDraw()){
      result = results.draw;
    }
    return result;
  };

  var placeToken = function( coordinate ){
    var squareValue = board[coordinate.y][coordinate.x];
    if(squareValue !== ""){ 
      return; 
    } 
    board[coordinate.y][coordinate.x] = playerToken;
  };

  this.move = function( coordinate ){
    placeToken(coordinate);
    var result = checkResult();
    cycleToken();
    return { outcome: result }
  };

  this.board = board;
};