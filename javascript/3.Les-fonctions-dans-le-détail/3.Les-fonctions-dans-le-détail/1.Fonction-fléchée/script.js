/* 
    1. Les fonctions fléchées.

    Apparues en 2015, elles sont plus concises et pratiques dans certains cas, mais moins lisibles dans d'autres.
    Elles ont également quelques différences de fonctionnement avec les fonctions classiques.
    Il ne faut pas les opposer, mais les utiliser judicieusement, en fonction de leurs caractéristiques.

*/

// Fonction standard
function getSquareArea(side) {
    return side * side;
}
console.log(getSquareArea(50));

// Fonction fléchée
const getSquareArea2 = side => side * side; 
console.log(getSquareArea2(50));

// forEach Parcourt un tableau et appelle une fonction.


// Fonction fléchée
[1,2,3].forEach(item => console.log(item));


// Fonction standard 
[1,2,3,].forEach(function(item) {
    return console.log(item);  // return ne sert à rien ici.
})


const listeActivites = document.querySelector(".liste-activites");
const arrayOfActivities = ["Musculation", "Natation", "Yoga", "Crossfit"];

arrayOfActivities.forEach (activite => {
    
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  
  h2.textContent = activite;
  h2.classList.add("index-h2");
  li.appendChild(h2);
  listeActivites.appendChild(li);

});




