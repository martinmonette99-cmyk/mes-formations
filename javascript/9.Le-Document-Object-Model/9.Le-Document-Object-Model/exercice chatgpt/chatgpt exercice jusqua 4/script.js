/*
Exercice 1 — Sélectionner un élément

Dans ton fichier JavaScript :

Sélectionne le premier élément <h1> avec querySelector.
Place-le dans une variable appelée titre.
Affiche titre dans la console.

Tu dois seulement écrire les deux lignes nécessaires.
*/

const titre = document.querySelector("h1");

console.log(titre);




/*
Exercice 2 — Modifier le texte

À partir de ton code actuel, ajoute une seule ligne pour que le texte du <h1> devienne :

Bienvenue sur mon site !
*/

titre.textContent = "Bienvenue sur mon site !"

/*
Exercice 3 — Modifier le style

Sans créer de nouvelle variable, rends le fond du <h1> bleu.

Indice : tu dois utiliser la propriété style.

Écris uniquement la ligne de code qui modifie la couleur de fond.
*/

titre.style.backgroundColor = "blue";
titre.style.backgroundColor = "";

/*
Cette fois, sans créer de nouvelle variable, modifie la taille de la police du <h1> à 40px.

Indice : la ligne existe déjà en commentaire dans ton fichier JavaScript.

Colle uniquement ton code.
*/

titre.style.fontSize = "40px";
titre.style.fontSize = "";


/*
Sans créer de nouvelle variable, fais en sorte que les quatre <li> affichent le texte suivant :

Élément 1
Élément 2
Élément 3
Élément 4
Contraintes
Tu dois utiliser querySelectorAll.
Tu dois utiliser forEach.
Tu ne peux pas écrire quatre lignes différentes.
Tu ne peux pas copier la ligne de ton cours telle quelle, car le texte est différent.

Tu as déjà tout ce qu'il faut dans tes fichiers pour réussir cet exercice.
*/

//Modifie le texte des li par item. le string "index 0" devient "index 1" sans changer que c'est index[0]

//const listElements = document.querySelectorAll("ul li"); // Sélectionne tout les ul li
//listElements.forEach((el, index) => el.textContent = `Item ${index +1} !`) 

const listElements = document.querySelectorAll(".list-item");

listElements.forEach((el, index) => el.textContent = `Élément ${index +1}`);

/*
Exercice 4 (un peu plus de réflexion)

Cette fois, je ne vais plus te dire quelle méthode utiliser.

Objectif :

Modifie uniquement le troisième <li> pour qu'il affiche :

Je suis le troisième !
Contraintes
Tu ne dois modifier qu'un seul élément.
Tu ne dois pas utiliser forEach.
Tu peux utiliser n'importe quelle méthode qui apparaît dans tes quatre fichiers.
*/

const element3 = document.querySelector(".list-item:nth-child(3)");
element3.textContent = "Je suis le troisième !";

/*
Exercice 5
Objectif

Affiche dans la console combien il y a de champs <input> dans le formulaire.

Contraintes
Tu ne dois pas compter à la main.
Tu dois utiliser une méthode qui apparaît dans tes fichiers.
Tu ne dois afficher qu'un seul nombre dans la console.

Je ne te dirai pas quelle méthode utiliser. Réfléchis à ce que tu as vu dans les quatre fichiers.

💡 Petit indice de réflexion (pas un indice de code) :

Tu n'as pas besoin de sélectionner chaque <input> individuellement. Une seule sélection suffit
*/

// const inputs = document.getElementsByTagName("input");
// listElements.forEach((el, index) => el.textContent = `Item ${index +1} !`) 

const form = document.getElementsByTagName("input");
console.log(form);

//form.forEach((el, index) => let i = index) 


/*
Exercice 6 — Choisir la bonne méthode

Tu dois modifier uniquement le champ de texte "Nom" pour que sa valeur devienne :

Martin
Contraintes
Tu ne dois créer qu'une seule variable.
Tu choisis toi-même la méthode de sélection.
Tu ne peux pas utiliser querySelectorAll(), forEach(), ni aucune boucle.
Ce que je veux que tu réfléchisses

Dans le HTML, le champ ressemble à ceci :

<input type="text" id="name">

Pose-toi les questions suivantes :

Cet élément possède-t-il quelque chose qui le rend unique ?
Si oui, quelle méthode de sélection est la plus logique parmi celles que tu connais ?

⚠️ Petit défi supplémentaire :

Tu connais maintenant plusieurs méthodes :

querySelector
getElementById
getElementsByClassName
getElementsByTagName

Je ne veux pas seulement que ton code fonctionne. Je veux que tu choisisses la méthode la plus appropriée. C'est cette réflexion qui fera de toi un bon développeur.
*/

const martin = document.getElementById("name");
martin.value = "Martin";

/*
Exercice 1 — Sélection

Sans utiliser getElementById().

Sélectionne le titre (<h1 id="main-title">) avec querySelector() et change son texte pour :

Bienvenue Martin
*/

document.querySelector(".title").textContent = "Bienvenue Martin";

/*
Exercice 3 — Parent

À partir de cette ligne :

const titre = document.getElementById("main-title");

Écris une seule ligne qui affiche le parent du titre dans la console.
*/

const titre1 = document.getElementById("main-title");

console.log(titre1.parentElement);


/*
Exercice 6 — Choisir le bon sélecteur

Tu veux sélectionner uniquement le troisième <li>.

Quelle ligne écris-tu ?
*/

const troisieme = document.querySelector(".list-item:nth-child(3)");
console.log(troisieme.outerHTML);

/*
Exercice 8 — Le petit piège 😄

À partir de :

const titre = document.getElementById("main-title");

Complète les deux lignes :

console.log(titre.__________); // Le parent

console.log(titre.__________); // Les enfants
*/

const titre2 = document.getElementById("main-title");

console.log(titre2.parentNode); // Le parent
console.log(titre2.children); // Les enfants



/***************************************************************** */

const newH1 = document.querySelector("h1");

const nbDeli = document.querySelectorAll("li");
const nbDeInput = document.querySelectorAll("input");

newH1.textContent = "Exercice DOM"

newH1.style.backgroundColor = "blue";

console.log(newH1.nodeName);
console.log(newH1.parentElement);

console.log(nbDeli.length);
console.log(nbDeInput.length);






