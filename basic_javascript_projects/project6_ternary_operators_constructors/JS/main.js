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
