// Added <br>'s throughout the code to provIde a cleaner look, following the order of operations

// Used the 'type of' operator to return '100%'
// Utilized the 'document.getElementById' method to display the result
document.write(10 + "0" + "% (Utilized the 'type of' operator to return '100%')<br><br>")

// Created a function to return 'NaN'
// Utilized the 'document.getElementById' method to display the result
function nan_Bread() {
    document.getElementById("yum").innerHTML = 0/0 +
" (Created a function to return 'NaN')";
}

// Created a function to return a 'false' result by using 'isNaN',
// Utilized the 'document.getElementById' method to display the result
function no_Nan() {
    document.getElementById("sadFace").innerHTML = isNaN(2) +
" (Created a function to return a 'false' result by using 'isNaN')";
}

// Created a function to return the result 'Infinity'
// Utilized the 'document.getElementById' method to display the result
function to_Infinity() {
    document.getElementById("infinite").innerHTML = 2E2222 +
" (Created a function to return the result 'Infinity')";
}

// Created a function to return the result '-Infinity' 
// Utilized the 'document.getElementById' method to display the result
function neg_Infinity() {
    document.getElementById("negInfinite").innerHTML = -2E2222 +
" (Created a function to return the result '-Infinity')";
}

// Created a function to use Boolean logic to return true
// Utilized the 'document.getElementById' method to display the result
function is_True() {
    document.getElementById("bigFacts").innerHTML = (2 > 1) +
" (Created a function to use Boolean logic to return 'true')";
}

// Created a function to use Boolean logic to return false
// Utilized the 'document.getElementById' method to display the result
function is_False() {
    document.getElementById("falseHood").innerHTML = (2 < 1) +
" (Created a function to use Boolean logic to return 'false')";
}

// Performed a math operation with the 'console.log()' function
function con_Sole() {
    console.log(2 + 2);
}

// Called the function 'con_Sole' to display the result in the console
con_Sole();

// Performed a math operation with the 'console.log()' function
function fake_News() {
    console.log(2 < 2);
}

// Called the function 'fake_News' to display the result in the console
fake_News();

// Utilized the '==' to return 'true'
// Utilized 'document.write()' to display the result in the browser
document.write((22 == 22) + 
" (Utilized the '==' to compare data type and value to return 'true')<br><br>");

// Utilized the '==' to return 'false'
// Utilized 'document.write()' to display the result in the browser
document.write((22 == 2) + 
" (Utilized the '==' to match data type and value to return 'false')<br><br>");

// Assigned three variables using an '=' sign
let A = 2;
let B = 2;
let C = 22;

// Utilized the '===' to match the data type and value to return 'true'
// Utilized 'document.write()' to display the display in the browser
document.write((A === B) +
" (Utilized the '===' to match the data type and value to return 'true')<br><br>");

// Utilized the '===' to return 'false' by writing a different data type and value
// Utilized 'document.write()' to display the result in the browser
document.write((A === "C") +
" (Utilized the '===' to return 'false' by writing a different data type and value)<br><br>");

// Utilized the '===' to return 'false' by writing a different data type but the same value for both
// Utilized 'document.write()' to display the result in the browser
document.write((A === "A") + 
" (Utilized the '===' to return 'false' by writing a different data type but the same value for both<br><br>");

// Utilized the '===' to match the data type by writing the same data type but a different value for both
// Utilized 'document.write()' to display the result in the browser
document.write((B === C) + 
" (Utilized the '===' to match the data type by writing the same data type but a different value for both)<br><br>");

// Utilized the 'AND' operator to return 'true'
// Utilized 'document.write()' to display the result in the browser
document.write((1 == 1 && 2 == 2) +
" (Utilized the 'AND' operator to return 'true')<br><br>");

// Utilized the 'AND' operator to return 'false'
// Utilized 'document.write()' to display the result in the browser
document.write((1 == 1 && 1 == 2) +
" (Utilized the 'AND' operator to return 'false')<br><br>");

// Utilized the 'OR' operator to return 'true'
// Utilized 'document.write()' to display the result in the browser
document.write((1 == 1 || 1 == 2) +
" (Utilized the 'OR' operator to return 'true')<br><br>");

// Utilized the 'OR' operator to return 'false'
// Utilized 'document.write()' to display the result in the browser
document.write((1 == 2 || 2 == 1) +
" (Utilized the 'OR' operator to return 'false')<br><br>");

// Utilized the '!' (not) operator to return 'true'
// Utilized the 'document.getElementById' method to display the result
function nope_Not() {
    document.getElementById("nada").innerHTML = !(2 > 2) + 
" (Utilized the '!' (not) operator to return 'true')";         
}

// Utilized the '!' (not) operator to return 'false'
// Utilized the 'document.getElementById' method to display the result
function yup_Yes() {
    document.getElementById("si").innerHTML = !(2 == 2) + 
" (Utilized the '!' (not) operator to return 'false')";         
}