# Bloc 02 --- Objets, formes, texte et propriétés visuelles

## Objectif du bloc

Ce bloc introduit les objets qui composent une interface dans Figma et
la logique fondamentale suivante :

> Dans Figma, on crée des objets, puis on agit sur leurs propriétés.

L'objectif n'est pas de mémoriser chaque commande, mais de comprendre la
relation entre les objets visibles sur le Canvas, leurs layers et leurs
propriétés.

> **Interface utilisée dans cette formation : Figma UI3.**\
> Dans UI3, la barre d'outils principale est flottante et située en bas
> du Canvas. Des tutoriels plus anciens peuvent montrer une disposition
> différente.

------------------------------------------------------------------------

## 1. Les formes

Figma permet de créer plusieurs types de formes, notamment :

-   Rectangle ;
-   Line ;
-   Arrow ;
-   Ellipse ;
-   Polygon ;
-   Star.

Pour la conception Web, le **Rectangle** est particulièrement fréquent.

### Rectangle

Raccourci :

`R`

Après avoir choisi l'outil Rectangle, un cliquer-glisser sur le Canvas
permet de dessiner la forme.

La création produit simultanément :

1.  un rectangle visible sur le Canvas ;
2.  un nouveau **layer** dans le panneau des layers.

Le layer et l'objet visible ne sont pas deux objets différents : le
layer représente l'objet dans la structure du fichier.

------------------------------------------------------------------------

## 2. Sélectionner et manipuler un objet

L'outil principal de sélection et de déplacement est **Move**.

Raccourci :

`V`

Lorsqu'un objet est sélectionné, Figma affiche ses limites et rend
accessibles ses propriétés.

La logique générale est :

``` text
Sélection d’un objet
        ↓
Figma identifie son type
        ↓
Les propriétés pertinentes deviennent accessibles
```

Un rectangle et un texte sont tous les deux des layers, mais ils ne
proposent pas exactement les mêmes propriétés.

------------------------------------------------------------------------

## 3. Position : X et Y

Un objet possède une position.

-   **X** : position horizontale ;
-   **Y** : position verticale.

Représentation simplifiée :

``` text
        X →
   ┌──────────────────
 Y │
 ↓ │
   │       objet
```

Ces coordonnées permettent notamment de connaître ou de définir
précisément la position d'un objet dans son contexte.

La gestion du positionnement deviendra plus importante lorsque seront
étudiés les Frames et Auto Layout.

------------------------------------------------------------------------

## 4. Dimensions : W et H

Figma utilise notamment :

-   **W (Width)** : largeur ;
-   **H (Height)** : hauteur.

Par exemple :

``` text
W : 300
H : 100
```

correspond à un objet de 300 × 100 pixels dans Figma.

### Rapprochement avec CSS

Conceptuellement :

``` css
width: 300px;
height: 100px;
```

Ce rapprochement aide à comprendre la propriété, mais Figma n'est pas en
train d'appliquer une règle CSS.

### Redimensionnement

Les dimensions peuvent être modifiées :

-   numériquement avec les propriétés de dimensions ;
-   visuellement en utilisant les poignées de redimensionnement sur le
    Canvas.

Les deux méthodes sont complémentaires : la souris est pratique pour
travailler visuellement, tandis que les valeurs numériques permettent
davantage de précision.

------------------------------------------------------------------------

## 5. Fill --- remplissage

Le **Fill** correspond au remplissage intérieur d'un objet.

Pour une forme, il permet notamment de contrôler sa couleur et sa
transparence.

``` text
┌────────────────────┐
│████████████████████│
│████████ Fill ██████│
│████████████████████│
└────────────────────┘
```

### Couleurs

Figma permet notamment d'utiliser des valeurs hexadécimales :

``` text
#FFFFFF
#000000
#3366FF
```

Ces mêmes valeurs peuvent être réutilisées en CSS :

``` css
background-color: #3366FF;
color: #FFFFFF;
```

