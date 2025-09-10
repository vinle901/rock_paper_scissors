function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function getHumanChoice() {
    const choice = prompt('Enter rock, paper, or scissors:').toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(choice)) {
        return choice;
    }
    return getHumanChoice(); 
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    humanScore = 0;
    computerScore = 0;

    // Arrow function assigned to a variable
    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        }
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            return "You win!";
        } else {
            computerScore++;
            return "Computer wins!";
        }
    };

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice); 
        console.log(`Round ${i + 1}: ${result}`);
    }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}

// Start the game
playGame();
