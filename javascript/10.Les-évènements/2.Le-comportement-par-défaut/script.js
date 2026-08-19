/* 
    Certains éléments ont déjà des écouteurs d'évènement par défaut et vont donc avoir un comportement spécial quand on les déclenche.

    Les formulaires vont tenter d'envoyer les données vers une page.

    Les liens nous font nous déplacer au click.

    Parfois, on a envie de prévenir ces comportements par défaut, on utilisera alors EventObject.preventDefault().

    Testons tout ça...
*/

const link = document.querySelectorAll("a");

link.forEach(link => link.addEventListener("click", handleClick)); //click = lorsqu'on click gauche

function handleClick(e){
    console.log(e);
    e.preventDefault(); // obj.preventDefault() = // Empêche le comportement par défaut de l'élément. on ne fait pas ça pour ce qui est senser se passer mais parfois cela est nécéssaire
    console.log("Tu ne bouge pas");
}

const form = document.addEventListener("submit", handleSubmit); // submit = soumettre un formulaire

function handleSubmit(event){
    event.preventDefault(); //n'envoie pas l'actualisation de la page (qui est par défaut)
    console.log("Submit");

}

