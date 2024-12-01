document.addEventListener('DOMContentLoaded', () => {
    const carouselContent = document.querySelector('.carousel-content');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.left');
    const nextButton = document.querySelector('.carousel-button.right');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContent.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    // Auto-advance every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 5000);
});
