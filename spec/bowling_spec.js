describe('Game', function() {
  var game = new Game();


  describe('#setName', function(){

    it('Allows user to set their name', function(){
      game.setName("Jonny");
      expect(game.name).toEqual("Jonny");
    });
  });

  // #Need to work out how to use spies for this
  // describe('#play', function(){
  //   it('Correctly calls the frame turn one method', function(){
  //     game.turnInFrame = 1;
  //   });
  // });

  describe('#bowl', function(){

    it('Returns a random number between 1 and 10', function(){
      expect(game.bowl()).toBeWithinRange(1, 10);
    });
  });

  describe('#switchToNextFrame', function(){

    it('Switches to the next frame', function(){
      game.switchToNextFrame();
      expect(game.currentFrame).toEqual(2);
    });

    it('Resets the pins to 10', function(){
      game.pinsLeft = 0;
      game.switchToNextFrame();
      expect(game.pinsLeft).toEqual(10);
    });
  });

  describe('#deductPins', function(){

    it('Deducts pins when they are bowled over', function () {
      game.deductPins(5);
      expect(game.pinsLeft).toEqual(5);
    });
  });

  describe('#resetPins', function(){
    it('Resets the pin count to 10', function(){
      game.pinsLeft = 0;
      game.resetPins();
      expect(game.pinsLeft).toEqual(10);
    });
  });

  describe('#switchTurnInFrame', function(){

    it('Switches turn in a frame from one to two', function(){
      game.switchTurnInFrame();
      expect(game.turnInFrame).toEqual(2);
    });

    it('Switches turn from two to one', function(){
      game.turnInFrame = 2;
      game.switchTurnInFrame();
      expect(game.turnInFrame).toEqual(1);
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
