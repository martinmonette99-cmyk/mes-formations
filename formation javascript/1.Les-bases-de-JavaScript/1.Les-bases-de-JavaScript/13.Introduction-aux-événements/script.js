/* 
    1. Les événements.

    Les évènements permettent à l'utilisateur d'une page web d'intéragir avec celle-ci.
    Voici quelques évènements très connus : click, submit, input, mousedown/up/over, drag&drop, load, scroll, touch, etc ...

*/


const title = document.querySelector("h1");
title.addEventListener("click", handleclick);

function handleclick(){
    console.log("clicked !")
    title.textContent = `${title.textContent + "a"}`;
    title.style.backgroundColor = "crimson";
}