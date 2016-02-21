describe('Game', function() {
  var game = new Game();


  describe('#setName', function(){

    it('Allows user to set their name', function(){
      game.setName("Jonny");
      expect(game.name).toEqual("Jonny");
    });
  });

  describe('#bowl', function(){

    it('Returns a random number between 1 and 10', function(){
      expect(game.bowl()).toBeWithinRange(1, 10);
    });
  });

  describe('#switchFrame', function(){

    it('Switches to the next frame', function(){
      game.switchFrame();
      expect(game.currentFrame).toEqual(2);
    })
  });

  describe('#deductPins', function(){

    it('Deducts pins when they are bowled over', function () {
      game.deductPins(5);
      expect(game.pinsLeft).toEqual(5);
    });
  });

  describe('#switchTurn', function(){

    it('Switches turn in a frame from one to two', function(){
      game.switchTurn();
      expect(game.frameTurn).toEqual(2);
    });

    it('Switches turn from two to one', function(){
      game.frameTurn = 2;
      game.switchTurn();
      expect(game.frameTurn).toEqual(1);
    });
  });

  describe('#addToFrameScore', function(){

    it('Adds the current result to the frame score', function(){
      game.addToFrameScore(5);
      expect(game.frameScore).toContain(5);
    });
  });

  describe('#saveFrameScore', function() {

    it('Correctly saves the total frame score', function() {
      game.frameScore = [4, 3];
      game.saveFrameScore();
      expect(game.score).toContain([4, 3]);
    });

    it('Correctly resets the frame score back to 0', function() {
      game.frameScore = [4, 3];
      game.saveFrameScore();
      expect(game.frameScore).not.toContain([4, 3]);
    });
  });

  describe('#strikeCheck', function(){

    it('correctly identifies a strike', function(){
      expect(game.strikeCheck(10)).toEqual(true);
    });
  });

  describe('#spareCheck', function(){

    it('correctly identifies a spare', function(){
      game.currentFrame = 2;
      game.pinsLeft = 0;
      expect(game.spareCheck()).toEqual(true);
    });
  });
});
