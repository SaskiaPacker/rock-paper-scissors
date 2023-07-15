// Code from "What's Dev part two" which is credited in readME
// Variables for DOM elements 
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("#score-section");
const result_div = document.querySelector("#result-for-button-click");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function game(userChoice) {

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
