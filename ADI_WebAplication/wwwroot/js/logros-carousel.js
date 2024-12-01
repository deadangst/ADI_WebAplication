document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.logros-carousel-inner');
    const slides = document.querySelectorAll('.logros-slide');
    const nextButton = document.querySelector('.logros-control-next');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });
});
