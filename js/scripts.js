// scripts.js

// Carousel logic
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateCarousel() {
    const totalSlides = slides.length;
    // Ensure the carousel wraps around
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Update the position of the carousel
    const carousel = document.querySelector(".carousel");
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Go to the previous slide
prevBtn.addEventListener("click", function() {
    currentSlide--;
    updateCarousel();
});

// Go to the next slide
nextBtn.addEventListener("click", function() {
    currentSlide++;
    updateCarousel();
});

// Initialize the carousel
updateCarousel();

// Button Click Logic
document.getElementById("ctaButton").addEventListener("click", function() {
    alert("Button clicked!");
});
