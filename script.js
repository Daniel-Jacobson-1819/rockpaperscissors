// get the computers choice of rock paper or scissor using math.random to find a random string from the array corresponding with the choice
const getComputerChoice = () => {
    const rpsArray = ['rock', 'paper', 'scissors'];

    const random = Math.floor(Math.random() * rpsArray.length)

    return rpsArray[random]

};

console.log(getComputerChoice());