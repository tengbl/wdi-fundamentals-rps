////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {

    if (playerMove === computerMove) {
        return 'tie';
    }
    else if (playerMove === "rock") {
        if (computerMove === "paper") {
            return 'computer';
        }
        else if (computerMove === "scissors") {
            return 'player';
        }
    }
    else if (playerMove === "paper") {
        if (computerMove === "scissors") {
            return 'computer';
        }
        else if (computerMove === "rock") {
            return 'player';
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            return 'computer';
        }
        else if (computerMove === "paper") {
            return 'player';
        }
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();

        var winner = getWinner(playerMove, computerMove)
            if(playerMove === computerMove) {
                console.log("there is a tie");
            }
            else {
                console.log(winner + " won in this round");
        }
        if (winner === "player") {
            playerWins++;
        } else if (winner === "computer") {
            computerWins++;
        }
    
        if(computerWins === 5) {
            console.log(winner + " won with " + computerWins + " to" + playerWins);
        }       
        else if(playerWins === 5){
            console.log(winner + " won with " + playerWins + " to " + computerWins);
        }       
    }
    
    return [playerWins, computerWins];

}

playToFive(); 