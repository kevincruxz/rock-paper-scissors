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

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose your weapon (rock, paper, scissors)");
        playerSelection.toLowerCase();
        computerSelection = computerPlay();
        roundWinner = playRound(playerSelection, computerSelection);

        if (roundWinner === 0) {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            playerWinsCount++;
        } else if (roundWinner === 1) {
            console.log("Tie!");
            i--;
        } else if (roundWinner === 2) {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            computerWinsCount++;
        } else {
            console.log("Incorrect weapon.")
            i--;
        }

        if (playerWinsCount === 3) {
            console.log("You have Winned the match! :)")
            break;
        } else if (computerWinsCount === 3) {
            console.log("You have lost the match! :(")
            break;
        }
    }
}