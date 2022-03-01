game();

function computerPlay() {
    let randomPick = Math.floor(Math.random() * 3) + 1;
    if (randomPick === 1) {
        return "rock";
    } else if (randomPick === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "rock")
            return 1;
        if (computerSelection === "paper")
            return 2;
        if (computerSelection === "scissors")
            return 0;

    } else if (playerSelection === "paper") {

        if (computerSelection === "rock")
            return 0;
        if (computerSelection === "paper")
            return 1;
        if (computerSelection === "scissors")
            return 2;

    } else if (playerSelection === "scissors") {

        if (computerSelection === "rock")
            return 2;
        if (computerSelection === "paper")
            return 0;
        if (computerSelection === "scissors")
            return 1;

    }

    else {
        return -1;
    }
}

function game() {
    let playerWinsCount = 0;
    let computerWinsCount = 0;
    let playerSelection, computerSelection;

    
}