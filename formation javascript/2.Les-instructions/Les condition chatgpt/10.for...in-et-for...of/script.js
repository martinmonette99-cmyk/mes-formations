/* 
    1. Les boucles modernes for...in et for...of.

    for...in sert à itérer à travers des objets.

    for...of sert à itérer à travers des éléments itérables, comme les tableaux ou les chaînes de caractères.
*/


const person = {
  name: "Cyril",
  age: 35,
  height: 188,
  weight: 90
}

// Affiche les propriété de person (name, age, etc.) sans les valeurs.
for(const prop in person) {
  console.log(prop);
}



const fruits = ["🍓","🍇","🍑","🍎","🥭"];

// Affiche les valeurs de chaques propriétés ou éléments d'un tableau 
for(const fruit of fruits) {
  console.log(fruit);
}