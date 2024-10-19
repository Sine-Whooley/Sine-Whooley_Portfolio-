// -------------------- General -------------------- //
// To Show & Hide Hamurger Menu onclick
$(document).ready (function(){
    $("#displayHamMenuBut").click(function()
    {
        $("#displayDropDown").toggle();
    });
});


// -------------------- Home Page -------------------- //

// Initial setup for the slideshow
let slideShowIndex = 1;
showSlideShow(slideShowIndex);

// Function to show the current image
function currentSlide(image) {
    showSlideShow(slideShowIndex = image);
}

// Function to move to the next image
function nextSlide(image) {
    showSlideShow(slideShowIndex += image);
}

// Function to create slideshow of images
function showSlideShow(image) {
    let homeImages = document.getElementsByClassName('homeImage');
    
    // Wrap around if index exceeds bounds
    if (image > homeImages.length) {
        slideShowIndex = 1;
    } else if (image < 1) {
        slideShowIndex = homeImages.length;
    }

    // Hide all images
    for (let i = 0; i < homeImages.length; i++) {
        homeImages[i].style.display = "none";
    }

    // Display the current image
    homeImages[slideShowIndex - 1].style.display = "block";
}


//-------------------- Portfolio --------------------//



