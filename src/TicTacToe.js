var TicTacToe = {
  board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
  ],
  turn: {
    number: 0,
    player: function(){
      return TicTacToe.players[this.number % 2];
    }
  },
  players: [ "X", "Y" ],
  move: function(x,y) {
    TicTacToe.board[x][y] = TicTacToe.turn.player();
    TicTacToe.turn.number++;
    TicTacToe.winning.hasHappened();
  },
  winning : {
    hasHappened: function(){
      var winningCount = 0;
      for(var row = TicTacToe.board.length -1; row >= 0; row--){
        for(var squareInRow = TicTacToe.board[0].length -1; squareInRow >= 0; squareInRow--){
          var placement = TicTacToe.board[row][squareInRow];
          if(placement === TicTacToe.turn.player()) {
            winningCount++;
          }
          if(winningCount == 3){
            return true;
          }
        }
        winningCount = 0;
      }
      return false;
    }
  }
};