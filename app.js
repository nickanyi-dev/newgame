function getComputerChoice(computerChoice){
    if(computerChoice <0.34){
        computerChoice = "rock";
    } else if(computerChoice <= 0.67){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
}