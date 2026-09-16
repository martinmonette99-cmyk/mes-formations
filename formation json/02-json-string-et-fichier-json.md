# Formation JSON --- Bloc 2 : objet JavaScript, string JSON et fichier `.json`

## 1. Les trois formes à distinguer

Ce bloc introduit une distinction essentielle entre :

1.  un **objet JavaScript** ;
2.  une **string JavaScript contenant du JSON** ;
3.  un **fichier `.json`**.

------------------------------------------------------------------------

## 2. Objet JavaScript

``` javascript
const membre = {
  id: 3,
  prenom: "Didier",
  statut: "actif"
};
```

Ici, `membre` contient directement un **objet JavaScript**.

JavaScript comprend sa structure et peut accéder immédiatement à ses
propriétés :

``` javascript
console.log(membre.prenom);
```

Résultat :

``` text
Didier
```

On peut représenter mentalement l'objet ainsi :

``` text
membre
│
├── id → 3
├── prenom → "Didier"
└── statut → "actif"
```

------------------------------------------------------------------------

## 3. String JavaScript contenant du JSON

Regardons maintenant :

``` javascript
const donnees = '{"id":3,"prenom":"Didier","statut":"actif"}';
```

Les guillemets extérieurs montrent que la valeur de `donnees` est une
**chaîne de caractères JavaScript (`string`)**.

Son contenu respecte la syntaxe JSON, mais JavaScript possède
actuellement du **texte**, et non un objet JavaScript.

La formulation précise est donc :

> `donnees` est une string JavaScript contenant du JSON.

Mentalement :

``` text
donnees
   ↓
string JavaScript
   ↓
'{"id":3,"prenom":"Didier","statut":"actif"}'
```

Ce n'est pas encore l'objet :

``` text
membre
├── id → 3
├── prenom → "Didier"
└── statut → "actif"
```

Une transformation sera nécessaire pour obtenir un objet JavaScript.
Cette transformation sera étudiée avec `JSON.parse()`.

------------------------------------------------------------------------

## 4. Comparaison directe

### Objet JavaScript

``` javascript
const membre = {
  id: 3,
  prenom: "Didier"
};
```

Type de donnée :

``` text
objet JavaScript
```

On peut faire directement :

``` javascript
membre.prenom
```

### String contenant du JSON

``` javascript
const membreJSON = '{"id":3,"prenom":"Didier"}';
```

Type de donnée :

``` text
string JavaScript
```

Son contenu est écrit selon la syntaxe JSON.

La différence essentielle est donc :

``` text
Objet JavaScript
{ id: 3, prenom: "Didier" }

        ≠

String JavaScript contenant du JSON
'{"id":3,"prenom":"Didier"}'
```

Les informations représentées peuvent être les mêmes, mais leur **forme
dans le programme** est différente.

------------------------------------------------------------------------

## 5. Fichier `.json`

Un fichier JSON est un **fichier texte dont le contenu respecte la
syntaxe JSON**.

Exemple :

``` text
membre.json
```

Contenu :

``` json
{
  "id": 3,
  "prenom": "Didier",
  "statut": "actif"
}
```

Le fichier permet de **stocker les données**.

Comme un fichier `.css` contient normalement du CSS, un fichier `.json`
contient des données écrites selon les règles JSON.

------------------------------------------------------------------------

## 6. Un fichier JSON peut contenir un tableau d'objets

Exemple :

``` json
[
  {
    "id": 1,
    "prenom": "Sophie",
    "statut": "actif"
  },
  {
    "id": 2,
    "prenom": "Martin",
    "statut": "actif"
  },
  {
    "id": 3,
    "prenom": "Didier",
    "statut": "inactif"
  }
]
```

La structure logique ressemble fortement à un tableau d'objets
JavaScript :

``` text
tableau
│
├── objet
│   ├── id
│   ├── prenom
│   └── statut
│
├── objet
│   ├── id
│   ├── prenom
│   └── statut
│
└── objet
    ├── id
    ├── prenom
    └── statut
```

------------------------------------------------------------------------

## 7. Pourquoi cette distinction sera importante avec un backend

Dans un échange frontend/backend, une même information peut passer par
plusieurs formes.

Nous suivrons plus tard un trajet de ce genre :

``` text
Backend
   ↓
données
   ↓
JSON transmis
   ↓
HTTP
   ↓
JavaScript
   ↓
conversion
   ↓
objet JavaScript
   ↓
DOM
```

À chaque étape, la question importante sera :

> **Sous quelle forme se trouve la donnée à cet instant ?**

C'est cette distinction qui permettra de comprendre précisément le
fonctionnement de `fetch()`, `response.json()`, `JSON.parse()` et
`JSON.stringify()`.

------------------------------------------------------------------------

## 8. À retenir du bloc 2

### Objet JavaScript

``` javascript
const membre = {
  prenom: "Didier"
};
```

JavaScript peut directement manipuler ses propriétés.

### String JavaScript contenant du JSON

``` javascript
const texte = '{"prenom":"Didier"}';
```

C'est du texte dont le contenu respecte la syntaxe JSON.

### Fichier JSON

``` text
membre.json
```

C'est un fichier texte contenant des données respectant la syntaxe JSON.

### Résumé

``` text
OBJET JAVASCRIPT
{ prenom: "Didier" }

STRING JAVASCRIPT CONTENANT DU JSON
'{"prenom":"Didier"}'

FICHIER JSON
membre.json
    ↓
{
  "prenom": "Didier"
}
```

Ces trois notions sont liées, mais elles ne doivent pas être confondues.
