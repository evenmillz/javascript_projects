// Function that gets the data attribute and text from HTML_3.index
// to display in the browser

function regional_Favorites(food) {
    let region = food.getAttribute("data-favorite_foods");
    let cusine = food.innerHTML;
    document.getElementById("yum").innerHTML = cusine + " is my favorite " + region + " dish!";
}