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

function game() {
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


}
