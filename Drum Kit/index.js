
// Detecting Button Press 

var totalNoOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<totalNoOfDrums; i++) {
    //here we used anonymous function
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var btnInnerHTML = this.innerHTML;

        makeSound(btnInnerHTML);

        btnAnimation(btnInnerHTML);
    });
}

// Detecting keyboard Press 
document.addEventListener("keypress", function(event) {

    makeSound(event.key); 

    btnAnimation(event.key);
});

// Play Sound Function 
function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play(); 
            break;

        case "a":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play(); 
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play(); 
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;

        case "k":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;

        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play(); 
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play(); 
            break;

        default : console.log(btnInnerHTML);
    }
}

// To add animation on the website

function btnAnimation(currentKey) {
    
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");

    setTimeout(function()
    {
        activeBtn.classList.remove("pressed");
    }, 100);
}