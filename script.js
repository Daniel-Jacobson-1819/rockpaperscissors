// get the computers choice of rock paper or scissor using math.random to find a random string from the array corresponding with the choice
const getComputerChoice = () => {
    const rpsArray = ['rock', 'paper', 'scissors'];

    const random = Math.floor(Math.random() * rpsArray.length)

    return rpsArray[random]

};

console.log(getComputerChoice());

const playRound = (playerSelection, computerSelection) => {
    let conclusion = 'nothing selected';
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        conclusion = 'You Win! Rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            conclusion = 'You Lose! Scissors beats Paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            conclusion = 'Tie!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        conclusion = 'You lose! Paper beats Rock'
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        conclusion = 'Tie!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        conclusion = 'You Win! Paper beats rock'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        conclusion = 'Tie!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        conclusion = 'You Lose! Rock beats scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        conclusion = 'You Win! scissors beats paper'
    }
    console.log(conclusion)
}

playRound();