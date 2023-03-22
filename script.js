const getComputerChoice = () => {
    const rpsArray = ['rock', 'paper', 'scissors'];

    const random = Math.floor(Math.random() * rpsArray.length)

    return rpsArray[random]

};

console.log(getComputerChoice());