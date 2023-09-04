const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessSubmit = document.getElementById("guessSubmit");
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const output = document.getElementById("output");

let attempts = 0;

guessSubmit.addEventListener("click", checkGuess);
guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});
function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    message.style.color = "red";
    return;
  }
  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
    message.style.color = "green";
    guessInput.disabled = true;
    guessSubmit.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "Try higher.";
    message.style.color = "blue";
  } else {
    message.textContent = "Try lower.";
    message.style.color = "orange";
  }

  guessInput.value = "";
  guessInput.focus();
}
