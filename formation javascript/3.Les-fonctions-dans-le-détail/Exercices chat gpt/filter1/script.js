/* 
    Exercices : Les fonctions
*/

/* 
    1. Pure ou pas.

    Écrivez une fonction pure "dividedBy10" qui sert à diviser un nombre par 10.
    Écrivez cette fonction sous la forme d'une fonction fléchée puis commentez-là et écrivez-là sous la forme d'une fonction classique.  
*/


const dividedBy10v2 = nombre => nombre / 10;

 function dividedBy10(nombre) {  
   return nombre = nombre / 10;
 }


 console.log(dividedBy10v2(20));
 console.log(dividedBy10(20));



/* 
    2. this weather

    Créez une méthode getFahrenheit () permettant de retourner la température de l'objet weather ci-dessous en utilisant le mot clé this.

    Formule celsius - fahrenheit  :  (celsius * 1.8) + 32
*/

const weather = {
  city: "London",
  temp: 16,
  getFahrenheit() {
    // this fait référence à l'objet, ici weather dans une fonction classique
    return (this.temp * 1.8) + 32;  
  }
}

console.log(weather.getFahrenheit());





/* 
  3. Ordre supérieur.

  Écrivez une fonction d'ordre supérieur "areFromNationality" permettant de tester si toutes les personnes d'un groupe sont d'une certaine nationnalité.
  Cette fonction retournera true ou false.
  On doit pouvoir réutiliser la même fonction pour tester autant de nationalités qu'on veut.
*/

const travelers = [
{
  name: "Jean",
  nationality: "FR"
},
{
  name: "Victor",
  nationality: "FR"
},
{
  name: "Paul",
  nationality: "FR"
},
{
  name: "Jack",
  nationality: "EN"
},
{
  name: "Giulia",
  nationality: "IT"
},
]

function areFromNationality(arr, callback) {
  for (const nation of arr) {
    if (!callback(nation)){
      return false;
    }
    
  }
  
  return true;  
}

console.log(areFromNationality(travelers, traveler => traveler.nationality === "FR"));
console.log(areFromNationality(travelers, traveler => traveler.nationality === "IT"));
console.log(areFromNationality(travelers, traveler => traveler.nationality === "EN"));

/*
Exercice 1 — Même fonction, autre propriété

Tu ne modifies pas areFromNationality().

Écris simplement un appel qui vérifie si tous les prénoms ont plus de 3 lettres.

Le callback est la seule chose à écrire.
*/


console.log(areFromNationality(travelers, traveler => traveler.name.length > 3));

/*
Exercice 2 — Deux conditions

Toujours sans modifier la fonction.

Vérifie si tous les voyageurs :

sont Français;
et que leur nom commence par "J".

Tu devras utiliser &&.
*/

console.log(areFromNationality(travelers, traveler => traveler.nationality === "FR" && traveler.name.startsWith("J")));


//Exercice 3 — Même logique, mais avec des salaires


const salaries = [1200, 5000, 4000, 2500, 3450, 1800];

function areValidSalaries(arr, callback) {
  for(const salary of arr) {
      if (!callback(salary)){
        return false;
      }  

  }

  return true; 
}


console.log(areValidSalaries(salaries, salary => salary >= 1000));
console.log(areValidSalaries(salaries, salary => salary >= 3000));



const chiffre = [1,2,3,4,5,6,7,8,9];

function arrayOfNumberOver (arr,callback){
  const filterChiffre = [];

  for(const chiffreChoisi of arr){
      if(callback(chiffreChoisi)){
        filterChiffre.push(chiffreChoisi);
      }
  }
return filterChiffre;
}

const arrayOver = arrayOfNumberOver(chiffre, chiffreChoisi => chiffreChoisi >= 5);
console.log(arrayOver);





