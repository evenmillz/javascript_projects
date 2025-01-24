// IF STATEMENT ASSIGNMENT (Moved to the top of the file for functionality)

// Created a variable and used an if statement and console.log() to call the variable.

let Dollars = 100;

function build_Wealth() {
    document.getElementById("moMoney").innerHTML = 
    "You have $" + Dollars + ". Time to invest!";

// Hides the button after it is pressed using style.display and choosing 'none'
    document.querySelector("button").style.display = "none";
}

// SCOPE

// Created a global variable

let A = 1;
function Multi_ply_1(){
    document.write(2 * A + "<br>");
}

function Multi_ply_2(){
    document.write(A * 22 + "<br><br>");
}

Multi_ply_1();
Multi_ply_2();

// Created a local variable

function Multi_ply_3() {
    let B = 2;
    document.write(222 * B + "<br>");
}

Multi_ply_3();

// Intentionally created a function with an error in it
// and used the console.log() method to debug it
function Multi_ply_4() {
    console.log("Multi_ply_4 is not working. Looking for B");
    document.write(B * 2222);
}

Multi_ply_4();


// TIME

// Created a function with an if statement that utilizes
// the new Date().getHours() method

// Used the document.getElementById() method to reference 
// the id attribute 'greetUser' to display a message if it 
// is greater than 10pm

function time_Check() {
    if (new Date().getHours() > 22) {
        document.getElementById("greetUser").innerHTML = 
        "Most people are sleeping by now!"
    }
}

// ELSE ASSIGNMENT

// Created a function that includes an 'if' and an 'else' statement

function Guess_Number() {
    let Number = document.getElementById("number").value;
    if (Number != 2) {
       document.getElementById("numGame").innerHTML = "Guess again!";
    }
    else {
        document.getElementById("numGame").innerHTML = "You guessed the right number!";
    }
}

// ELSE IF STATEMENTS ASSIGNMENT

// Created a function to display what time of day it is

function Time_Function() {
    let Time = new Date().getHours();
    let Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}