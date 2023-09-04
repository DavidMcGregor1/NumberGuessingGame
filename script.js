const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessSubmit = document.getElementById("guessSubmit");
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const output = document.getElementById("output");

let attempts = 0;
