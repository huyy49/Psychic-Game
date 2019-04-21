// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessleft-text");
var guessSoFarText = document.getElementById("guesssofar-text");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  // function makeid() {
  //   var text = "";
  var computerChoices = "abcdefghijklmnopqrstuvwxyz";

  // for (var i = 0; i < 5; i++)
  var computerGuess = computerChoices.charAt([Math.floor(Math.random() * computerChoices.length)]);

  // return text;
  // }

  // console.log(computerGuess);
  // console.log(userGuess);

  // Reworked our code from last step to use "else if" instead of lots of if statements.


  // Only compare when key pressed is alphabetic.
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if (computerGuess === userGuess) {
      wins++;
      guessSoFar = [];
      guessLeft = 9;
    } else if (computerGuess !== userGuess) {
      var duplicate = false;
      for (var i = 0; i <= guessSoFar.length; i++) {
        if (userGuess === guessSoFar[i]) {
          duplicate = true;
          return;
          console.log(duplicate);
        }
      }
      if (duplicate == false) {
        guessSoFar.push(userGuess);
        guessLeft--;
      }
    }

    if (guessLeft === 0) {
      losses++;
      guessSoFar = [];
      guessLeft = 9;
    }
  }

  // console.log(wins);
  // console.log(losses);
  // console.log(guessLeft);
  // console.log(guessSoFar);

  // Hide the directions
  // directionsText.textContent = "";

  // Display the user and computer guesses, and wins/losses/ties.
  // userChoiceText.textContent = "You chose: " + userGuess;
  // computerChoiceText.textContent = "The computer chose: " + computerGuess;
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessLeftText.textContent = "Guesses Left: " + guessLeft;
  guessSoFarText.textContent = "Your Guesses So Far: " + guessSoFar;
};
