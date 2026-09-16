/* 
    On a souvent envie de découper une partie d'un tableau en JavaScript.
    Il existe deux méthodes dont les noms peuvent porter à confusion : .slice() et .splice()
*/

/* 
    1. Array.prototype.splice(start, deleteCount, item1, item2, ...)

    Définition: Cette méthode supprime ou remplace une partie d'un tableau.

    Paramètres : départ, nombre d'éléments à supprimer, élément(s) à rajouter.

    Valeur de retour : Un tableau contenant les éléments supprimés.
*/

const fruits  = ["🍓","🍑","🍇","🍊","🍒"];

// à partir de index[0] on en supprime 2 et ajoute "🍒","🍒" 
const deletedElements = fruits.splice(0,2,"🍒","🍒","🍒" ); // ['🍒', '🍒', '🍒', '🍇', '🍊', '🍒']
console.log(fruits);
console.log(deletedElements); //Affiche les éléments supprimé



/* 
    1. Array.prototype.slice(start,end) start inclu, end non-inclu

    Définition: Retourne une copie superficielle d'une partie d'un tableau.

    ne modifie pas le tableau original

    fonctionne si la valeur est primitive. si objet retourne la référence

    Valeur de retour : Un nouveau tableau représentant la portion extraite.
*/

const fruits2  = ["🍓","🍑","🍇","🍊","🍒"];

console.log(fruits2.slice(1,2)); // ['🍑']
