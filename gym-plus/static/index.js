//  http://127.0.0.1:5000/
//  http://127.0.0.1:5000/espace-usager
//  http://127.0.0.1:5000/api/usager



// ============================================================================
// 1. SLIDER GSAP
// ============================================================================

const timeline = gsap.timeline({ repeat: -1 });

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


// ============================================================================
// 2. INSCRIPTION - SÉLECTION DES ÉLÉMENTS HTML
// ============================================================================

// Formulaire et boutons
const submitInscription = document.querySelector("#form-inscription");
const btnValidezInscription = document.querySelector(".btn-validez-inscription");
const btnInputInscriptionReset = document.querySelector(".btn-annulez-inscription");
const btnContinuer = document.querySelector(".btn-continuer");

// Champs du formulaire
const inputInscriptionPrenom = document.querySelector("#inscription-prenom");
const inputInscriptionNom = document.querySelector("#inscription-nom");
const inputInscriptionNaissance = document.querySelector("#inscription-naissance");
const inputInscriptionTelephone = document.querySelector("#inscription-phone");
const membreOui = document.querySelector("#membre-oui");
const membreNon = document.querySelector("#membre-non");
const inputInscriptionNumeroMembre = document.querySelector("#inscription-numero-membre");
const inputInscriptionCourriel = document.querySelector("#inscription-courriel");
const inputInscriptionPassword = document.querySelector("#inscription-password");
const inputInscriptionVerifyPassword = document.querySelector("#inscription-verify-password");

// Messages liés à l'inscription
const confirmationInscription = document.querySelector(".confirmation-inscription");
const erreurTechniqueInscription = document.querySelector(".erreur-technique-inscription");

// Associe le nom de champ retourné par Flask au bon input HTML
const champsInscription = {
    prenom: inputInscriptionPrenom,
    nom: inputInscriptionNom,
    naissance: inputInscriptionNaissance,
    telephone: inputInscriptionTelephone,
    membreGym: membreOui,
    numeroMembre: inputInscriptionNumeroMembre,
    courriel: inputInscriptionCourriel,
    password: inputInscriptionPassword,
    passwordVerify: inputInscriptionVerifyPassword
};


// ============================================================================
// 3. INSCRIPTION - ÉVÉNEMENTS
// ============================================================================

// Efface une ancienne erreur personnalisée dès que l'utilisateur modifie le champ
inputInscriptionPrenom.addEventListener("input", effaceErreur);
inputInscriptionNom.addEventListener("input", effaceErreur);
inputInscriptionNaissance.addEventListener("input", effaceErreur);
inputInscriptionTelephone.addEventListener("input", effaceErreur);
inputInscriptionNumeroMembre.addEventListener("input", effaceErreur);
inputInscriptionCourriel.addEventListener("input", effaceErreur);
inputInscriptionPassword.addEventListener("input", effaceErreur);
inputInscriptionVerifyPassword.addEventListener("input", effaceErreur);

// Groupe de boutons radio membre du gym
membreOui.addEventListener("change", effaceErreurMembre);
membreNon.addEventListener("change", effaceErreurMembre);

// Actions du formulaire d'inscription
submitInscription.addEventListener("submit", verifieSubmitInscription);
btnInputInscriptionReset.addEventListener("click", inputInscriptionReset);
btnContinuer.addEventListener("click", continuerConnexion);


// ============================================================================
// 4. INSCRIPTION - FONCTIONS POUR EFFACER LES ERREURS
// ============================================================================

function effaceErreur(event) {
    event.target.setCustomValidity("");
}

function effaceErreurMembre() {
    membreOui.setCustomValidity("");
}


// ============================================================================
// 5. INSCRIPTION - VALIDATION DES CHAMPS
// ============================================================================

// Prénom et nom
function verifieNomPrenomInscription(input) {
    if (input.value.trim() === "") {
        // setCustomValidity() = Cet input est invalide et voici le message à afficher.
        input.setCustomValidity("Ce champ ne peut pas être vide.");

        // reportValidity() = Affiche maintenant la bulle d'erreur.
        input.reportValidity();

        return false;
    }

    return true;
}


// Date de naissance
function verifieNaissanceInscription() {
    const date = new Date();
    const notreAnnée = date.getFullYear();

    const dateNaissance = new Date(inputInscriptionNaissance.value);
    const anneeNaissance = dateNaissance.getFullYear();

    if (anneeNaissance > notreAnnée) {
        inputInscriptionNaissance.setCustomValidity(
            "La date de naissance ne peut pas être dans le futur."
        );
        inputInscriptionNaissance.reportValidity();

        return false;
    }

    return true;
}


// Téléphone
function verifieTelephoneInscription() {
    let telephoneNettoye = "";

    for (let i = 0; i < inputInscriptionTelephone.value.length; i++) {
        if (/^[0-9]$/.test(inputInscriptionTelephone.value[i])) {
            telephoneNettoye = telephoneNettoye + inputInscriptionTelephone.value[i];
        }
    }

    if (telephoneNettoye.length !== 10) {
        inputInscriptionTelephone.setCustomValidity(
            "Le téléphone doit contenir 10 chiffres."
        );
        inputInscriptionTelephone.reportValidity();

        return false;
    }

    return true;
}


