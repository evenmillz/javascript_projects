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



