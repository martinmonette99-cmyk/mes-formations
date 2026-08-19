/* 
    1. Les Quantificateurs et les alternances .

    Certains symboles nous permettent de gérer le nombre de répétitions d'une expression.

    On va également utiliser la méthode .match(), qui peut retourner un tableau contenant toutes les expressions rencontrées dans une chaîne, et pas seulement true ou false.

    Attention, au contraire de .test() cette fonction vient du prototype Strings et pas des RegExp, donc "str".match(/regex/).
*/

const text = "Je mange un osso buco à Milan."
 
console.log(text.match(/[a-z]/)); //première occurence avec les infos dans le console.log

console.log(text.match(/[a-z]/g)); //Toute les occurence mais sans les infos dans le console.log (sans "à")

console.log(text.match(/[a-z]/gi)); //inclu aussi les majuscule (sans "à")


/* 
    A. Quantificateur de quantité {n}

    Détermine combien de fois l'expression n doit avoir lieu.
*/

    console.log("aaa".match(/a{3}/g))  // ["aaa"]
    // équivaux à écrire console.log("aaa".match(/aaa/g))
    
    console.log("aa".match(/a{3}/g)) // null
    
    // comprendre b + aaa
    console.log("ba".match(/a{3}/g)) // null


/* 
    B. Intervalle {x,y}

    Détermine un intervalle d'occurrences possibles.
*/
    
// ici affiche les occurences entre aa et aaaa
    console.log("azzaa,aaaaaaaaaaaaaa".match(/a{2,4}/g));
    
    
    
    /* 
    C. Intervalle infini {x,}
    
    Détermine un intervalle de x à l'infini.
    */

   console.log("azzaa,aaaaaaaaaaaaaa".match(/a{2,}/g));
   
   
   /* 
   D. Le signe + 
   
   Entre 1 et plus l'infini, équivalent de {1,}.
   ici + signifie prend des a tant qu'il y en a
   */
  
  console.log("azzaa,aaaaaaaaaaaaaa".match(/a+/g));
  
  
  /* 
  E. Le signe * 
  
  Zéro ou plus, équivalent à {0,}.
  Attention, les quantifieurs font référence dans ce cas au caractère qui les précède, donc ici : 
  Chaque "ab" suivi d'un ou plusieur 5.
  */
 console.log("ab1-ab111-ab1111".match(/ab5*/g)) // [ab, ab, ab]
 console.log("ab11-ab1111111-ab1111".match(/ab5*/g)) // [ab, ab, ab]
 console.log("ab5-ab555-ab5555".match(/ab5*/g)) // [ab5, ab555, ab5555]
 
 
 /* 
 F. Le signe ?  
 
 Signifie un ou zéro, équivalent à {0,1}.
 ici : http avec ou sans s.
 
 */
//Le caratère avant ? est optionnel
// ici http et https sont valide
console.log("http".match(/https?/g))

/* 
G. Le signe | 

Le ou logique des regex, permet de créer un modèle comprenant plusieurs correspondances possibles.
*/
console.log("rabbit".match(/cat|dog|rabbit/g))

/* 
2. Les groupes (abc).

Les groupes permettent de rassembler une série de caractères entre parenthèses.
On peut ainsi combiner les groupes et les quantificateurs vus plus haut pour créer des expressions plus complexes et résoudre plus de problèmes.
*/

/* 
A. Quelques exemples de groupes.
*/
console.log("15487471354473153447777".match(/(47)+/g)) // [47. 47, 47]



/* 
    Transformons le modèle "prénom.nom" en une regex.

    Résultat : /([A-zÀ-ÿ]+).([A-zÀ-ÿ]+)/ig
    Le premier groupe contient entre 1 et une infinité de caractères
    */
    
    //ici A-z (insensible à la casse) et À-ÿ (tout les caractère spéciaux)
    // le point ici signifie n'importe quel caractère.
    
    // sans le + ça donne (prend une lettre) .prend n'importe quel caratère (prend une lettre) puis recommence jusqua ce qu'il ne trouve plus
    // ici 3 boucle ['jea', 'n.d', 'upo']  
    
    // avec le + une seul boucle
    
    console.log("jean.dupont".match(/([A-zÀ-ÿ]+).([A-zÀ-ÿ]+)/ig));
   
     // console.log("julie.andré")
   
/* 
/* 
    B. Les groupes optionnels

    On peut utiliser le ? pour définir des groupes optionnels.
*/

    // avec ? occurence avec b et bzb
    console.log("bzb".match(/b(zb)?/));// il y a une différence dans la console si on rajoute /g moins d'info


/*
    C. Les groupes nommés

    On peut nommer des groupes afin de s'y retrouver plus facilement, cette méthode est assez peu utilisée.

    Exemple : /(?<nom>x)/

*/

//faire explique par gpt.....
const regex = /(?<number>\d+)/ 
console.log("55".match(regex));



/* 
    3. Les ancres ^ et $

    L'accent circonflexe permet de chercher une expression qui est au début d'une chaîne, et le dollar permet de chercher un modèle qui termine une chaîne.
*/

    /* A. Un peu de pratique */
    
    // vérifie si la string commence par "Je" 
    console.log("Je suis dans de beaux draps.".match(/^Je/)) // [Je]
    
    console.log("  Je suis dans de beaux draps.".match(/^je/)) // null (notez l'espace au début)
    
    // vérifie si la string fini par "draps." 
    console.log("Je suis dans de beaux draps.".match(/draps.$/)) 



