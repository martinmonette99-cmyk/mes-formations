/* 
    1. .split(separator)

    Cette méthode permet de transformer une chaîne en tableau à partir d'un séparateur.

    Exemple : 

    "abc".split("") devient ["a","b","c"]
*/

let string = "abc def ijk";
//("") aucun séparateur. chaque lettre et espace sera dans un espace du array
console.log(string.split(""));

//(" ")espace est le séparateur. abc dans index[0], def index[1]  ijk index[2]
console.log(string.split(" "));

// b est le séparateur. a dans index[0], c def ijk dans index[1]
console.log(string.split("b"));


/* 
    2. .join(separator)

    Celle-ci fait l'inverse de .split(), elle transforme un tableau en chaîne.
*/

let arr = ["a","b","c"];

console.log(arr.join(""));  // abc
console.log(arr.join(" "));  // a b c
console.log(arr.join(" 8 "));  // a 8 b 8 c


let test = "abcdef";

// Mwt chaque lettre dans un array, l'inverse, le change en string
console.log(test.split("").reverse().join(""));