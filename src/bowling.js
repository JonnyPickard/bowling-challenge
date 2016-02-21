function Game() {
  this.currentFrame = 1;
  this.name = "Player 1";
  this.pinsLeft = 10;
  this.frameTurn = 1;
  this.frameScore = [];
  this.score = [];
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

Game.prototype.switchTurn = function () {
  if (this.frameTurn === 1) {
    this.frameTurn += 1;
  } else {
    this.frameTurn -= 1;
  }
};

Game.prototype.addToFrameScore = function (result) {
  this.frameScore += result;
};

Game.prototype.saveFrameScore = function () {
  this.score.push(this.frameScore);
  this.frameScore = 0;
};

Game.prototype.strikeCheck = function(bowlResult) {
  if(bowlResult === 10) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.spareCheck = function(bowlResult) {
  if (this.pinsLeft === 0) {
    return true
  } else {
    return false
  }
};


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
