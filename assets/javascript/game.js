//Assign html element needed to a variable
var guessed = document.querySelector(".guessed");

//Assign HTML element that will hide/appear to a variable and assign style of hidden
var hide = document.querySelector(".hide");
hide.style.visibility = "hidden";
var lettersGuessed = document.querySelector(".lettersGuessed");

//Assign Image element to a var
var results = document.querySelector(".result");
var postResult = document.querySelector("I");


//Assign scoreboard HTML elments to a variable
var winSelector = document.querySelector(".wins");
var lossesSelector = document.querySelector(".losses");
var leftSelector = document.querySelector(".left");

//Declare var that will monitor scores
var wins = 0;
var losses = 0;
var remainingGuesses = 9;

//Declare var used to store users keys
var g;


//Generate random computer letter

function generateLetter(){
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letter = letters[Math.floor(Math.random() * letters.length)];
return letter;
}

//Generate the first random letter
letter = generateLetter();

//Declare var that will count the amout of times the event listener is triggered by a keyup
var timesTriggered = 0;

function onKeyup(event) {   
    event.preventDefault();
  }





//Create a listing event that records keyboard events
document.onkeydown = function(event) {



    if (remainingGuesses === 0){
        event.preventDefault();
        leftSelector.textContent = "Guesses left: " + remainingGuesses;

    }else{
    //Brings in the H3 that was not visible to display what was guessed
    hide.style.visibility = "visible";

    //Building scoreboard frontend
    winSelector.textContent = "Wins: " + wins;
    lossesSelector.textContent = "Loses: " + losses;
    leftSelector.textContent = "Guesses left: " + remainingGuesses;

    
    //Assigning the key typed to a variable
    var g = (event.key);

    //Added for every time the user types a key
    remainingGuesses--;

        if(lettersGuessed.textContent) {
            var getPreviousContent = lettersGuessed.textContent;
            lettersGuessed.textContent = getPreviousContent + ", " + g;
        }else{
            lettersGuessed.textContent = " " + g;
        }
        //TODO: Display all user's gueses.  Currently only one shows.


        postResult.className = "far fa-thumbs-down";


        if (g.toLowerCase() === letter){
        //TODO: Toggle css style for a win.
        //TODO: Call out to the screen that the user guessed correctly.
        console.log("You Won!!!");
        postResult.className = "far fa-thumbs-up";
        wins += 1;
        winSelector.textContent = "Wins: " + wins;
        letter = generateLetter();
        remainingGuesses = 9;
        leftSelector.textContent = "Guesses left: " + remainingGuesses;
    }
    
}

  };


// console.log

