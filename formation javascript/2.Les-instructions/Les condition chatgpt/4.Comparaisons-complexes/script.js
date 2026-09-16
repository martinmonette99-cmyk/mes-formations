/*
    Exercice 1

    Crée l'objet suivant :

    const user = {
        name: "Martin",
        age: 32,
        admin: true
    }

    Si l'utilisateur est administrateur ET qu'il a au moins 30 ans,
    affiche :

    "Accès autorisé"

    Sinon, affiche :

    "Accès refusé"
*/

   const user = {
        name: "Martin",
        age: 32,
        admin: true
    }

    if(user.admin = true && user.age >= 30) {
      console.log("Accès autorisé");
    }
    else {
      console.log("Accès refusé");
    }




/*
    Exercice 2

    Crée l'objet suivant :

    const employee = {
        name: "Julie",
        position: "Employee"
    }

    Si la position est "CEO" OU "Director",
    affiche :

    "Accès complet"

    Sinon, affiche :

    "Accès limité"
*/

    const employee = {
        name: "Julie",
        position: "Employee"
    }

    if(employee.position === "CEO" && employee.position === "Director" ) {
      console.log("Accès complet");
    }
    else {
      console.log("Accès limité");
    }



/*
    Exercice 3

    Crée l'objet suivant :

    const user = {
        admin: false
    }

    Utilise l'opérateur ! pour afficher :

    "Vous n'êtes pas administrateur"

    seulement si l'utilisateur n'est PAS administrateur.
*/

    // J'ai du changer user car conflit avec le 1er exercice
    const user2 = {
        admin: false
    }

    if(user2.admin !== true) {
      console.log("Vous n'êtes pas administrateur");
    }



/*
    Exercice 4

    Crée l'objet suivant :

    const player = {
        age: 27,
        admin: true,
        position: "Director"
    }

    Affiche :

    "Bienvenue"

    seulement si :

    - le joueur est administrateur
    ET
    - il a au moins 25 ans
    ET
    - sa position est "CEO" OU "Director"
*/

    // Je crois n'avoir ici que contourner le problème....
    const player = {
        age: 27,
        admin: true,
        position: "Director"
    }

    if(player.admin === true && player.age >= 25 && (player.position === "CEO" || player.position === "Director")) {
      console.log("Bienvenue");
    }
 



/*
    Exercice 5

    Crée l'objet suivant :

    const member = {
        age: 19,
        admin: false
    }

    Si le membre est administrateur
    OU
    s'il a au moins 18 ans,

    affiche :

    "Accès accordé"

    Sinon :

    "Accès refusé"
*/

    const member = {
        age: 19,
        admin: false
    }

    if(member.admin === true || member.age >= 18) {
      console.log("Accès accordé");
    }
    else {
      console.log("Accès accordé");
    }






/*
    Exercice 6

    Sans exécuter le code, prédis le résultat.

    const user = {
        admin: false,
        age: 40
    };

    if(user.admin || user.age >= 18) {
        console.log("A");
    }
    else {
        console.log("B");
    }

    Réponse : A (Je retiens la contraction user.admin)
*/