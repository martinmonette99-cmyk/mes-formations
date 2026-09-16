/*
  COURS : POSITIONS ET DIMENSIONS

  Les propriétés de ce chapitre répondent à trois questions :

  1. Où est l'élément ?
  2. Quelle est sa taille ?
  3. De combien a-t-on défilé ?

  Les résultats sont affichés dans la page et dans la console.
*/

// On sélectionne les éléments HTML qui serviront dans les exemples.
const box = document.querySelector(".box");
const container = document.querySelector(".container");
const targetTitle = document.querySelector(".target-title");
const childBox = document.querySelector(".child-box");
const results = document.querySelector("#results");

/*
  Cette fonction évite de répéter le même code dans chaque exemple.

  Elle reçoit :
  - un titre;
  - une valeur à afficher.

  Elle affiche ensuite le résultat dans la page et dans la console.
*/
function showResult(title, value) {
  const message = `${title}\n${JSON.stringify(value, null, 2)}`;

  results.textContent = message;
  console.log(title, value);
}

/* =========================================================
   1. getBoundingClientRect()
   ========================================================= */

/*
  getBoundingClientRect() retourne un objet contenant :

  - top    : distance entre le haut de l'élément et le haut du viewport;
  - left   : distance entre la gauche de l'élément et la gauche du viewport;
  - right  : position du bord droit de l'élément;
  - bottom : position du bord inférieur de l'élément;
  - width  : largeur totale de l'élément;
  - height : hauteur totale de l'élément.

  Important : la position est calculée par rapport au VIEWPORT,
  donc par rapport à la partie actuellement visible de la fenêtre.
*/

document.querySelector("#btn-rect").addEventListener("click", function () {
  const rectangle = box.getBoundingClientRect();

  showResult("getBoundingClientRect()", {
    top: rectangle.top,
    left: rectangle.left,
    right: rectangle.right,
    bottom: rectangle.bottom,
    width: rectangle.width,
    height: rectangle.height
  });
});

/* =========================================================
   2. scrollWidth et scrollHeight
   ========================================================= */

/*
  scrollWidth et scrollHeight donnent la taille TOTALE du contenu.

  Ils comptent aussi la partie qui dépasse et qui est cachée derrière
  la barre de défilement.

  scrollHeight est donc particulièrement utile quand un élément contient
  plus de texte qu'il peut en montrer à l'écran.
*/

document.querySelector("#btn-scroll-size").addEventListener("click", function () {
  showResult("Taille totale du contenu", {
    scrollWidth: container.scrollWidth,
    scrollHeight: container.scrollHeight
  });
});

/* =========================================================
   3. clientWidth et clientHeight
   ========================================================= */

/*
  clientWidth et clientHeight donnent la taille intérieure visible.

  Ils comprennent :
  - le contenu visible;
  - le padding.

  Ils ne comprennent pas :
  - les bordures;
  - les marges;
  - la partie du contenu cachée par l'overflow.
*/

document.querySelector("#btn-client-size").addEventListener("click", function () {
  showResult("Taille intérieure visible", {
    clientWidth: container.clientWidth,
    clientHeight: container.clientHeight
  });
});

/* =========================================================
   4. offsetWidth et offsetHeight
   ========================================================= */

/*
  offsetWidth et offsetHeight donnent la taille visible de l'élément
  en comptant aussi ses bordures.

  Ils comprennent généralement :
  - le contenu visible;
  - le padding;
  - les bordures;
  - la barre de défilement, lorsqu'elle existe.

  Ils ne comprennent pas les marges.
*/

document.querySelector("#btn-offset-size").addEventListener("click", function () {
  showResult("Taille visible avec les bordures", {
    offsetWidth: container.offsetWidth,
    offsetHeight: container.offsetHeight
  });
});

/* =========================================================
   5. scrollTop
   ========================================================= */

/*
  scrollTop indique de combien de pixels le contenu d'un élément
  a été défilé vers le haut.

  Au début, scrollTop vaut 0.
  Après avoir descendu la barre interne du conteneur,
  scrollTop devient supérieur à 0.
*/

document.querySelector("#btn-scroll-top").addEventListener("click", function () {
  showResult("Défilement interne du conteneur", {
    scrollTop: container.scrollTop
  });
});

/* =========================================================
   6. window.scrollY
   ========================================================= */

/*
  window.scrollY indique de combien de pixels toute la PAGE
  a été défilée verticalement.

  Ce n'est pas le scroll du conteneur rouge.
  C'est le scroll de la fenêtre complète.
*/

document.querySelector("#btn-window-scroll").addEventListener("click", function () {
  showResult("Défilement vertical de la page", {
    scrollY: window.scrollY
  });
});

/* =========================================================
   7. Position depuis le haut du document
   ========================================================= */

/*
  getBoundingClientRect().top donne la position par rapport au viewport.

  window.scrollY donne la partie de la page déjà défilée.

  En additionnant les deux, on obtient la position de l'élément
  depuis le haut du document complet.
*/

document.querySelector("#btn-page-position").addEventListener("click", function () {
  const titleRectangle = targetTitle.getBoundingClientRect();
  const positionFromDocumentTop = window.scrollY + titleRectangle.top;

  showResult("Position du titre depuis le haut du document", {
    windowScrollY: window.scrollY,
    topDansLeViewport: titleRectangle.top,
    positionDepuisLeHautDuDocument: positionFromDocumentTop
  });
});

/* =========================================================
   8. offsetLeft et offsetParent
   ========================================================= */

/*
  offsetLeft donne la distance entre le bord gauche de l'élément
  et le bord gauche de son offsetParent.

  offsetParent indique quel élément sert de référence au calcul.

  Ici, .parent-box possède position: relative.
  Elle devient donc le parent de référence de .child-box.
*/

document.querySelector("#btn-offset-left").addEventListener("click", function () {
  showResult("Position horizontale par rapport au parent de référence", {
    offsetLeft: childBox.offsetLeft,
    offsetParent: childBox.offsetParent.className
  });
});
