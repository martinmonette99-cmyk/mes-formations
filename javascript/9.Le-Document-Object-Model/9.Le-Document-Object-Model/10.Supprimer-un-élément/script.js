/* 
    1. Element : remove()

    Supprime un élément du DOM.
*/

document.querySelector("h1").remove();

/* 
    2. Element : removeChild(childNodeToRemove)

    Supprime un élément enfant de l'élément appelant du DOM.
*/

document.body.removeChild(document.querySelector("h2"));

/* 
    3. Element : textContent = "";

    Supprime tout le contenu d'un élément en le remplaçant par une chaîne vide (rien).


*/

//document.body.textContent = "";  éfface tout le texte de body
document.querySelector("h3").textContent = ""; // éfface le texte du h3



/* 
    4. Element : replaceChildren(elementsToAdd)

    Remplace le contenu de l'élément appelant par le ou les arguments fournis.
    Accepte des chaînes ou des noeuds en argument.
*/

const paragraphe = document.createElement("p"); // crée <p></p>
paragraphe.textContent = "Un peu de texte"; // met le texte dans la variable
document.body.replaceChildren(paragraphe); // remplace tout le texte



/* 
5. Element : replaceChild(newChild,oldChild)

Remplace un enfant représenté par le premier paramètre par le second.
*/  

const paragraphe2 = document.createElement("p"); // crée <p></p>
paragraphe2.textContent = "Du nouveau texte"; // met le texte dans la variable
document.body.replaceChild(paragraphe2,paragraphe); // remplace tout le texte