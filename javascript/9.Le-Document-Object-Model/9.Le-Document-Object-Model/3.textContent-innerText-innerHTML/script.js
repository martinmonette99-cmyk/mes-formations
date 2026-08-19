/* 
    Ces trois propriétés pratiques se ressemblent, mais il faut bien comprendre leurs différences.
*/

const container = document.querySelector(".container");
const title = document.querySelector("h1");

console.log(container);
console.log(container.children);


/* 
    Element : innerHTML = string

    Transforme la chaîne de caractères fournie en éléments HTML si la syntaxe est respectée.
    Rajoute du texte au contenu d'un élément si la chaîne fournie n'est pas au format HTML.
    
    Cette propriété comporte des risques si elle est mal utilisée.
    Nous en parlerons un peu plus tard.
*/

    // Supprime le contenu de container et ajoute un élément HMTL dans l'élément container.
//  container.innerHTML = "<input type='text' />"
    
//  container.innerHTML = "Texte remplacé"; //h1 et p supprimé remplacé par un noeud texte
    
//  container.innerHTML = "<p>Texte remplacé</p>"; //h1 et p supprimé remplacé par un paragraphe contenant un noeud texte

    
    //innerHTML ne crée pas un nouvel élément. Il modifie uniquement un élément qui existe déjà et le remplace. Si cet élément a été retiré du DOM, la modification a bien lieu, mais elle n'est plus visible sur la page.

//  title.innerHTML = "nouveau texte"; //ne s'affiche pas car le h1 n'existe plus, donc rien à remplacer.
   
    // Retourne le contenu interne de container.

/* 
    Element : textContent

    Retourne ou modifie le texte à l'intérieur d'un élément.
    Retournera également le contenu en "visibility: hidden;", contrairement à innerText.
*/

    // Retourne le texte à l'intérieur de container, caché ou pas.
//   console.log(container.textContent); // affiche le texte qui est dans container, même celui dissimulé
 
 
    // Change le texte à l'intérieur de container
//   title.textContent = "Changé par textContent";


/* 
    Element : innerText
    
    Retourne ou modifie le texte à l'intérieur d'un élément.
    Retournera seulement le texte visible, non-dissimulé par visibility: hidden.
*/

    // Retourne seulement le texte visible
//    console.log(container.innerText);
//    title.innerText = "Changé par innerText"
    


/* 
    De la dangerosité d'innerHTML.

    Il ne faut jamais transformer en HTML des données qu'on reçoit d'une source non-sûre.

    Par prévention, HTML n'exécute pas un "<script></script>"" avec innerHTML.

    Par exemple : body.innerHTML = "<script>alert("script malicieux)</script>" // ne fonctionne pas.

    Mais il existe d'autres façons d'exécuter du JS, comme par exemple avec ... l'élément <img> !

    `<img src='1' onerror='alert("Error loading image")'>`;
*/

// N'est pas éxécuté
//document.body.innerHTML = "<script>alert('script malicieux')</script>";
//document.body.innerHTML = "<script>console.log('script malicieux')</script>";




/* 
    textContent vs innerText

    Une petite guerre existe pour savoir s'il faut utiliser textContent ou innerText.
    Il y a certes, certaines différences entre les deux, mais vous pouvez la plupart du temps les utiliser de manière interchangeable.
    Je vous conseille d'utiliser textContent qui est en général plus acceptée.
*/

title.innerText = "ZZZ";
console.dir(title);

//hasOwnProperty montre si la propriété existe. ariaBusy ont la voit dans la console mais n'existe pas. on voit les objet du DOM C++ mais n'existe pas en javascript (marqué NULL à côté)
console.log(title.hasOwnProperty("ariaBusy"));


// peut on créer des getters et setters? oui
// obj.innerText; execute le get car le set doit recevoir une valeur

const obj = {
    get innerText(){ // get est là pour retourner une valeur, pas pour en recevoir une
        console.log("GET C++ DOM VALUE");
        return "some text";
    },
    set innerText(value){    // pour un set il faut toujour mettre une valeur
        console.log("Change C++ DOM VALUE", value);
        
    }
}
const retourGet = obj.innerText;  // GET C++ DOM VALUE
console.log(retourGet); // some text
obj.innerText = "Nouvelle valeur"; //Change C++ DOM VALUE

console.log(obj.innerText);  // GET C++ DOM VALUE