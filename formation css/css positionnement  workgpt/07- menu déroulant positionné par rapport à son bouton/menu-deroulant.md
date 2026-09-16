# Positionnement CSS — Cas 7 : Menu déroulant sous son bouton

## Objectif réel

Construire un dropdown qui reste attaché à son bouton, apparaît sous lui sans pousser la navbar, peut être ouvert avec `.active`, et gère correctement largeur et superposition.

## 1. Structure HTML

```html
<nav class="navbar">
    <a href="#">Accueil</a>
    <div class="dropdown">
        <button class="dropdown-button">Services</button>
        <div class="dropdown-menu">
            <a href="#">Design</a>
            <a href="#">Développement</a>
            <a href="#">SEO</a>
        </div>
    </div>
    <a href="#">Contact</a>
</nav>
```

```text
.navbar
├── a
├── .dropdown
│   ├── .dropdown-button
│   └── .dropdown-menu
│       ├── a
│       ├── a
│       └── a
└── a
```

Le bouton et le sous-menu sont frères. `.dropdown` est leur parent commun. On évite de mettre les liens interactifs du menu à l'intérieur du `<button>`.

## 2. Flexbox organise la navbar

```css
.navbar {
    display: flex;
    gap: 20px;
    align-items: center;
}
```

Flexbox organise `Accueil`, `Services` et `Contact` dans le flux. Il ne positionne pas le sous-menu.

## 3. `.dropdown` devient la référence

```css
.dropdown {
    position: relative;
}
```

Visuellement, rien ne bouge nécessairement.

```text
.dropdown
position: relative
→ reste dans le flux
→ devient la référence
```

## 4. Le sous-menu sort du flux

```css
.dropdown-menu {
    position: absolute;
}
```

Le menu ne pousse plus la navbar :

```text
.dropdown
└── bouton dans le flux

.dropdown-menu
→ absolute
→ hors du flux
```

## 5. `top: 100%`

```css
.dropdown-menu {
    position: absolute;
    top: 100%;
}
```

Le `100%` est calculé par rapport à la hauteur de la référence `.dropdown`.

```text
0%    ┌───────────────┐
      │   Services    │
100%  └───────────────┘
      ┌───────────────┐
      │ sous-menu     │
      └───────────────┘
```

Cela signifie : commence après toute la hauteur de `.dropdown`. C'est plus robuste qu'un `top` fixe en pixels si la hauteur du déclencheur change.

### Observation DevTools : environ 21 px

DevTools affichait environ `21` dans la zone `position`. Ce n'était pas du padding. Si `.dropdown` mesure environ 21 px de haut :

```text
top: 100%
→ 100% d'environ 21px
→ position calculée d'environ 21px
```

En testant `top: 0`, le menu remonte au haut de sa référence.

## 6. `left: 0` et `right: 0`

```css
left: 0;
```

aligne le bord gauche du menu avec le bord gauche de `.dropdown`.

```css
right: 0;
```

peut servir à aligner les bords droits, notamment si le dropdown est proche du bord droit.

```text
left: 0  → ancrage par la gauche
right: 0 → ancrage par la droite
```

Le choix dépend de la relation souhaitée et de l'espace disponible.

## 7. Padding et margin

```css
padding: 10px;
```

crée de l'espace à l'intérieur du menu.

Nous avons testé :

```css
margin-top: 8px;
```

qui crée un espace extérieur entre le déclencheur et le sous-menu. Nous avons choisi de ne pas le conserver afin de garder le dropdown collé au bouton.

```text
margin  → espace extérieur
padding → espace intérieur
```

Un espace réel peut aussi être gênant pour certains menus ouverts au survol, car la souris doit traverser une zone vide.

## 8. Flexbox à l'intérieur du menu

À l'état ouvert :

```css
.dropdown.active .dropdown-menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
```

Séparation des rôles :

```text
absolute + top + left
→ emplacement du menu

flex-direction: column
→ organisation des liens dans le menu

gap
→ espace entre ces liens
```

