/* 
    1. En JavaScript, certaines valeurs vont être converties en valeurs d'un autre type lorsqu'on les utilise dans des opérations ou des conditions, c'est la coercition de type. (type coercion).
*/

const nb1 = 150;
const nb2 = "150";


// égalité simple (ne pas prendre, ça donne égale) 
if(nb1 == nb2) {
    console.log("instruction éxécutée")
} 


// égalité stricte (ok)
if(nb1 === nb2) {
    console.log("instruction éxécutée")
} 

    
 /* 
 
nb + string donne une concaténation 
 1 + "10" = 110 

 transforme string en nombre
 12 / "6" = 2      
 10 * "10" = 100
    
 */ 
    
