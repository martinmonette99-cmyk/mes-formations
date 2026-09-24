/**********gsap */

const timeline = gsap.timeline({repeat: -1});

timeline.to(".slide-1", {
    opacity: 0,
    duration: 2,
    delay: 3
});

timeline.to(".slide-2", {
    opacity: 1,
    duration: 2
}, "<");

timeline.to(".slide-2", {
    opacity: 0,
    duration: 2,
    delay: 3
});

timeline.to(".slide-3", {
    opacity: 1,
    duration: 2
}, "<");

timeline.to(".slide-3", {
    opacity: 0,
    duration: 2,
    delay: 3
});

timeline.to(".slide-1", {
    opacity: 1,
    duration: 2
}, "<");




/******* fonction de reset de l'erreur d'input **********/

function effaceErreur(event){
    event.target.setCustomValidity("");
}




/*************************************************************************** */

// vérification du prénom et du nom

const inputInscriptionPrenom = document.querySelector("#inscription-prenom");
const inputInscriptionNom = document.querySelector("#inscription-nom");

// Si l'utilisateur modifie son prenom, on enlève l'ancienne erreur personnalisée
inputInscriptionPrenom.addEventListener("input", effaceErreur);


// Si l'utilisateur modifie son nom, on enlève l'ancienne erreur personnalisée
inputInscriptionNom.addEventListener("input", effaceErreur);



function verifieNomPrenomInscription(input) {
    
    if (input.value.trim() === "") {
        
        // setCustomValidity() = Cet input est invalide et voici le message à afficher.
        input.setCustomValidity("Ce champ ne peut pas être vide.");
        
        // reportValidity() = Affiche maintenant la bulle d'erreur.
        input.reportValidity();
    }
}
/******************************************************************************** */

// Vérification de la date de naissance

const inputInscriptionNaissance = document.querySelector("#inscription-naissance");

// Si l'utilisateur modifie sa date, on enlève l'ancienne erreur personnalisée
inputInscriptionNaissance.addEventListener("input", effaceErreur);


function verifieNaissanceInscription(){
    
    const date = new Date();
    const notreAnnée = date.getFullYear();
    
    
    const dateNaissance = new Date(inputInscriptionNaissance.value);
    const anneeNaissance = dateNaissance.getFullYear();
        
    if(anneeNaissance > notreAnnée){
        // setCustomValidity() = Cet input est invalide et voici le message à afficher.
        inputInscriptionNaissance.setCustomValidity("La date de naissance ne peut pas être dans le futur.");
        
        // reportValidity() = Affiche maintenant la bulle d'erreur.
        inputInscriptionNaissance.reportValidity();
    }
}
/********************************************************************* */

// Vérification du téléphone

const inputInscriptionTelephone = document.querySelector("#inscription-phone")

// Si l'utilisateur modifie son numéro de téléphone, on enlève l'ancienne erreur personnalisée
inputInscriptionTelephone.addEventListener("input", effaceErreur);


function verifieTelephoneInscription(){

    let telephoneNettoye = "";

    for(let i = 0; i < inputInscriptionTelephone.value.length; i++){
        if(/^[0-9]$/.test(inputInscriptionTelephone.value[i])){
            telephoneNettoye = telephoneNettoye + inputInscriptionTelephone.value[i];
        }

    }

    if(telephoneNettoye.length !== 10){

        // setCustomValidity() = Cet input est invalide et voici le message à afficher.
        inputInscriptionTelephone.setCustomValidity("Le téléphone doit contenir 10 chiffres.");
        
        // reportValidity() = Affiche maintenant la bulle d'erreur.
        inputInscriptionTelephone.reportValidity();

    }
   
}


/**************** ******************************************************/

// Vérification du courriel

const inputInscriptionCourriel = document.querySelector("#inscription-courriel");

// Si l'utilisateur modifie son courriel, on enlève l'ancienne erreur personnalisée
inputInscriptionCourriel.addEventListener("input", effaceErreur);

