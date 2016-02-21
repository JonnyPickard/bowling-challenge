function Game() {
  this.currentFrame = 1;
  this.name = "Player 1";
  this.pinsLeft = 10;
}

Game.prototype.setName = function (name) {
  this.name = name;
};

Game.prototype.bowl = function(){
  return Math.floor((Math.random() * this.pinsLeft) + 1);
};

Game.prototype.switchFrame = function () {
  this.currentFrame += 1;
};

Game.prototype.deductPins = function (number) {
  this.pinsLeft -= number;
}
// Game.prototype.frameTurnOne = function (){
//   var score = Game.bowl();
//   this.pinsLeft -= score;
// }
//
// Game.prototype.frameTurnTwo = function () {
//   var score = Game.bowl();
//   this.pinsLeft = 10;
// }
//
// Game.prototype.switchTurn = function () {
//
// };
