// Enforces stricter JavaScript syntax for potential error detection
"use strict";

// Generate a random secret number between 1 and 20 (inclusive)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initialize score and highscore variables
let score = 20;
let highscore = 0;

// Attach an event listener to the "Check!" button
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  // Handle invalid input (empty or non-numeric)
  if (!guessNumber) {
    document.querySelector(".message").textContent =
      "You did not insert any number between 1 - 20 ";
    return; // Exit function early on invalid input
  }

  // Reduce score for incorrect guess (except on correct guess)
  if (guessNumber !== secretNumber) {
    score--;
  }

  // Update score display
  document.querySelector(".score").textContent = score;

  // Check for correct guess and game over
  if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent =
      "Congrats you have got the right number ✨";
    // the color gets updated
    document.querySelector("body").style.backgroundColor = "#60b347";
    //reveals the correct answer that was hidden
    document.querySelector(".number").textContent = secretNumber;

    // Update highscore if necessary
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (score === 0) {
    document.querySelector(".message").textContent =
      "You Lost the game  , you can play again ";
    //background changes when player fails
    document.querySelector("body").style.backgroundColor = "#FA8072";
    document.querySelector(".check").disabled = true; // Disable button on game over
  } else {
    // Provide basic feedback (too high or too low)
    document.querySelector(".message").textContent =
      guessNumber > secretNumber ? "Too High " : "Too Low ";
  }
});

// Attach an event listener to the "Again!" button
document.querySelector(".again").addEventListener("click", function () {
  // Reset the game
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  // Enable the check button again
  document.querySelector(".check").disabled = false;
});
