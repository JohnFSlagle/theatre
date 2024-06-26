function runGame() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let guessString = "";
  let guessNumber = 0;
  let correct = false;
  numTries = 0;
  let target = randomNumber;

  do {
    guessString = prompt(
      "I am thinking of a number between 1 and a 100. \n\nWhat is the number?"
    );
    if (guessString === null) {
      return;
    }
    guessNumber = +guessString;
    numTries += 1;
    correct = checkGuess(guessNumber, target);
  } while (!correct);

  alert(
    "You got it! The number was " +
      target +
      ".\n\nIt took you " +
      numTries +
      " tries to guess correctly."
  );
}

function checkGuess(guessNumber, target) {
  let correct = false;

  if (isNaN(guessNumber)) {
    alert(
      "You have not entered a number. \n\nPlease enter a number in the 1 to 100 range."
    );
  } else if (guessNumber < 1 || guessNumber > 100) {
    alert("Please enter an integer in the 1 to 100 range.");
  } else if (guessNumber > target) {
    alert("Your number is too large!");
  } else if (guessNumber < target) {
    alert("Your number is too small!");
  } else {
    correct = true;
  }
  return correct;
}
