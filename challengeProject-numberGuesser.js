
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if ((humanGuess - targetNumber) < (computerGuess - targetNumber)) {
    return true;
  } else if ((humanGuess - targetNumber) === (computerGuess - targetNumber)) {
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}

generateTarget()