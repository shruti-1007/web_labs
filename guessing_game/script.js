let rand = Math.floor(Math.random() * 100) + 1; // Random 1-100
let Score = 100;

document.getElementById("myscore").innerHTML = Score; // initialize score

function check(event) {
    event.preventDefault();
    let guessedvalue = Number(document.forms["myform"]["guess"].value);
    if (Score <= 0) {
        msg.innerHTML = "Game over! Click 'Play Again' to restart.";
        msg.style.color = "red";
        return false; // don't process further
    }
    if (!guessedvalue || guessedvalue < 1 || guessedvalue > 100) {
        document.getElementById("msg").innerHTML = "Enter a number between 1 and 100!";
    
        return false;
    }

    if (guessedvalue > rand) {
        document.getElementById("msg").innerHTML = "TOO HIGH!! Try again";
        msg.style.color = "red";
        Score -= 10;
    } else if (guessedvalue < rand) {
        document.getElementById("msg").innerHTML = "TOO LOW!! Try again";
        msg.style.color = "red";
        Score -= 10;
    } else {
        document.getElementById("msg").innerHTML = "CORRECT!! 🎉";
        msg.style.color = "green";
    }

    document.getElementById("myscore").innerHTML = Score;
    if (Score==0){
        document.getElementById("msg").innerHTML = "YOU LOST! PLAY AGAIN";
        msg.style.color = "red";
    }
    return false;
}

// Reset the game
function resetGame() {
    rand = Math.floor(Math.random() * 100) + 1; // new random number
    Score = 100;
    document.getElementById("myscore").innerHTML = Score;
    document.getElementById("msg").innerHTML = "";
    document.forms["myform"]["guess"].value = "";
}
