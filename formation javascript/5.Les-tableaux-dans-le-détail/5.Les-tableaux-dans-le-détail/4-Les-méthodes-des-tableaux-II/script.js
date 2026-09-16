/* 
    1. Array.prototype.reduce(callback(accumulator, currentValue, currentIndex, array), valeurInitiale)

    Définition: Accumule chaque valeur d'un tableau à une valeur initiale (initial value).
    Si une valeur initiale n'est pas fournie, le premier élément du tableau est utilisé.
    
    Exemples : Permet de faire des moyennes, d'accumuler des valeurs et de résoudre toutes sortes de problèmes.


    Valeur de retour: l'accumulateur après toutes les opérations.

*/

const marks = [18,5,17,12,20,16,14];

//0 est valeur initial. si pas là prend le premier élément du tableau.
// mais si 1er élément est pas un chiffre = erreur.
const sum = marks.reduce((acc, mark) => acc + mark, 0);   
console.log(sum);

const sumMoyenne = marks.reduce((acc, mark) => acc + mark, 0 / marks.length);   
console.log(sumMoyenne);

/* 
    2. Array.prototype.sort(callback(firstEl, secondEl))

    Définition: Permet de trier des chaînes de caractères, des nombres, des objets, etc...

    Valeur de retour : Le même tableau trié.

    Utilise un algo d'insertion implémenté différemment suivant chaque navigateur.

    Exemple : 

    base
    [10,4,12]

    étape 1
    |partie triée|
    [|4,10|,12]

    étape 2
    Si 12 est plus grand que 10 il est à sa place, fin du tri.
    [|4,10,12|]
*/

const letters = ["z","b","a","d","e"];
const numbers = [10,55,2,250,500,85];

letters.sort();
console.log(letters);

numbers.sort((a,b) => a - b); // a - n nbr negatif, donc à trier. 
console.log(numbers);

numbers.sort((a,b) => b - a); // a - n nbr negatif, donc à trier inverse. 
console.log(numbers);


// On peut aussi trier des tableaux d'objets
const store = [
    {
        item: "Cahier",
        price: 20
    },
    {
        item: "Sac",
        price: 60
    },
    {
        item: "Stylo",
        price: 2
    },
]

store.sort((a,b) => a.price - b.price);
console.log(store);

