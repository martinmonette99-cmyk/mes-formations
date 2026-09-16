/*
    Exercice 1

    Crée une variable :

    age = 16

    Si age est supérieur ou égal à 18, affiche :

    "majeur"

    Sinon, affiche :

    "mineur"
*/

let age = 16;

if(age >= 18) {
    console.log("majeur")
}
else {
    console.log("mineur")
}




/*
    Exercice 2

    Crée une variable :

    note = 75

    Si note est supérieur ou égal à 90, affiche :

    "Excellent"

    Sinon si note est supérieur ou égal à 60, affiche :

    "Réussi"

    Sinon, affiche :

    "Échec"
*/

let note = 75;

if(note >= 90) {
    console.log("excellent");
}
else if(note >= 60) {
    console.log("réussi");
}
else {
    console.log("échec");
}




/*
    Exercice 3

    Crée une variable :

    role = "Employee"

    Si role est égal à "Admin", affiche :

    "Accès administrateur"

    Sinon si role est égal à "Employee", affiche :

    "Accès employé"

    Sinon si role est égal à "Moderator", affiche :

    "Accès modérateur"

    Sinon, affiche :

    "Rôle inconnu"
*/

const role = "Employee";

if(role === "Admin") {
    console.log("Accès administrateur");
}

else if(role === "Employee") {
    console.log("Accès employé");
}

else if(role === "Moderator") {
    console.log("Accès modérateur");
}

else {
    console.log("Rôle inconnu");
}
 




/*
    Exercice 4

    Crée une variable :

    temperature = -5

    Si temperature est supérieur à 25, affiche :

    "Il fait chaud"

    Sinon si temperature est supérieur ou égal à 0, affiche :

    "Il fait frais"

    Sinon, affiche :

    "Il fait froid"
*/

// Réponse exactement le même exercice



/*
Exercice 5

Crée une variable :

couleur = "rouge"

Si couleur est égale à "bleu", affiche :

"La couleur est bleue"

Sinon si couleur est égale à "rouge", affiche :

"La couleur est rouge"

Sinon, affiche :

"Couleur non reconnue"
*/


// Réponse exactement le même exercice



/*
    Exercice 6

    Sans exécuter le code, prédis ce qui sera affiché.

    let nombre = 10;

    if(nombre > 20) {
        console.log("A");
    }
    else if(nombre > 5) {
        console.log("B");
    }
    else {
        console.log("C");
    }

    Réponse : B
*/