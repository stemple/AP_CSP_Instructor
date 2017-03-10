var rochambeau = {

    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2,

    choices: ["Rock", "Paper", "Scissors"],

    WIN: 1,
    LOSE: -1,
    TIE: 0,

    player:  {
        choice: null,
    },

    computer: {
        choice: null,
    },

    score: {
        wins: 0,
        losses: 0,
        ties: 0
    },

    storeChoices: function(choice) {
        this.player.choice = choice;
        console.log("My choice = " + this.player.choice);
        this.computer.choice = Math.floor(Math.random() * 3);
    },

    playGame: function () {
        ++this.gamesPlayed;
        // Here is the game ruleset algorithm
        if (this.player.choice == this.computer.choice) {
            // We have a tie!
            ++this.score.ties;
            return this.TIE;
        }
        else if (this.player.choice == this.ROCK && this.computer.choice == this.SCISSORS) {
            // Rock beats scissors - a win!
            ++this.score.wins;
            return this.WIN;
        }
        else if (this.player.choice == this.PAPER && this.computer.choice == this.ROCK) {
            // Paper beats rock - a win!
            ++this.score.wins;
            return this.WIN;
        }
        else if (this.player.choice == this.SCISSORS && this.computer.choice == this.PAPER) {
            // Scissors beats paper - a win!
            ++this.score.wins;
            return this.WIN;
        }
        else {
            // All other combinations are losses
            ++this.score.losses;
            return this.LOSE;
        }
    },

    displayScoreBoard: function(winsId, lossesId, tiesId) {
        document.getElementById(winsId).innerHTML = this.score.wins;
        document.getElementById(lossesId).innerHTML = this.score.losses;
        document.getElementById(tiesId).innerHTML = this.score.ties;
    },

    displayGameResult: function(resultId) {
        // Now play the game and store the result
        var result = this.playGame();
        console.log(result);
        // Create a message for the player
        var message = "Your choice was " + this.choices[this.player.choice] + " and the computer's choice was " + this.choices[this.computer.choice] + "<br/>";
        // Add to the base message if it was a win, loss, or tie
        if (result == this.WIN) {
            // Display that it was a win
            document.getElementById(resultId).innerHTML = message + "YOU WIN!";
            document.getElementById(resultId).className = "alert alert-success";
        }
        else if (result == this.LOSE) {
            // Display that it was a loss
            document.getElementById(resultId).innerHTML = message + "YOU LOOSE! ";
            document.getElementById(resultId).className = "alert alert-danger";
        }
        else {
            // Display that it was a tie
            document.getElementById(resultId).innerHTML = message + "A tie. ";
            document.getElementById(resultId).className = "alert alert-info";
        }
    }
};
