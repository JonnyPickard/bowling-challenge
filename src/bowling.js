function Game() {
  this.currentFrame = 1;
  this.name = "Player 1";
  this.pinsLeft = 10;
  this.turnInFrame = 1;
  this.frameScore = [];
  this.score = [];
}

Game.prototype.setName = function (name) {
  this.name = name;
};

// #Still needs testing properly
// Game.prototype.play = function () {
//   if (this.turnInFrame === 1) {
//     this.playFrameOne();
//   } else {
//     this.playFrameTwo();
//   }
// };

// #Next thing to implement
// Game.prototype.playFrameOne = function () {
//
// }
//
// Game.prototype.playFrameTwo = function () {
//
// }

Game.prototype.bowl = function(){
  return Math.floor((Math.random() * this.pinsLeft) + 1);
};

Game.prototype.switchToNextFrame = function () {
  this.currentFrame += 1;
  this.resetPins();
};

Game.prototype.resetPins = function () {
  this.pinsLeft = 10;
};

Game.prototype.deductPins = function (number) {
  this.pinsLeft -= number;
}

Game.prototype.switchTurnInFrame = function () {
  if (this.turnInFrame === 1) {
    this.turnInFrame += 1;
  } else {
    this.turnInFrame -= 1;
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
