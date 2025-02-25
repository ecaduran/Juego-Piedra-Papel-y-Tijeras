let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["piedra", "papel", "tijeras"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Empate!";
  }

  if (
    (playerChoice === "piedra" && computerChoice === "tijeras") ||
    (playerChoice === "papel" && computerChoice === "piedra") ||
    (playerChoice === "tijeras" && computerChoice === "papel")
  ) {
    playerScore++;
    return "¡Ganaste!";
  } else {
    computerScore++;
    return "¡Perdiste!";
  }
}

function updateUI(result, playerChoice, computerChoice) {
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");

  resultElement.textContent = `Elegiste ${playerChoice}, la computadora eligió ${computerChoice}. ${result}`;
  scoreElement.textContent = `Puntuación: Jugador ${playerScore} - Computadora ${computerScore}`;
}

document.getElementById("rock").addEventListener("click", () => playGame("piedra"));
document.getElementById("paper").addEventListener("click", () => playGame("papel"));
document.getElementById("scissors").addEventListener("click", () => playGame("tijeras"));

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  updateUI(result, playerChoice, computerChoice);
}

function updateUI(result, playerChoice, computerChoice) {
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");

  resultElement.textContent = `Elegiste ${playerChoice}, la computadora eligió ${computerChoice}. ${result}`;
  scoreElement.textContent = `Puntuación: Jugador ${playerScore} - Computadora ${computerScore}`;

  resultElement.classList.remove("show");
  void resultElement.offsetWidth; // Reinicia la animación
  resultElement.classList.add("show");
}

function highlightChoices(playerChoice, computerChoice) {
  const choices = ["piedra", "papel", "tijeras"];
  choices.forEach((choice) => {
    const button = document.getElementById(choice);
    button.classList.remove("choice-highlight");
  });

  document.getElementById(playerChoice).classList.add("choice-highlight");
  document.getElementById(computerChoice).classList.add("choice-highlight");
}

document.getElementById("reset").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("result").textContent = "";
  document.getElementById("score").textContent = "Puntuación: Jugador 0 - Computadora 0";
});

