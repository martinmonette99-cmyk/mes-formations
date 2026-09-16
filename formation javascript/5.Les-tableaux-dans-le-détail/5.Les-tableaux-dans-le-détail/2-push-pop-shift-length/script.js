 /* 
    Il existe une floppée de petites méthodes permettant de rajouter ou de supprimer un élément d'un tableau.
*/

/* 
    Array.prototype.pop()

    Cette méthode supprime le dernier élément d'un tableau.
*/

const numbers = [1,2,3]

const numberpop = numbers.pop();
console.log(numbers);
console.log(numberpop); // le pop retourné dans une variable.


/* 
    Array.prototype.shift()

    Celle-ci supprime le premier élément d'un tableau.
*/

numbers.shift();
console.log(numbers);




/* 
Array.prototype.unshift(element1, element2, ...)

Rajoute les arguments qu'on lui passe au début d'un tableau.
*/

numbers.unshift(1);
console.log(numbers);



/* 
Array.prototype.push(element1, element2, ...)

Cette méthode rajoute les arguments qu'on lui passe à la fin d'un tableau.
*/

numbers.push(3);
console.log(numbers);



/* 
    La propriété length.

    La propriété length est utilisée dans de nombreux cas.

*/

// Connaître la longueur du tableau (nb d'éléments)

console.log(numbers.length);


// Pour sélectionner le dernier élément.

console.log(numbers[numbers.length-1]);


// Pour sélectionner l'avant dernier élément.

console.log(numbers[numbers.length-2]);

// Raccourcir un tableau
// la longueur du tableau = 1 élément
numbers.length = 1;
console.log(numbers);

// suppresion de tous les éléments
// la longueur du tableau = 0 élément
numbers.length = 0;
console.log(numbers);
