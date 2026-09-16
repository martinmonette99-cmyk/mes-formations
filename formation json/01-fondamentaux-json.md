# Formation JSON --- Bloc 1 : Les fondamentaux de JSON

## 1. Qu'est-ce que JSON ?

JSON signifie **JavaScript Object Notation**.

C'est un format texte utilisé pour représenter des données de manière
structurée.

Exemple :

``` json
{
  "prenom": "Didier",
  "age": 42,
  "actif": true
}
```

JSON ressemble beaucoup à la syntaxe des objets JavaScript, mais **JSON
n'est pas un objet JavaScript**.

------------------------------------------------------------------------

## 2. Pourquoi JSON existe ?

Dans un site web, différents programmes peuvent avoir besoin de
s'échanger des données.

Par exemple :

``` text
Frontend JavaScript
        ↓
       JSON
        ↓
      HTTP
        ↓
      Backend
```

Un objet JavaScript existe dans JavaScript. Pour transmettre les mêmes
informations à un autre programme, on peut les représenter dans un
format commun : **JSON**.

Exemple d'objet JavaScript :

``` javascript
const membre = {
  id: 3,
  prenom: "Didier",
  statut: "actif"
};
```

Les mêmes données représentées en JSON :

``` json
{
  "id": 3,
  "prenom": "Didier",
  "statut": "actif"
}
```

JSON sert donc notamment de **format commun pour représenter et échanger
des données**.

------------------------------------------------------------------------

## 3. JSON n'est pas réservé à JavaScript

Même si JSON signifie *JavaScript Object Notation*, il peut être utilisé
avec de nombreux langages :

-   JavaScript ;
-   Python ;
-   PHP ;
-   Java ;
-   C# ;
-   etc.

Par exemple, un frontend JavaScript et un backend Python peuvent
utiliser JSON comme format commun :

``` text
JavaScript
    ↓
   JSON
    ↓
 Python
```

------------------------------------------------------------------------

## 4. Objet JavaScript et JSON : comparaison

### Objet JavaScript

``` javascript
const membre = {
  prenom: "Didier",
  age: 42,
  actif: true
};
```

### JSON

``` json
{
  "prenom": "Didier",
  "age": 42,
  "actif": true
}
```

La structure est très similaire, mais les règles ne sont pas exactement
les mêmes.

### Différence importante : les clés

En JavaScript, ceci est valide :

``` javascript
const membre = {
  prenom: "Didier"
};
```

En JSON, la clé doit être placée entre **guillemets doubles** :

``` json
{
  "prenom": "Didier"
}
```

Ceci n'est donc pas du JSON valide :

``` text
{
  prenom: "Didier"
}
```

------------------------------------------------------------------------

## 5. Types de valeurs autorisés en JSON

JSON peut contenir les types de valeurs suivants.

### Chaîne de caractères

``` json
{
  "prenom": "Didier"
}
```

### Nombre

``` json
{
  "age": 42
}
```

### Booléen

``` json
{
  "actif": true
}
```

### null

``` json
{
  "telephone": null
}
```

### Tableau

``` json
{
  "roles": ["membre", "client"]
}
```

### Objet

``` json
{
  "adresse": {
    "ville": "Montréal",
    "province": "Québec"
  }
}
```

Ces structures peuvent être combinées :

``` json
{
  "id": 3,
  "prenom": "Didier",
  "actif": true,
  "telephone": null,
  "roles": ["membre", "client"],
  "adresse": {
    "ville": "Montréal",
    "province": "Québec"
  }
}
```

------------------------------------------------------------------------

## 6. JSON contient des données, pas des fonctions

Un objet JavaScript peut contenir une fonction :

``` javascript
const membre = {
  prenom: "Didier",

  saluer: function () {
    console.log("Bonjour");
  }
};
```

Mais une fonction n'est pas une valeur autorisée en JSON.

Ceci n'est donc **pas du JSON valide** :

``` text
{
  "prenom": "Didier",
  "saluer": function () {
    console.log("Bonjour");
  }
}
```

JSON sert principalement à représenter **des données**, et non du
comportement ou du code à exécuter.

------------------------------------------------------------------------

## 7. Les chaînes utilisent les guillemets doubles

JavaScript accepte notamment :

``` javascript
const prenom1 = "Didier";
const prenom2 = 'Didier';
```

JSON exige les **guillemets doubles**.

Valide :

``` json
{
  "prenom": "Didier"
}
```

Invalide :

``` text
{
  "prenom": 'Didier'
}
```

------------------------------------------------------------------------

## 8. JSON peut représenter un objet ou un tableau

### Un objet

``` json
{
  "id": 3,
  "prenom": "Didier"
}
```

### Un tableau d'objets

``` json
[
  {
    "id": 1,
    "prenom": "Sophie"
  },
  {
    "id": 2,
    "prenom": "Martin"
  },
  {
    "id": 3,
    "prenom": "Didier"
  }
]
```

Cette structure ressemble fortement à un tableau d'objets JavaScript :

``` javascript
const membres = [
  {
    id: 1,
    prenom: "Sophie"
  },
  {
    id: 2,
    prenom: "Martin"
  },
  {
    id: 3,
    prenom: "Didier"
  }
];
```

Les données peuvent avoir la même organisation logique sans être sous la
même forme.

------------------------------------------------------------------------

## 9. Distinction fondamentale à retenir

### Objet JavaScript

``` javascript
const membre = {
  id: 3,
  prenom: "Didier"
};
```

### JSON

``` json
{
  "id": 3,
  "prenom": "Didier"
}
```

Ils peuvent représenter exactement les mêmes informations, mais :

> **un objet JavaScript et JSON ne sont pas la même chose.**

Cette distinction sera essentielle pour comprendre plus tard :

``` text
objet JavaScript
       ↓
JSON.stringify()
       ↓
chaîne contenant du JSON
```

et :

``` text
chaîne contenant du JSON
       ↓
JSON.parse()
       ↓
objet JavaScript
```

Ces transformations seront étudiées dans un bloc suivant.

------------------------------------------------------------------------

## À retenir du bloc 1

-   JSON signifie **JavaScript Object Notation**.
-   JSON est un format utilisé pour représenter des données.
-   Il ressemble fortement aux objets et tableaux JavaScript.
-   JSON n'est cependant **pas un objet JavaScript**.
-   Les clés JSON utilisent des guillemets doubles.
-   Les chaînes JSON utilisent des guillemets doubles.
-   JSON accepte les nombres, chaînes, booléens, `null`, tableaux et
    objets.
-   JSON n'accepte pas les fonctions.
-   JSON peut servir de format commun pour échanger des données entre un
    frontend et un backend.
