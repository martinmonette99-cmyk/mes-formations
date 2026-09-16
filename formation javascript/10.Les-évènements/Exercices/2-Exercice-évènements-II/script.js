/*
    Faites-en sorte que le cercle suive votre souris.
    Le pointeur de votre souris doit se trouver parfaitement au milieu du cercle.
*/
/*
const cercle = document.querySelector(".circle");
//const demiCercle = cercle.getBoundingClientRect().width / 2;

document.addEventListener("mousemove", handleMouse);

function handleMouse(event){
    cercle.style.left = (event.clientX - (cercle.getBoundingClientRect().width / 2)) +"px";
    cercle.style.top = (event.clientY - (cercle.getBoundingClientRect().height / 2)) +"px";
    
};
*/
/* corrigé ***************************************************************************/

const circle = document.querySelector(".circle");

document.addEventListener("mousemove", handleCircle);

function handleCircle(event){

    circle.style.transform = `translate(calc(${event.pageX}px -50%), calc(${event.pageY}px -50%))`

}







