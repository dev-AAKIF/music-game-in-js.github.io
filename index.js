
var numberofDrumButton = document.querySelectorAll(".drum").length;

for(let i=0;i<numberofDrumButton;i++) {

document.querySelectorAll(".drum")[i].addEventListener("click",
function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch(key) {
        case "s":
            var audio = new Audio("assets/music/tom-1.mp3");
            audio.play();
            break;
        case "r":
            var audio = new Audio("assets/music/tom-2.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("assets/music/tom-3.mp3");
            audio.play();
            break;
        case "m":
            var audio = new Audio("assets/music/tom-4.mp3");
            audio.play();
            break;
        case "p":
            var audio = new Audio("assets/music/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("assets/music/crash.mp3");
            audio.play();
            break;
        case "n":
            var audio = new Audio("assets/music/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}
// addEventListener(type, listener);
// Function Call;
//Anonymous Function;
// Fat Arrow Function;

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100);
}
