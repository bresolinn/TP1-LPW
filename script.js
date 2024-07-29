document.addEventListener('DOMContentLoaded', () => {

    const currentUrl = window.location.href;


    const navItems = document.querySelectorAll('.nav-bar a');


    navItems.forEach((item) => {
        if (item.href === currentUrl) {
            item.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const currentUrl = window.location.href;

    navItems.forEach(item => {
        if (item.href === currentUrl) {
            item.classList.add('active');
        }
    });
});

const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
let currentSlide = 0;
let slideInterval;
let isDragging = false;
let startX;
let startScrollLeft;
let currentTranslateX;

const showSlide = (index) => {
    if (index >= totalSlides) index = 0;       // Loop de volta ao início
    if (index < 0) index = totalSlides - 1;   // Loop para o final
    document.querySelector('.carousel-slides').style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    currentSlide = index;
};

const nextSlide = () => {
    showSlide(currentSlide + 1);
};

const prevSlide = () => {
    showSlide(currentSlide - 1);
};

const startSlideShow = () => {
    slideInterval = setInterval(nextSlide, 10000); // Avança o slide a cada 10 segundos
};

const stopSlideShow = () => {
    clearInterval(slideInterval);
};

document.querySelector('.next').addEventListener('click', () => {
    stopSlideShow();
    nextSlide();
    startSlideShow();
});

document.querySelector('.prev').addEventListener('click', () => {
    stopSlideShow();
    prevSlide();
    startSlideShow();
});

indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-slide'));
        stopSlideShow();
        showSlide(index);
        startSlideShow();
    });
});