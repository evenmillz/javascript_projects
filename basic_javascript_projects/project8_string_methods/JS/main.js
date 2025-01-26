// CONCAT() METHOD

// Created a function using the Concat() method 

function mouth_Piece() {
    let bar_1 = "The main thing";
    let bar_2 = " is keeping the main thing";
    let bar_3 = " the main thing!<br><br>"
    let credit = "- Stephen Covey";
    let full_speil = bar_1.concat(bar_2, bar_3, credit);
    document.getElementById("jargon").innerHTML = full_speil + " (<br><br><strong>(Returned a full quote and credit using the Concat() method)<strong>";

    // Hides the button after it is pressed using style.display and choosing 'none'

    document.querySelector("button").style.display = "none";
}

// SLICE() METHOD 

// Created a function using the slice() method

function razor_Code(btn) {
    let bar_1 = "The main thing";
    let slice_Mode = bar_1.slice(4, 8);
    document.getElementById("ouch").innerHTML = slice_Mode + " <br><strong>(Returned the word 'main' using the slice() method)<strong>";

    // Updated the function to accept the (btn) reference and hide it once it is clicked
    // since the style.display only works on the first functions button

    btn.style.display = "none";
}

// NUMBER METHODS

// Created a function to utilize the toString() method

function wool_Numbers(btn) {
    let B = 2;
    document.getElementById("numberString").innerHTML = B.toString() + " <br><strong>(It looks like a number, but this 2's type is actually a string!)<strong";

    // Updated the function to accept the (btn) reference and hide it once it is clicked
    // since the style.display only works on the first functions button

    btn.style.display = "none";
}

// Created a function to utilize the toPrecision() method

function this_Many(btn) {
    let C = 123.987
    document.getElementById("specified").innerHTML = C.toPrecision(2) + "<br><strong>(This is the number '123.987' returned to two digits, and is also a string!)<strong>";
    
    // Updated the function to accept the (btn) reference and hide it once it is clicked
    // since the style.display only works on the first functions button

    btn.style.display = "none";
}