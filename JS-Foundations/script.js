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

function playGame(user_choice) {

    let result = playRound(user_choice, getComputerChoice())

    playerScore += result.includes("Win");
    computerScore += result.includes("Lose");
    displayScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`

    resultP.appendChild(displayScore);
    rounds++;

    if (rounds >= 5) {
        rounds = 0;
        let returnStatement = ""
        if (playerScore > computerScore) {
            returnStatement = `You Won! Player: ${playerScore}, Computer: ${computerScore}`;
        }
        else if (playerScore < computerScore) {
            returnStatement = `You Lost! Player: ${playerScore}, Computer: ${computerScore}`;
        }
        else {
            returnStatement = `It's a tie! Player: ${playerScore}, Computer: ${computerScore}`;
        }
        playerScore = 0;
        computerScore = 0;
        return returnStatement;
    }

}



let userSelection = "";
let playerScore = 0;
let computerScore = 0;
const resultP = document.querySelector("#results");
const rockBtn = document.querySelector("#rock")
const displayScore = document.createElement("p")
const result = document.createElement('p');
let rounds = 0;

/*Lots of duplicate code for displaying the score and final result
* There has to be a more optimal approach...
* Will return later to reformat*/
rockBtn.addEventListener("click",() => {
    userSelection = "rock";
    result.textContent = playGame(userSelection);
    resultP.appendChild(result);
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", ()=> {
    userSelection = "paper";
    result.textContent = playGame(userSelection);
    resultP.appendChild(result);
})

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", ()=> {
    userSelection = "scissors";
    result.textContent = playGame(userSelection);
    resultP.appendChild(result);
})

