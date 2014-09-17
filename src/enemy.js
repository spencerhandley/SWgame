// Creates and returns a new dancer object that can step
var EmpFighter = function(){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="emperialFighter "></span>');
  this.startPositionVert= 1;
  // this.setPosition(top, left);
  setInterval(function(){this.shoot},Math.round(Math.random())* 1000)

};


EmpFighter.prototype.move = function(){
  var that = this;
  // console.log($(this.$node[0]))
  if($(this.$node[0]).context.classList.contains("destroyed")){
    debugger
  }


  if(parseFloat(this.$node[0].style.top) > window.innerHeight - 100){
console.log(window);
 // clearInterval(tieRowInterval)
  window.enemies=[];
  window.bullets=[];
  $("body").html("<div class='backgroundImage'><div class='topbar'></div><div class='container'><h2>GAME OVER</h2><a href='#' class='restartButton'>Restart Game</a></div>")
  }else{
    this.$node[0].style.top = parseFloat(this.$node[0].style.top) + 1.5 + "px"
    setTimeout(function(){that.move()}, 50)

  }

  };

EmpFighter.prototype.shoot = function(){

  // var origin = this.$node[0].style.left;
  // var bullet = new Bullet(origin);
  // this.$node.css(styleSettings);
  var origin = this.$node[0].style.left;
  var bullet = new EnemyBullet(origin);
  if(parseFloat(bullet.$node[0].style.top) == window.innerHeight) {
      delete bullet.$node.remove()
      delete bullet;


  };
};
EmpFighter.prototype.die = function(){
  delete this
}

