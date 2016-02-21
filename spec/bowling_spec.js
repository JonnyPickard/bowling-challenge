describe('Game', function() {
  var game = new Game();


  describe('#setName', function(){

    it('Allows user to set their name', function(){
      game.setName("Jonny");
      expect(game.name).toEqual("Jonny");
    });
  });
});
