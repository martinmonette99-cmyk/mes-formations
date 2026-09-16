/* 
    Les éléments retournés par les méthodes de sélection sont des objets.
    On peut donc les comparer pour savoir si on a affaire au même objet, ou pas.

    La comparaison se fera au niveau de la référence dans la mémoire.
    Si deux objets ont la même référence, ils représentent le même objet dans la mémoire.
*/

const list = document.querySelector(".list");
const secondItem = document.querySelector(".item-2"); // référence sur la class
const secondLi = document.querySelector("#item-2"); //référence sur id qui est le même que la class


console.log(secondItem === secondLi); // true


const obj1 = {name: "Giovanni"};
const obj2 = obj1;

console.log(obj1 === obj2); // true





