describe("Tic Tac Toe", function(){

  var X = "X",
      Y = "Y";

  describe("Squares", function(){
    it("are empty by default", function(){
      expect(TicTacToe.board[0][0]).toBe("");
      expect(TicTacToe.board[2][2]).toBe("");
    });
  });

  describe("Turn", function(){
    it("is 0 at start", function(){
      expect(TicTacToe.turn.number).toBe(0);
    });
    it("increments when a move is taken", function(){
      TicTacToe.turn.number = 0;
      TicTacToe.move(0,0);
      expect(TicTacToe.turn.number).toBe(1);
    });
  });
  describe("Player", function(){
    it("is player X at starts", function(){
      TicTacToe.turn.number = 0;
      expect(TicTacToe.turn.player()).toBe(X);
    });
    it("is player Y second", function(){
      TicTacToe.turn.number = 1;
      expect(TicTacToe.turn.player()).toBe(Y);
    });
  });

  describe("Move", function(){
    it("fills a square", function(){
      TicTacToe.move(0,0);
      expect(TicTacToe.board[0][0]).not.toBe("");
    });
    it("checks if player has won after their move", function(){
      spyOn(TicTacToe.winning, 'hasHappened');
      TicTacToe.move(0,1);
      expect(TicTacToe.winning.hasHappened).toHaveBeenCalled();
    });
    describe("On player X's turn", function(){
      it("fills with an X", function(){
        TicTacToe.turn.number = 0;
        TicTacToe.move(0,0);
        expect(TicTacToe.board[0][0]).toBe(X);
      });
    });
    describe("On player Y's turn", function(){
      it("fills with an Y", function(){
        TicTacToe.turn.number = 1;
        TicTacToe.move(0,0);
        expect(TicTacToe.board[0][0]).toBe(Y);
      });
    });
  });

  describe("Winning", function(){
    it("doesn't happens by default", function(){
      TicTacToe.board = [
        [ "", "", "" ],
        [ "", "", "" ],
        [ "", "", "" ]
      ];
      expect(TicTacToe.winning.hasHappened()).toBe(false);
    });
    it("happens when there are three Xs in the top row", function(){
      TicTacToe.turn.number = 0;
      TicTacToe.board = [
        [ "X", "X", "X" ],
        [ "", "", "" ],
        [ "", "", "" ]
      ];
      expect(TicTacToe.winning.hasHappened()).toBe(true);
    });
    it("happens when there are three Ys in the top row", function(){
      TicTacToe.turn.number = 1;
      TicTacToe.board = [
        [ "Y", "Y", "Y" ],
        [ "", "", "" ],
        [ "", "", "" ]
      ];
      expect(TicTacToe.winning.hasHappened()).toBe(true);
    });
  });

});