/* 
    Il est très courant de vouloir créer des éléments en JavaScript.
    Découvrons ensemble la façon de faire classique.
*/

/* 
    1. Document : createElement(tagName)  

    Créer un objet Element en fonction de l'argument de type string fourni.
*/
/* 
    2. Node : appendChild(child)

    Rajoute un noeud enfant à la fin de la liste d'enfants de l'élément appelant.
*/
/* 
    3. EventTarget : addEventListener(event, callback)

    Rajoute un écouteur d'évenement à un élément, nous reviendrons très en détail sur cette méthode plus tard.
*/

const addLiBtn = document.querySelector(".create-btn");
const list = document.querySelector(".list");

addLiBtn.addEventListener("click", handleClick);

function handleClick(){
    
    // document.createElement("li") crée l'élément <li> en mémoire.
    // la variable li reçoit une référence vers cet élément.
    const li = document.createElement("li"); // 
    li.textContent = "hello world";
    
    // appendChild() ajoute un nœud (un élément) comme dernier enfant d'un autre élément.
    // ajoute cet élément au DOM, donc il devient visible.
    list.appendChild(li); // li sans guillemets est une variable. Elle contient une référence vers l'élément créé précédemment.
}  


const listeActivites = document.querySelector(".liste-activites");
const arrayOfActivities = ["Musculation", "Natation", "Yoga", "Crossfit"];

arrayOfActivities.forEach (activite => {
    
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  
  h2.textContent = activite;
  h2.classList.add("index-h2");
  li.appendChild(h2);
  listeActivites.appendChild(li);

});