Cela facilite la conservation des couleurs entre la maquette et le
développement Web.

------------------------------------------------------------------------

## 6. Stroke --- contour

Le **Stroke** correspond au contour d'un objet.

``` text
       Stroke
          ↓
┌─────────────────┐
│                 │
│      Fill       │
│                 │
└─────────────────┘
```

Il faut donc distinguer :

-   **Fill** → intérieur ;
-   **Stroke** → contour.

Le Stroke peut posséder différentes propriétés, notamment une couleur et
une épaisseur.

### Rapprochement avec CSS

Conceptuellement :

``` css
border: 1px solid #000000;
```

------------------------------------------------------------------------

## 7. Corner radius --- arrondi des coins

Le **Corner radius** permet d'arrondir les coins d'un rectangle.

Avec un rayon nul :

``` text
┌──────────────┐
│              │
└──────────────┘
```

Avec un rayon plus important :

``` text
╭──────────────╮
│              │
╰──────────────╯
```

### Rapprochement avec CSS

``` css
border-radius: 10px;
```

Cette propriété est courante pour concevoir :

-   boutons ;
-   cartes ;
-   champs de formulaire ;
-   conteneurs ;
-   images avec coins arrondis.

------------------------------------------------------------------------

## 8. Opacity --- opacité

L'**Opacity** détermine la visibilité d'un objet.

``` text
100 % → complètement opaque
 50 % → partiellement transparent
  0 % → complètement transparent
```

### Rapprochement avec CSS

``` css
opacity: 0.5;
```

Il faut retenir qu'un objet entier peut avoir une opacité, tandis que
certaines de ses propriétés peuvent également posséder leur propre
transparence.

------------------------------------------------------------------------

## 9. Le texte

L'outil **Text** permet de créer un layer de texte.

Raccourci :

`T`

Un objet Text possède des propriétés particulières liées à la
typographie.

Parmi les principales :

-   **Font family** : famille de police ;
-   **Font weight** : graisse ;
-   **Font size** : taille ;
-   **Line height** : hauteur de ligne ;
-   **Letter spacing** : espacement entre les caractères.

### Rapprochements avec CSS

``` css
font-family: Arial;
font-size: 16px;
font-weight: 700;
line-height: 1.5;
letter-spacing: 1px;
```

Ces rapprochements sont conceptuels : ils permettent de relier les
décisions prises dans Figma aux propriétés utilisées ensuite dans un
site Web.

------------------------------------------------------------------------

## 10. La boîte d'un layer Text

Un point important est de distinguer **le contenu textuel visible** de
**la boîte du layer Text**.

Un layer Text possède une zone rectangulaire avec ses propres
dimensions.

Par exemple :

``` text
┌──────────────────────────────────┐
│ Bonjour                          │
└──────────────────────────────────┘
```

Le mot « Bonjour » n'occupe qu'une petite partie de la largeur, mais la
boîte du layer peut être beaucoup plus large.

Le texte visible et cette boîte ne sont toutefois **pas deux objets
indépendants**. Il s'agit d'un seul layer Text :

``` text
Text
│
├── boîte / dimensions du layer
│   ├── largeur
│   └── hauteur
│
└── contenu
    └── caractères visibles
```

### Pourquoi cette boîte existe-t-elle ?

La boîte définit notamment l'espace disponible pour le texte.

Si elle possède une largeur déterminée, un texte suffisamment long
pourra revenir à la ligne à l'intérieur de cette largeur.

``` text
┌──────────────────────────────────┐
│ Bonjour, ceci est maintenant un  │
│ texte beaucoup plus long.        │
└──────────────────────────────────┘
```

### Rapprochement avec HTML/CSS

On peut comparer cette logique à un élément HTML dont le contenu textuel
n'occupe pas nécessairement toute la largeur :

``` html
<p>Bonjour, ceci est mon texte.</p>
```

``` css
p {
    width: 400px;
}
```

