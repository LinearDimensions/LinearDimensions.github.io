let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const descrpt = document.getElementsByClassName('carousel_descrpt');
const totalSlides = slides.length;
document
.getElementById('carousel_button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document
.getElementById('carousel_button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });
function removeSlide(){
    descrpt[slidePosition].classList.remove('carousel_descrpt--visible');
    descrpt[slidePosition].classList.add('carousel_descrpt--hidden');
    slides[slidePosition].classList.remove('carousel_item--visible');
    slides[slidePosition].classList.add('carousel_item--hidden');
}
function addSlide() {
    slides[slidePosition].classList.add('carousel_item--visible');
    descrpt[slidePosition].classList.add('carousel_descrpt--visible');
}

function moveToNextSlide() {
    removeSlide();
    if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
    } else {
    slidePosition++;
    }    
    addSlide();
}
function moveToPrevSlide() {
    removeSlide();
    if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
    } else {
    slidePosition--;
    }
    addSlide();
}