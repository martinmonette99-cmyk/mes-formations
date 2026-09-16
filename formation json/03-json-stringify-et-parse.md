# Formation JSON --- Bloc 3 : `JSON.stringify()` et `JSON.parse()`

## Objectif du bloc

Comprendre les deux transformations fondamentales :

``` text
donnée JavaScript
       ↓
JSON.stringify()
       ↓
string contenant du JSON

string contenant du JSON
       ↓
JSON.parse()
       ↓
donnée JavaScript
```

La question centrale est : **qu'est-ce que je possède actuellement, et
sous quelle forme ai-je besoin de la donnée ?**

## 1. `JSON.stringify()`

`JSON.stringify()` transforme une donnée JavaScript en string contenant
du JSON.

``` javascript
const membre = {
  id: 3,
  prenom: "Didier",
  statut: "actif"
};

const membreJSON = JSON.stringify(membre);
```

Avant :

``` text
membre → objet JavaScript
```

Après :

``` text
membreJSON → string JavaScript contenant du JSON
'{"id":3,"prenom":"Didier","statut":"actif"}'
```

Le mot **string** dans `stringify` peut servir de repère mental : on
transforme la donnée en string JSON.

`stringify()` ne modifie pas la donnée originale. `membre` reste un
objet JavaScript et `membreJSON` est une nouvelle valeur de type string.

## 2. `JSON.parse()`

`JSON.parse()` effectue la transformation inverse. Il analyse une string
contenant du JSON valide et construit la donnée JavaScript
correspondante.

``` javascript
const membreJSON = '{"id":3,"prenom":"Didier","statut":"actif"}';
const membre = JSON.parse(membreJSON);
```

Trajet :

``` text
string contenant du JSON
       ↓
JSON.parse()
       ↓
objet JavaScript
```

On peut ensuite utiliser normalement :

``` javascript
membre.prenom
```

Résultat : `Didier`.

## 3. Aller-retour complet

``` javascript
const membre = {
  id: 3,
  prenom: "Didier"
};

const texte = JSON.stringify(membre);
const nouveauMembre = JSON.parse(texte);
```

Trajet :

``` text
objet JavaScript
       ↓ JSON.stringify()
string contenant du JSON
       ↓ JSON.parse()
objet JavaScript
```

Les informations sont conservées. C'est leur **forme** qui change.

## 4. Tableaux

`JSON.stringify()` fonctionne également avec les tableaux.

``` javascript
const langages = ["HTML", "CSS", "JavaScript"];
const texte = JSON.stringify(langages);
```

Résultat :

``` text
'["HTML","CSS","JavaScript"]'
```

Puis :

``` javascript
const resultat = JSON.parse(texte);
```

`resultat` est un tableau JavaScript.

Dans cette formation, on utilise le vocabulaire pratique :

``` text
[] → tableau
{} → objet
```

même si `typeof []` retourne techniquement `"object"`.

## 5. Tableaux d'objets

``` javascript
const membres = [
  { id: 1, prenom: "Didier" },
  { id: 2, prenom: "Sophie" }
];

const membresJSON = JSON.stringify(membres);
```

Résultat :

``` text
'[{"id":1,"prenom":"Didier"},{"id":2,"prenom":"Sophie"}]'
```

Puis :

``` javascript
const nouveauxMembres = JSON.parse(membresJSON);
```

`nouveauxMembres` contient de nouveau un tableau JavaScript contenant
des objets.

``` javascript
nouveauxMembres[1].prenom
```

donne `Sophie`.

## 6. Structures imbriquées

Les structures imbriquées sont conservées.

``` javascript
const membre = {
  id: 3,
  prenom: "Didier",
  adresse: {
    ville: "Montréal",
    province: "Québec"
  },
  roles: ["membre", "client"]
};

const texte = JSON.stringify(membre);
const resultat = JSON.parse(texte);
```

On peut toujours utiliser :

``` javascript
resultat.adresse.ville
resultat.roles[0]
```

Après `JSON.parse()`, on travaille normalement avec les tableaux,
objets, boucles et méthodes JavaScript habituels.

