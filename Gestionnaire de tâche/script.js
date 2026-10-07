const taches = [
    {
        id: 1,
        titre: "Laver la vesselle",
        priorite: "basse",
        statut: "terminée"
    },
    {
        id: 2,
        titre: "Terminer Taskio",
        priorite: "moyenne",
        statut: "active"
    },
    {
        id: 3,
        titre: "Épicerie",
        priorite: "haute",
        statut: "active"
    },
    {
        id: 4,
        titre: "sadsd sdfsfsdfsdf sdfgf dgfdyty dtytryrty rtytryrt",
        priorite: "haute",
        statut: "active"
    },
    {
        id: 5,
        titre: "Faire une carte supplémentaire sur 2 lignes",
        priorite: "haute",
        statut: "active"
    }
    
    

]


const containerListeTaches = document.querySelector(".container-liste-taches");

const filterAll = document.querySelector(".btn-toutes");
const filterActive = document.querySelector(".btn-actives");
const filtertermine = document.querySelector(".btn-terminees");

const submitNewTache = document.querySelector("#index-form");



/******** affiche et crée les tâches du tableau  ***************************** */


function AfficheTache(array){

    containerListeTaches.replaceChildren(); // enleve les éléments de container-liste-taches

    array.forEach(tache => {


    let cardContent;
    const card = document.createElement("div");
    card.classList.add("card");
    
    if(tache.statut === "active"){ 
        cardContent = `
        <h3 class="card-titre"></h3>
        <p class="card-priorite"></p>
        <p class="card-statut"></p>
        <div class="container-card-btn">
            <button class="btn-terminer btn-card">Terminer</button>
            <button class="btn-supprimer btn-card">Supprimer</button>
        </div>
        `;
    }
    else if(tache.statut === "terminée"){
        cardContent = `
        <h3 class="card-titre"></h3>
        <p class="card-priorite"></p>
        <p class="card-statut"></p>
        <div class="container-card-btn">
            <button class="btn-activer btn-card">Activer</button>
            <button class="btn-supprimer btn-card">Supprimer</button>
        </div>
        `;   
    }

    card.innerHTML = cardContent;
    card.querySelector(".card-titre").textContent = `${tache.titre}`;
    card.querySelector(".card-priorite").textContent = `Priorité: ${tache.priorite}`;
    card.querySelector(".card-statut").textContent = `Statut: ${tache.statut}`;

    containerListeTaches.appendChild(card);
    
    
    });

}

AfficheTache(taches);







/*********** affiche les tâche (toute, active et terminée) ****************** */

filterAll.addEventListener("click", showall);
filterActive.addEventListener("click", showActive);
filtertermine.addEventListener("click", showtermine);

function showall(){
    containerListeTaches.replaceChildren(); // enleve les éléments de container-liste-taches

    AfficheTache(taches);
}

function showActive(){
    let tachesActives = [];
    containerListeTaches.replaceChildren(); // enleve les éléments de container-liste-taches

        taches.forEach((el) => {
            if(el.statut === "active"){
                tachesActives.push(el); 
            }
        });
    AfficheTache(tachesActives);
}

function showtermine(){
    let tachesterminees = [];
    containerListeTaches.replaceChildren(); // enleve les éléments de container-liste-taches

        taches.forEach((el) => {
            if(el.statut === "terminée"){
                tachesterminees.push(el); 
            }
        });

    AfficheTache(tachesterminees);
}

/******************* */

submitNewTache.addEventListener("submit", createTache);

function createTache(event){
    event.preventDefault();

    const titreNewTache =  document.querySelector("#nouvelle-tache");
    
    // demande celui qui est actuellement coché
    const prioriteNewTache = document.querySelector('input[name="priorite"]:checked');

    
    let idHigh = 0;

    taches.forEach(el => {
        if(el.id >= idHigh){
            idHigh = el.id;
        }
    });
    idHigh++

    const donneeNewtache = {
        id: idHigh,
        titre: titreNewTache.value,
        priorite: prioriteNewTache.value,
        statut: "active"
    }

    taches.push(donneeNewtache);
    console.log(taches);
    AfficheTache(taches);
}


