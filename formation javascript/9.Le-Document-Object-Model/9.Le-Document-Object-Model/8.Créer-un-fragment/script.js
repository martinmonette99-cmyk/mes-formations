/* 
    1. Utiliser un fragment avec Document : createDocumentFragment()

    Les fragments permettent de rajouter du contenu sans créer un container pour rien.
    Les éléments contenus dans le fragment se rajoutent tout simplement dans l'élément souhaité. 

*/

const title1 = "A random title";
const title2 = "Another title";

const fragment = document.createDocumentFragment();

const h1 = document.createElement("h1");
h1.textContent = title1;
fragment.appendChild(h1);  //rajoute a fragment le h1

const h2 = document.createElement("h2");
h2.textContent = title2;
fragment.appendChild(h2);   //rajoute a fragment le h2

//appendChild() sert à ajouter un nœud (un élément) comme dernier enfant d'un autre nœud. 
//Si ce nœud existe déjà ailleurs, il est déplacé plutôt que copié.
document.body.appendChild(fragment);    //ce n'est pas fragment qui est ajouté au HTML. Ce sont ses enfants.



