# Gym+ V1 --- Comprendre `fetch()` avec le formulaire d'inscription

## Objectif de cette étape

Cette note reprend le trajet réellement construit dans Gym+ :

``` text
formulaire Gym+
    ↓
donneesInscription
    ↓
JSON.stringify()
    ↓
donneesJson
    ↓
fetch()
    ↓
requête HTTP POST /inscription
    ↓
Flask
    ↓
request.get_json()
    ↓
dictionnaire Python
    ↓
réponse Flask
    ↓
Response reçue par fetch()
    ↓
response.json()
    ↓
objet JavaScript
```

L'objectif n'est pas seulement de savoir écrire `fetch()`, mais de
comprendre **ce qui circule entre le frontend et le backend et sous
quelle forme**.

------------------------------------------------------------------------

# 1. Point de départ : les données du formulaire

Après les validations HTML et JavaScript, les valeurs du formulaire sont
regroupées dans un objet JavaScript.

``` javascript
const donneesInscription = { // Crée l'objet JS contenant les données du formulaire
    prenom: inputInscriptionPrenom.value, // Récupère le prénom
    nom: inputInscriptionNom.value, // Récupère le nom
    naissance: inputInscriptionNaissance.value, // Récupère la date de naissance
    telephone: inputInscriptionTelephone.value, // Récupère le téléphone
    membreGym: membreOui.checked ? "oui" : "non", // Transforme le choix radio en "oui" ou "non"
    numeroMembre: inputInscriptionNumeroMembre.value, // Récupère le numéro de membre
    courriel: inputInscriptionCourriel.value, // Récupère le courriel
    password: inputInscriptionPassword.value, // Récupère le mot de passe
    passwordVerify: inputInscriptionVerifyPassword.value // Récupère la confirmation
};
```

À ce moment, `donneesInscription` est un **objet JavaScript**.

Exemple conceptuel :

``` javascript
{
    prenom: "Martin",
    nom: "Exemple",
    courriel: "exemple@courriel.com"
}
```

Cet objet est facile à manipuler en JavaScript, mais nous voulons
maintenant l'envoyer au backend.

------------------------------------------------------------------------

# 2. Transformer l'objet JavaScript en JSON

Nous avons utilisé :

``` javascript
const donneesJson = JSON.stringify(donneesInscription); // Transforme l'objet JS en chaîne JSON
```

Avant :

``` text
donneesInscription
        ↓
objet JavaScript
```

Après :

``` text
donneesJson
        ↓
string contenant du JSON
```

Nous l'avons vérifié avec :

``` javascript
console.log(donneesJson); // Affiche le JSON produit
console.log(typeof donneesJson); // Vérifie son type : "string"
```

`JSON.stringify()` ne produit donc pas un nouvel objet JavaScript. Il
produit **du texte au format JSON**.

------------------------------------------------------------------------

# 3. Envoyer le JSON avec `fetch()`

Le code utilisé dans Gym+ :

``` javascript
fetch("/inscription", { // Envoie une requête HTTP vers la route Flask /inscription

    method: "POST", // Utilise la méthode HTTP POST pour envoyer des données

    headers: { // Commence les informations décrivant la requête
        "Content-Type": "application/json" // Indique que le body contient du JSON
    },

    body: donneesJson // Place notre chaîne JSON dans le corps de la requête
});
```

Les quatre éléments importants sont :

``` text
URL       → où envoyer la requête
method    → quelle méthode HTTP utiliser
headers   → informations décrivant la requête et son contenu
body      → données réellement envoyées
```

Dans notre cas :

``` text
POST /inscription
Content-Type: application/json

{"prenom":"Martin", ...}
```

------------------------------------------------------------------------

# 4. La route Flask correspondante

Dans `app.py`, nous avons créé une route qui accepte les requêtes POST
envoyées vers `/inscription`.

``` python
@app.route("/inscription", methods=["POST"])  # Associe POST /inscription à cette fonction
def inscription():  # Fonction exécutée lorsque la requête arrive
    donnees = request.get_json()  # Lit le JSON du body et le transforme en dictionnaire Python

    print(donnees)  # Affiche les données reçues dans le terminal
    print(type(donnees))  # Vérifie leur type Python

    return {  # Retourne un dictionnaire que Flask enverra comme réponse JSON
        "succes": True,  # Indique que l'opération s'est bien passée
        "message": "Requête reçue"  # Message destiné au frontend
    }
```

