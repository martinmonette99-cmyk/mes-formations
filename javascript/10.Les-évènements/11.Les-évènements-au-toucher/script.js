/*
    Les "touch events" permettent de prendre en compte le "clic" d'un doigt sur un écran tactile.
*/


document.addEventListener("touchstart", () => console.log("touchstart"));
document.addEventListener("touchend", () => console.log("touchend"));
document.addEventListener("touchmove", () => console.log("touchmove"));

// fonctionne aussi en mode tactile
document.addEventListener("click", () => console.log("click")); 


/*
Quand faut-il distinguer souris et tactile ?

Seulement lorsque tu as besoin d'informations spécifiques.

Par exemple :

Souris :
    mousedown
    mouseup
    mousemove

Tactile :
    touchstart
    touchmove
    touchend

Aujourd'hui, on préfère souvent utiliser les Pointer Events, qui unifient les deux :

element.addEventListener("pointerdown", ...);
element.addEventListener("pointermove", ...);
element.addEventListener("pointerup", ...);

Ces évènements fonctionnent avec :

🖱️ la souris ;
👆 le doigt ;
✏️ un stylet.
*/