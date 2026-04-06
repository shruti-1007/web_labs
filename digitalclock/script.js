function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  let time = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerText = time;
}

setInterval(updateClock, 1000);
let countdown;

function startTimer() {
  let timeLeft = document.getElementById("timeInput").value;

  // clear previous timer if running
  clearInterval(countdown);

  countdown = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert("Time's up!");
    } else {
      document.getElementById("timer").innerText = timeLeft;
      timeLeft--;
    }
  }, 1000);
}
