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


