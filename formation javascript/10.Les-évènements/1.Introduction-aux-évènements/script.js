/* 
    Les événements sont au coeur du JavaScript côté navigateur, ils permettent de répondre à des actions effectuées par les utilisateurs.
*/

/* 
    1. .addEventListener(event, callback, option)
    
    Elle permet d'être à l'écoute d'un évenement particulier sur un élément, c'est à dire de déclencher une fonction callback quand un évènement a été déclenché sur un élément.
*/
    
const btn = document.querySelector(".btn");

btn.addEventListener("click", handleClick); // 
btn.addEventListener("click", handleClick2);
btn.addEventListener("click", handleClick3);

function handleClick(){
    console.log("CLICKED !");
};

function handleClick2(){
    console.log("CLICKED !");
};
btn.removeEventListener("click", handleClick2); //voir section removeEventListener(type, callbackListener)


function handleClick3(event){
    console.log(event);
};

// Fonction anonyme = danger
// Fonctionne mais les functions anonymes ne peuvent pas être remove
//btn.addEventListener("click", () => console.log("clicked"));


/* 
    L'objet d'évènement.

    Un objet d'évènement contenant des informations de ce dernier est TOUJOURS passé en argument à la fonction callback que vous définissez dans addEventListener().

    À vous de voir si vous voulez l'utiliser, ou pas.

    Règle : les callbacks d'addEventListener reçoivent automatiquement un objet event en premier argument.

    Objet event

• Créé automatiquement par le navigateur.
• Passé automatiquement à la fonction callback.
• Contient les informations sur l'événement (clic, touche, souris, etc.).
• Le nom "event" est un simple nom de variable.

*/




/* 
    .removeEventListener(type, callbackListener)

    Enlève un écouteur d'évènement d'un certain élément.
    Cela permet, dans certains cas, d'alléger le fonctionnement d'une application et d'avoir de meilleures performances.

    Attention, on ne peut qu'enlever des écouteurs d'évènements rajoutés avec la méthode addEventListnerner ET lorsque on a passé une fonction nommée et pas une fonction anonyme.
*/

// remove handleClick2 seulement. handleClick fonctionne encore
//btn.removeEventListener("click", handleClick2); 


/* 
    Déclarer un écouteur d'évènement en ligne.

    Element.onclick = EventListenerCallback;

    Trois gros désavantages de cette technique :
    - On ne peut pas rajouter plusieurs event listeners sur le même élément avec cette technique
    - On ne peut pas les enlever
    - On ne peut pas utiliser les paramètres supplémentaires d'addEventListeners()
*/

// btn.onclick =handleClick;  // Ne pas utiliser


/* 
    Rajouter des évènements dans le fichier HTML. Ne pas faire
*/