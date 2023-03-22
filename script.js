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
    console.log(compChoice);
}

getComputerChoice();
