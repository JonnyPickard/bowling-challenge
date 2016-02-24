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

  describe('#newFrame', function(){
    it('creates a new frame objects', function(){

    });
  });
});

describe('Frame', function() {
  var frame = new Frame();

  describe('#setNumber', function() {
    it('allows you to set the frame number', function() {
      frame.setNumber(7);
      expect(frame.number).toEqual(7);
    });
  });

  describe('#addScore', function(){
    it('allows you to input a score', function() {
      frame.addScore(4);
      expect(frame.scores).toContain(4);
    });
  });

  describe('#totalScore', function(){
    it('allows you to total the frames score', function(){
      frame.scores = [4,5]
      frame.totalScore();
      expect(frame.total).toEqual(9);
    });
  });

  describe('#bowlOne', function(){
    it('correctly returns bowl one of a frame', function(){
      frame.scores = [4, 5];
      expect(frame.bowlOne()).toEqual(4);
    });
  });

  describe('#bowlTwo', function(){
    it('correctly returns bow two of a frame', function(){
      frame.scores = [4, 5];
      expect(frame.bowlTwo()).toEqual(5);
    });
  });
});