## 7. JSON invalide et `JSON.parse()`

Ceci fonctionne :

``` javascript
const texte = '{"prenom":"Didier","age":42}';
const membre = JSON.parse(texte);
```

Ceci est invalide :

``` javascript
const texte = '{prenom:"Didier",age:42}';
```

Les clés JSON doivent utiliser les guillemets doubles.

Une virgule finale est également interdite en JSON :

``` text
{
  "prenom": "Didier",
  "age": 42,
}
```

Si `JSON.parse()` reçoit du JSON invalide, il produit une `SyntaxError`.

## 8. `undefined` avec `JSON.stringify()`

`undefined` n'est pas une valeur JSON.

``` javascript
const membre = {
  prenom: "Didier",
  telephone: undefined
};

const texte = JSON.stringify(membre);
```

Résultat :

``` text
'{"prenom":"Didier"}'
```

Dans cet objet, la propriété `telephone` est omise.

## 9. `null` est accepté

``` javascript
const membre = {
  prenom: "Didier",
  telephone: null
};

const texte = JSON.stringify(membre);
```

Résultat :

``` text
'{"prenom":"Didier","telephone":null}'
```

Donc :

``` text
telephone: undefined → propriété omise dans cet objet
telephone: null      → propriété conservée avec la valeur null
```

Cette différence peut devenir importante dans un échange avec un
backend.

## 10. Fonctions

Une fonction JavaScript ne peut pas être représentée comme une valeur
JSON.

``` javascript
const membre = {
  prenom: "Didier",
  saluer() {
    console.log("Bonjour");
  }
};

JSON.stringify(membre);
```

Résultat :

``` text
'{"prenom":"Didier"}'
```

Dans cet objet, la propriété contenant la fonction est omise.

JSON sert principalement à représenter des **données**, pas du code à
exécuter.

## 11. JSON lisible

Par défaut :

``` javascript
JSON.stringify(membres);
```

produit une string compacte.

Pour une représentation plus lisible :

``` javascript
JSON.stringify(membres, null, 2);
```

Le `2` demande une indentation de deux espaces.

## 12. Ne pas utiliser la transformation dans le mauvais sens

Si on possède déjà :

``` javascript
const membre = {
  prenom: "Didier"
};
```

on peut directement faire :

``` javascript
membre.prenom
```

Il n'y a aucune raison de faire `JSON.parse(membre)` : la donnée est
déjà sous forme JavaScript.

À l'inverse, avec :

``` javascript
const texte = '{"prenom":"Didier"}';
```

si on veut obtenir l'objet JavaScript correspondant :

``` javascript
const membre = JSON.parse(texte);
```

## 13. Préparation à `fetch()`

Plus tard, on pourra rencontrer :

``` javascript
fetch("/api/membres", {
  method: "POST",
  body: JSON.stringify(membre)
});
```

Sans encore apprendre `fetch()`, cette partie est déjà compréhensible :

``` javascript
JSON.stringify(membre)
```

effectue :

``` text
objet JavaScript
       ↓
string contenant du JSON
```

Cette compréhension servira pour suivre le trajet frontend → HTTP →
backend.

# À retenir

``` text
DONNÉE JAVASCRIPT
       │
       │ JSON.stringify()
       ↓
STRING CONTENANT DU JSON
       │
       │ JSON.parse()
       ↓
DONNÉE JAVASCRIPT
```

-   `JSON.stringify()` : donnée JavaScript → string JSON.
-   `JSON.parse()` : string JSON valide → donnée JavaScript.
-   Les tableaux, objets et structures imbriquées sont conservés.
-   `undefined` n'existe pas en JSON ; `null` existe.
-   Les fonctions ne sont pas représentées comme des valeurs JSON.
-   `JSON.parse()` exige du JSON valide.
-   Une fois la donnée convertie en JavaScript, on la manipule
    normalement.

Principe central :

> **Qu'est-ce que je possède actuellement, et qu'est-ce que je veux
> obtenir ?**
