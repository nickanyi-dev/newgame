const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  console.log(choice)
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if( (playerSelection == "rock" && computerSelection == "scissors") || 
  (playerSelection == "scissors" && computerSelection == "paper") || 
  (playerSelection == "paper" && computerSelection == "rock")
  ){
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie!"
    } else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else{
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validInput = false;
    while(validInput == false){
        const choice = prompt("Rock paper or scissors?");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    console.log('Welcome')
    for(let i = 0; i < 5; i++){
        console.log(i);
        const playerSelection = prompt("Pick one");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();