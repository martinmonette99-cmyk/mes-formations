/*
    Il existe des évènements utiles avec les animations et les transitions.

    Transitions : transitionend, transitioncancel, transitionrun, transitionstart

    Animation : animationstart, animationend
*/

const box = document.querySelector(".box");

box.addEventListener("transitionstart", () => console.log("transitionstart"));
box.addEventListener("transitionend", () => console.log("transitionend"));
box.addEventListener("transitionrun", () => console.log("transitionrun"));
/* Ici il y a 1s avant la transition, qui dure ensuite 0.4s. Run affiche le temps total, et start affiche le début. */

// on peut pas le voir ici mais si on enlève une class pendant la transition ça cancel.
box.addEventListener("transitioncancel", () => console.log("transitioncancel"));


//L'animation ici commence au refresh
box.addEventListener("animationstart", () => console.log("animationstart"));
box.addEventListener("animationend", () => console.log("animationend"));




