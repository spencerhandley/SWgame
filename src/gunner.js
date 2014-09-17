// Creates and returns a new dancer object that can step
var Gunner = function(){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="gunner"><img src="img/gunner.png"/></span>');
  // this.step(timeBetweenSteps);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  this.startPositionHor = window.innerWidth / 2
  this.startPositionVert = window.innerHeight - 100
  var styleSettings = {
    top:this.startPositionVert,
    left:this.startPositionHor
  }
  this.$node.css(styleSettings)
  this.score = 0;
  var that=this;
};

Gunner.prototype.moveLeft = function(timeBetweenSteps){
  this.$node[0].style.left = (parseFloat(this.$node[0].style.left) - 10).toString() + "px"
  };
Gunner.prototype.moveRight = function(timeBetweenSteps){
  this.$node[0].style.left = (parseFloat(this.$node[0].style.left) + 10).toString() + "px"
  };
Gunner.prototype.shoot = function(timeBetweenSteps){

  var origin = this.$node[0].style.left;
  var bullet = new Bullet(origin);
  window.bullets.push(bullet)
  if(parseFloat(bullet.$node[0].style.top) <= 0 ) {
      bullet.$node.remove()
      var idx = window.bullets.indexOf(bullet)
      window.bullets.splice(idx, 1)
      console.log(window.bullets)
      debugger;
    }

  };
Gunner.prototype.die = function(timeBetweenSteps){

  };
Gunner.prototype.heal = function(timeBetweenSteps){

  };
Gunner.prototype.incrementScore = function(){
  this.score++
  };
