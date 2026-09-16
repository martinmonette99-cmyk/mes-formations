

//sélectionne le h1
const leH1 = document.querySelector("h1");

// écrit dans le h1
leH1.textContent = "Mon premier DOM dynamique";


// change le backgroundColor et fontSize
leH1.style.backgroundColor = "green";
leH1.style.fontSize = "40px";

//
console.log(leH1.parentElement);
console.log(leH1.nodeName);

//
const list = document.querySelector(".list1");
const newLi = document.createElement("li");

// change le text et la class du nouveau li
newLi.textContent = "Nouvel élément";
newLi.className = "list1-item";

// place dans le ul le nouveau li à la fin
list.appendChild(newLi);

// référencie tout les li
const listDeLi = document.querySelectorAll("li");
console.log(listDeLi.length);


/******************************************************************** */

const list2 = document.querySelector(".list1");
const createLi = document.createElement("li");

createLi.innerHTML = `
<h2>HTML</h2>
<p>Les balises structurent la page</p>
`;
createLi.className = "list1-item";
 list2.appendChild(createLi);

 /******************************************************************** */

/*
Exercice 1 — appendChild()

Utilise ton HTML actuel, en particulier ce <ul> :

<ul class="list">
</ul>

Je te donne le début du JavaScript :

const list = document.querySelector(".list");
const li = document.createElement("li");
Objectif

Obtenir le résultat suivant dans le DOM :

<ul class="list">
    <li>Bonjour</li>
</ul>
Contraintes
Utilise textContent.
Utilise appendChild().
N'utilise pas append().
N'utilise pas innerHTML.
*/

const listNewUl = document.querySelector(".list2");
const newLi2 = document.createElement("li");

newLi2.textContent = "Bonjour";
newLi2.className = "list2-item";

listNewUl.appendChild(newLi2);






