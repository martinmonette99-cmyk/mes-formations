/* 
    Il est assez courant de vouloir changer la valeur de l'attribut d'un élément en JavaScript, comme "src", "class", "lang", "name", "type" etc...   

    Lorsque le DOM est créé à partir des fichiers fournis au navigateur, quasiment chaque attribut devient une propriété d'un objet représentant un élément.

    Seuls les attributs non-standards ne sont pas implémentés en tant que propriété. 
    Ces attributs non-standards seront manipulables via certaines méthodes.
*/

const kittyImg = document.querySelector("img");
console.log(kittyImg.src);
console.log(kittyImg.alt);
kittyImg.className = "kitty-img"; // Pour ajouté une class kitty-img à img
kittyImg.id = "Kitty1";    


/* 
    1. Element : attributes

    Retourne une collection live (NamedNodeMap) de tous les attributs d'un élément.
    Chaque attribut de cette liste est un objet contenant des informations sur l'attribut en question.
    On peut utiliser ce genre de liste itérable avec for...of ou les transformer en tableau avec [...nodemap], accédant  ainsi aux méthodes pratiques des tableaux.
*/

const kittyAttributes = kittyImg.attributes;
console.log(kittyAttributes); // voir la console.
console.log(kittyAttributes[0]); // src
console.log(kittyAttributes[3]); // alt

for(attr of kittyAttributes){
    console.log(attr); //affiche tout les attributs séparement
};



/*
    2. Créer un attribut personnalisé avec data-x

    On peut utiliser la notation data-attr pour créer des attributs de données contenant des valeurs utiles qu'on pourra ensuite retrouver avec la propriété dataset.

*/

console.log(kittyImg.dataset); // affiche les attributs perso créer avant dans html avec data-....



/* 
    3. Element : setAttribute(strAttrName, strAttrValue)

    Rajoute un attribut à un élément.
    Cette méthode est utile pour rajouter des attributs non-standards. 
    Tous les autres sont accessibles avec la dot notation.
    Les attributs non-standards sont assez peu utilisés, on peut les mettre en place avec cette méthode ou directement à la main dans l'HTML.
*/
kittyImg.setAttribute("customAttribute", "hello world");
console.log(kittyImg);
  


/* 
    4. Element : getAttribute(strAttrName)

    Donne la valeur d'un attribut.
    Fonctionne comme la dot notation dans beaucoup de cas. 
    Mais la dot notation retourne seulement les attributs existants, pas les attributs non conventionels.
*/
console.log(kittyImg.getAttribute("src")); //ressources/kitty1.jpg


/* 
5. Element : hasAttribute(strAttrName)

Renvoie true ou false en fonction de la présence d'un attribut.
*/

console.log(kittyImg.hasAttribute("src")); //ressources/kitty1.jpg
// true

// true - version sans avoir à passer par la méthode
console.log(kittyImg.src && true); //ressources/kitty1.jpg


/* 
    6. Element : removeAttribute(strAttrName)

    Supprime un attribut.

*/

kittyImg.removeAttribute("data-info");
console.log(kittyImg);
 


/* 
    7. Element : toggleAttribute(strAttrName)

    Supprime un attribut s'il est présent, le rajoute s'il ne l'est pas.
*/

// on ne peut plus utiliser l'input
document.querySelector("input").toggleAttribute("disabled");