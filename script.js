let buttonColors=["red","blue","green","yellow"];
let gamePattern=[];
let userPattern=[];

function nextSequence() {
    let randomNumber=Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    animatePress(randomChosenColor);
    playSound(randomChosenColor);
}

$(".btn").click(function(){
    animatePress($(this).attr("id"));
    let userChosenColor=$(this).attr("id")
    userPattern.push(userChosenColor);
    playSound(userChosenColor);
})

function playSound(name){
    let sfx=new Audio("./sounds/"+name+".mp3");
    sfx.play();
}

function animatePress(currentColor){
    $("#"+currentColor).fadeOut(100).fadeIn(100);
}