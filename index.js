const burgerIcon = document.querySelector(".burger-icon");
const sidenav = document.querySelector(".sidenav");

// burgerIcon.addEventListener ("click", derouleBurger);

// function derouleBurger () {
//   sidenav.style.display = "block";
//   }   

burgerIcon.addEventListener ("click",derouleBurger);

function derouleBurger () {
  sidenav.classList.toggle("deroule-menu");
}


