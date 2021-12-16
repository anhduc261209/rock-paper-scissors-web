function setName(){
    let inputName = document.getElementById("inputName");
    let playerName = document.getElementById("playerName");
    let colon = document.getElementById("colon");
    if (inputName.value == "") {
        inputName.style = "border-color: red;";
        inputName.placeholder = "Don't type nothing!";
    } else {
        inputName.placeholder = "Enter your name";
        playerName.innerHTML = inputName.value;
        colon.innerHTML = ": ";
        //document.getElementById("main").style.display = "block";
    }
}

function generateComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice == 1) {
        computerChoice = "rock";
    } else if (computerChoice == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function select(choice) {
    let playerChoice;
    if (choice == 1) {
        playerChoice = "rock";
    } else if (choice == 2) {
        playerChoice = "paper";
    } else {
        playerChoice = "scissors";
    }
    let computerChoice = generateComputerChoice();
    console.log(playerChoice, computerChoice)
    checkwhowon(playerChoice, computerChoice);
}

function checkwhowon(player, computer) {
    let playerScore = Number(document.getElementById("playerScore").innerHTML);
    let computerScore = Number(document.getElementById("computerScore").innerHTML);
    let result = document.getElementById("result");
    if (player == "rock" && computer == "paper") {
        computerScore++;
        result.innerHTML = "Computer chooses paper. Computer win!";
    } else if (player == "rock" && computer == "scissors") {
        playerScore++;
        result.innerHTML = "Computer chooses scissors. You win!";
    } else if (player == "paper" && computer == "rock") {
        playerScore++;
        result.innerHTML = "Computer chooses rock. You win!";
    } else if (player == "paper" && computer == "scissors") {
        computerScore++;
        result.innerHTML = "Computer chooses scissors. Computer win!";
    } else if (player == "scissors" && computer == "rock") {
        computerScore++;
        result.innerHTML = "Computer chooses rock. Computer win!";
    } else if (player == "rock" && computer == "rock") {
        result.innerHTML = "Computer chooses rock. Draw!";
    } else if (player == "paper" && computer == "paper") {
        result.innerHTML = "Computer chooses paper. Draw!";
    } else if (player == "scissors" && computer == "scissors") {
        result.innerHTML = "Computer chooses scissors. Draw!";
    }
    document.getElementById("playerScore").innerText = String(playerScore);
    document.getElementById("computerScore").innerText = String(computerScore);
}