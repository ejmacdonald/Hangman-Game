
// here's my list of states
      var StateArray = ["New Hampshire", "Vermont", "Maine", "Florida", "Georgia"];  

// this is a list of wrong guesses.  It's initially empty.
      var wrongList = [];



//Pick a random state out of the array and convert it to lower case     
      var State = StateArray[Math.floor(Math.random()*StateArray.length)].toLowerCase();

console.log("State:  " + State);


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
document.getElementById("game").textContent = gameboard;

console.log("Answer Array:   " + answerArray);
console.log("Correct Answer (string):  " + answerString);
console.log("gameboard Array:   " + gameboard);
console.log("Current Game Status (string):  " + gameboardString);

//get input from user
// This function is run whenever the user presses a key.
      document.onkeyup = function(event) {

// Determines which key was pressed.
      var userGuess = event.key;
      var userGuessCode = event.keyCode;
      var wrongGuess;    


//determine if the choice is a letter
      if (userGuessCode >= 65 && event.keyCode <=90) {
        console.log ("letter pressed!");
      }
      else {
    //    alert ("you must press a letter!");
        document.getElementById("message").textContent = "press a key!";
      }


// check to see if the user has already tried that letter

      console.log ("here's the wrong list before the logic: " + wrongList);

      if (wrongList.indexOf(userGuess) != "-1"){
        alert ("you already asked that");
        console.log("Here's the list of wrong guesses: " + wrongList);
      }
 
// check to see if the guess is anywhere in the answer Array
            else {
              if (answerArray.indexOf(userGuess) == "-1") {
                alert ("nope, not in the word!");
                wrongList.push(userGuess);
                console.log("A new wrong list: " + wrongList);
                document.getElementById("wrongguesses").textContent = wrongList;
              }

            else {

            for (i=0; i<answerArray.length; i++) {
              console.log("i counter:   " + i);
              console.log("user guess:  " + userGuess)

              if (userGuess == answerArray[i]) {
                alert ("matched a letter");
                gameboard[i] = userGuess;
                gameboardString = gameboard.join("");
                answerArray[i] = 0;
                document.getElementById("game").textContent = gameboard;

                if (gameboardString == answerString) {
                  console.log("YOU WIN!!!!!");
                  document.getElementById("message").textContent = "You Win!!!";
                  break;
                } 
              }
            }
          }


     // I NEED TO FIX THIS NESTED IF STATEMENT TO INCLUDE THAT IF THE LETTER IS NOT FOUND IT GETS PUSHED ONTO THE WRONG GUESS ARRAY
//             wrongGuess.push(userGuess);
//             document.getElementById("wrongguesses").textContent = wrongGuess;
          
// console.log("Correct Answer (string):  " + answerString);
console.log("Current Gameboard (string):  " + gameboardString);
          }
          
        }
      
