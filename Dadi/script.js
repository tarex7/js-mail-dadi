//Elementi UI

const CPUDice = document.getElementById("new-game");
const playerDice = document.getElementById("dice");
const CPUDiceImg = document.getElementById("cpu-dice");
const playerDiceImg = document.getElementById("player-dice");
const message = document.getElementById("message");

CPUDice.addEventListener("click", function () {
  //Cpu punteggio
  const CPUScore = Math.floor(Math.random() * 6 + 1);
  CPUDiceImg.src = `./img/dice-${CPUScore}.png`;

  //Reset messaggio
  message.innerHTML = "";
  //Abilita pulsante
  playerDice.disabled = false;
  //Mostra dado CPU
  CPUDiceImg.classList.remove("d-none");
  //Nasconde dado player
  playerDiceImg.classList.add("d-none");

  //Player
  playerDice.addEventListener("click", function () {
    //Punteggio player
    const playerScore = Math.floor(Math.random() * 6 + 1);
    //Immagine dado
    playerDiceImg.src = `./img/dice-${playerScore}.png`;
    //Mostra dado player
    playerDiceImg.classList.remove("d-none");

    //Logica gioco
    if (playerScore > CPUScore) {
      message.innerHTML =
        '<h1>HAI VINTO!!!</h1> <i class="fa-solid fa-trophy"></i></i>';
    } else if (playerScore < CPUScore) {
      message.innerHTML = "<h1>HAI PERSO!!!</h1>";
    } else {
      message.innerHTML = "<h1>PAREGGIO</h1>";
    }
    //Disabilita pulsante
    playerDice.disabled = true;
  });
});
