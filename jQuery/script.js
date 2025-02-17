$(document).ready(function() {
    // This function makes the text shine by moving the background 
    // back and forth
    function shineLoop() {
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000)
        .animate({backgroundPositionX: '-800px'}, 3000);
    };

    // This keeps the background movement running infinitely 
    // without pause
    setInterval(shineLoop, 0);

    // Shrinks header size when the document is scrolled down
    // by 50 pixels, and when the page is scrolled back up, it goes
    // back to it's normal size
    $(document).on("scroll", function() {
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    // This ensures that when the mouse hovers over the car section, 
    // the car names appear one-by-one
    $("#classicCars").on({
        mouseenter: function() {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

    // When the mouse leaves from hovering over the car section, this
    // makes sure that the car names dissapear one-by-one
    mouseleave: function() {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    // This makes that when a question is clicked, it shows 
    // or hides the answer
    $('div.question').on('click', function() {
        $(this).next().slideToggle('slow');    
    });
})