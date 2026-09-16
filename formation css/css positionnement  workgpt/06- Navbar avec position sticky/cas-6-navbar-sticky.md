# Positionnement CSS — Cas 6 : Navbar avec `position: sticky`

## Objectif réel

Créer une navbar qui :

- commence normalement dans le flux de la page ;
- défile avec le contenu au départ ;
- reste collée lorsqu’elle atteint une limite ;
- peut rester au-dessus du contenu pendant le scroll.

Ce cas permet surtout de comprendre `position: sticky`, son seuil avec `top`, son lien avec le conteneur et son interaction avec `z-index`.

---

## 1. Structure de départ

```html
<header class="hero">
    <h1>Mon site</h1>
    <p>Bienvenue sur la page.</p>
</header>

<nav class="navbar">
    <a href="#">Accueil</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
</nav>

<main class="content">
    <p>Contenu de la page...</p>
</main>
```

```css
.hero {
    padding: 80px 20px;
    background-color: #ddd;
}

.navbar {
    padding: 15px 20px;
    background-color: white;
    border-bottom: 1px solid #999;
}

.content {
    height: 1500px;
    padding: 20px;
}
```

Au départ :

```text
.hero
↓
.navbar
↓
.content
```

Tout est dans le flux normal. Quand la page défile, la navbar monte avec le reste du contenu.

---

## 2. Ajouter seulement `position: sticky`

```css
.navbar {
    padding: 15px 20px;
    background-color: white;
    border-bottom: 1px solid #999;

    position: sticky;
}
```

Avec `sticky` seul, le comportement recherché n’apparaît pas encore.

Il manque une limite à atteindre.

```text
sticky
→ l’élément pourra se coller

mais

sans top / bottom / etc.
→ pas encore de seuil de collage
```

---

## 3. Ajouter `top: 0`

```css
.navbar {
    padding: 15px 20px;
    background-color: white;
    border-bottom: 1px solid #999;

    position: sticky;
    top: 0;
}
```

La navbar commence normalement dans la page.

Puis, lorsqu’elle atteint le haut du viewport, elle reste collée.

```text
Avant le scroll :

[ HERO ]
[ NAVBAR ]
[ CONTENU ]


Après avoir scrollé :

[ NAVBAR ] ← reste ici
[ CONTENU ]
[ CONTENU ]
```

Avec `sticky`, `top: 0` peut être compris comme un **seuil de collage**.

```text
la navbar défile
        ↓
elle atteint 0px du haut
        ↓
elle cesse de monter
        ↓
elle reste collée à cette limite
```

---

## 4. Différence avec `absolute`

Avec :

```css
position: absolute;
top: 10px;
```

on raisonne généralement ainsi :

> place l’élément à 10 px du haut de sa référence.

Avec :

```css
position: sticky;
top: 50px;
```

le raisonnement devient :

> laisse l’élément défiler normalement, puis empêche-le de remonter au-delà de 50 px du haut.

Même propriété `top`, mais relation différente.

---

## 5. Expérience avec `top: 50px`

```css
.navbar {
    position: sticky;
    top: 50px;
}
```

La navbar ne colle plus directement au bord supérieur.

Elle s’arrête à 50 px du haut.

Cas réel :

```text
┌─────────────────────────────┐
│ barre fixe de 50px          │
├─────────────────────────────┤
│ navbar sticky               │
├─────────────────────────────┤
│ contenu                     │
└─────────────────────────────┘
```

Dans ce cas :

```css
top: 50px;
```

peut servir à faire coller la navbar sous une autre barre fixe.

---

## 6. `sticky` reste dans le flux

C’est une grande différence avec `fixed`.

Avec :

```css
.navbar {
    position: sticky;
    top: 0;
}
```

la navbar garde sa place dans la structure normale :

```text
.hero
↓
.navbar
↓
.content
```

Le contenu ne remonte pas pour prendre sa place.

Avec `fixed`, l’élément sort du flux et le contenu peut remonter dans l’espace qu’il occupait.

```text
fixed
→ hors du flux

sticky
→ reste dans le flux
```

---

## 7. `sticky` reste lié à son conteneur

Une expérience importante consistait à enfermer la navbar dans :

```html
<div class="navbar-container">
    <nav class="navbar">
        ...
    </nav>
</div>
```

Structure :

```text
body
│
├── .hero
│
├── .navbar-container
│   └── .navbar
│
└── .content
```

