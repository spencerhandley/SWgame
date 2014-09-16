$(document).ready(function(){
  window.dancers = [];
  var gunner = new Gunner();
  $("body").append(gunner.$node);
  $(document).keydown(function(e) {
    switch(e.which) {
        case 37:
          gunner.moveLeft()

        break;

        case 38: // up
        break;

        case 39:
          gunner.moveRight()
           // right
        break;

        case 32:
          gunner.shoot()
        break;


        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

  // $(document).on("mouseover",".dancer",function(){
  //   var _this = $(this)
  //   $(this).animate({

  //     top:Math.random()*window.innerHeight,
  //     left:Math.random()*window.innerWidth
  //    }, 1000, "linear", function(){
  //     window.dancers.forEach(function(dancer){

  //       var rangeTop = parseFloat(_this[0].style.top) + 200;
  //       var rangeBottom = parseFloat(_this[0].style.top) - 200;
  //       var rangeLeft = parseFloat(_this[0].style.left) - 200;
  //       var rangeRight= parseFloat(_this[0].style.left) + 200;
  //       console.log(parseFloat(dancer[0].style.top), rangeTop)
  //       if(parseFloat(dancer[0].style.top) > rangeTop && parseFloat(dancer[0].style.top) > rangeBottom && parseFloat(dancer[0].style.left) > rangeLeft &&parseFloat(dancer[0].style.left) > rangeRight ){
  //         console.log("overlap")
  //         dancer[0].style.display = "none"
  //       }
  //     })
  //    })
  // })
  $(".lineup").on("click", function(){
    console.log(window.dancers[i]);

    var heightHolder=0;
    for (var i=0;i<window.dancers.length;i++){
      window.dancers[i].animate({
        left: 0,
        top: heightHolder
      });
      heightHolder+=200;
    }
  })

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
        console.log(window.dancers);

  });



});

