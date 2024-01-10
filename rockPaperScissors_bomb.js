console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Please choose either rock, paper, or scissors.');
  }
}

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return 'rock';
  } else if (number === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game was a tie...';
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'Computer wins!';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'Computer wins!';
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'Computer wins!';
  } else if (userChoice === 'bomb') {
    return 'Player cheated... Player wins!';
  } else {
    return 'Player wins!';
  }
};

function playGame() {
  const userChoice = getUserChoice('BOMB');
  console.log(userChoice);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
