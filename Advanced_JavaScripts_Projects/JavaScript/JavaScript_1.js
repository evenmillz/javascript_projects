// SWITCH STATEMENT

// Created a function called 'dirt_Chuck()'
function dirt_Chuck() {

    // Initialized the variable 'dirty' equal to the value of the users guess 
    let dirty = document.getElementById("dirt_In").value;

    // Utilized a 'switch' statement to begin comparing the user input to the options 
    switch(dirty) {
        case "327 lbs":
            dirt_Out = "Wrong answer!";
        break;
        case "500 lbs":
            dirt_Out = "Wrong answer!";
        break
        case "111 lbs":
            dirt_Out = "Wrong answer!";
        break
        case "700 lbs":
            dirt_Out = "Nailed it!!!"
        break
        default:
        dirt_Out = "Type your guess EXACTLY as you see it!"
    }
    // Displays the user results in the browser
    document.getElementById("dirt_Out").innerHTML = dirt_Out;
}