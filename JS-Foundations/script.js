function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[parseInt(Math.random() * 3)];
}


function playRound(playerChoice, computerSelection) {
    playerChoice = playerChoice.toLowerCase();
    switch (playerChoice) {
        case "scissors":
            if (computerSelection === "paper") {
                return `You Win! ${playerChoice} beats ${computerSelection}`;
            }
            else if (computerSelection === "rock") {
                return `You Lose! ${computerSelection} beats ${playerChoice}`
            }
            else {
                return "Tie!";
            }
            break;
        case "rock":
            if (computerSelection === "paper") {
                return `You Lose! ${computerSelection} beats ${playerChoice}`;
            }
            else if (computerSelection === "scissors") {
                return `You Win! ${playerChoice} beats ${computerSelection}`;
            }
            else {
                return "Tie!";
            }
            break;
        case "paper":
            if (computerSelection === "scissors") {
                return `You Lose! ${computerSelection} beats ${playerChoice}`;
            }
            else if (computerSelection === "rock") {
                return `You Win! ${playerChoice} beats ${computerSelection}`;
            }
            else {
                return "Tie!";
            }
            break;
        default:
            return "Not a valid choice in Rock, Paper , Scissors. Try again!";
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let user_choice = prompt("Choose your attack! Rock, Paper, or Scissors");
        let result = playRound(user_choice, getComputerChoice())
        console.log(result);
        playerScore += result.includes("Win");
        computerScore += result.includes("Lose");
    }

    if (playerScore > computerScore) {
        return `You Won! Player: ${playerScore}, Computer: ${computerScore}`;
    }
    else if (playerScore < computerScore) {
        return `You Lost! Player: ${playerScore}, Computer: ${computerScore}`;
    }
    else {
        return `It's a tie! Player: ${playerScore}, Computer: ${computerScore}`;
    }
}

console.log(playGame());