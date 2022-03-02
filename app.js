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
    let userScore = document.querySelector('.user-score');
    let pcScore = document.querySelector('.pc-score');
    let userScoreInt = parseInt(userScore.textContent, 10);
    let pcScoreInt = parseInt(pcScore.textContent, 10);

    if (roundWinner === 0) {
        text.textContent = "Tie";

        result.src = "images/panas.jpg";
        result.style.cssText = "width: 14rem; heigth: 14rem; margin-top: 50px";
        resultContainer.appendChild(result);
    } else if (roundWinner === 1) {
        text.textContent = "You Win!";
        userScoreInt++;
        userScore.textContent = `${userScoreInt}`;

        result.src = "images/peepohappy.png";
        result.style.cssText = "width: 14rem; heigth: 14rem; margin-top: 50px";
        resultContainer.appendChild(result);
    } else if (roundWinner === 2) {
        text.textContent = "You Lose!";
        pcScoreInt++;
        pcScore.textContent = `${pcScoreInt}`;

        result.src = "images/lose.png";
        result.style.cssText = "width: 14rem; heigth: 14rem; margin-top: 50px";
        resultContainer.appendChild(result);
    }

    checkWinner(userScoreInt, pcScoreInt);
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

function checkWinner(userScore, pcScore) {
    if (userScore === 5 || pcScore === 5) {
        const body = document.querySelector('body');
        const announce = document.createElement('h1');
        const gif = document.createElement('img');
        const ref = document.createElement('a');
        const br = document.createElement('br');
        ref.classList.add('myButton');
        gif.style.margin = "30px";

        body.innerHTML = "";
        announce.style.cssText = "margin-top: 5rem";

        if (userScore === 5){
            gif.src = "https://c.tenor.com/tDpElw3fCiQAAAAC/ez-clap.gif";
            gif.alt = "EZ clap";
            gif.style.marginLeft = "7rem";
            gif.style.borderRadius = "30px"
            announce.textContent = "You have woned the match.";
        }
        else {
            gif.src = "https://c.tenor.com/RPcJQct20RwAAAAC/sadge-rain.gif";
            gif.alt = "sadge";
            gif.style.width = "20rem";
            announce.textContent = "Oh no, you have lost the match.";
            gif.style.borderRadius = "15px"
        }

        ref.href = "index.html";
        ref.textContent = "Play Again";

        body.appendChild(announce);
        body.appendChild(gif);
        body.appendChild(br);
        body.appendChild(ref);
    }
}