Pour pouvoir utiliser `request`, l'import est :

``` python
from flask import Flask, render_template, request  # Importe Flask, render_template et request
```

------------------------------------------------------------------------

# 5. `request.get_json()`

Le frontend avait envoyé :

``` text
JSON string
```

dans le `body`.

Flask récupère ce contenu avec :

``` python
donnees = request.get_json()  # JSON reçu → dictionnaire Python
```

Le trajet est :

``` text
objet JavaScript
    ↓
JSON.stringify()
    ↓
string JSON
    ↓
body HTTP
    ↓
request.get_json()
    ↓
dict Python
```

Nous l'avons vérifié avec :

``` python
print(type(donnees))  # Affiche le type de donnees
```

Résultat :

``` text
<class 'dict'>
```

Le JSON n'est donc plus une chaîne de caractères à ce stade : Python
possède maintenant un **dictionnaire utilisable**.

------------------------------------------------------------------------

# 6. Le header `Content-Type` prend son sens

Dans JavaScript :

``` javascript
headers: { // Informations accompagnant la requête
    "Content-Type": "application/json" // Informe Flask que le body contient du JSON
}
```

Puis Flask fait :

``` python
donnees = request.get_json()  # Lit le contenu annoncé comme JSON
```

Le header ne contient pas les données elles-mêmes.

Il **décrit le type du contenu du body**.

``` text
headers
    ↓
« le contenu envoyé est du JSON »

body
    ↓
les données JSON elles-mêmes
```

------------------------------------------------------------------------

# 7. Flask renvoie une réponse HTTP

Au début, Flask retournait simplement :

``` python
return "Requête reçue"  # Envoie un texte dans le body de la réponse
```

Le terminal Flask affichait notamment :

``` text
POST /inscription HTTP/1.1" 200
```

Le code `200` indique que la requête HTTP a été traitée avec succès.

Nous avons ensuite retourné des données structurées :

``` python
return {  # Flask transforme ce dictionnaire en réponse JSON
    "succes": True,  # Information booléenne envoyée au frontend
    "message": "Requête reçue"  # Message envoyé au frontend
}
```

Côté Python :

``` text
True
```

Côté JSON / JavaScript :

``` text
true
```

------------------------------------------------------------------------

# 8. `fetch()` reçoit un objet `Response`

Nous avons ajouté un premier `.then()` :

``` javascript
fetch("/inscription", { // Lance la requête HTTP
    method: "POST", // Méthode HTTP utilisée
    headers: { // Informations sur le contenu envoyé
        "Content-Type": "application/json" // Le body contient du JSON
    },
    body: donneesJson // Données envoyées à Flask
})
.then(function(response) { // S'exécute lorsque la réponse HTTP est arrivée
    console.log(response); // Affiche l'objet Response complet
});
```

Nous avons observé quelque chose comme :

``` text
Response
├── status: 200
├── statusText: "OK"
├── ok: true
├── headers
└── body
```

Point important :

**`response` représente la réponse HTTP complète.**

Le contenu du body n'est pas directement l'objet `response`.

------------------------------------------------------------------------

# 9. Pourquoi un deuxième `.then()` ?

`fetch()` est asynchrone.

Le premier temps d'attente est :

``` text
fetch()
    ↓
attendre la réponse HTTP
    ↓
Response
```

Mais le contenu du `body` doit ensuite être lu.

Lorsque nous faisions :

``` javascript
return response.text(); // Demande de lire le body comme du texte
```

`response.text()` retournait lui aussi une **Promise**.

Le deuxième temps d'attente était donc :

``` text
Response
    ↓
response.text()
    ↓
attendre la lecture du body
    ↓
texte
```

Le code :

``` javascript
fetch("/inscription", { // Envoie la requête
    method: "POST", // Utilise POST
    headers: { // Décrit le contenu
        "Content-Type": "application/json" // Le body envoyé est du JSON
    },
    body: donneesJson // Envoie les données
})
.then(function(response) { // Reçoit la réponse HTTP
    console.log(response); // Affiche la Response

    return response.text(); // Lit le body comme texte et transmet la Promise
})
.then(function(texte) { // Reçoit le texte lorsque sa lecture est terminée
    console.log(texte); // Affiche le contenu du body
});
```

