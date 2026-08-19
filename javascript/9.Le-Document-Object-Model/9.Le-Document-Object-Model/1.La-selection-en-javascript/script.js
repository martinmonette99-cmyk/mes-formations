/* 
    Les méthodes de sélection sont disponibles via l'objet document, mais aussi via tous les objets représentant des éléments. 
*/

console.log(window); // window représente la fenêtre (ou l'onglet) du navigateur dans laquelle
// JavaScript s'exécute. c'est objet global Parce que peu importe où tu es dans ton code, tu peux y accéder.
console.log(window.document); //pas obligé car window est l'objet principal. on peut écrire la ligne suivante:
console.log(document); //document est l'objet qui représente la page HTML actuellement chargée.

/* 
    1 document|element.querySelector(selecteurCSS)

    Méthode "récente" qui sélectionne un élément facilement, à l'aide de n'importe quel sélecteur, (h1, #main-title, .title, html body h1, etc ...).

    Retourne un objet représentant le premier élément trouvé.
*/

// document.querySelector est un sélectionneur d'élément
const mainTitle = document.querySelector("h1"); // sélectionne le 1er h1
console.log(mainTitle);
console.log(typeof mainTitle); //object
mainTitle.style.backgroundColor = "crimson";
//mainTitle.style.fontSize = "40px";



/* 
    2 document|element.querySelectorAll(selecteurCSS)

    Méthode "récente" permettant de sélectionner plusieurs noeuds du DOM. 
    Un noeud de DOM peut être du texte, un commentaire, ou encore un élément.
    
    Retourne une nodelist statique.

    Le fait qu'elle soit statique signifie qu'elle ne réagit pas à des changements ultérieurs sur les éléments qu'elle contient, elle reste toujours la même.
*/

const listElements = document.querySelectorAll("ul li"); // Sélectionne tout les ul li
console.log(listElements);
console.log(typeof listElements); //objet
//listElements.forEach(el => el.textContent = "Changed !")

//Modifie le texte des li par item. le string "index 0" devient "index 1" sans changer que c'est index[0]
listElements.forEach((el, index) => el.textContent = `Item ${index +1} !`) 

    
setTimeout(() => {  // Ajoute un timeout avant de passer au code suivant.
    document.querySelector(".list-item:nth-child(3)").remove()
    console.log(listElements); // élément enlevé de l'affichage mais pas du DOM
}, 1000) // sélectionne un élément après 1000 millisecondes


/* 
    3 .getElementsByClassName(strClassName)
    
    Retourne une HTMLCollection "live", qui réagit donc aux potentiels changements arrivant aux éléments qu'elle contient. 

*/
const listItem = document.getElementsByClassName("list-item");
console.log(listItem);
console.log(typeof listItem);


/* 
    4 document.getElementById(strID)
    
    Retourne un objet élément en fonction de l'ID passé en argument. 
    
    Cette méthode est seulement accessible via l'objet document, pas sur les éléments. 
*/
const title = document.getElementById("main-title");
console.log(title);


/* 
    5 document.getElementsByTagName(strTag)
    
    N'accepte qu'un élément en argument, pas de sélecteur contenant plusieurs éléments.
    
    Retourne une HTMLCollection.
*/

const inputs = document.getElementsByTagName("input");
console.log(inputs);
console.log(inputs["age"]);




