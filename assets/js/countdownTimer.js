const startingMinutes = 4;
let time = startingMinutes * 60; // ==> 10*60 == 600ms
const countdownElement = document.getElementById("countdown");
updateCountdown();
let clearTimer = setInterval(updateCountdown, 1000);
function updateCountdown() {
  const minutes = Math.floor(time / 60); // ==> 600/60 == 10 mins
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownElement.innerHTML = `${minutes}<span>:</span>${seconds}`;
  time--;
}