// Numéro de membre
function verifieNumeroMembre() {
    if (membreOui.checked && inputInscriptionNumeroMembre.value === "") {
        inputInscriptionNumeroMembre.setCustomValidity(
            "Veuillez entrer votre numéro de membre"
        );
        inputInscriptionNumeroMembre.reportValidity();

        return false;
    }

    return true;
}


// Courriel
function verifieInscriptionCourriel() {
    let caractereCouriel = "";

    for (let i = 0; i < inputInscriptionCourriel.value.length; i++) {
        if (
            inputInscriptionCourriel.value[i] === "@" ||
            inputInscriptionCourriel.value[i] === "."
        ) {
            caractereCouriel = caractereCouriel + inputInscriptionCourriel.value[i];
        }
    }

    if (caractereCouriel !== "@.") {
        inputInscriptionCourriel.setCustomValidity("Entrez un courriel valide");
        inputInscriptionCourriel.reportValidity();

        return false;
    }

    return true;
}


// Mot de passe
function verifieInscriptionPassword() {
    const password = inputInscriptionPassword.value;

    const contientMajuscule = /[A-Z]/.test(password);
    const contientChiffre = /[0-9]/.test(password);

    // À l'intérieur des crochets, le ^ signifie ici « tout sauf ».
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

        return false;
    }

    return true;
}


// Confirmation du mot de passe
function verifieInscriptionVerifyPassword() {
    if (inputInscriptionPassword.value !== inputInscriptionVerifyPassword.value) {
        inputInscriptionVerifyPassword.setCustomValidity(
            "Entrez de nouveau le mot de passe de confirmation"
        );
        inputInscriptionVerifyPassword.reportValidity();

        return false;
    }

    return true;
}


// ============================================================================
// 6. INSCRIPTION - SOUMISSION ET ENVOI AU BACKEND
// ============================================================================

function verifieSubmitInscription(event) {
    event.preventDefault();

    // Vérifie si tout le formulaire est valide selon les règles HTML.
    const formulaireValideHtml = submitInscription.checkValidity();

    // Exécute les validations JavaScript une à une.
    const formulaireValideJs =
        verifieNomPrenomInscription(inputInscriptionPrenom) &&
        verifieNomPrenomInscription(inputInscriptionNom) &&
        verifieNaissanceInscription() &&
        verifieTelephoneInscription() &&
        verifieNumeroMembre() &&
        verifieInscriptionCourriel() &&
        verifieInscriptionPassword() &&
        verifieInscriptionVerifyPassword();

    if (formulaireValideHtml && formulaireValideJs) {
        // Une nouvelle tentative commence : on cache une ancienne erreur technique.
        erreurTechniqueInscription.classList.add("cache");

        // Empêche plusieurs soumissions pendant l'envoi.
        btnValidezInscription.disabled = true;

        // Objet JavaScript contenant les données du formulaire.
        const donneesInscription = {
            prenom: inputInscriptionPrenom.value,
            nom: inputInscriptionNom.value,
            naissance: inputInscriptionNaissance.value,
            telephone: inputInscriptionTelephone.value,
            membreGym: membreOui.checked ? "oui" : "non",
            numeroMembre: inputInscriptionNumeroMembre.value,
            courriel: inputInscriptionCourriel.value,
            password: inputInscriptionPassword.value,
            passwordVerify: inputInscriptionVerifyPassword.value
        };

        // Transforme l'objet JavaScript en chaîne JSON.
        const donneesJson = JSON.stringify(donneesInscription);

        fetch("/inscription", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: donneesJson
        })
            .then(function (response) {
                // fetch() ne déclenche pas automatiquement catch() pour un 404 ou un 500.
                if (!response.ok) {
                    throw new Error("Erreur HTTP");
                }

                // Transforme le JSON reçu en objet JavaScript.
                return response.json();
            })
            .then(function (donnees) {
                // Flask a répondu, mais refuse une donnée du formulaire.
                if (donnees.succes === false) {
                    const inputErreur = champsInscription[donnees.champ];

                    inputErreur.setCustomValidity(donnees.message);
                    inputErreur.reportValidity();

                    // L'utilisateur doit pouvoir corriger et soumettre de nouveau.
                    btnValidezInscription.disabled = false;
                }
                // L'inscription a réussi.
                else {
                    confirmationInscription.classList.remove("cache");
                    confirmationInscription.scrollIntoView();
                }
            })
            .catch(function (erreur) {
                // Information utile au développeur.
                console.log(erreur);

                // Message général destiné à l'utilisateur.
                erreurTechniqueInscription.textContent =
                    "Une erreur est survenue. Veuillez réessayer.";
                erreurTechniqueInscription.classList.remove("cache");

                // Permet une nouvelle tentative.
                btnValidezInscription.disabled = false;
            });
    }
}


