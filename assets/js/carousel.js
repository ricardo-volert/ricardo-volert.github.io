let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".carousel img");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "slide-left", "slide-right");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active", "slide-right");
    if (slideIndex < slides.length) {
        slides[slideIndex].classList.add("slide-left");
    }
    setTimeout(showSlides, 5000); // Troca de slide a cada 5 segundos (5000 ms)
}

showSlides();

// Controle do carrossel pelas setas direcionais do teclado
document.addEventListener("keydown", function (event) {
    const slides = document.querySelectorAll(".carousel img");
    if (event.key === "ArrowLeft") {
        // Setas para esquerda movem o carrossel para a esquerda
        slideIndex--;
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active", "slide-left", "slide-right");
        }
        slides[slideIndex - 1].classList.add("active", "slide-left");
        if (slideIndex < slides.length) {
            slides[slideIndex].classList.add("slide-right");
        }
    } else if (event.key === "ArrowRight") {
        // Setas para direita movem o carrossel para a direita
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active", "slide-left", "slide-right");
        }
        slides[slideIndex - 1].classList.add("active", "slide-right");
        if (slideIndex < slides.length) {
            slides[slideIndex].classList.add("slide-left");
        }
    }
});


function changeSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll(".carousel img");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "slide-left", "slide-right");
    }
    slides[slideIndex - 1].classList.add("active", "slide-right");
    if (slideIndex < slides.length) {
        slides[slideIndex].classList.add("slide-left");
    }
}

function scrollDown() {
    const windowHeight = window.innerHeight;
    window.scrollBy(0, windowHeight);
}