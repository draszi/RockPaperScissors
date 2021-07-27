// function for computer to choose randomly between rock, paper or scissors
function computerPlay() {
  let hands = ["Rock", "Paper", "Scissors"];
  return hands[Math.floor(Math.random() * 3)];
}
// const computerSelection = computerPlay();
const winningHands = { Rock: "Scissors", Scissors: "Paper", Paper: "Rock" };

let roundCount = 0;
let roundScoreHuman = 0;
let roundScoreComputer = 0;

const winner = document.querySelectorAll("#scores div");
const roundScore = document.querySelectorAll("#scores div span");
const numberOfRounds = document.querySelector("#numberOfRounds");
const hands = document.querySelectorAll("#hands button");

const startGame = document.querySelector("#start-game");
const reset = document.querySelector("#reset");
const quit = document.querySelector("#quit");
const toggleHide = document.querySelector(".hide");


const div = document.createElement('div');
// console.log(numberOfRounds);

function round(humanSelection, computerSelection = computerPlay()) {

  if (humanSelection == computerSelection) {
    outcome = "Tie";
    // roundScoreHuman++;
    // roundScoreComputer++;
  } else if (winningHands[humanSelection] == computerSelection) {
    outcome = "You win";
    roundScoreHuman++;
  } else {
    outcome = "You lose";
    roundScoreComputer++;
  }

  // return outcome;
  // console.log(`${outcome} 
  //   Computer Wins: ${roundScoreComputer} Your Wins: ${roundScoreHuman}`);

  //print updated score to span
  roundScore.forEach((span) => {
    if (span.id == "computerScore") {
      span.textContent = `${roundScoreComputer}`;
    } else span.textContent = `${roundScoreHuman}`;
  });
}

startGame.addEventListener("click", () => {
  toggleHide.classList.toggle('hide')
  startGame.classList.toggle('hide');
  game();
});

reset.addEventListener("click", () => {
  resetGame();
});

function resetGame(){
  roundScore.forEach((span) => {
    span.textContent = '';
  })
  roundScoreComputer=0;
  roundScoreHuman=0;
  return;
}
quit.addEventListener("click", () => {
  resetGame();
  toggleHide.classList.toggle('hide')
  startGame.classList.toggle('hide');

})

function game(rounds) {
  // roundScoreComputer = 0;
  // roundScoreHuman = 0;
  toggleHide.appendChild(div);
  div.textContent = 'Welcome contestants!'

  hands.forEach((button) => {
    button.addEventListener("click", () => {
      round(button.id);

      for(let i=0;i<=1;i++){
        if(roundScore[i].textContent == 5){
          console.log(winner[i].id+' wins.');
          div.textContent = winner[i].id+' wins.';
          
          // roundCount=0;
          roundScoreComputer=0;
          roundScoreHuman=0;
        }
      }
    });
  });
}