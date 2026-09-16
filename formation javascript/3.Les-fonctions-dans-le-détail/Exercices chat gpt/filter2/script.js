/*
const cinq = 5;

function verifie(nombre){
  return nombre === 5;
}

const vraiOuFaux = verifie(cinq);
console.log(vraiOuFaux); 
*/




const chiffre =  [1,2,3,4,5,6,7,8,9];

function arrayOfPaire(arr){
  const arrayPaire = []; 
  
  for(const chiffrePaire of arr){
      if(chiffrePaire % 2 === 0){
        arrayPaire.push(chiffrePaire);
      }
  }
  return arrayPaire;
}

const tableau = arrayOfPaire(chiffre);
console.log(tableau);



// Si la personne est québecoise, affiche son nom
/*
const amis = [
{
  nom: "Martin",
  nation: "QC"
},
{
  nom: "Jules",
  nation: "QC"
},
{
  nom: "Martine",
  nation: "CA"
},
{
  nom: "Didier",
  nation: "FR"
},
{
  nom: "Pat",
  nation: "QC"
},
]


function isquebec(arr){

const qcPeople = [];

for(const isQc of arr){
  if(isQc.nation === "QC")
  {
    qcPeople.push(isQc);
 //   console.log(qcPeople);
  }
}
  return qcPeople;
}

const amisQuebec = isquebec(amis);
  for(const listAmis of amisQuebec){
    console.log(listAmis);
  }
*/

 // sépart en tableau les nationalité
/*
const amis = [
{
  nom: "Martin",
  nation: "QC"
},
{
  nom: "Jules",
  nation: "QC"
},
{
  nom: "Martine",
  nation: "CA"
},
{
  nom: "Didier",
  nation: "FR"
},
{
  nom: "Pat",
  nation: "QC"
},
]


function splitNation(arr){

const arrayQC = [];
const arrayCA = [];
const arrayFR = [];

for(const pays of arr){
  if(pays.nation === "QC")
  {
    arrayQC.push(pays);
  }
  else if(pays.nation === "CA")
  {
    arrayCA.push(pays);
  }
  else if(pays.nation === "FR")
  {
    arrayFR.push(pays);
  }

}
  return {arrayQC, arrayCA, arrayFR}
}

const troisTableaux = splitNation(amis);

  for(const ami of troisTableaux.arrayQC){
    console.log(ami);
  } 
  for(const ami of troisTableaux.arrayCA){
    console.log(ami);
  } 
  for(const ami of troisTableaux.arrayFR){
    console.log(ami);
  } 
    
*/



const amis = [
{
  nom: "Martin",
  nation: "QC"
},
{
  nom: "Jules",
  nation: "QC"
},
{
  nom: "Martine",
  nation: "CA"
},
{
  nom: "Didier",
  nation: "FR"
},
{
  nom: "Pat",
  nation: "QC"
},
]

function splitNation(arr, callback) {

const arrayNation = [];

  for(const ami of arr)
  {
    if(callback(ami))
    {
      arrayNation.push(ami);
    }
    
 
  } 
     return arrayNation;
}


const amisQuebec = splitNation(amis, ami => ami.nation === "QC");
const amisCanada = splitNation(amis, ami => ami.nation === "CA");
const amisFrance = splitNation(amis, ami => ami.nation === "FR");

console.log({amisQuebec});  // les accolade pour voir aussi le nom de la variable dans la console.
console.log({amisCanada});  // les accolade pour voir aussi le nom de la variable dans la console.
console.log({amisFrance});  // les accolade pour voir aussi le nom de la variable dans la console.







