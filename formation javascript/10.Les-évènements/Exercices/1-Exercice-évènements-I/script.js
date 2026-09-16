/*
    Prévenez le comportement par défaut du formulaire afin de récupérer les données écrites dans les inputs et les afficher dans les paragraphes correspondants.
*/


const form = document.querySelector("form");
const firstNameInput = document.querySelector("#firstname");
const lastNameInput = document.querySelector("#lastname");
const prenom = document.querySelector(".firstname");
const nom = document.querySelector(".lastname");

form.addEventListener("submit", handlesubmit);


function handlesubmit(e){
    e.preventDefault(); // Empeche le submit de refresh toute la page 
    
    prenom.textContent = `Votre prénom : ${firstNameInput.value}` 
    nom.textContent = `Votre nom : ${lastNameInput.value}` 

    form.reset();  // reset seulement les inputs 
    // ou
    // inputs.forEach(input => input.value = "");
};



// Corigé  ***************************************************************
/*


const form = document.querySelector("form");
const inputs = document.querySelectorAll("form input");
const firstNameText = document.querySelector(".firstname");
const lastNameText = document.querySelector(".lastname");

form.addEventListener("submit", handleForm);

function handleform(e){
    e.preventDefault(); // Empeche le submit de refresh la page et d'effacé le console.log
    
    firstNameText.textContent = `Votre prénom : ${inputs[0].value}` 
    lastNameText.textContent = `Votre nom : ${inputs[1].value}` 

    form.reset();  // reset les inputs 
    // ou
    // inputs.forEach(input => input.value = "");
};



*/
