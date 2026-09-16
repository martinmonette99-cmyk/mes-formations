/* 
    1. Les chaînes ont des méthodes ...

    Les chaînes représentent un type primitif, mais un évenement se produit lorsqu'on essaye d'utiliser une méthode ou une propriété associée à l'objet String, elles se font transformer en objet sous le capot.

*/

let str = "lorem ipsum" 

console.log(str);
console.log(str.length);

// new crée le nouvel objet et String est le constructeur
console.log(new String("Lorem ipsum")); 



/* Découvrons certaines méthodes pratiques des chaînes de caractères. */

/* 
    1. String.prototype.includes(value)

    Retourne un booléen en fonction de la présence de l'argument dans la chaîne.
*/

const str2 = "Le chat saute."
console.log(str2.includes("c")); // true



/* 
    2. String.prototype.indexOf(index)

    Retourne l'index de l'argument dans la chaîne.
*/

const str3 = "Le renard saute."
console.log(str3.indexOf("r"));


/* 
    3. String.prototype.slice([indexStart, indexEnd[)

    Définition: Découpe une partie d'une chaîne et la retourne.
    Similaire à la méthode slice() des tableaux.

    Valeur de retour: une nouvelle chaîne contenant l'extrait choisi.


slice() ne modifie jamais la chaîne originale.
Elle retourne une NOUVELLE chaîne.

texte.slice(début)
→ retourne de "début" jusqu'à la fin.

texte.slice(début, fin)
→ retourne de "début" jusqu'à "fin" (fin exclue).

Exemples :

"Martin".slice(2)      → "rtin"
"Martin".slice(0, 3)   → "Mar"

Supprimer le dernier caractère :

texte = texte.slice(0, texte.length - 1);


*/


const str4 = "L'éléphant boit."
console.log(str4.slice(2,6)); // élép

// Pour enlever la dernière lettre d'une chaine de caractère
let getPhoneUser = "514 829-7753";
getPhoneUser = getPhoneUser.slice(0,getPhoneUser.length -1);
console.log(getPhoneUser);


/* 
    4. String.prototype.toLowerCase() et .toUppercase()

    Retourne la chaîne en majuscule ou en minuscule.
*/

const str5 = "L'étudiant lit un livre."

console.log(str5.toUpperCase());  // L'ÉTUDIANT LIT UN LIVRE.
console.log(str5.toLowerCase()); // l'étudiant lit un livre.




/* 
    5. String.prototype.trim()

    Enlève les espaces à l'avant et à l'arrière d'une chaîne.
    Il existe également .trimStart() et .trimEnd() si l'on veut seulement enlever les espaces du début ou de la fin.
*/

const str6 = "        tom     ";
console.log(str6.trim());  // "tom"


/*
    6. string.prototype.join(séparateur)

    join() transforme un tableau en chaîne de caractères.
    Les éléments du tableau sont assemblés dans l'ordre.
    Le texte passé entre les parenthèses est inséré entre chaque élément.

    Syntaxe : tableau.join(séparateur);

    join() retourne une nouvelle chaîne.
*/

const lettres = ["B", "o", "n", "j", "o", "u", "r"];

lettres.join("");
// "Bonjour"

lettres.join("-");
// "B-o-n-j-o-u-r"

lettres.join(" ");
// "B o n j o u r"


//pour mettre dans une variable
const bonjour = lettres.join("");




/*
Ajouter du texte dans le navigateur sans modifier le fichier HTML

const paragraphe = document.createElement("p");  // crée <p></p> dans paragraphe

paragraphe.textContent = variableTexte; // met le texte entre les balises <P> dans paragraphe

document.body.appendChild(paragraphe); // crée le  <p>texte</p> à la fin de la page

*/