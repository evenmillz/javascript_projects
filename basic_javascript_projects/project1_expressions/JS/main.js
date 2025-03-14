// Used the window.alert method to call a string write it in an alert window
window.alert("This was written solely with the window.alert method!") 

// Used the document.write method to call a string and write it onto the browser
document.write("document.write wrote this sentence, and the following text is a result of a variable named 'P' + document.write: <br>") 

// Assigned a string to a variable and used the document.write method to call and write the string onto the browser
let P = "'P' is for 'Programming'! "
document.write(P)

// Assigned a string to a variable and used the window.alert method to call the string and write it in an alert browser
let S = "This text was created by assigning a string value to a variable, and then using the window.alert() method to display it!"
window.alert(S)

// Wrote a string that contained an apostrophe and quotation marks, and used the escape method to escape the applicable characters calling it with the document.write method
document.write("<br><br>What did the string say when another string asked,<br> \"Hey string! Do you happen to know the time?\"<br>\"No, I'm a frayed knot.")

// Concatenated a string withing the document.write method
document.write("<br><br>\"If there is no struggle, there is no progress.\"<br>" +
    "- Frederick Douglass")
// Assigned a concatenated string value to a variable and displayed it in the browser
let C = "<br><br>This " + "is a concatenated string value"
document.write(C)

// Assigned multiple variables in one statement, and used the document.write() method to display one of the variables on the browser
let AI = "Artificial Intelligence", OI = "Organic Intelligence", ChatGPT = "Programmed Response", Even = "Original Response"
document.write("<br><br>" + Even)

// Wrote an expression
2 + 9 

// Created two variables, concatenating them together
let Sent1 = "<br><br>This is the beginning of the string " 
let Sent2 = "<br><br>and this is the end of the string<br><br>"
document.write(Sent1 + Sent2)

// Utilized new HTML event
function displayLocation() {
    alert("Your location is here!")
}

