/* 
    Les formulaires sont des élèments importants du web.
    Ils possèdent beaucoup d'évènements qu'il faut maitrîser en JavaScript.

    Notez que les formulaires ont beaucoup de potentielles utilités.

    On peut évidemment s'en servir afin d'envoyer des données vers un serveur.

    Mais on peut aussi très bien les utiliser uniquement côté Front, comme pour pas mal de générateurs CSS par exemple.

    https://neumorphism.io/#e0e0e0

    Dans tous les cas, il faut bien les connaître.
*/




/* 
    1. submit

    Un écouteur d'évènement se déclenche par défaut pour celui-ci dès qu'on clique sur un bouton qui se trouve dans un formulaire.

    Il provoque un rafraîchissement de la page car il essaye d'envoyer les données sur la même page si on ne spécifie aucun attribut à l'élément form.
*/

const form = document.querySelector("form");

form.addEventListener("submit", handlesubmit);

function handlesubmit(e){
    e.preventDefault(); // Empeche le submit de refresh la page et d'effacé le console.log
    console.log("Form submited !");
     form.reset();  // reset seulement les inputs 
};


/* 
    2. input

    Cet évènement se déclenche à chaque fois qu'il y a un changement dans un input.

    Pratique pour faire de la validation de données côté Front. (animation, UX, etc...)
*/
 
const nameInput = document.querySelector("#name");
const checkbox = document.querySelector("input[type='checkbox']");

nameInput.addEventListener("input", handleInput);
checkbox.addEventListener("input", handleInput);

function handleInput(e){
    console.log(e.target.value);
// e         : objet d'évènement passé automatiquement au callback.
// target    : élément HTML qui a déclenché l'évènement.
// value     : valeur actuelle de cet élément (ex. le texte d'un <input>).
// console.log() : affiche cette valeur dans la console.
};

/* 
    3. change

    Cet évènement ressemble à input mais ne se déclenche que lorsque un input perd le focus.

    Pour les inputs checkbox ou radio, l'effet est identique.
*/

//const nameInput = document.querySelector("#name");

nameInput.addEventListener("change", () => console.log("Lost focus"));


/* 
    4. invalid

    Celui-ci permet de déclencher le gestionnaire d'évènement quand on essaye d'envoyer un formulaire qui contient des potentielles erreurs.

    Par exemple si je rentre un texte au mauvais format dans un input type="email".
*/

    const emailInput = document.querySelector("#email");

    emailInput.addEventListener("invalid", () => console.log("mail invalide"));


    // Pour changer le message d'erreur dans la boxe au submit, on utilise setCustomValidity("Votre message")
    emailInput.setCustomValidity("Erreur dans le email");

/* 
    Pour enlever complètement le message d'erreur, appelez cette fonction avec une chaîne vide.
    Attention, cela va potentiellement envoyer le formulaire avec des données mal formées. à faire au niveau du submit
*/



/*
    5. focus et blur.

    L'évènement focus est déclenché quand un élément reçoit le focus, comme lorsqu'on clique sur un input.

    L'évènement blur est déclenché lorsqu'un élément perd le focus, comme lorsqu'on clique ailleurs.
*/

// const nameInput = document.querySelector("#name");

nameInput.addEventListener("focus", () => console.log("Focus"));
nameInput.addEventListener("blur", () => console.log("Lost focus"));
window.addEventListener("focus", () => console.log("Focus")); // quand on sort et rentre dans la page web
