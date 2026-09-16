/* 
    1. Itérer à travers un tableau.

    Vouloir itérer à travers un tableau est très courant et il existe plusieurs moyens d'y arriver.

    La boucle for. // méthode classique, un peu datée mais très efficace
    La boucle for...of. // méthode plus moderne (2015+)
    Les méthodes des tableaux (forEach, map, etc...). // méthodes classiques et pratiques

    Vous verrez souvent certaines personnes dirent que les boucles sont plus performantes que .forEach(), c'est vrai mais seulement notable quand on effectue des milliers d'opérations, ce qui est rarement le cas, mais pas impossible.

*/

const animals = ["cat", "dog", "elephant", "lion", "peacock"]

/* Avec une boucle for */ 

for(let i = 0; i < animals.length; i++)
{
    console.log(animals[i]);
}


/* Avec une boucle for...of */

for(const animal of animals)
{
    console.log(animal);
}



/* Avec .forEach */

animals.forEach((animal, index, array) => console.log(animal, index, array));

animals.forEach(animal => console.log(animal));
animals.forEach((_, index) => console.log(index));

/*  //forEach reçoit un seul argument : une fonction (le callback).
    // Et c'est cette fonction qui peut recevoir jusqu'à trois paramètres :
    // valeur index array

function forEach(callback, arr){
    callback(Valeur, index, array)
    callback(arr[i], i, arr)
}



le _, est pour passer le premier élément qui est la valeur
ici on affiche l'index à chaques boucle du forEach
animals.forEach((_, index) =>  
{    
    console.log(index);
});

*/
