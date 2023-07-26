// Code from "What's Dev part two" which is credited in readME
// Variables for DOM elements
let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.querySelector(".result");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");


// Get computer random choice//
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

// Function message for winner, loser or draw and increment score to winner//
function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `${userChoice} beats ${computerChoice}. You win this round!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `${computerChoice} wins ${userChoice}. You lose this round!`;
}

function draw(userChoice, computerChoice) {
    resultDiv.innerHTML = `${userChoice} is the same as ${computerChoice}. You draw!`;
}

//compares all combinations of the game and what result is//
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
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