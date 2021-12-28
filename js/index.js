let slidesId = 1;

showSlides(slidesId);

function nextSlide() {
    showSlides(slidesId += 1);
}

function currentSlide(n) {
    showSlides(slidesId = n);
}

function previousSlide() {
    showSlides(slidesId -= 1);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slider-item");

    if (n > slides.length) {
        slidesId = 1;
    }

    if (n < 1) {
        slidesId = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = 'none';
    }

    slides[slidesId - 1].style.display = 'block';
}