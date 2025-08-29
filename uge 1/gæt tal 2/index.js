let min = 1;
let max = 100;
let computerGuess;
let guesses = 0;

const guessBtn = document.querySelector("#guess");
const correctBtn = document.querySelector("#correct");
const toohighBtn = document.querySelector("#toohigh");
const toolowBtn = document.querySelector("#toolow");
const guesses_display = document.querySelector("#computer-guess");
const guessesCountDisplay = document.querySelector("#guesses");
//const makeGuess() = Math.floor((min + max) / 2);

guessBtn.addEventListener("click", () => {
    min = 1;
    max = 100;
    guesses = 0;
    makeGuess();

    correctBtn.disabled = false;
    toohighBtn.disabled = false;
    toolowBtn.disabled = false;

});

function makeGuess() {
    computerGuess = Math.floor((min + max) / 2);
    guesses_display.textContent = `Computers guess ${computerGuess}`;
    guessesCountDisplay.textContent = `antal gæt ${guesses}`;
}

correctBtn.addEventListener('click', () => {
    guesses_display.textContent = 'Correct';

    console.log("Correct")
    correctBtn.disabled = true;
    toohighBtn.disabled = true;
    toolowBtn.disabled = true;
});
toohighBtn.addEventListener('click', () => {
    max = computerGuess - 1;
    makeGuess();
    console.log("Too High")
});
toolowBtn.addEventListener('click', () => {
    min = computerGuess + 1;
    makeGuess();
    console.log("Too Low")
});


