const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");
let displayResult = document.getElementById("results");
let count = document.getElementById("score");
let userScore = 0;
let cpuScore = 0;
let message = "";


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



function playRound(userChoice, cpuChoice){

    const choiceResult = document.createElement("p");
    displayResult.appendChild(choiceResult);
    choiceResult.textContent = `you chose ${userChoice} and cpu chose ${cpuChoice}`;



    if(userChoice == "rock" && cpuChoice == "scissors" || 
        userChoice == "paper" && cpuChoice == "rock" ||
        userChoice == "scissors" && cpuChoice == "paper"
    ){
        message = document.createElement("p")
        displayResult.appendChild(message);
        message.textContent ="You win!!";
        userScore++
    }
    else if(userChoice == cpuChoice){
       message = document.createElement("p")
        displayResult.appendChild(message);
         message.textContent = "Tie";
    }
    else {
       message = document.createElement("p")
        displayResult.appendChild(message);
        message.textContent = "You Lose";
        cpuScore++;
    }

    count.textContent = `Score: ${userScore} vs ${cpuScore}`;
}

rockChoice.addEventListener("click", () => {
    playRound("rock", getCpuChoice());
});

paperChoice.addEventListener("click", () => {
    playRound("paper", getCpuChoice());
});

scissorsChoice.addEventListener("click", () => {
    playRound("scissors", getCpuChoice());
});
