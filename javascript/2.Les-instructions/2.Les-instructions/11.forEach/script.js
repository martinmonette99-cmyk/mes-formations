/*
for : je dois dire comment parcourir le tableau ET quoi faire avec chaque élément.

forEach() : JavaScript se charge du parcours. Je dis seulement quoi faire avec chaque élément.

forEach() est une méthode des tableaux.

• Parcourt automatiquement chaque élément d'un tableau.
• Exécute un callback une fois par élément.

Le callback peut recevoir :

(el)                  → élément courant
(el, index)           → élément + position
(el, index, array)    → élément + position + tableau complet

Ce qu'il faut retenir

Le callback ne tourne jamais tout seul.

C'est forEach() qui dit :

« Tiens, prends cette valeur. »

Puis :

« Maintenant prends celle-ci. »

Puis :

« Et maintenant celle-là. »

Le callback ne fait qu'exécuter le travail demandé avec la valeur qu'il reçoit.


*/

/*
Exercice 1 — Premier contact

On commence très simplement.

Tu as ce tableau :

const nombres = [12, 7, 25, 4, 18];
Objectif

Affiche chaque nombre dans la console.
*/

const nombres = [12, 7, 25, 4, 18];

nombres.forEach(el => console.log(el) 
);

// avec fonction standard
nombres.forEach(function afficher(el) {
    console.log(el);
});


/*
Faire autre chose que console.log()

Tu as ce tableau :

const nombres = [12, 7, 25, 4, 18];
Objectif

Affiche le texte suivant dans la console :

Le nombre est : 12
Le nombre est : 7
Le nombre est : 25
Le nombre est : 4
Le nombre est : 18
Contraintes
Fais-le avec forEach().
Ne cherche pas à utiliser l'index.
Ne crée pas de nouveau tableau.
Tu peux utiliser ce que tu connais déjà (console.log, template literals, etc.).
*/

const nombres2 = [12, 7, 25, 4, 18];

nombres2.forEach(el => console.log(`Le nombre est ${el}`));


/*
J'aime les Chat
J'aime les Chien
J'aime les Lapin
J'aime les Renard
*/


const animaux = ["Chat", "Chien", "Lapin", "Renard"];

animaux.forEach(el => console.log(`j'aime les ${el}s`));


/*
Objectif

Affiche ceci :

----------------
Ville : Montréal
----------------
Ville : Québec
----------------
Ville : Sherbrooke
----------------
Ville : Gatineau

*/
const villes = ["Montréal", "Québec", "Sherbrooke", "Gatineau"];

villes.forEach(el => {
    console.log("------------------")
    console.log(`ville : ${el}`)
}); 
    


/*
Objectif

Affiche exactement ceci :

***
Fruit : Pomme
Bon appétit !

***
Fruit : Banane
Bon appétit !

***
Fruit : Orange
Bon appétit !

***
Fruit : Kiwi
Bon appétit !

Il y a une ligne vide entre chaque fruit.

*/


const fruits = ["Pomme", "Banane", "Orange", "Kiwi"];

fruits.forEach(el => {
    console.log("***")
    console.log(`Fruit : ${el}`)
    console.log("Bon appétit !");
    console.log("");
}); 


/*
Objectif

Affiche ceci :

=====
Nombre : 5
Le double est : 10

=====
Nombre : 8
Le double est : 16

=====
Nombre : 2
Le double est : 4

=====
Nombre : 14
Le double est : 28

Contraintes
Utilise seulement forEach().
Pas d'index.
Pas de nouveau tableau.
Tu peux faire des calculs avec el.

*/

const nombres3 = [5, 8, 2, 14];

nombres3.forEach(el => {
    console.log("=====");
    console.log(`Nombre : ${el}`);
    console.log(`Le double est : ${el * 2}`);
    console.log("");
})


/*
Écris un forEach() qui affiche :

Index : 0
Animal : Chat

Index : 1
Animal : Chien

Index : 2
Animal : Lapin

Index : 3
Animal : Renard
*/

const animaux2 = ["Chat", "Chien", "Lapin", "Renard"];

animaux2.forEach((el, index) => {
    console.log(`Index : ${index}`);
    console.log(`Animal : ${el}`);
    console.log("");
})

/*
Nom : Martin
Âge : 53

Nom : Julie
Âge : 28

Nom : Paul
Âge : 41
*/

const personnes = [
    {
        nom: "Martin",
        age: 53
    },
    {
        nom: "Julie",
        age: 28
    },
    {
        nom: "Paul",
        age: 41
    }
];

personnes.forEach((el, index) => {
    console.log(`Personne : #${index +1}`);
    console.log(`nom : ${el.nom}`);
    console.log(`age : ${el.age}`);
    console.log("");
})
