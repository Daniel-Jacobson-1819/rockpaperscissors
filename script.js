// find a random number and assign a string based on the number (rock, paper, scissors)

const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    let compChoice = '';

    if (randomNum === 0){
        compChoice = 'rock'
    } else if (randomNum === 1) {
        compChoice = 'paper'
    } else if (randomNum === 2) {
        compChoice = 'scissors'
    }
    return compChoice
    
}
getComputerChoice();

// play the round and input a conclusion message based on outcome

const playRound = (playerChoice, computerChoice) => {
    let conclusion
    
    if (playerChoice === 'rock' &&  computerChoice === 'rock') {
        conclusion = 'It is a Tie!'
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        conclusion = 'You Lose! Paper beats Rock'
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        conclusion = 'You Win! Rock beats Scissors'
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        conclusion = 'You Win! Paper beats Rock'
    } else if (playerChoice === 'paper' && computerChoice === 'paper') {
        conclusion = 'It is a Tie!'
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        conclusion = 'You Lose! Scissors beats Paper'
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        conclusion = 'You Lose! Rock beats scissors'
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        conclusion = 'You Win! Scissors beats paper'
    } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
        conclusion = 'It is a Tie!'
    } 

    return conclusion 
}

let playerChoice = window.prompt('a');
const computerChoice = getComputerChoice();

console.log(playerChoice)

console.log(playRound(playerChoice, computerChoice))


//function to run the game

const game = () => {

    for(i = 0; i < 5; i++) {
        playRound(playerChoice, computerChoice)
    } 
}

game();