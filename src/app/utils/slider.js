let slideIndex = 1;

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
export const plusSlide = () => {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
export const minusSlide = () => {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
export const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
export const showSlides = (n) => {
    let i;
    const slides = document.querySelector(".item");
    const dots = document.querySelector(".slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}