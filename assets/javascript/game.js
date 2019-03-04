$(document).ready(function() {

    let random = Math.floor(19 + Math.random()*102);
    let userTotal= 0;
    let wins = 0;
    let losses = 0;
    
    $("#number-goal").text("Goal: " + random);
    $("#score").text("Current Score: " + userTotal);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    let crystalValues = {};

    function crystalReset() {
        crystalValues[1] = Math.floor(1 + Math.random()*12);
        crystalValues[2] = Math.floor(1 + Math.random()*12);
        crystalValues[3] = Math.floor(1 + Math.random()*12);
        crystalValues[4] = Math.floor(1 + Math.random()*12);
    }
    
    function roundReset() {
        random = Math.floor(Math.random()*102+19);
        $("#number-goal").text("Goal: " + random);
        userTotal = 0;
        $("#score").text("Current Score: " + userTotal);
        crystalReset();
    }
    
    function winner() {
        alert("You Win! (Final Score: " + userTotal + ")");
        wins++;
        $("#wins").text("Wins: " + wins);
        roundReset();
    }
    
    function loser() {
        alert("You Lose! (Final Score: " + userTotal + ")");
        losses++;
        $("#losses").text("Losses: " + losses);
        roundReset();
    }
    
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

    crystalReset();
     
    $("#image1").on("click", crystalInput(1));
    $("#image2").on("click", crystalInput(2));
    $("#image3").on("click", crystalInput(3));
    $("#image4").on("click", crystalInput(4));

})