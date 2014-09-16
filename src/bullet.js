// Creates and returns a new dancer object that can step
var Bullet = function(origin){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="bullet"></span>');
  var leftOrigin = origin
  console.log(leftOrigin)
  this.$node[0].style.left = (parseFloat(origin) + 35).toString() + "px"
  // this.step(timeBetweenSteps);
  var that = this

  $("body").append(this.$node);// down

  this.$node[0].style.top = window.innerHeight-115 + "px";

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  setInterval(function(){that.move(origin)}, 1)
};

Bullet.prototype.move = function(origin){
    // console.log(origin)
    //debugger;
  // console.log("shot")
    console.log(parseFloat(this.$node[0].style.top))

    //  debugger;
    this.$node[0].style.top = parseFloat(this.$node[0].style.top) - 3 + "px"


}