------------------------------------------------------------------------

# 10. Une Promise : idée essentielle

Pour cette étape, on peut retenir :

``` text
Promise
=
une valeur qui sera disponible plus tard
```

`fetch()` retourne une Promise parce que la réponse du serveur n'arrive
pas instantanément.

``` text
fetch(...)
    ↓
Promise
    ↓
plus tard : Response
```

Puis :

``` text
response.text()
    ↓
Promise
    ↓
plus tard : texte du body
```

`.then()` signifie conceptuellement :

> Lorsque l'opération sera terminée, exécute cette fonction avec le
> résultat obtenu.

------------------------------------------------------------------------

# 11. `response.text()` : le JSON reste du texte

Lorsque Flask a commencé à envoyer :

``` python
return {  # Dictionnaire Python
    "succes": True,  # Booléen Python
    "message": "Requête reçue"  # Texte Python
}
```

nous avons volontairement gardé :

``` javascript
return response.text(); // Lit la réponse comme une chaîne de caractères
```

Le résultat ressemblait à du JSON :

``` json
{
  "message": "Requête reçue",
  "succes": true
}
```

Mais :

``` javascript
console.log(typeof texte); // Vérifie le type du résultat
```

a affiché :

``` text
string
```

Donc :

``` text
du texte qui ressemble à un objet
≠
un véritable objet JavaScript
```

------------------------------------------------------------------------

# 12. `response.json()` : JSON → objet JavaScript

Nous avons ensuite remplacé :

``` javascript
return response.text(); // Ancienne version : retourne une string
```

par :

``` javascript
return response.json(); // Lit le JSON et produit des données JavaScript
```

Notre code est devenu :

``` javascript
fetch("/inscription", { // Envoie une requête HTTP vers Flask
    method: "POST", // Envoie les données avec POST

    headers: { // Décrit le contenu envoyé
        "Content-Type": "application/json" // Le body contient du JSON
    },

    body: donneesJson // Place notre JSON dans le body
})
.then(function(response) { // Reçoit la réponse HTTP de Flask

    console.log(response); // Affiche l'objet Response complet

    return response.json(); // Lit le JSON du body et le transforme en données JS

})
.then(function(donnees) { // Reçoit l'objet JavaScript obtenu

    console.log(donnees); // Affiche l'objet JavaScript
    console.log(typeof donnees); // Vérifie son type : "object"
});
```

Résultat observé :

``` javascript
{
    message: "Requête reçue",
    succes: true
}
```

et :

``` text
object
```

------------------------------------------------------------------------

# 13. `response.json()` et `JSON.parse()`

Conceptuellement, nous connaissions déjà :

``` javascript
JSON.parse(texteJson); // JSON string → données JavaScript
```

Avec une réponse HTTP, `fetch()` nous fournit :

``` javascript
response.json(); // Lit le body JSON → données JavaScript
```

On n'a donc pas besoin de faire manuellement :

``` javascript
JSON.parse(...)
```

dans ce cas.

------------------------------------------------------------------------

# 14. Utiliser les données retournées par Flask

Puisque `donnees` est maintenant un véritable objet JavaScript, nous
pouvons utiliser les propriétés normalement :

``` javascript
.then(function(donnees) { // Reçoit l'objet JavaScript retourné par le backend

    console.log(donnees.message); // Affiche : Requête reçue
    console.log(donnees.succes); // Affiche : true
});
```

Résultat observé :

``` text
Requête reçue
true
```

À partir de ce moment, le frontend peut prendre des décisions selon ce
que Flask lui retourne.

Plus tard, par exemple, le backend pourra retourner une réussite ou une
erreur et JavaScript pourra adapter l'interface. Cette logique n'est pas
encore construite dans cette étape.

------------------------------------------------------------------------

# 15. Code `fetch()` obtenu à la fin de cette étape

