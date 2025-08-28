
let userChoice;
let computerChoice;
const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")

addEventListenersToButtons();
function addEventListenersToButtons() {
    rockBtn.addEventListener("click", rockClick)
    paperBtn.addEventListener("click", paperClick)
    scissorsBtn.addEventListener("click", scissorsClick)


}

function rockClick() {
    //console.log("ROCK")
    userChoice = "rock"
    computerGuess()
}
function scissorsClick() {
    //console.log("SCISSORS")
    userChoice = "scissors"
    computerGuess()
}
function paperClick() {
    // console.log("PAPER")
    userChoice = "paper"
    computerGuess()
}



function computerGuess() {

    const choice_arr = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random() * 3)
    computerChoice = choice_arr[randomNum]
    console.log("randomNum", randomNum)
    console.log("computerChoice", computerChoice)
    // console.log(userChoice);
    // computerChoice = "paper"
    animationStart();


}

function animationStart() {

    player1.classList.remove("shake", "rock", "paper", "scissors");
    player2.classList.remove("shake", "rock", "paper", "scissors");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");

    void player1.offsetWidth;
    void player2.offsetWidth;

    player1.classList.add("shake");
    player2.classList.add("shake");

    player1.addEventListener("animationend", animationEnd, { once: true });


}
function animationEnd() {
    player1.classList.remove("shake");
    player1.classList.add(userChoice);

    player2.classList.remove("shake");
    player2.classList.add(computerChoice);


    showResult();
}

function showResult() {
    // document.querySelector("#draw").classList.add("hidden");
    //document.querySelector("#win").classList.add("hidden");
    //document.querySelector("#lose").classList.add("hidden");

    if ((userChoice === "rock" && computerChoice === "rock") ||
        (userChoice === "paper" && computerChoice === "paper") ||
        (userChoice === "scissors" && computerChoice === "scissors")) {
        document.querySelector("#draw").classList.remove("hidden");

    }
    else if ((userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")) {
        document.querySelector("#lose").classList.remove("hidden");

    }
    else if ((userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock")) {
        document.querySelector("#win").classList.remove("hidden");

    }


}
