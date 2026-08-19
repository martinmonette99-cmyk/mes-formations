/* 
  1. La propriété "style"

  Elle peut : 
  A. Retourner le style en ligne d'un élément.
  B. Changer le style en ligne d'un élément si on modifie la valeur d'une de ses propriétés(setter).

  element.style.backgroundColor = "red";

  Notez le camelCase pour le nom des propriétés et la chaîne pour la valeur.
  Attention, on parle ici de style en ligne, donc de style avec une spécificité très haute.

  Si du style inline est déjà présent, ça ne le supprime pas mais le rajoute à la fin de ce dernier.
*/

const box = document.querySelector(".box");
console.log(box.style);
box.style.backgroundColor = "blue"; // a été rajouté au style en ligne
console.log(box.style.backgroundColor); //blue
//box.setAttribute("style", "backgroundColor: gold"); détruit tout les autres style en ligne de .box

console.log(box.style.height); // Ne s'affiche pas car pas style en ligne
console.log(window.getComputedStyle(box).height); // pour afficher du style pas en ligne



