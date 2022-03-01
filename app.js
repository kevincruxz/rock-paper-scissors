initializer();
const container = document.querySelector('.pc-election');
let img = document.createElement('img');

const playerContainer = document.querySelector('.election');
let selectionedWeapon = document.createElement('img');

const resultContainer = document.querySelector('.result');
let result = document.createElement('img');

function initializer() {

    const selec = document.querySelectorAll('img');
    selec.forEach((option) => {
        option.addEventListener("click", function(e) {
            let election = this.getAttribute('alt');
            valuesBus(election);
        });
    });
}

function valuesBus(name) {
    let playerSelection = name;
    let computerSelection = computerPlay();
    playerSelection.toLowerCase;
    playRound(playerSelection, computerSelection);
}

function computerPlay() {
    let randomPick = Math.floor(Math.random() * 3) + 1;

    if (randomPick === 1) {
        img.src = "images/sword.png";
        img.style.cssText = "width: 7rem; padding: 8px;";
        container.appendChild(img);

        return "sword";
    } else if (randomPick === 2) {
        img.src = "images/shield.png";
        img.style.cssText = "width: 7rem; padding: 8px;";
        container.appendChild(img);

        return "shield";
    } else {
        img.src = "images/crossbow.png";
        img.style.cssText = "width: 7rem; padding: 8px;";
        container.appendChild(img);

        return "crossbow";
    }
}

function playRound(playerSelection, computerSelection) {
    let roundWinner;

    if (playerSelection === "sword") {
        selectionedWeapon.src = "images/sword.png";
        selectionedWeapon.style.cssText = "width: 7rem; padding: 8px;";
        playerContainer.appendChild(selectionedWeapon);

        selectionLightning();

        if (computerSelection === "sword")
            roundWinner = 0;
        else if (computerSelection === "shield")
            roundWinner = 2;
        else if (computerSelection === "crossbow")
            roundWinner = 1;

    } else if (playerSelection === "shield") {
        selectionedWeapon.src = "images/shield.png";
        selectionedWeapon.style.cssText = "width: 7rem; padding: 8px;";
        playerContainer.appendChild(selectionedWeapon);

        selectionLightning();

        if (computerSelection === "sword")
            roundWinner = 1;
        else if (computerSelection === "shield")
            roundWinner = 0;
        else if (computerSelection === "crossbow")
            roundWinner = 2;

    } else if (playerSelection === "crossbow") {
        selectionedWeapon.src = "images/crossbow.png";
        selectionedWeapon.style.cssText = "width: 7rem; padding: 8px;";
        playerContainer.appendChild(selectionedWeapon);

        selectionLightning();

        if (computerSelection === "sword")
            roundWinner = 2;
        else if (computerSelection === "shield")
            roundWinner = 1;
        else if (computerSelection === "crossbow")
            roundWinner = 0;
    }

    else {
        return -1;
    }

    displayWinner(roundWinner);
}

function displayWinner(roundWinner) {
    let text = document.querySelector(".game-text");

    if (roundWinner === 0) {
        text.textContent = "Tie";

        result.src = "images/panas.jpg";
        result.style.cssText = "width: 14rem; heigth: 14rem; margin-top: 50px";
        resultContainer.appendChild(result);
    } else if (roundWinner === 1) {
        text.textContent = "You Win!";

        result.src = "images/peepohappy.png";
        result.style.cssText = "width: 14rem; heigth: 14rem; margin-top: 50px";
        resultContainer.appendChild(result);
    } else if (roundWinner === 2) {
        text.textContent = "You Lose!";

        result.src = "images/lose.png";
        result.style.cssText = "width: 14rem; heigth: 14rem; margin-top: 50px";
        resultContainer.appendChild(result);
    }
}

function selectionLightning () {
    container.classList.add('toAddquire');
    playerContainer.classList.add('toAddquire');

    container.addEventListener('transitionend', lightningStop);
    playerContainer.addEventListener('transitionend', lightningStop);
}

function lightningStop() {
    container.classList.remove('toAddquire');
    playerContainer.classList.remove('toAddquire')
}