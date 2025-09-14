function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}
let humanScore = 0;
let computerScore = 0;

function playGame() {
    const buttons = [];

    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            div.textContent = `Tie! Both chose ${humanChoice}\nScore - You: ${humanScore}, Computer: ${computerScore}`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            div.textContent = `You win this round! ${humanChoice} beats ${computerChoice}\nScore - You: ${humanScore}, Computer: ${computerScore}`;
        } else {
            computerScore++;
            div.textContent = `Computer wins this round! ${computerChoice} beats ${humanChoice}\nScore - You: ${humanScore}, Computer: ${computerScore}`;
        }

        //Check final score
        if (humanScore == 5 || computerScore == 5) {
            div.textContent += `\n\nFinal Score - You: ${humanScore}, Computer: ${computerScore}.`;
            if (humanScore > computerScore) {
                div.textContent += "\nYou are the overall winner!";
            } else if (humanScore < computerScore) {
                div.textContent += "\nComputer is the overall winner!";
            } else {
                div.textContent += "\nIt's an overall tie!";
            }
            humanScore = 0;
            computerScore = 0;
            div.textContent += "\nScores reset. Play again!";
        }
    };


    ["Rock", "Paper", "Scissors"].forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice;
        btn.classList.add('btn');
        document.body.appendChild(btn);
        buttons.push(btn);
    });

    // Create div AFTER buttons
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add("div");
    div.style.whiteSpace = "pre";

    // Add click events to buttons
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const humanChoice = btn.textContent;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice, div);
        });
    });
    
}

// Start the game
playGame();
