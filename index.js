
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(let i=0;i<numberOfDrumButton;i++) {

document.querySelectorAll(".drum")[i].addEventListener("click",
function() {
    console.log(this);
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keypress", function(event){
    console.log(event); 
    makeSound(event.key);
    buttonAnimation(buttonInnerHTML);
});

function makeSound(key) {
    switch(key) {
    case "s":
        var audio = new Audio("assets/music/tom-1.mp3")
        audio.play();
        break;
    case "r":
        var audio = new Audio("assets/music/tom-2.mp3")
        audio.play();
        break;
    case "g":
        var audio = new Audio("assets/music/tom-3.mp3")
        audio.play();
        break;
    case "m":
        var audio = new Audio("assets/music/tom-4.mp3")
        audio.play();
        break;
    case "p":
        var audio = new Audio("assets/music/snare.mp3 ")
        audio.play();
        break;
    case "d":
        var audio = new Audio("assets/music/crash.mp3")
        audio.play();
        break;
    case "n":
        var audio = new Audio("assets/music/kick-bass.mp3")
        audio.play();
        break;    
    default :
        console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
}