function verifieInscriptionCourriel(){

    let caractereCouriel = "";

    for(let i = 0; i < inputInscriptionCourriel.value.length; i++){
        if(inputInscriptionCourriel.value[i] === "@" || inputInscriptionCourriel.value[i] === "."){
            caractereCouriel = caractereCouriel + inputInscriptionCourriel.value[i];
        }
    }
    console.log(caractereCouriel);

    if(caractereCouriel !== "@."){

         // setCustomValidity() = Cet input est invalide et voici le message à afficher.
       inputInscriptionCourriel.setCustomValidity("Entrez un courriel valide");
        
        // reportValidity() = Affiche maintenant la bulle d'erreur.
        inputInscriptionCourriel.reportValidity();
    }
}


/********************************************************************** */

// Vérification du mot de passe

const inputInscriptionPassword = document.querySelector("#inscription-password");

// Si l'utilisateur modifie son password, on enlève l'ancienne erreur personnalisée
inputInscriptionPassword.addEventListener("input", effaceErreur);

function verifieInscriptionPassword() {

    const password = inputInscriptionPassword.value;

    const contientMajuscule = /[A-Z]/.test(password);
    const contientChiffre = /[0-9]/.test(password);
    
    //À l'intérieur des crochets, le ^ signifie ici « tout sauf »
    const contientCaractereSpecial = /[^A-Za-z0-9]/.test(password);

    if (
        password.length < 10 ||
        !contientMajuscule ||
        !contientChiffre ||
        !contientCaractereSpecial
    ) {
        inputInscriptionPassword.setCustomValidity(
            "Le mot de passe doit contenir au moins 10 caractères, une majuscule, un chiffre et un caractère spécial."
        );

        inputInscriptionPassword.reportValidity();
    }
}

/************************************************************************** */

// Vérification du mot de passe de confirmation

const inputInscriptionVerifyPassword = document.querySelector("#inscription-verify-password");

// Si l'utilisateur modifie son password de confirmation, on enlève l'ancienne erreur personnalisée
inputInscriptionVerifyPassword.addEventListener("input", effaceErreur);

function verifieInscriptionVerifyPassword(){

    if(inputInscriptionPassword.value !== inputInscriptionVerifyPassword.value){

         inputInscriptionVerifyPassword.setCustomValidity(
            "Entrez de nouveau le mot de passe de confirmation"
        );

        inputInscriptionVerifyPassword.reportValidity();

    }
}




/********************************************************************* */

// submit inscription

const submitInscription = document.querySelector("#form-inscription")
submitInscription.addEventListener("submit", verifieSubmitInscription)

function verifieSubmitInscription(event){
    event.preventDefault();
       
   
    // vérifie le prenom au submit
    verifieNomPrenomInscription(inputInscriptionPrenom)
        
    // vérifie le nom au submit
    verifieNomPrenomInscription(inputInscriptionNom)
    
    // vérifie la date de naissance au submit
    verifieNaissanceInscription();

    // vérifie le numéro de téléphone
    verifieTelephoneInscription();

    // vérifie le courriel
    verifieInscriptionCourriel();

    // vérifie le mot de passe
    verifieInscriptionPassword();

    // vérifie le mot de passe de confirmation   
     verifieInscriptionVerifyPassword()


}

/********************************************************** */

// Bouton annulez inscription

const btnInputInscriptionReset = document.querySelector(".btn-annulez-inscription");

btnInputInscriptionReset.addEventListener("click", inputInscriptionReset);

function inputInscriptionReset(){
    submitInscription.reset();
}

/************************************************************** */

// Bouton annulez connexion

const btnInputConnexionReset = document.querySelector(".btn-annulez-connexion");
const submitconnexion = document.querySelector("#form-connexion")

btnInputConnexionReset.addEventListener("click", inputConnexionReset);

function inputConnexionReset(){
    submitconnexion.reset();
}


/**************************************************************** */

const btnAccessInscription = document.querySelector(".btn-access-inscription");
const btnQuiteInscription = document.querySelector(".btn-quite-inscription");

const formInscription = document.querySelector(".container-form-inscription");
const formConnexion = document.querySelector(".container-form-connexion");

btnAccessInscription.addEventListener("click", toggleConnexionInscription);
btnQuiteInscription.addEventListener("click", toggleConnexionInscription);

function toggleConnexionInscription(){
    formConnexion.classList.toggle("cache");
    formInscription.classList.toggle("cache");

}
