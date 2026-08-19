/* 
    Les objets contiennent des méthodes pratiques venant de leur prototype(objet attaché à tous les objets sauf exception).
*/

const rocket = {
  model: "Falcon Heavy",
  price: 97,
  weight: 549,
  height: 70,
  diameter: 3.7,
  fuel: "Kerosene" 
}

// prototype sont des méthode ajouté
console.log(rocket);

/* 
    1. hasOwnProperty()

    Retourne un booléen indiquant la présence d'une propriété.
*/

console.log(rocket.hasOwnProperty("price")); //true ça existe
console.log(rocket.hasOwnProperty("cat"));  //false ça n'existe pas

 


/* 
    2. Object.keys()

    Retourne un tableau contenant les propriétés d'un objet sous forme de chaînes de caractères.
*/

console.log(Object.keys(rocket));
console.log(new Object({test: "Test"}));
console.dir(Object);




/* 
    3. Object.values()

    Retourne un tableau contenant les valeurs d'un objet.
*/

console.log(Object.values(rocket));



/* 
    4. Object.entries()

    Retourne un tableau contenant les propriétés-valeurs d'un objet sous forme d'un tableau contenant des sous-tableaux.
*/


console.log(Object.entries(rocket));


/* 
    5. Object.freeze()

    Cette méthode permet de "geler" un objet, rendant toute modification impossible.
    Attention, une fois gelé, on ne peut plus le degeler.

*/

Object.freeze(rocket);
rocket.color = "gray";
console.log(rocket.color); // n'a pu être crée car freeze


// fonctiom constructor transformé en class. sert à construire un objet
function Test(name, value) {
    this.name = name;
    this.value = value;
}

const obj1 = new Test("Test", 99);
console.log(obj1);

