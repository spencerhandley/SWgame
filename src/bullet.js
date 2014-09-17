// Creates and returns a new dancer object that can step
var Bullet = function(origin){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="bullet"></span>');
  var leftOrigin = origin
  console.log(leftOrigin)
  this.$node[0].style.left = (parseFloat(origin) + 35).toString() + "px"
  // this.step(timeBetweenSteps);
  var that = this;

  $("body").append(this.$node);// down

  this.$node[0].style.top = window.innerHeight-115 + "px";

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.interval = setInterval(function(){that.move(origin)}, 1)
  this.positioninterval= setInterval(function(){that.check() }, 200)
    console.log(parseFloat(this.$node[0].style.top))

};

Bullet.prototype.move = function(origin){
    // console.log(origin)
    //debugger;
  // console.log("shot")
    if(parseFloat(this.$node[0].style.top) < 0) {
        this.$node.remove()
        bltIdx = window.bullets.indexOf(this)
        window.bullets.splice(bltIdx, 1)
        clearInterval(this.interval);

    }
    // console.log(parseFloat(this.$node[0].style.top))

    //  debugger;
    if(parseFloat(this.$node[0].style.top) > -30){
          this.$node[0].style.top = parseFloat(this.$node[0].style.top) - 2 + "px"

    }
}

Bullet.prototype.check=function(){
  // console.log("check")
  var enemies = $(".emperialFighter")
  for(var i=0;i<enemies.length;i++){
    // console.log("side")
    var center = parseFloat(enemies[i].style.left) + 50
    // console.log("left", this.$node[0].style.left)

    // console.log("top", this.$node[0].style.top)
    if(Math.abs(parseFloat(this.$node[0].style.left) - center) < 50 && parseFloat(this.$node[0].style.top) - parseFloat(enemies[i].style.top) < 150 && window.bullets.indexOf(this)> -1){

       $(enemies[i]).html("<span class='emperialFighter tieFighter '><img src='img/boom.gif'></img></span>")
       var ind = i
      setTimeout(function(){
        console.log(ind)
        console.log($(enemies[ind]))
        $(enemies[ind])[0].style.top = ""
        $(enemies[ind])[0].style.left = ""
        $(enemies[ind]).context.classList[2] = "detroyed"
        $(enemies[ind]).context.classList.length +=1
        $(enemies[ind]).remove()
                console.log($(enemies[ind]))

      }, 815)

      var idx = window.enemies.indexOf(enemies[i])
      window.enemies.splice(idx, 1)


      // console.log(window.enemies)
      // console.log(enemies[i])
      bltIdx = window.bullets.indexOf(this)
      window.bullets.splice(bltIdx, 1)
      this.$node[0].style.top = window.innerHeight + "px"
      this.$node.remove();
      window.score += 1
      // $(window.score).trigger("change")
      $("#currentScore").text(window.score)
      // console.log(window.enemies)
      // console.log(this);
      // delete this;
    }
  }
}
