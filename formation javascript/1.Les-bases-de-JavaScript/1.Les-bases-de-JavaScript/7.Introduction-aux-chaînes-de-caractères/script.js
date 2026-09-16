/* 
    Les chaînes de caractères, ou string en anglais, permettent de représenter du texte.
*/

/* 
    1. Intégrer des expressions dans des chaînes de caractères.
*/

let money = 457;

/* Ancienne façon de faire */

const userAccountInfo1 = "il vous reste " + money + " euros sur votre compte.";
console.log(userAccountInfo1);

/* Compliqué de faire des retours à la ligne \n, d'intégrer des expressions, 
échapper les apostrophes/guillemets, etc... */


/* "Nouvelle" façon de faire (2015+), cela permet de prendre en compte les retours à la ligne, 
d'éviter d'échapper les apostrophes, et facilite grandement l'intégration d'expression dans les chaînes.  */
/* On peut faire des calculs et appeler des fonctions dans les accolades. */


//  `` = shift + accent grave  ça s'appelle Template litterals

const userAccountInfo2 = `il vous reste ${money +1} euros sur votre compte.`;
console.log(userAccountInfo2);
console.log(money); // money reste à 457 mais affiche 458 (457 +1) 


/* 
    2. La concaténation, ou l'assemblage de plusieurs chaînes.
*/

const chunk1 = "abc";
const chunk2 = "def";
const chunk3 = chunk1 + chunk2;
console.log(chunk3);
console.log(chunk3 + 99); // convertie 99 en string



/* 
3. Quelques astuces : Sélectionner un caractère, retourner la longueur, etc...
*/

const userName = "Léonard de Vinci";
console.log(userName.length);  // dot notation.
console.log(userName[3]);   // Bracket notation.
console.log(userName.indexOf("d")); // Quand la lettre "d" apparait pour la première fois?

/*
Chaînes de caractères (String)

✔️ On peut lire un caractère avec son index (texte[0]).
❌ On ne peut pas modifier un caractère avec son index (texte[0] = "A").
Une chaîne est immutable.
Pour la modifier, il faut construire une nouvelle chaîne (avec +, slice(), replace(), etc.).
*/