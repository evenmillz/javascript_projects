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

    display += "<strong>'A' journeyed a total of 4 loops!</strong><br><br>";

// Displays the output to the browser
document.getElementById("Loop").innerHTML = display;
}

// FOR LOOP

// Initialized the variable 'sonomakers' to an array of instruments
let sonomakers = ["Liuqin", "Tonkori", "Pyrophone", "Gobijeu", "Dizi", "Koto", "Damaru"];
let list = "";

// Created a function that iterates through the array, displaying the output
function for_Loop() {

    // Created a for loop that uses .length to itterate throught the array
    for (let E = 0; E < sonomakers.length; E++) {
        list += sonomakers[E] + "<br>";
    }

    // Displays the output in the browser
    document.getElementById("List_of_Instruments").innerHTML = list + "<br><br>";
}

// ARRAY

// Created the function 'evens_Names' 
function evens_Names() {
    
    // Created an array of Even's names
    let names = [];
    names[0] = "My first name is 'Even'.";
    names[1] = "My middle name is 'Wyne'.";
    names[2] = "My last name is 'Richardson'.";

    // Displays the names of Even concatenated with a string
    document.getElementById("array").innerHTML = names.join("<br>");
}

// CONST KEYWORD

// Created a function named 'even_const' 
function even_const() {

    // Declared the const 'Even_Remains' containing properties and values
    const Even_Remains = {name: "Even", age: 41, location: "Australia", profession: "Developer", hobby: "Investing"}

// Displays a string that includes a property value of the object
document.getElementById("always").innerHTML =
"Hi! I am " + Even_Remains.name + ", a " + Even_Remains.age + "-year-old " + Even_Remains.profession +
" residing in " + Even_Remains.location +", and I enjoy " + Even_Remains.hobby + "!";
};

// LET KEYWORD

// Utilized the 'let' keyword and used console.log to display it in the console
let W = 2;
console.log("The Value of W is", W);

// OBJECT

// Created an object called 'planet' with properties and methods
let planet = {
    name: "Kepler-452b",
    size: "five times Earth's mass", 
    shape: "oblate spheroid", 
    composition: "unknown (though likely rocky)", 
    motion: "385 Earth day orbital period", 
    location: "1,800 light-years away",
    data : function () {
        return "The planet " + planet.name + " has a " + planet.composition + " composition, with an " +
        planet.shape + ". It is " + planet.size + " with a " + planet.motion + " and is often referred to as 'Earth's cousin'!"
    }
};

// Created a function that displays the result in the browser
function planet_Data() {
    document.getElementById("celestial").innerHTML = planet.data();
}