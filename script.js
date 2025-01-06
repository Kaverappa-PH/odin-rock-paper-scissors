
let choices = ["Rock", "Paper", "Scissor"];
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

function playRound(choice) {
    selectChoice(choice);

    roundResult();

    if (humanScore === 5 || computerScore === 5)
        checkGameComplete();

}

function selectChoice(choice) {
    getHumanChoice(choice);
    getComputerChoice();
}

function getHumanChoice(choice) {
    humanChoice = choices[choice];
}

function getComputerChoice() {
    let index = Math.floor(Math.random() * choices.length)
    computerChoice = choices[index];
}

function roundResult() {
    //check if game is tie
    if (humanChoice === computerChoice) {
        document.getElementsByClassName("choice")[0].innerHTML = `It's a tie! You both chose ${humanChoice}`;
        return
    }

    //condition for win
    let rockBeatsScissor = humanChoice === choices[0] && computerChoice === choices[2];
    let paperBeatsRock = humanChoice === choices[1] && computerChoice === choices[0];
    let scissorBeatsPaper = humanChoice === choices[3] && computerChoice === choices[1];

    if (rockBeatsScissor || paperBeatsRock || scissorBeatsPaper) {
        humanScore++;
        document.getElementsByClassName("human")[0].innerHTML = "Your Score: " + humanScore;
        document.getElementsByClassName("choice")[0].innerHTML = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        document.getElementsByClassName("computer")[0].innerHTML = "Computers Score: " + computerScore;
        document.getElementsByClassName("choice")[0].innerHTML = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function checkGameComplete() {
    if (humanScore === 5)
        document.getElementsByClassName("game-result")[0].innerHTML = "You Win!";
    else
        document.getElementsByClassName("game-result")[0].innerHTML = "You Lose!";

    //disable choice button on game complete
    let buttons = document.getElementsByClassName("choice-button");
    for (i = 0; i < buttons.length; i++)
        buttons[i].disabled = true;

    //change display from none to make button visible 
    document.querySelector('.reload').style.display = 'flex';
}

function reloadPage() {
    window.location.reload();
}