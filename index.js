const burgerIcon = document.querySelector(".burger-icon");
const sidenav = document.querySelector(".sidenav");




// // BOUTON RANDOM FACTS
// // Appel de la classe bouton - des #id "Facts":
const another = document.querySelector('.another');

const fact1 = document.querySelector('#facts1');
const fact2 = document.querySelector('#facts2');
const fact3 = document.querySelector('#facts3');
const fact4 = document.querySelector('#facts4');
const fact5 = document.querySelector('#facts5');
const fact6 = document.querySelector('#facts6');
const fact7 = document.querySelector('#facts7');
const fact8 = document.querySelector('#facts8');
const fact9 = document.querySelector('#facts9');



const quote1 = [
  "Le dernier homme à avoir serré la main de Chuck Norris est Jaime Lannister.",
  "Chuck Norris peut faire de la bière en brassant de l'air.",
  "Quand la tartine de Chuck Norris tombe, le beurre change de côté.",
  "Un jour, les PowerRangers ont rencontré Chuck Norris. Maintenant on les appelle les Télétubbies.",
  "Depuis que Chuck Norris a perdu son anneau, c’est le bordel en terre du milieu.",
  "Chuck Norris peut faire un habit avec un moine.",
  "Chuck Norris a frôlé la mort. Elle ne s’en est jamais remise.",
  "Chuck Norris est capable de laisser un message avant le bip sonore.",
  "Si Chuck Norris dort la lumière allumée, c’est parce que le noir a peur de lui.",
  "Chuck Norris mine de la crypto-monnaie avec la calculette de sa montre Casio."];
  
  const quote2 = [
  "Un jour Chuck Norris a eu un zero en latin, depuis c'est une langue morte.",
  "L'avenir se demande parfois ce que Chuck Norris lui réserve.",
  "Hercule est un demi-dieu, Dieu est un demi-Chuck Norris",
  "Chuck Norris a gagné un tournoi de poker avec des cartes pokémon.",
  "Moïse a coupé la mer en deux. Chuck Norris l'a recollé en disant 'tu refais ça, je te pète la gueule'.",
  "Quand il joue à qui veut gagner des millions, Chuck Norris peut prendre la vie du public.",
  "L'Odyssée d'Ulysse est fortement inspirée d'une promenade en pédalo de Chuck Norris.",
  "Chuck Norris ne cligne pas des yeux, ce sont ses paupières qui font des pompes.",
  "Chuck Norris a passé le mur du son en twingo",
  "Chuck Norris peut étrangler quelqu'un avec un telephone sans fil."];
  
  const quote3 = [
  "Un jour, Chuck Norris a acheté du poisson chez le boucher.",
  "Un jour, Lara Croft à voulu battre Chuck Norris, maintenant on l'appelle Dora L'exploratrice.",
  "Une seule Tortue Ninja à osé défié Chuck Norris. Maintenant on l'appelle Franklin.",
  "Chuck Norris peut faire rentrer 3 litres d'eau dans une bouteille d'un litre. En tassant bien.",
  "Un jour Chuck Norris a lu le dictionnaire. Il a compris l'histoire.",
  "Chuck Norris a déjà eu Alzheimer. Il s'en souvient très bien.",
  "Chuck Norris est vraiment le 100 000ème internaute à voir cette bannière et à remporter la voiture.",
  "Quand Chuck Norris fait une erreur lors de l'examen d'histoire, l'histoire change.",
  "Chuck Norris a invité Albert Einstein à son dîner de cons."
  ];
  
  
  let random1 = () => Math.floor(Math.random()* quote1.length);
  let random2 = () => Math.floor(Math.random()* quote2.length);
  let random3 = () => Math.floor(Math.random()* quote3.length);
  
// // AddEventListener sur bouton :
another.addEventListener('click', function() {
// // Création des variables "num" pour stocker l'index et donc le Fact en question :
  let num1 = quote1[random1()];
  let num2 = quote1[random1()];
  let num3 = quote1[random1()];
  
  let num4 = quote2[random2()];
  let num5 = quote2[random2()];
  let num6 = quote2[random2()];
  
  let num7 = quote3[random3()];
  let num8 = quote3[random3()];
  let num9 = quote3[random3()];
  
  while (num1 === num2 || num1=== num3 || num2===num3) {
      num1 = quote1[random1()];
      num2 = quote1[random1()];
      num3 = quote1[random1()];
  }
  
  while (num4 === num5 || num4=== num6 || num5===num6) {
      num4 = quote2[random2()];
      num5 = quote2[random2()];
      num6 = quote2[random2()];
  }
  
  while (num7 === num8 || num7=== num9 || num8===num9) {
      num7 = quote3[random3()];
      num8 = quote3[random3()];
      num9 = quote3[random3()];
  }
  
//   // Modification de l'id "Facts" 1 à 3 dans le HTML :
  fact1.innerHTML = num1;
  fact2.innerHTML = num2;
  fact3.innerHTML = num3;
  fact4.innerHTML = num4;
  fact5.innerHTML = num5;
  fact6.innerHTML = num6;
  fact7.innerHTML = num7;
  fact8.innerHTML = num8;
  fact9.innerHTML = num9;
})