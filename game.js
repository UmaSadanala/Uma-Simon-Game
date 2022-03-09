alert("Are you ready to check your Memory Skills!");
var buttonColors = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;


$("#start").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
$("#start").click(function(){
  if(!started){
    
    $("h1").text("Level " + level);
    $("p").text("Click on the blinked colour at first. At the Second level you have to click the first colour and then second and at the third level click first, second, third and so on. So you have to remember the all level colours in sequence. If you are giving in a wrong sequence then Game Over.");
    nextSequence();
    started = true;
  }

});


$(".btn").click(function(){

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);

});




function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      // if(level-1<5){
      //   $("p").text("Your Score is : " +level-1)
      // }

      $("h1").text("Game Over, Press Start Game to Restart");
      $("#start").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
     
        $("p").text("Your Score is : " + (level-1));



      startOver();
    }

}

function nextSequence(){
  userClickedPattern=[];
  level++;
  $("p").text("Keep Going🦾");
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);

}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){

  var activeBtn = $("."+currentColor);
  activeBtn.addClass("pressed");

  setTimeout(function(){
    activeBtn.removeClass("pressed");
  }, 100);
}

function startOver(){
  level = 0;
gamePattern = [];
started = false;
}
