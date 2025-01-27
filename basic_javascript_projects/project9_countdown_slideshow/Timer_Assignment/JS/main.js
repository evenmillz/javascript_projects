// TIMER ASSIGNMENT

// Created a function to find the value of the input and then
// finds the <p> tag where the timer shows up.
function countdown() {
   let seconds = document.getElementById("seconds").value;
   let timer = document.getElementById("timer");

// This is saying if 'seconds' is NaN, OR and empty string (""),
// OR is less than or equal to zero (<=), then send the user an alert 
// that reads "Can't fool me! Please enter a valid number greater than 0."
// Meanwhile, the 'return' stops the function right there, and prevents it 
// from running any further code.
    if (isNaN(seconds) || seconds === "" || seconds <= 0) {
        alert("Can't fool me! Please enter a valid number greater than 0.")
        return;
    }

// This function triggers the timer to start counting down,
// decreasing by a rate of one second with every loop, then updates
// the timer display.
   function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;

// This is saying that if the seconds hit 0 or less, to stop the timer,
// then tell the user the timer is done.
    if (seconds < 0) {
        alert("Time's up!");
        timer.innerHTML = "";
    }   else {

// This calls the tick once every 1000 miliseconds (or 1 second) as long
// as seconds is greater than 0.
        setTimeout(tick, 1000);
    }
   }
// This initiates the whole process, it calls the function
// controlling the timer
   tick();
}