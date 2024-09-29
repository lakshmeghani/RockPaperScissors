let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissors");
let playerCount = document.querySelector(".playerCount");
let computerCount = document.querySelector(".computerCount");
let result = document.querySelector(".msg");
let reset = document.querySelector(".reset");

let playerScore = 0;
let computerScore = 0;

const computerChoice = () => {
    let choice = Math.random();
    if (choice >= 0 && choice < 0.33) {
        // console.log("rock");
        return "rock";
    }
    else if (choice >= 0.33 && choice < 0.66) {
        // console.log("paper");
        return "paper";
    }
    else {
        // console.log("scissor");
        return "scissors";
    }
}

rock.addEventListener("click", () => {
    let compCh = computerChoice();
    console.log(compCh);
    if ("rock" == compCh) {
        result.innerText = "Draw!";
        result.style.backgroundColor = "#E5104C";
    }
    else if (compCh == "paper") {
        result.innerText = "You Lose! Paper beats Rock!";
        result.style.backgroundColor = "red";
        computerScore++;
        computerCount.innerText = computerScore;
    }
    else {
        result.innerText = "You Win! Rock beats Scissor!";
        result.style.backgroundColor = "green";
        playerScore++;
        playerCount.innerText = playerScore;
    }
});

paper.addEventListener("click", () => {
    let compCh = computerChoice();
    console.log(compCh);
    if ("paper" == compCh) {
        result.innerText = "Draw!";
        result.style.backgroundColor = "#E5104C";
    }
    else if (compCh == "scissors") {
        result.innerText = "You Lose! Scissors beats Paper!";
        result.style.backgroundColor = "red";
        computerScore++;
        computerCount.innerText = computerScore;
    }
    else {
        result.innerText = "You Win! Paper beats Rock!";
        result.style.backgroundColor = "green";
        playerScore++;
        playerCount.innerText = playerScore;
    }
});

scissor.addEventListener("click", () => {
    let compCh = computerChoice();
    console.log(compCh);
    if ("scissors" == compCh) {
        result.innerText = "Draw!";
        result.style.backgroundColor = "#E5104C";
    }
    else if (compCh == "rock") {
        result.innerText = "You Lose! Rock beats Scissors!";
        result.style.backgroundColor = "red";
        computerScore++;
        computerCount.innerText = computerScore;
    }
    else {
        result.innerText = "You Win! Scissor beats Paper!";
        result.style.backgroundColor = "green";
        playerScore++;
        playerCount.innerText = playerScore;
    }
});

reset.addEventListener("click", () => {
    playerCount.innerText = "0";
    computerCount.innerText = "0";
    result.innerText = "Pick your move";
    result.style.backgroundColor = "black";
    playerScore = 0;
    computerScore = 0;
});