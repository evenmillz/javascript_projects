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

// DOCUMENT.GETELEMENTSBYCLASSNAME() METHOD ASSIGNMENT

// Created the function 'mr_Ed' that displays a horse talking with document.GetElementByClassName()
function mr_Ed() {
    let H = document.getElementsByClassName("horse");
    H[1].innerHTML = "\"Mr. Ed is my name, and I don't whinny, thank you very much!\"";
}

// CANVAS ELEMENT

// Created a function to make Mr. Ed draw 

function horse_Paint() {

    // This gets the canvas element
    let canvas = document.getElementById("drawingHorse");

    // This puts a border around the canvas element
    canvas.style.border = "5px solid saddlebrown";

    // 2D drawing context for a canvas element
    let ctx = canvas.getContext("2d");
    
    // Created a new image object and set the source 
    let img = new Image();
    img.src = "Images/MrEd.jpg";

    // This draws the image on the canvas once it loads
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
};