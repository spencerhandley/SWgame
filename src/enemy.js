// Creates and returns a new dancer object that can step
var EmpFighter = function(fighterType ){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="emperialFighter ' + fighterType + '"></span>');
  // this.step(timeBetweenSteps);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};


EmpFighter.prototype.move = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  };

EmpFighter.prototype.shoot = function(){
  var bullet = new Bullet()

  // console.log("inside position")
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.$node.css(styleSettings);
};
EmpFighter.prototype.die = function(){
  delete this
}
