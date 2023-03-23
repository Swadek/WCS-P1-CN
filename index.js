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

// NB ALEATOIRE : FONCTIONNEL (jusqu'à 19)
let num = () => Math.floor(Math.random()* quote.length);
// UTILISER LE CONSOLE.LOG SUIVANT POUR TESTER LA FONCTION PRECEDENTE :
//console.log(num());




// TABLEAU QUOTE : FONCTIONNEL AVEC FONCTION NUM()
// Tableau à 20 entrées "Facts"
const quote = [
"Le dernier homme à avoir serré la main de Chuck Norris est Jaime Lannister.",
"Chuck Norris peut faire de la bière en brassant de l'air.",
"Quand la tartine de Chuck Norris tombe, le beurre change de côté.",
"Un jour, les PowerRangers ont rencontré Chuck Norris. Maintenant on les appelle les Télétubbies.",
"Depuis que Chuck Norris a perdu son anneau, c’est le bordel en terre du milieu.",
"Chuck Norris peut faire un habit avec un moine.",
"Chuck Norris a frôlé la mort. Elle ne s’en est jamais remise.",
"Chuck Norris est capable de laisser un message avant le bip sonore.",
"Si Chuck Norris dort la lumière allumée, c’est parce que le noir a peur de lui.",
"Chuck Norris mine de la crypto-monnaie avec la calculette de sa montre Casio.",
"Un jour Chuck Norris a eu un zero en latin, depuis c'est une langue morte.",
"L'avenir se demande parfois ce que Chuck Norris lui réserve.",
"Hercule est un demi-dieu, Dieu est un demi-Chuck Norris",
"Chuck Norris a gagné un tournoi de poker avec des cartes pokémon.",
"Moïse a coupé la mer en deux. Chuck Norris l'a recollé en disant 'tu refais ça, je te pète la gueule'.",
"Quand il joue à qui veut gagner des millions, Chuck Norris peut prendre la vie du public.",
"L'Odyssée d'Ulysse est fortement inspirée d'une promenade en pédalo de Chuck Norris.",
"Chuck Norris ne cligne pas des yeux, ce sont ses paupières qui font des pompes.",
"Chuck Norris a passé le mur du son en twingo.",
"Chuck Norris peut étrangler quelqu'un avec un telephone sans fil."
];
// UTILISER LE CONSOLE.LOG SUIVANT POUR TESTER LES FACTS EN ALEATOIRE :
//console.log(quote[num()]);


// BOUTON RANDOM FACTS
// Appel de la classe bouton - des #id "Facts" 1, 2 & 3 :
const another = document.querySelector('.another');
const fact1 = document.querySelector('#facts1');
const fact2 = document.querySelector('#facts2');
const fact3 = document.querySelector('#facts3');

// AddEventListener sur bouton :
another.addEventListener('click', function() {
// Création des variables "quote" pour stocker l'index et donc le Fact en question :
  let quote1 = quote[num()];
  let quote2 = quote[num()];
  let quote3 = quote[num()];
// Tant que les "quote" 1, 2 & 3 ont le même numéro d'index du tableau quote, on relance un numéro aléatoire :
  while (quote1 === quote2 || quote1=== quote3 || quote2===quote3) {
      quote1 = quote[num()];
      quote2 = quote[num()];
      quote3 = quote[num()];
  }
  // Modification de l'id "Facts" 1 à 3 dans le HTML :
  fact1.innerHTML = quote1;
  fact2.innerHTML = quote2;
  fact3.innerHTML = quote3;
})
