//  http://127.0.0.1:5000/espace-usager

// http://127.0.0.1:5000/api/usager

const btnDeconnexion = document.querySelector(".btn-deconnexion");
btnDeconnexion.addEventListener("click", deconnexion);

function deconnexion() {

    fetch("/deconnexion", {
        method: "POST"
    })
    .then(function (response) {
        return response.json();
    })
        .then(function (donnees) {
             if (donnees.succes === true){
                /*
                window → la fenêtre du navigateur
                location → son emplacement actuel
                href → l'adresse de la page = 
                "/" → remplace cette adresse par /
                */
                window.location.href = "/"; 
             }
    });

}


const BonjourUsager = document.querySelector(".p-bonjour-usager");

const statUsagerNom = document.querySelector(".stat-usager-nom");
const statUsagerCourriel = document.querySelector(".stat-usager-courriel");
const statUsagerMembre = document.querySelector(".stat-usager-membre");


function afficheInfoUsager(){
    
    fetch("/api/usager")
    .then(function (response) {
        return response.json();
    })
    .then(function (donnees) {
       console.log(donnees); 
       
       BonjourUsager.textContent = `Bonjour ${donnees.usager.prenom}`;
       statUsagerNom.textContent = `Votre nom est: ${donnees.usager.prenom} ${donnees.usager.nom}`
       statUsagerCourriel.textContent = `Votre courriel est: ${donnees.usager.courriel}`
       if(donnees.usager.membre_gym === "oui"){
           statUsagerMembre.textContent = `Vous êtes membre du gym`
       }
       else{
           statUsagerMembre.textContent = `Vous n'êtes pas membre du gym`
       }
       
       
    });
}

afficheInfoUsager();


function afficheMesReservations() {

    fetch("/api/mes-reservations")
    .then(function (response) {
        return response.json();
    })
    .then(function (donnees) {
       console.log(donnees);
       console.log(donnees.reservations);
       console.log(donnees.reservations[0].date_debut);
    });

    


}
afficheMesReservations();


