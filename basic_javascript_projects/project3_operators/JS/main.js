//Created a function that returns the results of an addition operation
// to a paragraph element
function plus_Size() {
    let Plus = 2 + 2;
    document.getElementById("addMath").innerHTML = "2 + 2 = " + Plus;
}

//Created a function that returns the results of a subtraction operation
// to a paragraph element
function take_Away() {
    let Minus = 2 - 2;
    document.getElementById("subMath").innerHTML = "2 - 2 = " + Minus;
}

// Created a function that returns the results of a multiplication operation
// to a paragraph element
function java_Times() {
    let Times = 2 * 2;
    document.getElementById("multiMath").innerHTML = "2 * 2 = " + Times;
}

// Created a function that returns the results of a division operation
// to a paragraph element
function fraction_Action() {
    let Divide = 2 / 2;
    document.getElementById("slashMath").innerHTML = "2 / 2 = " + Divide;
}

// Created a math object function that returns the results of multiple operations
// simultaneously to a paragraph element
function math_Bash() {
    let Turnout = (2 / 2) + (2 * 2);
    document.getElementById("mixedMath").innerHTML = "(2 / 2) + (2 * 2) = " + Turnout;
}

// Created a math method function that returns the results of the remainder of an operation
// to a paragraph element
function left_Overs() {
    let Remainder = 2 % 2;
    document.getElementById("modMath").innerHTML = "2 % 2 = " + Remainder;
}

// Created a function that returns the results of the opposite
// or negative form of a number using a unary operator to a paragraph element
function sign_Shift() {
    let Inverse = 2;
    document.getElementById("unMath").innerHTML = "The negative form of 2 is " + -Inverse;
}

// Created a function that increases a number using an increment operator
// to a paragraph element
function up_Scale() {    
    let Increase = 2;
    Increase++;
    document.getElementById("grownMath").innerHTML = "2 incremented by 1 is " + Increase;
}

// Created a function that decreases a number using an decrement operator
// to a paragraph element
function down_Size() {    
    let Decrease = 2;
    Decrease--;
    document.getElementById("lostMath").innerHTML = "2 decremented by 1 is " + Decrease;
}

// Created a function that returns the results of the opposite
// form of a number using a unary operator to a paragraph element
function ran_Doe() {
    let Known = Math.random() * 2;
    document.getElementById("ranMath").innerHTML = "A random number between 0 and 2 is " + Known.toFixed(2);
}

// Created a function that calculates the exterior of a perfect ball and returns 
// it to a paragraph element
function round_About() {
    let Span = 2;
    let Perimeter = 2 * Math.PI * 2;
    document.getElementById("roundMath").innerHTML = "2 times two pi's = " + Perimeter.toFixed(2);
}

// Created a function that shows the power of a number 
// and returns the result to a paragraph element
function power_Up() {
    let Foundation = 2;
    let Level = 2;
    let Measurment = Math.pow(Foundation, Level);
    document.getElementById("strongMath").innerHTML = "2 to the power of 2 = " + Measurment;
}