## 9. Masquer le menu

```css
.dropdown-menu {
    display: none;
}
```

`display: none` masque le menu. `absolute` ne le masque pas.

Pendant l'exercice, `display: none` apparaissait barré parce qu'un ancien `display: flex` se trouvait plus bas dans la même règle. À spécificité identique, la déclaration qui gagne dans la cascade remplace l'autre.

La bonne séparation est :

```css
.dropdown-menu {
    display: none;
}

.dropdown.active .dropdown-menu {
    display: flex;
}
```

Une propriété barrée dans DevTools indique qu'une autre déclaration applicable gagne sur elle.

## 10. Comprendre `.dropdown.active`

Sans espace :

```css
.dropdown.active
```

signifie que le même élément possède les deux classes :

```html
<div class="dropdown active">
```

Avec un espace :

```css
.dropdown .active
```

on chercherait un descendant `.active` à l'intérieur de `.dropdown`.

Ainsi :

```css
.dropdown.active .dropdown-menu
```

signifie : sélectionne `.dropdown-menu` à l'intérieur d'un élément qui possède à la fois `dropdown` et `active`.

CSS ne crée pas `.active`.

## 11. JavaScript change l'état

```js
const dropdown = document.querySelector(".dropdown");
const button = document.querySelector(".dropdown-button");

button.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});
```

Premier clic :

```text
dropdown
→ toggle("active")
→ dropdown active
```

Deuxième clic :

```text
dropdown active
→ toggle("active")
→ dropdown
```

Flux complet :

```text
clic
↓
JavaScript change la classe
↓
CSS correspondant devient applicable
↓
display: flex ou display: none
↓
menu ouvert ou fermé
```

JavaScript ne positionne rien : il change seulement l'état.

## 12. `width: auto` avec `absolute`

Dans un bloc normal du flux, `width: auto` utilise généralement la largeur disponible.

Notre menu est cependant `position: absolute` avec `left: 0` et sans largeur explicite. Dans cette configuration, sa largeur peut suivre un calcul de type **shrink-to-fit** et se resserrer autour de son contenu.

C'est pourquoi le menu prenait approximativement la largeur nécessaire au mot `Développement`, comme s'il ressemblait visuellement à `fit-content`.

```text
bloc normal + width:auto
→ généralement largeur disponible

absolute dans cette configuration + width:auto
→ largeur pouvant se resserrer autour du contenu
```

Ce n'est pas Flexbox qui expliquait principalement cette largeur.

## 13. Test de `width: 100%` et dépassement de 22 px

Nous avons testé :

```css
.dropdown-menu {
    width: 100%;
    padding: 10px;
    border: 1px solid #999;
}
```

Avec le modèle par défaut :

```css
box-sizing: content-box;
```

`width: 100%` concerne la zone de contenu. Padding et bordures s'ajoutent :

```text
10px padding gauche
+ 10px padding droite
+ 1px border gauche
+ 1px border droite
= 22px supplémentaires
```

DevTools montrait justement ce dépassement de 22 px.

C'était un problème de **box model**, pas de Flexbox ni de `absolute`.

## 14. `box-sizing: border-box`

```css
box-sizing: border-box;
```

fait entrer le padding et les bordures dans la largeur déclarée :

```text
┌──────────────────────────┐
│ border                   │
│  padding                 │
│    contenu               │
│  padding                 │
│ border                   │
└──────────────────────────┘
← largeur déclarée totale →
```

## 15. Pourquoi `min-width: 100%`

Pour ce dropdown :

```css
min-width: 100%;
box-sizing: border-box;
```

est plus souple que `width: 100%`.

```text
width: 100%
→ fixe la largeur à 100%

min-width: 100%
→ au moins 100%
→ peut s'agrandir si le contenu l'exige
```

Le menu est donc au minimum aussi large que `.dropdown`, tout en pouvant accueillir un contenu plus long.

## 16. Mobile et largeur maximale

Sur petit écran, un sous-menu trop large peut sortir du viewport. Selon le composant, une protection peut ressembler à :

