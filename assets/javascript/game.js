
// here's my list of states
var StateArray = ["New Hampshire", "Vermont", "Maine", "South Carolina", "New York"];  

// here's some words of encouragement
var encouragementArray = ["Nice!", "Yup, you got it!", "Correct!", "You're a Champ!", "Yes!", "Nice One!"];

// here's some negative stuff for a wrong guess
var wrongguessText = ["c'mon, use your head!", "nope, not in the word...", "wrong.  You're not really good at this, are you?", "try again"];

// here's some text for repeated guesses
var repeatText = ["O.K., try something new already!", "You already guessed that", "There's more letters you can try, quite repeating", "Pay attention, you already guessed that!"];

// this is a list of wrong guesses.  It's initially empty.
var wrongList = [];

// give the user 10 tries
var guessNumber = 10;


//Pick a random state out of the array and convert it to lower case     
var State = StateArray[Math.floor(Math.random()*StateArray.length)].toLowerCase();

//Counter for wrong guesses
var wrongcount = 0;
var guessesRemaining = 6;

// create an array out of the State
var answerArray = State.split("");

// replace any spaces in the name with a ^
for (i=0; i<answerArray.length; i++) {
  if (answerArray[i] == " ") {
    answerArray[i] = "^";
  }
}

// I create a string out of the correct array to compare to the users progress
var answerString = answerArray.join("");

// This array tracks the users progress as they guess.  It's the "gameboard"
var gameboard = [];
var gameboardString;

// Build the array out of -'s so it's the same length as the state
for (i = 0; i < State.length; i++) {
  gameboard.push("-");
}

// Insert spaces into the right locations!
for (i=0; i<answerArray.length; i++) {
  if(answerArray[i] == "^") {
    gameboard[i] = "^"
  }
}

gameboardString = gameboard.join("");
        

document.getElementById("game").textContent = gameboardString;
document.getElementById("remaining").textContent = guessesRemaining;

//put up the blank hangman image
document.getElementById("image").src = "assets/images/hangman" + wrongcount + ".jpg";


// console.log("Answer Array:   " + answerArray);
// console.log("Correct Answer (string):  " + answerString);
// console.log("gameboard Array:   " + gameboard);
// console.log("Current Game Status (string):  " + gameboardString);

//get input from user
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
  var userGuess = event.key;
  var userGuessCode = event.keyCode;
  var wrongGuess;    


//determine if the choice is a letter
  if (userGuessCode >= 65 && event.keyCode <= 90) {
    console.log ("letter pressed!");
  }
    else {
//    alert ("you must press a letter!");
    document.getElementById("message").textContent = "press a key!";
  }


// check to see if the user has already tried that letter

  console.log ("here's the wrong list before the logic: " + wrongList);

  if ((wrongList.indexOf(userGuess) != "-1") || (gameboard.indexOf(userGuess) != "-1")){
    document.getElementById("message").textContent = repeatText[Math.floor(Math.random()*repeatText.length)];
    console.log("Here's the list of wrong guesses: " + wrongList);
  }
  
// check to see if the guess is anywhere in the answer Array 
    else {
      if ((answerArray.indexOf(userGuess) == "-1")){
        wrongList.push(userGuess);
        console.log("wrongList: " + wrongList);
        console.log("answerArray: " + answerArray);
        console.log("gameboard: " + gameboard);
        document.getElementById("message").textContent = wrongguessText[Math.floor(Math.random()*wrongguessText.length)];
        document.getElementById("image").src = "assets/images/hangman" + ++wrongcount + ".jpg";
        document.getElementById("wrongguesses").textContent = wrongList;
        guessesRemaining--;
        document.getElementById("remaining").textContent = guessesRemaining;
        if (wrongcount == 6) {
          document.getElementById("message").textContent = "You LOSE!!!";
        }
      }

      else {

        for (i=0; i<answerArray.length; i++) {
        console.log("i counter:   " + i);
        console.log("user guess:  " + userGuess)

          if (userGuess == answerArray[i]) {
            gameboard[i] = userGuess;
            gameboardString = gameboard.join("");
            answerArray[i] = 0;
            document.getElementById("message").textContent = encouragementArray[Math.floor(Math.random()*encouragementArray.length)];
            document.getElementById("game").textContent = gameboardString;

            if (gameboardString == answerString) {
              document.getElementById("message").textContent = "Congratulations!";
              document.getElementById("image").src = "assets/images/hangman-win.jpg";
              console.log("YOU WIN!!!!!");
              break;
            } 
          }
        }
      }

    console.log("Current Gameboard (string):  " + gameboardString);
    }
          
  }

  function reloadFunction() {
    location.reload();
}

      
