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


// Get computer random choice//
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

//gets combinations of the game and see which ones wines, looser or draws//
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "sscissorspaper":
            console.log("User Wins!");
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("User loses!");
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("It's a draw!");
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
