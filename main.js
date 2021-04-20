// console.log('Hello World');

// let rCount = 0;
// let sCount = 0;
// let pCount = 0;

// function for computer to choose randomly between rock, paper or scissors
function computerPlay(){
    let currentHand;

    let tempNumber = Math.floor(Math.random()*3);
    // console.log(tempNumber);

    switch(tempNumber){
        case 0:
            currentHand = 'rock';
            // console.log('Rock');
            // rCount++;
            break;
        case 1:
            currentHand = 'scissors';
            // console.log('Scissors');
            // sCount++;
            break;
        case 2:
            currentHand = 'paper';
            // console.log('Paper');
            // pCount++
            break;
    }
    return currentHand;
}

let humanPlay = () => 
    prompt('Pick Rock, Paper or Scissors').toLowerCase();

let wrongHumanPlay = () => 
    prompt(`That's not a valid option. 
Pick Rock, Paper or Scissors`).toLowerCase();

//round function, determines who wins
function round(humanSelection, computerSelection = computerPlay()){
    if (humanSelection == null){
        humanSelection = humanPlay();
    }
    else if (humanSelection !== 'scissors' && humanSelection !== 'rock' && humanSelection !== 'paper'){
        humanSelection = wrongHumanPlay();
    }
    computerSelection = computerPlay();
    // console.log(computerSelection)
    let outcome;
    

    if (computerSelection == 'rock'){
        if (humanSelection == 'rock'){
            outcome = 'Tie';
        }
        else if (humanSelection == 'paper'){
            outcome = 'Human winner'
            hWins++;
        }
        else if (humanSelection == 'scissors'){
            outcome = 'Computer Winner'
            cWins++;
        }
    }
    else if (computerSelection == 'paper'){
        if (humanSelection == 'paper'){
            outcome = 'Tie';
        }
        else if (humanSelection == 'scissors'){
            outcome = 'Human winner'
            hWins++;
        }
        else if (humanSelection == 'rock'){
            outcome = 'Computer Winner'
            cWins++;
        }
    }
    else if (computerSelection == 'scissors'){
        if (humanSelection == 'scissors'){
            outcome = 'Tie';
        }
        else if (humanSelection == 'rock'){
            outcome = 'Human winner'
            hWins++;
        }
        else if (humanSelection == 'paper'){
            outcome = 'Computer Winner'
            cWins++;
        }
    }
    return `${outcome}!`;
}
let hWins = 0;
let cWins = 0;

//
//can be called with no values (default is 5 rounds with prompt for human hand)
//can be called with only one value
//can be called with both values regular or reversed order (r,hS) or (hS,r)
//examples
//  game(10)        -> plays for 10 rounds, human prompted each round
//  game('paper')   -> plays 5 rounds, paper hand for human each time                                 
//  game()          -> plays 5 rounds, human prompted each round
//  game(3,'paper') -> plays 3 rounds, paper hand for human each time
//  game('paper',3) -> same as above
function game(rounds, humanSelection){
    let temp;
    //checks to see if rounds is not a number, 
    //if true, sets humanSelection to whatever value inputted and defaults rounds to 5
    if (rounds == null && humanSelection == null){
        rounds = 5;
    }
    else if (isNaN(rounds)){
        if(!isNaN(humanSelection)){
            temp = rounds;
            rounds = humanSelection;
            humanSelection = temp;
        }
        else{
            humanSelection = rounds;
            rounds = 5;
        }
    }
    
    for (let i=0;i<rounds;i++){
        if(humanSelection == null){
            round();
        }else{round(humanSelection);}
        console.log(`Human wins: ${hWins}   Computer wins: ${cWins}`);
    }
    return (hWins==cWins) ? 'Ties game':
        (hWins>cWins) ? 'You win' : 'Computer wins';
            
}
//test function to see if computerPlay was setting values equally
function loopComputerPlay(){
    for (let i =0; i<1000; i++){
        computerPlay();
    }
    console.log(`Rock count: ${rCount}, Scissors count: ${sCount}, Paper count: ${pCount}`);
}