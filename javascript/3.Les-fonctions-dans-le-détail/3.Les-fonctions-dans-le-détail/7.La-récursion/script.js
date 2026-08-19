/* 
    1. La récursion.

    La récursion est le comportement d'une fonction qui s'appelle elle-même.

    Attention, la récursion est moins rapide qu'une boucle et en général moins simple à comprendre.
*/

function recursion(num) {
    num++;
    
    if(num > 10) {
      console.log("Num est strictement supérieur à  10 !");
      console.log(num);
    }
    else {
      recursion(num)
    }
}
recursion(0);