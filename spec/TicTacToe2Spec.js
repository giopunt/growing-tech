describe("Tic Tac Toe 2", function(){
  var game;
  const ___ = ["", "", ""];
  const X__ = ["X", "", ""];
  const XO_ = ["X", "O", ""];

  beforeEach( function(){
    game = new Game();
  });

   describe("Starting from position 0", function(){

    beforeEach( function(){
      var moveCoordinate = {
        x: 0,
        y: 0
      };
      game.move(moveCoordinate);
    });

    describe("Go", function(){

      it("is X first", function(){
        var expectedBoard = [
          X__,
          ___,
          ___
        ];
        expect(game.board).toEqual(expectedBoard);
      });
      it("alternates Xs and Os", function(){
        var expectedBoard = [
          XO_,
          ___,
          ___
        ];
        var moveCoordinate2 = {
          x: 1,
          y: 0
        };
        game.move(moveCoordinate2);
        expect(game.board).toEqual(expectedBoard);
      });
      it("is not possible to play in a position that has already been played", function(){
        var expectedBoard = [
          X__,
          ___,
          ___
        ];
        var moveCoordinate2 = {
          x: 0,
          y: 0
        };
        game.move(moveCoordinate2);
        expect(game.board).toEqual(expectedBoard);
      });
      it("is not possible to play in a position that is outside the board", function(){
        var expectedBoard = [
          X__,
          ___,
          ___
        ];
        var moveCoordinate2 = {
          x: 10,
          y: 0
        };
        game.move(moveCoordinate2);
        expect(game.board).toEqual(expectedBoard);
      });
    });

    describe("Play", function(){
      it("continues unless there is a reason to stop", function(){
        var moveCoordinate_foo = {x: 0, y: 2};
        expect( game.move( moveCoordinate_foo ) ).toEqual( { outcome: "in progress" } );
      });

      it("ends in a win when X has three in first vertical line", function(){
        var moveCoordinate_O_1 = {x: 1, y: 0};
        var moveCoordinate_X_2 = {x: 0, y: 1};
        var moveCoordinate_O_2 = {x: 1, y: 1};
        var moveCoordinate_X_3 = {x: 0, y: 2};
        game.move(moveCoordinate_O_1);
        game.move(moveCoordinate_X_2);
        game.move(moveCoordinate_O_2);
        expect( game.move(moveCoordinate_X_3) ).toEqual( { outcome: "X wins" } );
      });

      it("ends in a win when O has three in second vertical line", function(){
        var moveCoordinate_O_1 = {x: 1, y: 0};
        var moveCoordinate_X_2 = {x: 0, y: 1};
        var moveCoordinate_O_2 = {x: 1, y: 1};
        var moveCoordinate_X_3 = {x: 2, y: 2};
        var moveCoordinate_O_3 = {x: 1, y: 2};
        game.move(moveCoordinate_O_1);
        game.move(moveCoordinate_X_2);
        game.move(moveCoordinate_O_2);
        game.move(moveCoordinate_X_3);
        expect( game.move(moveCoordinate_O_3) ).toEqual( { outcome: "O wins" } );
      });

      it("ends in a win when O has three in third vertical line", function(){
        var moveCoordinate_O_1 = {x: 2, y: 0};
        var moveCoordinate_X_2 = {x: 0, y: 1};
        var moveCoordinate_O_2 = {x: 2, y: 1};
        var moveCoordinate_X_3 = {x: 1, y: 2};
        var moveCoordinate_O_3 = {x: 2, y: 2};
        game.move(moveCoordinate_O_1);
        game.move(moveCoordinate_X_2);
        game.move(moveCoordinate_O_2);
        game.move(moveCoordinate_X_3);
        expect( game.move(moveCoordinate_O_3) ).toEqual( { outcome: "O wins" } );
      });

      it("ends in a win when X has three in first horizontal line", function(){
        var moveCoordinate_O_1 = {x: 1, y: 1};
        var moveCoordinate_X_2 = {x: 1, y: 0};
        var moveCoordinate_O_2 = {x: 2, y: 1};
        var moveCoordinate_X_3 = {x: 2, y: 0};
        game.move(moveCoordinate_O_1);
        game.move(moveCoordinate_X_2);
        game.move(moveCoordinate_O_2);
        expect( game.move(moveCoordinate_X_3) ).toEqual( { outcome: "X wins" } );
      });

      it("ends in a win when X has three in a diagonal line", function(){
        var moveCoordinate_O_1 = {x: 0, y: 1};
        var moveCoordinate_X_2 = {x: 1, y: 1};
        var moveCoordinate_O_2 = {x: 2, y: 1};
        var moveCoordinate_X_3 = {x: 2, y: 2};
        game.move(moveCoordinate_O_1);
        game.move(moveCoordinate_X_2);
        game.move(moveCoordinate_O_2);
        expect( game.move(moveCoordinate_X_3) ).toEqual( { outcome: "X wins" } );
      });

      it("ends in a draw when all squares are taken", function(){
        var moveCoordinate_O_1 = {x: 0, y: 1};
        var moveCoordinate_X_2 = {x: 0, y: 2};
        var moveCoordinate_O_2 = {x: 1, y: 1};
        var moveCoordinate_X_3 = {x: 1, y: 0};
        var moveCoordinate_O_3 = {x: 1, y: 2};
        var moveCoordinate_X_4 = {x: 2, y: 1};
        var moveCoordinate_O_4 = {x: 2, y: 0};
        var moveCoordinate_X_5 = {x: 2, y: 2};
        game.move(moveCoordinate_O_1);
        game.move(moveCoordinate_X_2);
        game.move(moveCoordinate_O_2);
        game.move(moveCoordinate_X_3);
        game.move(moveCoordinate_O_3);
        game.move(moveCoordinate_X_4);
        game.move(moveCoordinate_O_4);
        expect( game.move(moveCoordinate_X_5) ).toEqual( { outcome: "draw" } );
      });
    });
  });
});