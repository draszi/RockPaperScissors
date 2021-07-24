// function for computer to choose randomly between rock, paper or scissors
function computerPlay() {
  let hands = ["Rock", "Paper", "Scissors"];
  return hands[Math.floor(Math.random() * 3)];
}
// const computerSelection = computerPlay();
const winningHands = { Rock: "Scissors", Scissors: "Paper", Paper: "Rock" };

let roundScoreHuman = 0;
let roundScoreComputer = 0;

function round(humanSelection, computerSelection = computerPlay()) {
  console.log(`You picked ${humanSelection}`);
 
  let outcome;

  if (humanSelection == computerSelection) {
    outcome = "Tie";
  } else if (winningHands[humanSelection] == computerSelection) {
    outcome = "You win";
    roundScoreHuman++;
  } else {
    outcome = "You lose";
    roundScoreComputer++;
  }

  // return outcome;
  console.log(`${outcome} 
    Computer Wins: ${roundScoreComputer} Your Wins: ${roundScoreHuman}`);
}

const hands = document.querySelectorAll("#hands button");

hands.forEach((button) => {
  button.addEventListener("click", () => {
    round(button.id);
  });
});

function game(rounds) {
  roundScoreComputer = 0;
  roundScoreHuman = 0;

  for (let i = 0; i < rounds; i++) {
    round();
  }
}
