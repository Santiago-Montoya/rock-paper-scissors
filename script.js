let playerScore = 0;
let computerScore = 0;
const computer = computerSelection();


function computerSelection() {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0: 
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors"
        default:
            break;
    }
}

// function playerSelection() {
//     const randomChoice = Math.floor(Math.random() * 3);
//     switch (randomChoice) {
//         case 0: 
//             return "rock";
//             break;
//         case 1:
//             return "paper";
//             break;
//         case 2:
//             return "scissors"
//         default:
//             break;
//     }
// }




function gameRound(player, computer) {
    
    if (computer === player) {
        console.log(`DRAW! Computer ${computer} - Player: ${player}`);
    } else if ( computer === "rock"     && player === "scissors"    ||
                computer === "paper"    && player === "rock"        ||
                computer === "scissors" && player === "paper") {
        console.log(`COMPUTER WINS! Computer: ${computer} - Player: ${player}`);
        computerScore++;
        
    } else if ( computer === "rock"     && player === "paper"       ||
                computer === "paper"    && player === "scissors"    ||
                computer === "scissors" && player === "rock") {
        console.log(`YOU WIN! Player: ${player} - Computer: ${computer}`);
        playerScore++;
    } else {
        return "Invalid Input."
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const player = window.prompt("Type: Rock, Paper, or Scissors");
        const computer = computerSelection();
        gameRound(player.toLowerCase(), computer);
    }
    
    if (playerScore === computerScore) {
        console.log("THE GAME IS A DRAW");
    } else if (playerScore > computerScore) {
        console.log("YOU WIN THE GAME");
    } else {
        console.log("THE COMPUTER WINS THE GAME");
    }
}

game();
console.log(`My score: ${playerScore}`);
console.log(`Computer score: ${computerScore}`);