```css
max-width: calc(100vw - 20px);
```

Mais la vraie question responsive est aussi : le dropdown `absolute` doit-il rester le même sur mobile ?

Un menu hamburger peut plutôt remettre les sous-menus dans le flux :

```text
Accueil
Services
   ├─ Design
   ├─ Développement
   └─ SEO
Contact
```

Le responsive peut donc modifier le comportement du composant, pas seulement sa largeur.

## 17. Retour à la ligne entre les mots

Le navigateur effectue normalement les retours à la ligne entre les mots lorsque la largeur est limitée.

On peut conserver explicitement ce comportement avec :

```css
.dropdown-menu a {
    white-space: normal;
}
```

À l'inverse :

```css
white-space: nowrap;
```

empêche les retours à la ligne.

Et `word-break: break-all` permet des coupures plus agressives à l'intérieur des mots. Ce n'est généralement pas ce qu'on souhaite pour ce menu.

## 18. `z-index` et fond

Si le menu est au bon endroit mais passe derrière un autre élément :

```css
z-index: 10;
```

peut contrôler l'ordre de superposition.

```text
position
→ où est le menu ?

z-index
→ devant ou derrière ?
```

`z-index` ne corrige pas une mauvaise position.

On ajoute également souvent :

```css
background-color: white;
```

Les rôles diffèrent :

```text
z-index          → ordre des couches
background-color → surface opaque
```

Un élément peut être devant tout en restant visuellement transparent.

## 19. Code final

```html
<nav class="navbar">
    <a href="#">Accueil</a>

    <div class="dropdown">
        <button class="dropdown-button">Services</button>

        <div class="dropdown-menu">
            <a href="#">Design</a>
            <a href="#">Développement</a>
            <a href="#">SEO</a>
        </div>
    </div>

    <a href="#">Contact</a>
</nav>
```

```css
.navbar {
    display: flex;
    gap: 20px;
    align-items: center;
}

.dropdown {
    position: relative;
}

.dropdown-menu {
    display: none;

    position: absolute;
    top: 100%;
    left: 0;

    min-width: 100%;
    box-sizing: border-box;

    padding: 10px;
    border: 1px solid #999;
    background-color: white;

    z-index: 10;
}

.dropdown.active .dropdown-menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
```

```js
const dropdown = document.querySelector(".dropdown");
const button = document.querySelector(".dropdown-button");

button.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});
```

## 20. Raisonnement à retenir

```text
Je veux un menu sous un bouton
↓
il ne doit pas pousser la navbar
↓
menu → absolute
↓
il lui faut une référence
↓
.dropdown → relative
↓
top: 100%
→ sous toute la hauteur de la référence
↓
left: 0 ou right: 0
→ choix de l'ancrage horizontal
↓
vérifier la largeur
↓
min-width + border-box si pertinent
↓
display: none
→ fermé
↓
.active + display:flex
→ ouvert
↓
JavaScript
→ change l'état
↓
vérifier la superposition
↓
background + z-index si nécessaire
```

## 21. Carte de référence

```text
relative
→ crée la référence

absolute
→ sort le menu du flux

top: 100%
→ sous la hauteur de la référence

left: 0 / right: 0
→ bord d'ancrage

width:auto + absolute
→ largeur pouvant se resserrer autour du contenu

min-width: 100%
→ au moins la largeur du déclencheur

box-sizing: border-box
→ inclut padding et border dans la largeur

display:none
→ état fermé

display:flex
→ état ouvert et organisation interne

.active
→ classe d'état

JavaScript
→ ajoute/retire l'état

z-index
→ ordre de superposition

background-color
→ opacité visuelle
```

## 22. Relation avec les cas précédents

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

Cas 7 — Menu déroulant
relative + absolute + top:100% + largeur + état + JavaScript
→ composant positionné et interactif
```

Cette fiche est volontairement autonome : les notions indispensables au dropdown y sont rappelées même lorsqu'elles ont déjà été vues dans un autre cas.
