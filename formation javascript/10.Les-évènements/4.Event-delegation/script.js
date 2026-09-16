/*
  L'event delegation permet d'avoir un code plus propre et de moins surcharger le navigateur d'écouteurs d'évènement.
*/
/*
const cells = document.querySelectorAll(".cell");
const txtInfo = document.querySelector(".txt-info");

cells.forEach(cell => cell.addEventListener("click", handleClick));

function handleClick(e){
  console.log(e.target);
  txtInfo.textContent = e.target.textContent // fonctionne e.target.textContent → le texte contenu dans ce <div> 
  };
  */
 
 /*
if(e.target.classList.contains("cell"))

Vérifie si l'élément cliqué (e.target) possède la classe CSS "cell" avant d'exécuter le code.

Décomposé :

e.target → l'élément cliqué.
classList → la liste de ses classes CSS.
contains("cell") → retourne true si la classe "cell" est présente, sinon false.
if (...) → exécute le code seulement si le résultat est true.

Le if ici sert car le click sur la bordure de la grille enclanche le addEventListener sans toucher au "cell". Ce qui fait un bug
 */
 
 
  const grid = document.querySelector(".grid");
 const txtInfo = document.querySelector(".txt-info");
 
 grid.addEventListener("click", handleGridClick)
 
 function handleGridClick(e){
    e.stopPropagation();
    console.log(e.target);
    if(e.target.classList.contains("cell"))
    {
      txtInfo.textContent = e.target.textContent // fonctionne e.target.textContent → le texte contenu dans ce <div> 
    }
  }
 

