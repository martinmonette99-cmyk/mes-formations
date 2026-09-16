/* 
    1. Un tableau multidimensionnel.

    Un tableau multidimensionnel à plusieurs niveaux.

    Exemple: 
    const couples = [["Tom","Lea"], ["Jack", "Sara"], ["Pedro", "Maria"]];

    On peut itérer à travers ce genre de tableau avec une double boucle for.
*/

const couples = [["Tom","Lea"], ["Jack", "Sara"], ["Pedro", "Maria"]];

for(let i = 0; i < couples.length; i++) {
    for(let j = 0; j < couples[i].length; j++) {  //index0 contient 2 éléments
        console.log(couples[i][j]);
    }
}


// Même chose mais avec for of
for(const arr of couples) {
    for(const names of arr){
        console.log(names);
    }
}