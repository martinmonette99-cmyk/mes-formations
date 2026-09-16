/*
    Exercice 1

    Crée deux constantes :

    age = 22
    ageMinimum = 18

    À l'aide d'un if, affiche :

    "Accès autorisé"

    seulement si l'âge est supérieur ou égal à l'âge minimum.
*/

const age = 22;
const ageMinimum = 18;

if(age >= ageMinimum) {
    console.log("accès autorisé");
}





/*
    Exercice 2

    Crée une constante :

    prenom = "Martin"

    Affiche :

    "Bonjour Martin"

    uniquement si la variable contient une valeur.

    Indice :
    Tu n'as pas besoin de comparer avec "Martin".
*/

const prenom = "martin";
if(prenom) {
    console.log("bonjour Martin");
}





/*
    Exercice 3

    Crée une constante :

    message = ""

    À ton avis, est-ce que le if sera exécuté ?

    Écris le code et vérifie ensuite dans la console.
*/

const message = "";
if(message) {
    console.log("message éxécuté"); //if non éxécuté car il équivaux à null.
}





/*
    Exercice 4

    Crée deux constantes :

    score1 = 45
    score2 = 60

    Affiche :

    "Le deuxième score est plus grand"

    seulement si cette affirmation est vraie.
*/

const score1 = 45;
const score2 = 60;

if(score1 < score2) {
    console.log("Le deuxième score est plus grand");
}





/*
    Exercice 5

    Sans regarder la réponse, essaie de prédire ce qui
    sera affiché dans la console.

    Ensuite seulement, exécute le programme.

    if (0) {
        console.log("A");
    }

    if ("Bonjour") {
        console.log("B");
    }

    if (null) {
        console.log("C");
    }

    if (100) {
        console.log("D");
    }

    Écris ta prédiction ici :

    Réponse :
    1- "A" pas affiché
    2- "B" affiché
    3- "C" pas affiché
    4- "D" affiché
*/