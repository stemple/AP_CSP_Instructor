function Player() {
    this.choices = null;
}

var rochambeau = {

    choices: {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2
    },

    score: {
        wins: 0,
        losses: 0,
        ties: 0
    },

    results: {
        WIN: 1,
        TIE: 0,
        LOSS: -1
    },

    player:  new Player(),

    computer: new Player(),

    /**
     * Stores the player's choice, then call's the function for storing the computer's choice
     * @param {number} choice = ROCK, PAPER, SCISSORS
     */
    storePlayerChoice: function(choice) {
        this.player.choice = choice;
        console.log("My choice = " + this.player.choice);
        this.storeComputerChoice();
    },

    /**
     * Stores the computer's randomly generated choice
     */
    storeComputerChoice: function() {
        this.computer.choice = Math.floor(Math.random() * 3);
    },

    /**
    * Game rules are executed with game result
    * @returns {number} The result - WIN, TIE, LOSS
    */
    playGame: function () {
        // Here is the game ruleset algorithm
        if (this.player.choice == this.computer.choice) {
            // We have a tie!
            ++this.score.ties;
            return this.results.TIE;
        }
        else if (this.player.choice == this.choices.ROCK && this.computer.choice == this.choices.SCISSORS) {
            // Rock beats scissors - a win!
            ++this.score.wins;
            return this.results.WIN;
        }
        else if (this.player.choice == this.choices.PAPER && this.computer.choice == this.choices.ROCK) {
            // Paper beats rock - a win!
            ++this.score.wins;
            return this.results.WIN;
        }
        else if (this.player.choice == this.choices.SCISSORS && this.computer.choice == this.choices.PAPER) {
            // Scissors beats paper - a win!
            ++this.score.wins;
            return this.results.WIN;
        }
        else {
            // All other combinations are losses
            ++this.score.losses;
            return this.results.LOSS;
        }
    },

    /**
    * Displays the number of wins, losses, ties
    * @param {number} winsId   id of element to contain # of wins
    * @param {string} lossesId id of element to contain # of losses
    * @param {string} tiesId   id of element to contain # of ties
    */
    displayScoreBoard: function(winsId, lossesId, tiesId) {
        document.getElementById(winsId).innerHTML = this.score.wins;
        document.getElementById(lossesId).innerHTML = this.score.losses;
        document.getElementById(tiesId).innerHTML = this.score.ties;
    },

    /**
    * Displays the result of the game
    * @param {string} resultId The element id where the result will be written
    */
    displayGameResult: function(resultId) {
        // Now play the game and store the result
        var result = this.playGame();
        console.log(result);
        choiceLabels = ["Rock", "Paper", "Scissors"];
        // Create a message for the player
        var message = "Your choice was " + choiceLabels[this.player.choice] + " and the computer's choice was " +
            choiceLabels[this.computer.choice] + "<br/>";
        // Add to the base message if it was a win, loss, or tie
        if (result == this.results.WIN) {
            // Display that it was a win
            document.getElementById(resultId).innerHTML = message + "YOU WIN!";
            document.getElementById(resultId).className = "alert alert-success";
        }
        else if (result == this.results.LOSS) {
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
