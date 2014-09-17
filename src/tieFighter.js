

// Creates and returns a new dancer object that can step
var tieFighter = function(origin){
  EmpFighter.call(this);

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="emperialFighter tieFighter "><img src="img/tie.png"></img></span>');
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

tieFighter.prototype=Object.create(EmpFighter.prototype);
tieFighter.prototype.constructor=tieFighter;
