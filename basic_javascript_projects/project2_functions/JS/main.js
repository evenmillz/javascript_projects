// Wrote a function that included assigning two variables and
// utilized the document.getElementByID methods for each
function JS_Function_By_Even() {
    let jsButton = "Thank You";
    let jsMessage = "Welcome to my Function!";
    document.getElementById("button").innerHTML = jsButton;
    document.getElementById("message").innerHTML = jsMessage;
}

// Created variable and utilized the += operator to concatenate a string
function bigConc() {
    let words = "You have unleashed";
    words += " Big Conc's concatenated string!";

// Utilized the document.getElementByID method to display the concatenated 
// string
    document.getElementById("BigCwords").innerHTML = words;
}
