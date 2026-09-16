/* 
    1. L'instruction Switch

    Un Switch permet de créer une série de conditions vérifiant une expression.
    C'est une alternative aux [if...else if() ... else if() etc...].
    Elle est cependant moins utilisée en général.

*/

const tShirtSize = "M";

switch (tShirtSize) {
    case "XL":
        console.log("prix : 19,99$");
        break;
    case "L":
        console.log("prix : 18,99$");
        break;
    case "M":
        console.log("prix : 17,99$");
        break;
    case "S":
        console.log("prix : 16,99$");
        break;
}