Si `.navbar-container` est pratiquement de la même hauteur que la navbar, le comportement sticky devient très limité.

Pourquoi ?

Parce que l’élément sticky reste contraint par les limites pertinentes de son conteneur et de son contexte de défilement.

Avec un parent temporairement agrandi :

```css
.navbar-container {
    height: 600px;
    border: 2px dashed #999;
}
```

la navbar peut rester collée pendant une certaine distance.

Mais lorsque le bas du conteneur remonte suffisamment, la navbar finit par repartir avec lui.

```text
sticky
→ respecte son seuil
+
→ reste limité par son contexte / conteneur
```

C’est très différent de `fixed`.

---

## 8. Pourquoi ce comportement est utile

Exemple d’une colonne de sommaire :

```text
┌────────────────┬─────────────────────┐
│ SOMMAIRE       │ Article             │
│ sticky         │                     │
│                │                     │
│                │                     │
│                │                     │
└────────────────┴─────────────────────┘
```

On peut vouloir que le sommaire reste visible seulement pendant la lecture de sa section, puis cesse de suivre lorsque cette section se termine.

`sticky` est très adapté à ce type de relation.

---

## 9. `sticky` et `z-index`

Une navbar sticky peut partager la même région visuelle que le contenu qui défile.

On peut alors utiliser :

```css
.navbar {
    position: sticky;
    top: 0;

    background-color: white;
    z-index: 10;
}
```

Les rôles sont distincts :

```text
position: sticky
→ comportement de collage

top: 0
→ seuil

z-index
→ devant / derrière

background-color
→ surface opaque / transparente
```

Le `z-index` ne crée pas un fond.

Si la navbar n’a pas de couleur de fond, le contenu peut rester visible à travers elle même si elle se trouve au-dessus.

---

## 10. Code final

```html
<header class="hero">
    <h1>Mon site</h1>
    <p>Bienvenue sur la page.</p>
</header>

<nav class="navbar">
    <a href="#">Accueil</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
</nav>

<main class="content">
    <p>Contenu de la page...</p>
</main>
```

```css
.hero {
    padding: 80px 20px;
    background-color: #ddd;
}

.navbar {
    padding: 15px 20px;
    background-color: white;
    border-bottom: 1px solid #999;

    position: sticky;
    top: 0;
    z-index: 10;
}

.content {
    height: 1500px;
    padding: 20px;
}
```

---

## 11. Comparaison `absolute`, `fixed` et `sticky`

### `absolute`

```text
À quoi dois-je attacher cet élément
dans un composant ?
        ↓
absolute
+
référence appropriée
```

Exemple : bouton `✕` dans une fenêtre.

### `fixed`

```text
Cet élément doit-il rester
attaché au viewport ?
        ↓
fixed
```

Exemple : bouton retour en haut.

### `sticky`

```text
Cet élément doit-il commencer
normalement dans la page,
puis rester collé après avoir
atteint une limite ?
        ↓
sticky
+
top
```

Exemple : navbar.

Version courte :

```text
absolute
→ attaché à une référence

fixed
→ attaché au viewport

sticky
→ dans le flux,
  puis collé à un seuil
```

---

## Raisonnement à retenir

```text
Je veux une navbar normale au début
        ↓
elle doit rester dans le flux
        ↓
position: sticky
        ↓
je veux qu’elle colle en haut
        ↓
top: 0
        ↓
le contenu défile sous / derrière elle
        ↓
background-color
+
si nécessaire z-index
```

Et si `sticky` ne fonctionne pas comme prévu, une des premières vérifications utiles est :

```text
Quel est son conteneur ?
Quelle est sa hauteur ?
Quel est son contexte de défilement ?
```

---

## Relation avec les cas précédents

```text
Cas 1 — Badge
relative + absolute
→ placement précis

Cas 2 — Icône dans input
relative + absolute + padding + transform
→ superposition + espace + centrage

Cas 3 — Contenu sur image
relative + absolute + overlay + z-index
→ couches superposées

Cas 4 — Bouton de fermeture
relative + absolute + top/right
→ élément attaché à un composant

Cas 5 — Bouton fixed
fixed + bottom/right
→ élément attaché au viewport

Cas 6 — Navbar sticky
sticky + top + conteneur + z-index
→ élément dans le flux puis collé à un seuil
```