``` javascript
// Transforme l'objet contenant le formulaire en chaîne JSON
const donneesJson = JSON.stringify(donneesInscription);

// Envoie la requête HTTP au backend Flask
fetch("/inscription", {

    // Indique que nous envoyons des données au serveur
    method: "POST",

    // Décrit le type de données placé dans le body
    headers: {
        "Content-Type": "application/json"
    },

    // Contient les données JSON réellement envoyées
    body: donneesJson

})
.then(function(response) {

    // Affiche la réponse HTTP complète reçue de Flask
    console.log(response);

    // Lit le body JSON et le transforme en données JavaScript
    return response.json();

})
.then(function(donnees) {

    // Lit la propriété message de l'objet retourné
    console.log(donnees.message);

    // Lit la propriété succes de l'objet retourné
    console.log(donnees.succes);
});
```

------------------------------------------------------------------------

# 16. Code Flask obtenu à cette étape

``` python
from flask import Flask, render_template, request  # Importe les outils Flask nécessaires

app = Flask(__name__)  # Crée l'application Flask


@app.route("/")  # Crée la route GET de la page d'accueil
def accueil():  # Fonction exécutée lorsqu'on visite /
    return render_template("index.html")  # Envoie index.html au navigateur


@app.route("/inscription", methods=["POST"])  # Accepte POST /inscription
def inscription():  # Fonction exécutée lors de l'envoi du formulaire
    donnees = request.get_json()  # JSON du body → dictionnaire Python

    print(donnees)  # Affiche les données reçues pour notre test
    print(type(donnees))  # Confirme que donnees est un dict Python

    return {  # Retourne une réponse JSON au frontend
        "succes": True,  # Valeur indiquant la réussite
        "message": "Requête reçue"  # Message retourné à JavaScript
    }


if __name__ == "__main__":  # Vérifie que ce fichier est lancé directement
    app.run(debug=True)  # Démarre le serveur Flask en mode debug
```

------------------------------------------------------------------------

# 17. Le trajet complet à retenir

## Aller : JavaScript → Flask

``` text
formulaire HTML
    ↓
valeurs des inputs
    ↓
donneesInscription
objet JavaScript
    ↓
JSON.stringify()
    ↓
donneesJson
string JSON
    ↓
fetch()
    ↓
POST /inscription
    ↓
headers
Content-Type: application/json
    ↓
body
JSON
    ↓
Flask
    ↓
request.get_json()
    ↓
donnees
dict Python
```

## Retour : Flask → JavaScript

``` text
dict Python
{
    "succes": True,
    "message": "Requête reçue"
}
    ↓
Flask
    ↓
réponse HTTP JSON
    ↓
fetch()
    ↓
Response
    ↓
response.json()
    ↓
donnees
objet JavaScript
    ↓
donnees.message
donnees.succes
```

------------------------------------------------------------------------

# 18. Les distinctions importantes

``` text
donneesInscription
→ objet JavaScript

donneesJson
→ string contenant du JSON

body de la requête
→ contient donneesJson

request.get_json()
→ transforme le JSON reçu en dict Python

response
→ objet représentant la réponse HTTP complète

response.text()
→ lit le body comme une string

response.json()
→ lit le body JSON et produit des données JavaScript

donnees dans le deuxième .then()
→ objet JavaScript utilisable normalement
```

------------------------------------------------------------------------

# 19. Où nous en sommes dans Gym+

À la fin de cette étape :

-   le formulaire peut produire les données d'inscription ;
-   JavaScript peut transformer ces données en JSON ;
-   `fetch()` peut envoyer le JSON à Flask avec `POST /inscription` ;
-   Flask peut récupérer le JSON avec `request.get_json()` ;
-   les données deviennent un dictionnaire Python ;
-   Flask peut retourner une réponse JSON ;
-   JavaScript reçoit l'objet `Response` ;
-   `response.json()` transforme le body JSON en données JavaScript ;
-   JavaScript peut utiliser `donnees.message` et `donnees.succes`.

Nous **n'avons pas encore enregistré le membre dans SQLite**.

Nous **n'avons pas encore effectué les validations importantes côté
backend**.

Nous **n'avons pas encore haché ni enregistré le mot de passe**.

Ces étapes viendront après ce bloc sur le trajet HTTP / JSON /
`fetch()`.
