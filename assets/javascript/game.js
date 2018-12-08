// 1. Make variables for each crystal and assign them a random value that last for the length of the "round".
// 2. Generate a random number the user has to guess.
// 3. Display the value of the crystal that the user had clicked on.
// 4. Add the values of the crystals to the total of user guess.
// 5. If the userValue is equal to the random number, add a point to wins and reset the game.
// 6. If the userValue is greater than the random number, track a loss and reset the game.

// Variables needed: yellowCrystal, redCrystal, blueCrystal, greenCrystal, randomNumber, userGuess, totalWin, totalLoss,
// isEqualToo
// Functions needed: generateCrystalNumber(1-12), generateRandomNumber (19-120), add crystal values to each other
var images = ["./assets/images/blue.png", "./assets/images/green.jpg", "./assets/images/yellow.png", "./assets/images/red.png"]
var totalWins = 0;
var totalLoss = 0;


function refreshCrystals () {
    for ( var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "100");
        $(".image-container").append(crystal);
    }
}

function refreshNumbers () {
    var goalNumber = Math.floor((Math.random() * 101) + 19);
    $(".randomNumber-text").text(goalNumber);
    $("#wins-text").text("Wins: " + totalWins)
    $("#loss-text").text("Losses: " + totalLoss);
}

refreshCrystals();
refreshNumbers();

