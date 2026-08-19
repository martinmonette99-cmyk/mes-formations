/* 
    L'évènement scroll se déclenche quand le contenu de l'élément sur lequel il est attaché subit un scroll.
*/

const info = document.querySelector(".info");

document.addEventListener("scroll", handlescroll);

function handlescroll(e){
  console.log("scroll", e);
  info.textContent = `body ${window.scrollY}`;
}



/*
  L'évènement resize est disponible seulement sur l'objet window.
  Il se déclenche quand on réduit la fenêtre.  
*/

window.addEventListener("resize", () => console.log("RESIZED !"));

console.log(window.innerWidth); // écrit la largeur du viewport au moment où console.log le demande
console.log(window.innerHeight);// écrit la hauteur du viewport au moment où console.log le demande

