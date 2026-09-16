/*
    Voici les évènements concernant le chargement d'une page : DOMContentLoaded, load.

    Pour voir la page se construire lentement: aller dans 
    performances->Processeur = ralentissement x20
    performances->réseau = 3G
    Click droit sur refresh et choisir vider le cache et actualisation forcé
*/


document.addEventListener("DOMContentLoaded", () => console.log("Construction du DOM terminé")); // quand le dom est fini de charger
window.addEventListener("load", () => console.log("Tout est fini de charger")); //quand tout est fini de charger 