// ============================================================================
// 7. INSCRIPTION - RESET ET FIN DE L'INSCRIPTION
// ============================================================================

function inputInscriptionReset() {
    submitInscription.reset();
}

// Après une inscription réussie, passe au formulaire de connexion.
function continuerConnexion() {
    confirmationInscription.classList.add("cache");

    toggleConnexionInscription();
    formConnexion.scrollIntoView();

    // Prépare le formulaire d'inscription pour une prochaine utilisation.
    submitInscription.reset();
    btnValidezInscription.disabled = false;
}


// ============================================================================
// 8. CONNEXION - RESET DU FORMULAIRE
// ============================================================================

const submitconnexion = document.querySelector("#form-connexion");
const inputConnexionCourriel = document.querySelector("#connexion-courriel");
const inputConnexionPassword = document.querySelector("#connexion-password");
const btnAccedezConnexion = document.querySelector(".btn-accedez-connexion");
const erreurConnexion = document.querySelector(".erreur-connexion");
submitconnexion.addEventListener("submit", verifieSubmitConnexion);


const btnInputConnexionReset = document.querySelector(".btn-annulez-connexion");
btnInputConnexionReset.addEventListener("click", inputConnexionReset);


function verifieSubmitConnexion(event) {
    event.preventDefault();

    erreurConnexion.classList.add("cache");

    btnAccedezConnexion.disabled = true;

    const donneesConnexion = {
        courriel: inputConnexionCourriel.value,
        password: inputConnexionPassword.value
    };
    
    const donneesJsonConnexion = JSON.stringify(donneesConnexion);
    
    fetch("/connexion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: donneesJsonConnexion
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (donnees) {
        if (donnees.succes === false) {
            erreurConnexion.textContent = donnees.message;
            erreurConnexion.classList.remove("cache");
            btnAccedezConnexion.disabled = false;
        } 
        else {
            submitconnexion.reset();
            window.location.href = donnees.redirect;
        }
    })
    .catch(function (erreur) {
    console.log(erreur);

    erreurConnexion.textContent = "Une erreur est survenue. Veuillez réessayer.";

    erreurConnexion.classList.remove("cache");

    btnAccedezConnexion.disabled = false;
    });


}


// reset le formulaire de connexion
function inputConnexionReset() {
    submitconnexion.reset();

    
}


// ============================================================================
// 9. AFFICHAGE - BASCULE CONNEXION / INSCRIPTION
// ============================================================================

const btnAccessInscription = document.querySelector(".btn-access-inscription");
const btnQuiteInscription = document.querySelector(".btn-quite-inscription");

const formInscription = document.querySelector(".container-form-inscription");
const formConnexion = document.querySelector(".container-form-connexion");

btnAccessInscription.addEventListener("click", toggleConnexionInscription);
btnQuiteInscription.addEventListener("click", toggleConnexionInscription);

// Cache un formulaire et affiche l'autre.
function toggleConnexionInscription() {
    formConnexion.classList.toggle("cache");
    formInscription.classList.toggle("cache");
}


/********* Navigation de l'usager connecté *********/

function afficheLienEspaceUsager() {

    fetch("/api/usager")
    .then(function(response) {

        if (!response.ok) {
            return null;
        }

        return response.json();
    })
    .then(function(donnees) {
        console.log(donnees);
        if (donnees === null || donnees.succes !== true) {
            return;
        }

          // Si JavaScript arrive ici, Flask a confirmé
          // que l'usager possède une session valide.

        submitconnexion.reset();

        btnAccedezConnexion.disabled = true;


        const navUl = document.querySelector(".nav-ul-index");

        // Évite de créer deux fois le même lien.
        if (navUl.querySelector(".lien-espace-usager")) {
            return;
        }

        const li = document.createElement("li");
        const lien = document.createElement("a");

        lien.href = "/espace-usager";
        lien.textContent = "Mon espace";
        lien.classList.add("lien-espace-usager");

        li.append(lien);
        navUl.append(li);

            // Création du bouton Déconnexion
        const liDeconnexion = document.createElement("li");
        const btnDeconnexion = document.createElement("button");

        btnDeconnexion.type = "button";
        btnDeconnexion.textContent = "Déconnexion";
        btnDeconnexion.classList.add("btn-deconnexion-index");

        liDeconnexion.append(btnDeconnexion);
        navUl.append(liDeconnexion);

        // Événement du bouton
        btnDeconnexion.addEventListener("click", deconnexionIndex);
    })
    .catch(function(erreur) {
        console.error("Vérification de la connexion :", erreur);
    });
}

window.addEventListener("pageshow", function () {
    afficheLienEspaceUsager();
});


function deconnexionIndex() {

    fetch("/deconnexion", {
        method: "POST"
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (donnees) {

        if (donnees.succes === true) {
            window.location.href = "/";
        }

    })
    .catch(function (erreur) {
        console.error("Erreur de déconnexion :", erreur);
    });
}
