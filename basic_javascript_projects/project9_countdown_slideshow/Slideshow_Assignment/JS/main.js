// Starts the slideshow at the first slide, putting it in motion
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Coontrols the visibility of slides and highlits the active dot
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
// Loops back to the first slide if the index exceeds the total slides
    if (n > slides.length) {slideIndex = 1}

// Loops to the last slide if the index decrements below 1
    if (n < 1) {slideIndex = slides.length}

// Hides all slides so only the active one is displayed
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
// Removes the 'active' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
// Displays the active slide and highlights the dot relative to it
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
