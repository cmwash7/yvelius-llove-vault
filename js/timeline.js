// Function to open a new page
function openPage(page) {
    window.location.href = page;
}

// Back-to-Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Music Control Script
const music = document.getElementById("background-music");
const startMusicButton = document.getElementById("start-music");

startMusicButton.addEventListener("click", () => {
    music.play(); // Play the music
    startMusicButton.style.display = "none"; // Hide the button after starting the music
});

// Stop music after 40 seconds
setTimeout(() => {
    music.pause(); // Stop the music after 40 seconds
}, 40000); // 40,000 milliseconds = 40 seconds

// Slideshow Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to the first slide
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Remove "active" class from all dots
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    dots[slideIndex - 1].className += " active"; // Highlight the current dot
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}