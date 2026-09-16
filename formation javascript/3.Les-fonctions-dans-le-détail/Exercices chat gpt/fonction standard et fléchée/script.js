/*
Exercice 1 — La fonction la plus simple possible

Écris une fonction standard qui :

s'appelle direBonjour
ne reçoit aucun paramètre
affiche simplement :
Bonjour !

*/

function direBonjour() {
  console.log("Bonjour !");
}

direBonjour();


const direBonjourfleche  = () => console.log("Bonjour fléchée!");

direBonjourfleche();


//fonction fléché en version longue
const direBonjourfleche2 = () => {
  console.log("Bonjour fléchée!");
};

direBonjourfleche2();


/*
Exercice 2 — Ajouter un paramètre

Cette fois, ajoute un seul élément nouveau.

Écris une fonction standard qui :

s'appelle bonjour
reçoit un paramètre nommé nom
affiche : Bonjour Martin !
*/


function bonjour(nom){
  console.log("bonjour ", nom, "!");  // La virgule met déjà un espace.
}

bonjour("Martin");


const bonjourfleche = (nom) => console.log("bonjour ", nom, "fleche !");
bonjourfleche("Martin");

const bonjourfleche2 = (nom) => {
  console.log("bonjour ", nom, "fleche long !");
};

bonjourfleche2("Martin");




/*
Exercice 3 — Même principe avec deux paramètres
Crée une fonction standard nommée presentation qui reçoit :
prenom, age
presentation("Martin", 45);
Résultat attendu : Je suis Martin et j'ai 45 ans.
*/

function presentation(prenom, age) {
  
  console.log("Je suis", prenom, "et j'ai", age, "ans");
}

presentation("Martin", 45);


const presentationFleche = (prenom, age) => console.log("Je suis", prenom, "et j'ai", age, "ans");
presentationFleche("Fleche", 45);

const presentationFleche2 = (prenom, age) => {
  console.log("Je suis", prenom, "et j'ai", age, "ans");
};
presentationFleche2("Fleche long", 45);

/*
Exercice 4 — Une fonction qui fait un calcul
Crée une fonction standard nommée addition.
Elle doit recevoir deux paramètres :nombre1, nombre2
Puis elle doit afficher leur addition.
Appel attendu : addition(4, 6);
Résultat attendu: 10

*/

function addition(nombre1, nombre2){
  console.log(nombre1 + nombre2);
}

addition(4, 6);

const additionfleche = (nombre1, nombre2) => console.log(nombre1 + nombre2);
additionfleche(7, 8);

const additionfleche2 = (nombre1, nombre2) => {
  console.log(nombre1 + nombre2);
}
additionfleche2(10, 10);


/*
Exercice 5
Crée une fonction addition qui :

reçoit nombre1 et nombre2;
retourne leur somme avec return.

Ensuite, place le résultat dans une variable : const resultat = addition(4, 6);
Puis affiche resultat dans la console.

Commence par modifier uniquement cette ligne : console.log(nombre1 + nombre2);
Elle doit maintenant utiliser return.
*/

function addition2(nombre1, nombre2) {

const result = nombre1 + nombre2;
return result; 
}

const resultat = addition2(4, 6);
console.log(resultat);



/*
Exercice 6
Écris une fonction carre qui :

reçoit un seul paramètre nombre
calcule son carré (nombre × nombre)
retourne le résultat
puis affiche le résultat avec :
const resultat = carre(8);
console.log(resultat);
Résultat attendu : 64
*/

function carre(nombre){
  return nombre * nombre;
}

const resultat2 = carre(8);
console.log(resultat2);



/*
Exercice 7 — Utiliser le résultat retourné dans un autre calcul

Crée une fonction standard double qui reçoit un nombre et retourne ce nombre multiplié par 2.

Ensuite :
const resultat3 = double(5) + 3;
console.log(resultat3);
Résultat attendu : 13
La nouveauté est petite : la valeur retournée par la fonction sera immédiatement utilisée dans une autre addition.
*/


function double(nombre) {
  return nombre * 2;
}

const resultat3 = double(5) + 3;
console.log(resultat3);