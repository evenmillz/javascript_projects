// TERNARIES

// Created a function named 'Ride_Function' that checks the height of a user to 
// determine if they are tall enough for a ride

// Utilized the 'document.getElementById' method to display 'Ride_Function' in 
// the browser
function Ride_Function() {
    let Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// KEYWORDS AND CONSTRUCTORS

// Utilized object-oriented programming by creating functions 
// that use keywords, variables, and constructors, along with 'document.GetElementById' 
// and concatenating in order to return values that display in the browser

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
let Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// NEW KEYWORD ASSIGNMENT

// Utilized object-oriented programming by creating functions 
// that use new keywords, variables, and constructors, along with 'document.GetElementById' 
// and concatenating in order to return values of my choosing that display in the brower

function Student(Age, Sex, Program, Course) {
    this.Student_Age = Age;
    this.Student_Sex = Sex;
    this.Student_Program = Program;
    this.Student_Course = Course;
}

let Alex = new Student(32, "Female", "Cybersecurity", "Hardware and Network Security");
let Micheal = new Student(64, "Male", "JavaScript", "Advanced JavaScript");
let Even = new Student(41, "Male", "AI", "JavaScript");

function someStudents() {
    document.getElementById("New_and_This").innerHTML = 
    "Even is a " + Even.Student_Age + " year old " + Even.Student_Sex + " enrolled in " + 
    " with The Tech Academy, currently hard at work with  " + Even.Student_Course + "!";
}