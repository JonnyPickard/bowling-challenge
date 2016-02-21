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
});
