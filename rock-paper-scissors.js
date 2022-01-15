function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      throw "Something went wrong in computerPlay(), you shouldn't ever see this!";
  }
}

function playRound(playerSelection, computerSelection) {
  // Make sure the player's selection is all lowercase so the comparisons work.
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();

  // If both player and computer make the same choice, it's a tie.
  if (playerSelection == computerSelection) {
    return "tie";
  }

  if (playerSelection == "Rock") {
    // If the player selects rock and computer selects paper, computer wins.
    // If player selects rock and computer selects scissors, player wins.
    switch (computerSelection) {
      case "Paper":
        return "lose"
      case "Scissors":
        return "win";
      default:
        throw "Something went wrong in playRound(), you shouldn't ever see this!";
    }
  } else if (playerSelection == "Paper") {
    // If the player selects paper and computer selects rock, player wins.
    // If player selects paper and computer selects scissors, computer wins.
    switch (computerSelection) {
      case "Rock":
        return "win";
      case "Scissors":
        return "lose";
      default:
        throw "Something went wrong in playRound(), you shouldn't ever see this!";
    }
  } else if (playerSelection == "Scissors") {
    // If the player selects scissors and computer selects rock, computer wins.
    // If player selects scissors and computer selects paper, player wins.
    switch (computerSelection) {
      case "Rock":
        return "lose";
      case "Paper":
        return "win";
      default:
        throw "Something went wrong in playRound(), you shouldn't ever see this!";
    }
  } else {
    return "invalid";
  }
}

/*function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please enter your selection:");
    let computerSelection = computerPlay();

    let result = playRound(playerSelection, computerSelection);

    if (result == "win") {
      alert(`You win this round! ${playerSelection} beats ${computerSelection}.`);
      playerScore++;
    } else if (result == "lose") {
      alert(`You lose this round. ${computerSelection} beats ${playerSelection}`);
      computerScore++;
    } else if (result == "tie") {
      alert(`It's a tie! You both played ${computerSelection}.`);
    } else {
      alert("Please enter a valid selection (rock, paper, or scissors).");
      i--;
    }
  }

  if (playerScore > computerScore) {
    alert(`You won! You beat the computer ${playerScore} to ${computerScore}.`);
  } else if (playerScore < computerScore) {
    alert(`You lose. The computer beat you ${computerScore} to ${playerScore}.`);
  } else {
    alert(`It's a tie! You both scored ${playerScore}`);
  }

}*/

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  resultsDiv.innerHTML = '';
  scoreDiv.innerHTML = '';
}

const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
const resultsDiv = document.querySelector('#results');
const scoreDiv = document.querySelector('#score');

buttons.forEach(button => button.addEventListener('click', event => {
  const playerSelection = event.target.id[0].toUpperCase() + event.target.id.substring(1).toLowerCase();;
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);

  switch (result) {
    case 'win':
      resultsDiv.innerHTML = `
        <h2>You win this round!</h2>
        <p>${playerSelection} beats ${computerSelection.toLowerCase()}.</p>
      `;
      playerScore++;
      break;
    case 'lose':
      resultsDiv.innerHTML = `
        <h2>You've lost this round!</h2>
        <p>${computerSelection} beats ${playerSelection.toLowerCase()}.</p>
      `;
      computerScore++
      break;
    case 'tie':
      resultsDiv.innerHTML = `
        <h2>It's a tie!</h2>
        <p>We both played ${playerSelection.toLowerCase()}.</p>
      `;
  }

  scoreDiv.innerHTML = `
    <h2>Current Scores</h2>
    <p>Player: ${playerScore}</p>
    <p>Computer: ${computerScore}</p>
  `;

  if (playerScore >= 5) {
    alert(`You've won the game!\nFinal score: ${playerScore} to ${computerScore}.`);
    resetGame();
  } else if (computerScore >= 5) {
    alert(`You've lost the game!\nFinal score: ${computerScore} to ${playerScore}.`);
    resetGame();
  }
}));
