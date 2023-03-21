
/* /// Code qui fonctionne en version Mobile mais
 désordonne la version desktop ///

/* /// Slide avec div boutons avec addEventListener à la 
place de Onclick (Validé !) ///*/


let slideIndex = 1;
showDivs(slideIndex);
function indexSlide(n) {
    showDivs(slideIndex += n);
}

const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right");

buttonLeft.addEventListener('click', function () {
    return indexSlide(1);
});
buttonRight.addEventListener('click', function () {
    return indexSlide(-1)
});

function showDivs(n) {
    let slideArray = document.getElementsByClassName("slide");
    if (n > slideArray.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slideArray.length }
    for (i = 0; i < slideArray.length; i++) {
        slideArray[i].style.display = "none";
    }
    slideArray[slideIndex - 1].style.display = "flex";
}
/*
let slideArray
function mqSlides(x) {
    if (x.matches) {
        return showDivs(n)=none;;
    } else {
        slideArray = none;
    }
    return slideArray
}
const mq = window.matchMedia("(min-width:500px)")
mqSlides(mq);
mq.addListener(mqSlides)*/

/*  
/// Responsive JS pour Break à 600px ??? ///
if (Window.matchMedia('screen and (max-width:600px)').matches) { }
OU
const screenBreak = document.querySelector(html).clientWidth;
if (screenBreak = true) {}
*/

/* 
// Explications Slides /// 
Lorsque l'utilisateur clique sur la flèche suivante, le paramètre 'n' est égal à 1 
et la variable slideIndex est incrémentée. L'instruction conditionnelle if permet de vérifier 
qu'on ne dépasse pas le nombre d'images du slide. Et si on dépasse, on réinitialise la variable slideIndex,
ce qui permet de boucler le slider. slideArray.length permet de compter le nombre d'images du tableau slide. 
on retire -1 car la première image du slide est slide[0].
*/

