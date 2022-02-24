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
            return "Tie!.";
        if (computerSelection === "paper")
            return "You Lose! Paper beats Rock.";
        if (computerSelection === "scissors")
            return "You Win! Rock beats Scissors";

    } else if (playerSelection === "paper") {

        if (computerSelection === "rock")
            return "You Win! Paper beats Rock";
        if (computerSelection === "paper")
            return "Tie!.";
        if (computerSelection === "scissors")
            return "You Lose! Scissors cuts Paper.";

    } else if (playerSelection === "scissors") {

        if (computerSelection === "rock")
            return "You Lose! Rock breaks Scissors";
        if (computerSelection === "paper")
            return "You Win! Scissors cuts Paper.";
        if (computerSelection === "scissors")
            return "Tie!.";

    }
}

console.log(playRound("rock", computerPlay()))