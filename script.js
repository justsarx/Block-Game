let gameStarted = false;
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let level = 0;

function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}

function nextSequence() {
  userPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  animatePress(randomChosenColor);
  playSound(randomChosenColor);
  $("#level-title").text("Level " + level);
  level++;
}

function checkAnswer(currentLevel) {
  if (userPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    let sfx = new Audio("./sounds/wrong.mp3");
    sfx.play();
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

$(".btn").click(function () {
  animatePress($(this).attr("id"));
  let userChosenColor = $(this).attr("id");
  userPattern.push(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(userPattern.length - 1);
});

function playSound(name) {
  let sfx = new Audio("./sounds/" + name + ".mp3");
  sfx.play();
}

function animatePress(currentColor) {
  $("#" + currentColor)
    .fadeOut(100)
    .fadeIn(100);
}

$(document).keypress(function () {
  if (!gameStarted) {
    gameStarted = true;
    nextSequence();
  }
});
