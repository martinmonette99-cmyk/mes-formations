/* 
    Voici les évènements de pointage : click, dblclick, mouseup, mousedown.

    L'objet d'évènement fourni à la callback nous donnera donc des informations spécifiques au pointage.
*/

document.addEventListener("click", handleclick); // click
//document.addEventListener("dblclick", handleclick); // double click
//document.addEventListener("mousedown", handleclick); // double click
//document.addEventListener("mouseup", handleclick); // double click

function handleclick(e){
    console.log(e);
    document.querySelector(".clic-info").textContent = `Event: ${e.type}, X: ${e.pageX}, Y: ${e.pageY}`; // PageX pageY est la valeur de la page total depuis la gauche et depuis le haut
}



/* 
    Il existe également d'autres évenements en rapport avec la souris, sans le clic.

    Notamment : mouseover, mousemove, mouseout, mouseenter, mouseleave, wheel 
*/
    
const box = document.querySelector(".box");

//Fonctionne aussi sur l'enfant de .box à cause de la propagation des évenements.

//box.addEventListener("mousemove", () => console.log("Mousemove")); //déplacement de souris dans .box et enfants

//box.addEventListener("mouseenter", () => console.log("Mouseenter")); //quand la souris entre dans .box et enfants

//box.addEventListener("mouseleave", () => console.log("Mouseleave")); //quand la souris quitte .box et enfants

//box.addEventListener("mouseover", () => console.log("Mouseover")); //S'active à chaque passage sur le parent ou l'enfant . si on passe de parent-enfant ou enfant-parent ça s'active

//box.addEventListener("mouseout", () => console.log("Mouseout")); //S'active à chaque sortie du parent ou l'enfant . si on passe de parent-enfant ou enfant-parent ça s'active


document.addEventListener("wheel", () => console.log("Molette")); // si on bouge la molette
document.addEventListener("scroll", () => console.log("Molette")); // si on bouge la molette et qu'on peut scroller la page

