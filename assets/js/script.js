// Code from "What's Dev part two" which is credited in readME
// Variables for DOM elements 
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("#score-section");
const result_div = document.querySelector(".result");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");


// Get computer random choice//
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${userChoice} beats ${computerChoice}. You win this round!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${computerChoice} wins ${userChoice}. You lose this round!`;
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = `${userChoice} is the same as ${computerChoice}. You draw!`;
}

//gets combinations of the game and see which ones wines, looser or draws//
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "sscissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}


// Event listeners for when clicking the emoji buttons//
function main() {
    rockButton.addEventListener('click', function () {
        game("rock");
    });

    paperButton.addEventListener('click', function () {
        game("paper");
    });

    scissorsButton.addEventListener('click', function () {
        game("scissors");
    });
}

main(); 