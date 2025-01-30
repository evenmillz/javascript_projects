// Creates the function 'Call_loop' to run when user clicks button
function Call_Loop() {

    // Sets a to 1 as a starting point 
    let A = 1;

    // This is where the while loop output is stored for display as a string
    let display = "";


// Created while loop to run while 'a' is less than 4
    while (A < 5) {

        // Adds 'a' (1) plus 1 plus a new line 
        display += "loop " + A + "<br>";

        // increments by 1 to keep the loop in motion
        A++;
    }

    display += "<strong>'A' journeyed a total of 4 loops!<strong><br>";

// Displays the output to the browser
document.getElementById("Loop").innerHTML = display;
}