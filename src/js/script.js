// Global Variable
let slideIndex = 0;

// IFFE Init Call to both functions
(function init() {
    // Call image Carousel 
    imageCarousel();

    // Call copy right year
    copyRightYear();

}());

// Function to displays Image Carousel
function imageCarousel() {
    let i;
    let images = document.getElementsByClassName("banner__img-slides");
    for (i = 0; i < images.length; i++) {
      images[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > images.length) {slideIndex = 1} 
    images[slideIndex-1].style.display = "block"; 
    setTimeout(imageCarousel, 3000); // Change image every 3 seconds
};

// Function to get current year
function copyRightYear() {
    let currentYear = document.getElementById('year');
    let year = new Date().getFullYear();
    currentYear.innerHTML = year;
};
