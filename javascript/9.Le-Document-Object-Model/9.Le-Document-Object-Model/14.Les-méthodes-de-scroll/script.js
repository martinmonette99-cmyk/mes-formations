/* 
    Il est courant de vouloir se déplacer à un endroit spécial d'une page.
    Il existe toutes sortes de méthodes et de propriétés pour y arriver.

*/

const floatingButton = document.querySelector(".scroll-btn");

floatingButton.addEventListener("click", handleScroll);



/* 
    document.documentElement.scrollTop

    Permet de se déplacer à un nombre X de pixels depuis le haut du document.
*/

// document → le document HTML.
// document.documentElement → l'élément <html>.
// document.documentElement.scrollTop → le nombre de pixels dont l'élément <html> est défilé verticalement. En mettant 0, on revient en haut de la page.


// function handleScroll(){
//     document.documentElement.scrollTop = 0;
// };
  

/* 
    Window.scrollTo(x,y || options{top, left, behavior})
    Exactemeent la même méthode que Window.scroll() ...

    Scroll jusqu'à un certain endroit défini par les paramètres.
    Si on passe deux arguments, cela correspond aux coordonnées x,y.
    Si l'on passe un objet, alors on peut définir les propriétés top, left et behavior.

    behavior indique comment le défilement doit se faire.  behavior: "auto" est instantané    behavior: "smooth" défile lentement.

*/

    // function handleScroll(){
    //    // window.scrollTo(0, 0); // methode avec x,y
    //    window.scrollTo({         // methode avec un objet
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth"
    //     });    
    // };


/* 
    Element.scrollIntoView(alignToTop || options)

    Scroll jusqu'à l'élément appelant.
    
    Le premier paramètre aligne le haut de l'élément avec le haut du viewport s'il est sur true, qui est la valeur par défaut.

    Au contraire, il alignera le bas de l'élément avec le bas du 
    viewport si le paramètre est sur false.
    
*/

// function handleScroll(){   // se déplace jusqu'au h2
//     document.querySelector("h2").scrollIntoView(true);
// };


// function handleScroll(){   // se déplace jusqu'au h2
//     document.querySelector("h2").scrollIntoView({
//         behavior: "smooth",
//         block: "center"   // met le h2 au centre du viewport
//     });
// };




/* 
    Window.scrollby(x,y || options)

    Permet cette fois-ci de scroller par montant de pixels.
*/

function handleScroll(){
    window.scrollBy(0, 1000)  // descend le scroll de 1000px
    //window.scrollBy(0, -1000)  // remonte le scroll de 1000px
}

