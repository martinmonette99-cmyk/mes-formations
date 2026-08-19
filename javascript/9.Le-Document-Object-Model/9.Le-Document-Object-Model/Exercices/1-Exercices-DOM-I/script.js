
/*
1. Sélectionnez et changez la couleur du <h1> en "plum" en JavaScript.
*/

const titre = document.querySelector("h1");

titre.style.backgroundColor = "plum";

// façon plus concise
document.querySelector("h1").style.backgroundColor = "plum";

/*
    2. Sélectionnez le paragraphe sous le titre à l'aide de son ID.

    Deux façons de faire sont possibles.
*/

// façon 1
const paragraphe = document.querySelector("#subtitle")
console.log(paragraphe);

// façon 2
const paragraph2 = document.getElementById("subtitle");
 console.log(paragraph2);



/*
    3. Loggez le texte du troisième <li> dans la console.
*/

console.log( document.querySelector(".list li:nth-child(3)").outerHTML);

const list = document.querySelector(".list");
console.log(list.children[2].outerHTML);

console.log( document.querySelector(".list li:nth-child(3)").textContent);





/*  
    4. Loggez le contenu de l'attribut "src" de l'image dans la console.
*/

const img = document.querySelector("img");
console.log(img.src);


console.log(document.querySelector("img").src);


console.log(document.querySelector("img").getAttribute("src")); // retourne que le nom  images/cat.jpg

/*
    5. Rajoutez un <li> contenant le texte "Nouveau LI !" à la liste. 
*/

const liste2 = document.querySelector(".list");
const li = document.createElement("li"); // 

li.textContent = "Nouveau LI";
liste2.appendChild(li);

console.log(liste2.children[5]);



const li2 = document.createElement("li");
li.textContent = "Nouveau LI 2";
console.log(document.querySelector(".list").appendChild(li2));
document.querySelector(".list").appendChild(li2)



