function getCpuChoice(){
    
    let cpuChoice = Math.floor(Math.random() * 3) + 1;

    if(cpuChoice == 1){
        cpuChoice = "Rock";
    }
    else if(cpuChoice == 2){
        cpuChoice = "Paper";
    }
    else{
        cpuChoice = "Scissors"
    }


    return cpuChoice.toLowerCase();     
    
}

function getUserChoice(){
    
    let getUserChoice = prompt("Please enter Rock, Paper, or Scissors: ");

    return getUserChoice.toLowerCase();
}

function playRound(userChoice, cpuChoice){

    console.log(`you chose ${userChoice} and cpu chose ${cpuChoice}`);

    if(userChoice == "rock" && cpuChoice == "scissors" || 
        userChoice == "paper" && cpuChoice == "rock" ||
        userChoice == "scissors" && cpuChoice == "paper"
    ){
        console.log("You win!!");
        userScore++
    }
    else if(userChoice == cpuChoice){
        return console.log("Tie")
    }
    else {
        console.log("You Lose!!");
        cpuScore++;
    }
}

function playGame(){
    
    console.log("Lets start the game");

    console.log("We will play up to 5");
    console.log(`score is ${userScore} vs ${cpuScore}`);


    let userChoice = getUserChoice();
    let cpuChoice =getCpuChoice();

    playRound(userChoice, cpuChoice);

    if(cpuScore == 5){
        console.log("You Lost the Match")
    }
    else if(userScore == 5){
         console.log("You Win the Match")
    }
    else{
        playGame();
    }

}



let userScore = 0;
let cpuScore = 0;

playGame();