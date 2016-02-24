function Game() {
  this.currentFrame = 1;
  this.name = "Player 1";
  this.pinsLeft = 10;
  this.turnInFrame = 1;
  this.frameScore = [];
  this.score = [];
}

function Frame() {
  this.scores = [];
}

function Play() {
//could add strikeCheck
//could add spareCheck
//could add actual bowling functionality
}

//game methods

Game.prototype.setName = function (name) {
  this.name = name;
};

//
Game.prototype.counter = function() {
  //return frame, bowl number
}
//
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

//
Game.prototype.newFrame = function() {
  var frame = Frame.new();
  frame.setNumber(this.currentFrame);
  this.saveFrameToScore(frame);
}
//
//
Game.prototype.saveFrameToScore = function (frame) {
  this.score.push(frame)
}
//
//frame methods

Frame.prototype.setNumber = function(number) {
  this.number = number;
}

Frame.prototype.addScore = function(score) {
  this.scores += score;
}

Frame.prototype.totalScore = function() {
  this.total = this.scores.reduce(function(a, b) {
    return a + b;
  });
}

Frame.prototype.bowlOne = function() {
  return this.scores[0];
};

Frame.prototype.bowlTwo = function() {
  return this.scores[1];
};

//
Frame.prototype.setStatusStrike = function () {
  this.strike = true
}
//
//
Frame.prototype.setStatusSpare = function () {
  this.spare = true
}
//
//
Frame.prototype.bowlsLeft = function () {
//  if strike = +2
//  if spare = + 1
}
//
