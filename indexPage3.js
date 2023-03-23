const slideContainer = document.querySelector('.containerContenu2');
const slides = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');

let positionSlide = 0;

arrowLeft.addEventListener('click', () => {
  positionSlide--;
  // Vérifier si nous sommes au début du carrousel et revenir à la fin si nécessaire
  if (positionSlide < 0) {
    positionSlide = slides.length - 1;
  }
  updateSlideDisplay();
});

arrowRight.addEventListener('click', () => {
  positionSlide++;
  // Vérifier si nous sommes à la fin du carrousel et revenir au début si nécessaire
  if (positionSlide > slides.length - 1) {
    positionSlide = 0;
  }
  updateSlideDisplay();
});

// Cette fonction met à jour l'affichage des diapositives pour afficher celle correspondant à la position actuelle
function updateSlideDisplay() {
  // Masquer toutes les diapositives
  for (let slide of slides) {
    slide.classList.remove('active');
  }
  // Afficher la diapositive correspondant à la position actuelle
  slides[positionSlide].classList.add('active');
}

// Mettre en surbrillance la première diapositive
updateSlideDisplay();

const slideContainer2 = document.querySelector('.containerContenu2');
const slides2 = document.querySelectorAll('.slide2');
const arrowLeft2 = document.querySelector('.arrowLeft2');
const arrowRight2 = document.querySelector('.arrowRight2');

let positionSlide2 = 0;

arrowLeft2.addEventListener('click', () => {
  positionSlide2--;
  // Vérifier si nous sommes au début du carrousel et revenir à la fin si nécessaire
  if (positionSlide2 < 0) {
    positionSlide2 = slides2.length - 1;
  }
  updateSlideDisplay2();
});

arrowRight2.addEventListener('click', () => {
  positionSlide2++;
  // Vérifier si nous sommes à la fin du carrousel et revenir au début si nécessaire
  if (positionSlide2 > slides2.length - 1) {
    positionSlide2 = 0;
  }
  updateSlideDisplay2();
});

// Cette fonction met à jour l'affichage des diapositives pour afficher celle correspondant à la position actuelle
function updateSlideDisplay2() {
  // Masquer toutes les diapositives
  for (let slide of slides2) {
    slide.classList.remove('active');
  }
  // Afficher la diapositive correspondant à la position actuelle
  slides2[positionSlide2].classList.add('active');
}

// Mettre en surbrillance la première diapositive
updateSlideDisplay2();
