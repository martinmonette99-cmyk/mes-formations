/*
    1. Faites-en sorte que le premier bouton nous ramène tout en haut du site lorsqu'on clique dessus.
*/

const floatingButton1 = document.querySelector(".push-top-button");

floatingButton1.addEventListener("click", handleScroll);

function handleScroll(){
    document.documentElement.scrollTop = 0;
};


/*
    2. Utilisez la méthode .scrollTo() pour scroller jusqu'au milieu de la section newsletter lorsqu'on clique sur le bouton .scroll-to-newsletter.

    C'est simplement pour s'exercer, le rendu ne va pas être optimal en termes d'UX mais ce n'est pas ce qui compte ici. 👍
*/

const floatingButton2 = document.querySelector(".scroll-to-newsletter");
const newsLetter = document.querySelector(".newsletter");



floatingButton2.addEventListener("click", handleScroll2);

function handleScroll2(){
    window.scrollTo({         // methode avec un objet
        top: newsLetter.getBoundingClientRect().top, 
        behavior: "smooth",
        //block: "center"   // met le h2 au centre du viewport
        });



};

// function handleScroll(){   // se déplace jusqu'au h2
//     document.querySelector("h2").scrollIntoView({
//         behavior: "smooth",
//         block: "center"   // met le h2 au centre du viewport
//     });
// };