//  http://127.0.0.1:5000/espace-usager

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
                window.location.href = "/"; 
             }
    });

}



/*
window → la fenêtre du navigateur
location → son emplacement actuel
href → l'adresse de la page = 
"/" → remplace cette adresse par /

window.location.href = "/";
*/