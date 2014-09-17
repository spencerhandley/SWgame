
// Creates and returns a new dancer object that can step
var starDestroyer = function(origin){
  EmpFighter.call(this);

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="emperialFighter starDestroyer "><img src="img/star.png"></img></span>');
  this.startPositionVert= 1;
  this.startPositionHor = origin;
  var styleSettings = {
    top:this.startPositionVert,
    left:this.startPositionHor
  }
  this.$node.css(styleSettings)
  this.move()
  // this.setPosition(top, left);
  setInterval(function(){this.shoot},Math.round(Math.random())* 1000)

};

starDestroyer.prototype=Object.create(EmpFighter.prototype);
starDestroyer.prototype.constructor=starDestroyer;
