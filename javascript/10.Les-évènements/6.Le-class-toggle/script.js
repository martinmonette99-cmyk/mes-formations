/*
  Une des actions les plus courantes avec les évènements est de faire un "class toggle", c'est à dire un changement de classe html.

  Le fait de changer une classe permet tout simplement d'altérer le style d'un élément en question.
  
  C'est la porte ouverte à une infinité d'animations et d'interactions possibles.
*/

const box = document.querySelector(".box");

box.addEventListener("click", toggleAnimation);

function toggleAnimation(e){
  e.target.classList.toggle("active");
}

//e        // objet d'événement passé automatiquement au callback
//e.target // élément HTML qui a déclenché l'événement (ici, la div .box)
//e.target.classList // donne accès à la liste des classes CSS de cet élément
//e.target.classList.toggle("active")
  // ajoute la classe "active" si elle est absente
  // retire la classe "active" si elle est déjà présente

//.active → s'applique à tous les éléments ayant la classe active.
//.box.active → s'applique uniquement aux éléments qui possèdent à la fois les classes box et active. C'est donc une règle plus spécifique.




/*
  L'API "classList" est disponible sur tous les éléments du DOM.
  C'est un ensemble de méthodes pratiques concernant les classes. 
  
  Il existe : 
  - add(classe)
  - remove(classe)
  - toggle(classe) // classe supprimée si présente, rajoutée si absente
  - replace(classeÀRemplacer, classeÀRajouter)
  - contains(classe) // si contient la class demander, retourne true

  On peut aussi changer une classe en utilisant la propriété .className des éléments du DOM.
*/