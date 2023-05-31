
function getPlayerSelection() {
    const randomChoice = Math.floor(Math.random() * 100) +1;
    if (randomChoice <= 33.33) {
        return "rock";
    } else if (randomChoice > 33.33 && randomChoice < 66.66) {
        return "paper";
    } else {
        return "scissors"
    }
}

console.log(`player: ${getPlayerSelection()}`);

function getComputerSelection() {
    const randomChoice = Math.floor(Math.random() * 100) +1;
    if (randomChoice <= 33.33) {
        return "rock";
    } else if (randomChoice > 33.33 && randomChoice < 66.66) {
        return "paper";
    } else {
        return "scissors"
    }
}

console.log(`computer: ${getComputerSelection()}`);
const player = getPlayerSelection();
const comp = getComputerSelection();

function gameRound(player, comp) {
    
    if (player === "rock"   && comp === "rock" || 
    player === "paper"      && comp === "paper" ||
    player === "scissors"   && comp === "scissors") {
        return `It's a draw!`;
    } else if ( player === "rock"       && comp === "paper" ||
    player === "paper"      && comp === "scissors" ||
    player === "scissors"   && comp === "rock") {
        return `You lose! ${comp} beats ${player}.`;
    } else {
        return `You win! ${player} beats ${comp}.`;
    }
}


console.log(`player: ${player}`);
console.log(`computer: ${comp}`);

console.log(gameRound(player, comp));



