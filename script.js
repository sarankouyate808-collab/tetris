const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const randomNumberDisplay = document.getElementById("random-number");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const finalScoreDisplay = document.getElementById("final-score");

const keypad = document.getElementById("keypad");

let randomNumber = 1;
let score = 0;
let timeLeft = 60;

let numberInterval;
let timerInterval;

// Génération des boutons 1 à 10
for (let i = 1; i <= 10; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    btn.addEventListener("click", () => {
        if (i === randomNumber) {
            score++;
            scoreDisplay.textContent = score;
        }
    });

    keypad.appendChild(btn);
}

// Démarrer le jeu
startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    // Changement du nombre toutes les 500 ms
    numberInterval = setInterval(() => {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        randomNumberDisplay.textContent = randomNumber;
    }, 500);

    // Timer
    timerInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
});

// Fin du jeu
function endGame() {
    clearInterval(numberInterval);
    clearInterval(timerInterval);

    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");

    finalScoreDisplay.textContent = score;
}