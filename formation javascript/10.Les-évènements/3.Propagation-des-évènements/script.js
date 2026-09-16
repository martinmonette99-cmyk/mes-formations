/* 
    Lorsqu'un évènement est déclenché sur un élément du DOM, cet évènement en question va remonter l'arbre du DOM jusqu'à l'objet window.
    
    On appelle ça le "bubbling" ou bouillonnement en Français.

    Sur son passage, il va exécuter tous les écouteurs d'évènement qui écoutent cet évènement en question.
    
    S'il déclenche un autre écouteur d'évènement sur son passage, l'objet d'évènement qui lui sera passé représentera la cible qui a reçu cet évènement.

    La propagation traverse tous les parents, mais une fonction n'est exécutée que si le parent possède un addEventListener() pour le même type d'événement (click, mouseover, etc.).

    Si le parent possède un addEventListener et que tous ses enfants n'en ont pas. je click sur l'enfant tout en bas, ça remonte et le addEventListener s'active
*/

//Si je click sur container-3 ça l'affiche dans la console
//puis remonte le parent container-2 qui a aussi un addEventListener . il 
//enclanche donc et s'affiche dans la console. pour finir le container-1
// s'enclanche aussi.

//e.target : l'élément exact sur lequel l'événement s'est produit (celui qui a été cliqué, survolé, etc.). 

//e.currentTarget = l'élément qui possède le addEventListener()


const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
const container3 = document.querySelector(".container-3");

container1.addEventListener("click", handleClick1)
function handleClick1(e){
    console.log(e.target, "CONTAINER 1"); 
}

container2.addEventListener("click", handleClick2)
function handleClick2(e){
   console.log(e.target, "CONTAINER 2");
}

container3.addEventListener("click", handleClick3)
function handleClick3(e){
    e.stopPropagation(); // stop ici la propagation
    console.log(e.target, "CONTAINER 3");
}





