/* 
    1. Les opérations "Short circuit"

    Les expressions utilisant des opérateurs logiques (||, &&) retournent des valeurs.

    Le ET logique retourne le second opérande si le premier et le second opérande sont évalués comme truthy.

    Le OU logique retourne le premier opérande s'il est évalué comme truthy, ou le second si c'est ce dernier qui est truthy. 
*/

let isAuthenticated = true;

// user est considéré comme true
const user = {
  name: "Hanz",
  level: 99
}

// Le second opérande est retourné  'hanz', 99
console.log(isAuthenticated && user);
