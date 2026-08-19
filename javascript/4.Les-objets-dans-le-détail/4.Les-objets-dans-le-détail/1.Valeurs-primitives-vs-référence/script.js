/* 
    1. Valeurs primitives

    Les valeurs primitives sont les : string, number, bigint, boolean, undefined, symbol, null.
    Elles représentent des valeurs "simples" dans la mémoire : "abc", 15, true, etc...

*/
let userName1 = "Giovanni";
console.log(userName1);
let userName2 = userName1;
console.log(userName2);  //"Giovanni"

userName1 = "Lucas";
console.log(userName1);  //"Lucas"
console.log(userName2);  //"Giovanni"  parce que userName1 et userName2 sont indépendant.



/* 
    2. Les valeurs de référence.

    Les objets sont des valeurs de référence, c'est-à-dire qu'ils vont prendre une place spéciale dans la mémoire.
    Si on copie un objet dans une autre variable, nous créons une référence, nous ne créons pas une copie indépendante.
*/

let dog1 = {
    name: "Tom",
    breed: "Golden"
}

console.log(dog1);
let dog2 = dog1;
console.log(dog2); //"Tom"

dog1.name = "Max";
console.log(dog2); //"Max"

//Recréer une varible indépendante qui ne modifie pas la référence.
dog2 = {
    name: dog1.name,
    breed: dog1.breed
}
console.log(dog2); //"Max"
dog2.name = "Jules";
console.log(dog2); //"Jules"
console.log(dog1); //"Max"






/* 
    3. Pourquoi les chaînes ont des propriétés / méthodes ?

    Les valeurs primitives string, number, boolean et symbol sont transformées en objet lorsqu'on utilise l'opérateur "." qui sert à accèder à des propriétés.

    Cela permet d'avoir accès à des méthodes et des propriétés très pratiques.
*/

const str = "Lorem";
console.log(str.toUpperCase()); //"LOREM"
console.log(str[0]); //"LOREM"