L'élément peut mesurer 400 px de large même si les caractères visibles
occupent moins d'espace.

Cette distinction entre **dimensions du layer Text** et **dimensions
visuelles des caractères** devient particulièrement importante pour :

-   l'alignement ;
-   le retour à la ligne ;
-   le redimensionnement ;
-   Auto Layout.

------------------------------------------------------------------------

## 11. Fill appliqué au texte

Le Fill n'est pas réservé aux formes.

Pour un layer Text, le Fill détermine notamment la couleur du texte.

``` text
Rectangle
└── Fill → couleur du rectangle

Text
└── Fill → couleur du texte
```

Cela montre une logique générale de Figma :

> Des types d'objets différents peuvent partager certaines propriétés.

Comprendre les propriétés est donc plus utile que simplement mémoriser
l'emplacement des commandes.

------------------------------------------------------------------------

## 12. Manipulations courantes

### Supprimer

Sélectionner l'objet puis utiliser :

`Delete`

### Déplacer

Sélectionner l'objet avec `V`, puis le déplacer à la souris.

Les touches fléchées permettent également des déplacements précis.

### Dupliquer sous Windows

Maintenir :

`Alt`

puis déplacer l'objet pour créer une copie.

------------------------------------------------------------------------

## 13. Superposition et ordre des layers

Plusieurs objets peuvent occuper la même zone du Canvas.

Lorsqu'ils se chevauchent, leur ordre influence ce qui est visible.

Par exemple, deux rectangles placés au même endroit peuvent produire un
résultat différent selon lequel se trouve devant l'autre.

Le panneau des layers ne sert donc pas uniquement à identifier les
objets : il participe aussi à la compréhension de leur organisation.

Cette notion sera approfondie avec les Frames, groupes, sections et la
hiérarchie.

------------------------------------------------------------------------

## 14. Objet et propriété

Il faut distinguer **ce que l'utilisateur interprète visuellement** de
**la structure réelle du design**.

Un élément ressemblant à un bouton pourrait, à ce stade, être constitué
simplement de :

``` text
Rectangle
├── largeur
├── hauteur
├── Fill
├── Stroke
└── Corner radius

Text
├── police
├── taille
├── graisse
└── Fill
```

Visuellement, l'ensemble ressemble à un bouton, mais le rectangle et le
texte peuvent encore être deux objets indépendants.

Plus tard, les Frames, Auto Layout et Components permettront de
construire des structures beaucoup plus cohérentes et réutilisables.

------------------------------------------------------------------------

## 15. Carte mentale du bloc

La logique étudiée jusqu'ici peut être résumée ainsi :

``` text
Fichier
  ↓
Page
  ↓
Canvas
  ↓
Objets / Layers
  ↓
Propriétés
```

Exemples :

``` text
Rectangle
├── position
├── dimensions
├── Fill
├── Stroke
├── Corner radius
└── Opacity

Text
├── position
├── dimensions de sa boîte
├── contenu textuel
├── typographie
├── Fill
└── Opacity
```

## Points essentiels à retenir

-   Un objet créé sur le Canvas possède un layer correspondant.
-   Sélectionner un objet permet d'accéder à ses propriétés.
-   `X` et `Y` concernent la position ; `W` et `H`, les dimensions.
-   Fill, Stroke, Corner radius et Opacity sont des propriétés visuelles
    fondamentales.
-   Plusieurs propriétés Figma ont des équivalents conceptuels faciles à
    reconnaître en CSS.
-   Un layer Text possède une boîte avec ses propres dimensions, même
    lorsque les caractères visibles occupent beaucoup moins d'espace.
-   La boîte et le texte ne sont pas deux objets séparés : ils
    appartiennent au même layer Text.
-   Ce qui ressemble visuellement à un composant d'interface peut encore
    être constitué de plusieurs objets indépendants.
-   La suite de la formation montrera comment organiser ces objets en
    structures cohérentes.
