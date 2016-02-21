function Game() {
  this.currentFrame = 1;
  this.scoreArray = [];
  this.name = "Player 1";
}

Game.prototype.setName = function (name) {
  this.name = name;
};
