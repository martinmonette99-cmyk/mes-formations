/* 
    1. Insérer du contenu avec les backticks 
    
    Avec les template literals (les backticks``), nous pouvons intégrer des expressions JavaScript dans une chaîne de caractères.
    Cela peut se révéler très pratique pour créer du contenu, mais attention aux problèmes de sécurité.
*/


    const list = document.querySelector(".list");
    const data = [
      {
        title: "Lorem ipsum",
        symbol: "☘️",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugiat, minima, iure rem quia vitae ab voluptatem natus nesciunt eligendi excepturi possimus nemo consequatur ut?"
      },
      {
        title: "Lorem ipsum",
        symbol: "🌱",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugiat, minima, iure rem quia vitae ab voluptatem natus nesciunt eligendi excepturi possimus nemo consequatur ut?"
      },
      {
        title: "Lorem ipsum",
        symbol: "🍏",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugiat, minima, iure rem quia vitae ab voluptatem natus nesciunt eligendi excepturi possimus nemo consequatur ut?"
      },
       {
         title: "Lorem ipsum",
         symbol: "📗",
         content: `<img src='1' onerror='console.log("Code malicieux")'>`
       }
    ]

      data.forEach(data => {
        const li = document.createElement("li")
        li.innerHTML = `
        <h2>${data.title} ${data.symbol}</h2>
        <p>${data.content}</p>
        `
        list.appendChild(li)
      })


/* 
      1. Attention, danger. 

      Si nous intégrons des données venant d'une source non sûre, comme une API externe, et que nous utilisons directement "li.innerHTML = data.content;", alors nous convertissons tout le texte en code potentiel.

      L'élément <script></script> est bloqué par défaut avec innerHTML.

      Mais il existe d'autres façons plus obscures d'exécuter du JS.
      
      `<img src='1' onerror='alert("Error loading image")'>`;

      Cette ligne va exécuter le code dans onerror.
      Ici c'est une méthode alert(), mais ça pourrait une récupération de cookies qu'on pourrait envoyer vers un tier.

*/

      // Solution qui mélange les deux pratiques, mais sans risque.
      
      data.forEach(data => {
        const li = document.createElement("li")
        const liContent = `
        <h2 class="title" id="title-1" ></h2>
        <p class="txt">lorem ipsum </p>
        `
        li.innerHTML = liContent;
        li.querySelector("h2").textContent = `${data.title} ${data.symbol}`
        li.querySelector("p").textContent = `${data.content}`
        list.appendChild(li)
      }
      )


/* 
    En résumé, les templates litterals peuvent être utiles si on a envie de créer de gros morceaux de codes.
    
    Néanmoins, si on s'en sert pour intégrer du code venant d'une source qu'on ne maîtrise pas, on va au devant de gros problèmes, car quiconque peut partager du code malicieux avec tous ceux qui visiteront la page.

    Voilà pourquoi il est préférable d'utiliser la méthode createElement() le plus souvent.
*/