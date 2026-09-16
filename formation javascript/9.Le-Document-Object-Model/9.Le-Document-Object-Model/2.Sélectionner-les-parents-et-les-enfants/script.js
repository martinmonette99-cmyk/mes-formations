/*  
    Les élément imbriqués de notre page HTML deviennent des objets imbriqués du DOM après analyse d'un navigateur.

    <div>
        <p>Hello</p>
    </div>
    
    =>

    {
        tag: "div",
        content: "",
        children: [
            {
                tag: "p",
                content: "Hello"
            },
            ...
        ]
    }
    // 🔼 Ceci est une image pour vous aider à comprendre, ça ne représente pas les propriétés exactes utilisées.

    Découvrons les propriétés pratiques liées aux relations parents / enfants.
*/

/*
Un nœud (Node) est un élément de l'arbre du DOM.
Chaque partie du document HTML est représentée par un nœud :
- les balises HTML (<div>, <p>, <h2>, etc.) sont des nœuds d'élément (Element).
- le texte entre les balises est un nœud de texte (#text). les retours à la ligne et les espaces compte 
- les commentaires HTML (<!-- ... -->) sont des nœuds de commentaire (#comment).

Tous ces nœuds sont reliés entre eux par des relations de parent, d'enfant et de frère/sœur.
*/


const card = document.querySelector(".card")

console.log(card);  //div.card (parent)
console.log(card.childNodes); //Tout les noeuds de .card
console.log(card.children); // seulement les enfants html (éléments html)
console.log(card.children[1]); // second enfant html (éléments html)
console.log(card.firstChild); // premier noeud, ne pas confondre avec children qui est les éléments
console.log(card.firstElementChild); // premier élément html
console.log(card.lastChild); // dernier noeud
console.log(card.lastElementChild); // dernier élément html



// sibling (frère/sœur) fait référence uniquement aux autres nœuds ayant le même parent.
// Il ne fait jamais référence au parent lui-même.
// previousSibling et nextSibling permettent de se déplacer vers les frères et sœurs.
// Pour accéder au parent, on utilise parentNode ou parentElement.
 
 const title = document.querySelector("h2");
 
 console.log(title);
 console.log(title.nextSibling); // prochain noeud après h2, ici le retour à la ligne
 console.log(title.nextSibling.nextSibling); // prochain noeud.noeud après h2, ici le commentaire
 console.log(title.nextElementSibling);//Prochain élément après h2, ici p
 console.log(title.previousSibling); // ici le retour à la ligne
 console.log(title.previousElementSibling); // NULL car pas d'élément enfant avant h2, mais la div parent

 console.log(title.parentNode); // parentNode : renvoie le nœud parent (Element, Document ou DocumentFragment). Si le parent est un élément, la console affiche aussi tout son contenu (éléments, texte, commentaires).
 
 console.log(title.parentElement); //parentElement : renvoie l'élément parent uniquement. La console peut afficher son contenu (éléments, texte, commentaires), mais ceux-ci ne sont pas renvoyés par parentElement.
 
 console.log(title.nodeName); //nodeName : renvoie le nom du nœud (ex. "H1", "DIV", "#text", "#comment").
