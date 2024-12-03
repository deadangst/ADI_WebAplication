document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".logros-slide");
    const nextButton = document.querySelector(".logros-control-next");
    const indicators = document.querySelectorAll(".logros-indicators button");

    let currentIndex = 0;

    const updateCarousel = (index) => {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
    };

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener("click", () => {
            currentIndex = i;
            updateCarousel(currentIndex);
        });
    });

    // Initialize carousel
    updateCarousel(currentIndex);
});
