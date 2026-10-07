//  http://127.0.0.1:5000/espace-usager

// http://127.0.0.1:5000/api/usager


/********* Déconnection *************************/

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

/************* Affiche les info de l'usager ***********************************/
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



/********* Affiche les réservations de l'usager ****************************/
function afficheMesReservations() {

    fetch("/api/mes-reservations")
    .then(function (response) {
        return response.json();
    })
    .then(function (donnees) {
       console.log(donnees);
       console.log(donnees.reservations);

        donnees.reservations.forEach(element => {
            
            createCarteReservation(element);
        });
    });
}
afficheMesReservations();



function createCarteReservation(donneesReservation){
        const apresTitre = document.querySelector(".section-mes-reservation");

            const div = document.createElement("div");
            div.classList.add("container-mes-réservations")

            const divContent = 
            `
            <h3 class="nom-reservation"></h3>
            <p class="lieu-reservation"></p>
            <p class="date-reservation"></p>
            <p class="jour-reservation"></p>
            <p class="date-debut-reservation"></p>
            <p class="date-fin-reservation"></p>
            <p class="heure-debut-reservation"></p>
            <p class="heure-fin-reservation"></p>
            `

            div.innerHTML = divContent;
            div.querySelector(".nom-reservation").textContent = `${donneesReservation.nom}`;
            div.querySelector(".lieu-reservation").textContent = `Lieu: ${donneesReservation.lieu}`;
            div.querySelector(".date-reservation").textContent = `Date de réservation: ${formaterDate(donneesReservation.date_reservation)}`;
            div.querySelector(".jour-reservation").textContent = `Jour de l'activité: ${donneesReservation.jour}`;
            div.querySelector(".date-debut-reservation").textContent = `Commence le ${formaterDate(donneesReservation.date_debut)}`;
            div.querySelector(".date-fin-reservation").textContent = `Se termine le ${formaterDate(donneesReservation.date_fin)}`;
            div.querySelector(".heure-debut-reservation").textContent = `De ${donneesReservation.heure_debut}h`;
            div.querySelector(".heure-fin-reservation").textContent = `À ${donneesReservation.heure_fin}h`;

            apresTitre.appendChild(div);    
}


/*********** Change l'affichage de la date *********************************/
function formaterDate(dateBrute) {

    const date = new Date(dateBrute.replace(" ", "T"));

    return new Intl.DateTimeFormat("fr-CA", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(date);

/*ÉTAPE 1 — ARGUMENT REÇU
"2026-10-02 00:58:20"

ÉTAPE 2 — REPLACE()
"2026-10-02T00:58:20"

ÉTAPE 3 — NEW DATE()
Un objet JavaScript Date est créé.

ÉTAPE 4 — INTL.DATETIMEFORMAT()
Les règles de présentation sont définies : français canadien, jour numérique, mois en lettres et année numérique.

ÉTAPE 5 — .FORMAT(DATE)
2 octobre 2026
Résultat retourné sous forme de chaîne de caractères.*/

}