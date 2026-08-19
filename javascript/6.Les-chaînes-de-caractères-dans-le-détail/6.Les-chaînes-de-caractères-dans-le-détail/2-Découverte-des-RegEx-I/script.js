/* 
    1. Qu'est-ce qu'une RegEx ou RegExp ?

    Les expressions régulières (ou rationnelles) représentent des modèles de chaîne de caractères.
    Elles vont permettre de détecter la présence d'un certain modèle dans une chaîne, ou pas.

    On peut s'en servir pour valider un email, un numéro de téléphone, une adresse, ou simplement pour retrouver un mot dans un texte. 

    On peut construire une regex de deux façons différentes.

    I. const regex = new RegExp("/abc/")  construit un objet

    II. const regex = /abc/  
    
    La seconde est plus populaire, mais ne peut utiliser d'expressions JS, donc à voir au cas par cas.
*/

const regex = /abc/; 

// .test = Teste si une chaîne de caractères correspond à l'expression régulière et retourne un booléen (si il le contient)
console.log(regex.test("abc")); // true
console.log(typeof regex); // object
console.dir(regex);  // Pour ouvrir regex et montrer les propriété et prototype



/*    
    2. Les options (drapeaux).

    On peut rajouter des lettres à la fin d'une regex afin de lui rajouter des fonctionnalités supplémentaires.


    A. 
    /g => la lettre g signifie qu'on teste la chaîne globalement, et qu'on ne s'arrête pas après la première correspondance.
    Cela ne va pas avoir d'effet sur certaines méthodes, mais la méthode match() renverra par exemple l'ensemble des correspondances.

    B.
    /i => la recherche n'est pas sensible à la casse.
    /a/i.test("a") // true
    /a/i.test("A") // true

    etc...
*/

// La méthode match() permet d'obtenir le tableau des correspondances entre la chaîne courante et une expression rationnelle.
console.log("aaa".match(/a/)); //voir la console
console.log("aaa".match(/a/g)); //voir la console

console.log(/a/g.match("aaa")); // /a/g.match ne fonctionne pas car match viens du prototype string, pas regex.

console.log(/a/i.test("a"));  // true
console.log(/a/i.test("A"));  // true
console.log(/a/.test("A"));   // false




/* 
    3. "Classe de caractères" : N'importe quel caractère de la liste entre les crochets. 

     // entre crochet [] c'est une liste
    /[a7y]/ correspond à la première occurence de a, ou 7, ou y.
    /[e-l]/ un caractère entre e et l compris.  // Grâce à -
    /[2-4]/ un caractère entre 2 et 4 compris.  // Grâce à -


    Il existe des alternatives syntaxiques à ces classes qui permettent de créer une regex rapidement, mais il faut connaître les symboles par coeur.
    
    \w  Correspond à tous les chiffres, les lettres et les underscores, équivalent à [a-zA-Z0-9_]
    \d  Correspond à un chiffre de 0 à 9, équivalent [0-9];
    \s	Correspond à tous les sauts à la ligne.
    .   Le point seul, correspond à tous les caractères sauf un retour à la ligne. ex : /./
    \r  Correspond à un retour à la ligne quand du texte est déjà écrit (carriage return).
    \n  Correspond à une nouvelle ligne sans carriage return, comme quand on enchaîne plusieurs sauts de ligne sans rien écrire.
    \t  Correspond à un tab

    \W  Correspond à tout ce qui **n'est pas** une lettre, un chiffre ou un underscore, équivalent à [^a-zA-Z0-9_], le ^ (seulement dans une classe) signifant "tout ce qui n'est pas ce qui suit".
    \D  Tout ce qui n'est pas un digit, équivalent à [^0-9];
    \S	Correspond à tout ce qui n'est pas un retour à la ligne(tous les caractères).
*/


const classRegexTest = /[a-m]/
console.log(classRegexTest.test("c")); //true
console.log(classRegexTest.test("p"));  //false

const classRegexTest2 = /[0-7]/
console.log(classRegexTest2.test("5")); //true
console.log(classRegexTest2.test("9")); //false

const classRegexTest3 = /\d/
console.log(classRegexTest3.test("9")); //true
console.log(classRegexTest3.test("a")); //false

const classRegexTest4 = /\D/
console.log(classRegexTest3.test("8")); //true
console.log(classRegexTest3.test("$")); //false
console.log(classRegexTest3.test("a")); //false



/* 
    4. Les caractères échappés.

    Que faire quand on recherche un caractère qui est déjà utilisé dans les symboles des regex ? Il faut l'échapper, c'est à dire mettre un anti-slash devant.

    \.  pour rechercher un point
    \\  pour rechercher un antislash
    Ou encore : \? \$ \+ \*
*/

const escapedRegex = /\// // Cherche un "/"
console.log(escapedRegex.test("234423 / 5464")); // true


