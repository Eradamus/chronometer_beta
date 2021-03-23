var msStart, activeTimer;
var s, ms;

function startTimer() {
  /* gets the current time */
  let currentTime = new Date();
  /* transforms in milliseconds */
  msStart = currentTime.getTime();
  /* displays at every interval of time */
  activeTimer = setInterval(displayTime, 10);
  
  document.getElementById("start").disabled = true;
}

function displayTime() {
  calculateTime();

  /* formats the time */
  let displayedTime = "";
  displayedTime = s.toString().padStart(2, "0");
  displayedTime += ":";
  displayedTime += ms.toString().padStart(2, "0");

  /* displays the time */
  document.getElementById("time").innerHTML = displayedTime;
}

function calculateTime() {
  /* gets the current time */
  let currentTime = new Date();
  /* calculates the time passed */
  let currentMs = currentTime.getTime() - msStart;

  /* transforms the time */
  ms = Math.trunc((currentMs % 1000) / 10);
  s = Math.floor(currentMs / 1000) % 60;
}

function stopTimer() {
  /* stops the timer */
  clearInterval(activeTimer);

  /* if clicked twice, deletes the output */
  if (document.getElementById("start").disabled) {
    document.getElementById("start").disabled = false;
  } else {
    document.getElementById("time").innerHTML = "00:00";
  }
}