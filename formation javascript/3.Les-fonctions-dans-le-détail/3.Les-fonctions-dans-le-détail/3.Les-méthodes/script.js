/* 
    1.Les méthodes.

    Une méthode est une propriété d'un objet contenant une fonction.
    On appelle une méthode en utilisant le nom de la propriété qui lui est associée.

*/

const athlete = {
    //Fonction fléchée
    jump: () => {
        console.log("jump");
    },
    //Fonction standard
    swim: function (){
        console.log("swim");
    },
    //Fonction standard raccourci
    run(){
        console.log("run");
    }
}

athlete.jump();
athlete.swim();
athlete.run();

