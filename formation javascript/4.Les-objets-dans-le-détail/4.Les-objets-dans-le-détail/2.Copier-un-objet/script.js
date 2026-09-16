/* 
    1. L'erreur classique de référence.

    L'erreur classique est d'utiliser l'opérateur "=" pour copier une valeur de référence.
    Voyons un exemple avec un tableau;

*/
/*
const numbers = [1,2,3];
const numbersCopy = numbers; 
console.log(numbersCopy);

numbers.push(4);
console.log(numbersCopy);  //numbers et numbersCopy sont inter-relié
*/



/* 
    2. Alors comment copier ?

    Il existe plusieurs manière de faire, avec le spread operator [...], {...}, Object.assign(), Array.from(), .concat()

    Néanmoins, toutes ces façons de faire vont créer une copie superficielle, c'est à dire que seulement les valeurs primitives seront copiées, les tableaux ou objets imbriqués seront toujours référencés.

    Vous sentez le bug arriver ?
*/
/*
 const letters = ["a","b","c"];
 
 // copie avec spread operator. Ici ça fonctionne car valeurs primitives.
 const lettersCopy = [...letters];
 
 console.log(lettersCopy);
 letters.push("d");
 console.log(letters);
 console.log(lettersCopy);
 */
 
 const letters2 = ["a","b","c",{name: "Zoro"}];
 const letters2Copy = [...letters2];

 letters2[3].name = "Max";  // Change aussi letters2Copy.
console.log(letters2Copy);

letters2Copy[3] = {...letters2[3]}; // Fait une réel copy de l'élément letters2[3].
console.log(letters2Copy);

letters2Copy.name = "louis";
console.log(letters2Copy);
console.log(letters2);




/* 
    3. Faire une copie profonde, deep copy.


    A. On peut faire une copie profonde en copiant chaque niveau d'un objet "à la main".

    B. Seconde manière de faire, utiliser la méthode structuredClone() qui permet de deep-clone facilement.
    Malheuresement, cette méthode ne permet pas de cloner des méthodes.
*/
/*
const deepObj = {
    collection: {
        a: 1,
        b: 2,
        c: 3
    }
}

const deepCopy = {
    collection: {
        ...deepObj.collection
        // a: deepObj.collection.a,
        // b: deepObj.collection.b,
        // c: deepObj.collection.c
    }
}

deepObj.collection.a = "Lorem ipsum";
console.log(deepObj);
console.log(deepCopy);






*/