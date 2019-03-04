//starts program as soon as page loads
$(document).ready(function() {

    //sets initial values, including pseudo-randomly generated target score
    let random = Math.floor(19 + Math.random()*102);
    let userTotal= 0;
    let wins = 0;
    let losses = 0;
    
    //displays the above info as text
    $("#number-goal").text("Goal: " + random);
    $("#score").text("Current Score: " + userTotal);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    //contains the crystals' respective amounts of points
    let crystalValues = {};

    //pseudo-randomly generates new crystal values
    function crystalReset() {
        crystalValues[1] = Math.floor(1 + Math.random()*12);
        crystalValues[2] = Math.floor(1 + Math.random()*12);
        crystalValues[3] = Math.floor(1 + Math.random()*12);
        crystalValues[4] = Math.floor(1 + Math.random()*12);
    }
    
    //resets everything but wins and losses at the start of each new round
    function roundReset() {
        random = Math.floor(Math.random()*102+19);
        $("#number-goal").text("Goal: " + random);
        userTotal = 0;
        $("#score").text("Current Score: " + userTotal);
        crystalReset();
    }

    //contains sound effects for wins and losses, respectively
    let themes = [new Audio("assets/audio/MAGICAL SHIMMER FREE SOUND EFFECT.mp3"), new Audio("assets/audio/Glass Breaking Sound Effect.mp3")];
    
    //gives rewards for winning and starts new round
    function winner() {
        themes[0].play();
        alert("You Win! (Final Score: " + userTotal + ")");
        wins++;
        $("#wins").text("Wins: " + wins);
        roundReset();
    }
    
    //gives penalties for losing and stars new round
    function loser() {
        themes[1].play();
        alert("You Lose! (Final Score: " + userTotal + ")");
        losses++;
        $("#losses").text("Losses: " + losses);
        roundReset();
    }
    
    //adds crystal values to score and defines win and loss conditions
    function crystalInput(i) {
        return function() {
            userTotal = userTotal + crystalValues[i];
            $("#score").text("Current Score: " + userTotal);
            if (userTotal === random) {
                winner();
            }
            else if (userTotal > random) {
                loser();
            }
        }
    }

    //calls crystalReset function for first round
    crystalReset();

    //clicking on a crystal triggers the above function, adding its value to the current score
    $("#image1").on("click", crystalInput(1));
    $("#image2").on("click", crystalInput(2));
    $("#image3").on("click", crystalInput(3));
    $("#image4").on("click", crystalInput(4));

})