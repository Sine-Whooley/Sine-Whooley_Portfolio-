// -------------------- General -------------------- //
// To Show & Hide Hamurger Menu onclick
$(document).ready (function(){
    $("#displayHamMenuBut").click(function()
    {
        $("#displayDropDown").toggle();
    });
});






// -------------------- Home Page -------------------- //
// ---- Splash Intreo Set up  ---- //
let introSplash = document.querySelector('.introSplash');
let splashMessage = document.querySelector('.splashMessage');
let splashText = document.querySelectorAll('.splashText');

window.addEventListener('DOMContentLoaded', ()=>{
    console.log("reached the addEventListener");
    
    setTimeout(() => {
        console.log("reached first timeout");

        const lastShown = localStorage.getItem('splashLastShown');
        const now = Date.now();

        // 1 hour = 60 minutes × 60 seconds × 1000 ms
        const oneHour = 60 * 60 * 1000;
        // const oneMinute = 60 * 1000;

        if (lastShown && (now - parseInt(lastShown)) < oneHour) {
            // Skip splash screen
            introSplash.style.display = 'none';
            return;
        }

        // Record that the splash screen was shown
        localStorage.setItem('splashLastShown', now);


        splashText.forEach((span, idx) => {  
            console.log("reached the individual span section for the text");

            setTimeout(() =>{
                console.log("reached second timeout");
                span.classList.add('active');
            },  (idx + 1) * 400)
        })
        
        setTimeout(()=> {
            splashText.forEach((span, idx) =>{

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) *50)
            })
        }, 2000)

        setTimeout(() => {
            introSplash.style.top = '-100vh';
        }, 2500)
    })
})





// ---- Photo Slideshow ---- //
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
    for (let i = 0; i < homeImages.length; i++) 
    {
        homeImages[i].style.display = "none";
    }

    // Display the current image
    homeImages[slideShowIndex - 1].style.display = "block";


    // let slideShowDot = document.getElementById('homeSlideShowDot');
    // let  homeImage1 = document.getElementById('homeImg1');
    // let  homeImage2 = document.getElementById('homeImg2');
    // let  homeImage3 = document.getElementById('homeImg3');
    // let  homeImage4 = document.getElementById('homeImg4');
    // let  homeImage5 = document.getElementById('homeImg5');
    // let  homeImage = document.getElementById('homeImg');


    // for (i = 0; i < slideShowDot.length; i++)
    // {
    //     // slideShowDot[i].className = slideShowDot[i].className.replace("active", " ");

    //     console.log("reached the next Dot");
    // }

    // slideShowDot[slideShowIndex -1].className += "active";

}










//-------------------- Portfolio --------------------//
// Portfolio Navigation Drop Down - Home Page 
const displayPortMenuDropDown = document.getElementById('displayPortMenu');
let togglePort = false;

function displayPortDropDown()
{
    console.log("Show Portfolio Drop Down Menu");

    togglePort = !togglePort;
    displayPortMenuDropDown.style.display = togglePort ? 'block' : 'none';
}

