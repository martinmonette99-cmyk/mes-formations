# Bloc 03 --- Frames, groupes, sections et hiérarchie

## Objectif du bloc

Ce bloc introduit une notion fondamentale pour concevoir sérieusement
une interface dans Figma : **la structure hiérarchique**.

Jusqu'ici, nous avons principalement travaillé avec des objets
individuels. Nous apprenons maintenant à les organiser grâce aux
**Frames**, **Groups** et **Sections**, et à comprendre les relations
**parent/enfant**.

> **Interface utilisée : Figma UI3.** Dans UI3, la barre d'outils
> principale est flottante et située en bas du Canvas.

## 1. Pourquoi organiser les objets ?

Des objets peuvent être placés les uns près des autres sur le Canvas
sans avoir de relation structurelle. Leur proximité visuelle ne signifie
pas automatiquement qu'ils appartiennent au même conteneur.

Figma utilise notamment les **Frames** pour représenter explicitement
cette organisation.

## 2. Le Frame

Un **Frame** est un conteneur Figma capable de contenir d'autres layers.

Raccourci : `F`

L'outil Frame se trouve dans la barre d'outils flottante située en bas
du Canvas dans UI3.

``` text
Frame 1
├── Image
├── Titre
└── Prix
```

`Frame 1` contient réellement les trois autres layers.

## 3. Parent et enfant

Dans cette structure :

``` text
Carte
├── Image
├── Titre
└── Prix
```

`Carte` est le **parent** et les autres layers sont ses **enfants
directs**.

Un enfant peut lui-même être parent :

``` text
Carte
├── Image
├── Informations
│   ├── Titre
│   └── Prix
└── Bouton
```

Une interface peut donc former un véritable **arbre hiérarchique**.

## 4. Superposition visuelle et hiérarchie

Il faut distinguer la position visuelle des objets de leur relation
hiérarchique.

``` text
Frame 1
├── Rectangle
└── Text
```

Le texte peut être visuellement posé sur le rectangle sans être son
enfant. `Rectangle` et `Text` restent deux enfants du même parent,
`Frame 1`.

> **La superposition visuelle ne crée pas une relation parent/enfant.**

Le panneau des layers permet de vérifier la véritable structure.

## 5. Rapprochement avec HTML

Une structure Figma peut rappeler une hiérarchie HTML :

``` html
<article class="carte">
    <img src="image.jpg" alt="">
    <div class="informations">
        <h2>Chaussures</h2>
        <p>89,99 $</p>
    </div>
    <button>Acheter</button>
</article>
```

Conceptuellement, Figma pourrait être organisé ainsi :

``` text
Frame Carte
├── Image
├── Frame Informations
│   ├── Text Titre
│   └── Text Prix
└── Frame Bouton
```

Figma n'est pas HTML. Le rapprochement sert à apprendre à penser une
interface comme une structure organisée.

## 6. Un Frame est aussi un layer

Un Frame est lui-même un layer, mais il peut contenir d'autres layers :

``` text
Frame Carte
├── Rectangle
├── Text
└── Frame Bouton
    └── Text
```

Un Frame peut donc être simultanément enfant d'un autre conteneur et
parent de ses propres enfants.

## 7. Propriétés d'un Frame

Un Frame possède ses propres propriétés :

-   position ;
-   largeur ;
-   hauteur ;
-   Fill ;
-   Stroke ;
-   Corner radius.

Il peut donc servir à la fois de conteneur et de fond visuel. Il n'est
pas toujours nécessaire d'ajouter un Rectangle uniquement pour créer le
fond d'un conteneur.

## 8. Frame versus Rectangle

  Élément         Rôle principal
  --------------- -------------------------------
  **Rectangle**   Créer une forme graphique
  **Frame**       Créer un conteneur structurel

La bonne question est : **est-ce une forme graphique ou un conteneur
destiné à organiser d'autres éléments ?**

Pour une structure d'interface, le Frame est généralement plus
approprié.

## 9. Déplacer un Frame

Lorsqu'un Frame possède des enfants, déplacer le Frame déplace également
ses enfants.

``` text
Carte
├── Image
├── Titre
└── Prix
```

Les objets appartiennent réellement au conteneur. Cela diffère de
plusieurs objets indépendants simplement placés à proximité sur le
Canvas.

## 10. Imbrication des Frames

Les Frames peuvent être imbriqués :

``` text
Page
├── Header
│   ├── Logo
│   └── Navigation
├── Hero
│   ├── Titre
│   ├── Texte
│   └── Bouton
└── Produits
    ├── Carte
    ├── Carte
    └── Carte
```

Une maquette bien structurée peut ainsi refléter une partie de la
logique qui sera ensuite utilisée en HTML.

## 11. Où se trouve la sélection dans UI3 ?

L'outil principal permettant de sélectionner et déplacer les objets est
**Move**.

Raccourci : `V`

Dans **Figma UI3**, il se trouve dans la **barre d'outils flottante
située en bas du Canvas**.

Un objet peut aussi être sélectionné :

-   directement sur le Canvas ;
-   dans le panneau des layers à gauche.

Le panneau des layers est particulièrement utile lorsque des objets se
chevauchent ou lorsqu'il faut sélectionner précisément un parent plutôt
qu'un enfant.

## 12. Le Group

Un **Group** réunit des objets afin de faciliter leur manipulation
commune.

``` text
Group
├── Étoile
└── Text « Favori »
```

### Grouper sous Windows

1.  Sélectionner les layers concernés, par exemple avec `Shift + clic`.
2.  Utiliser `Ctrl + G`.

Le Group devient leur parent commun.

## 13. Dégrouper

Pour supprimer le Group tout en conservant ses éléments :

1.  sélectionner **le Group lui-même**, idéalement dans le panneau des
    layers ;
2.  utiliser `Ctrl + Shift + G`.

``` text
Group        ← sélectionner ici
├── Rectangle
└── Text
```

Si un enfant est sélectionné plutôt que le Group, **Ungroup** peut être
indisponible.

## 14. Grouper un Frame

Un Group peut également devenir le parent d'un Frame.

Avant :

``` text
Frame 1
├── Rectangle
└── Text
```

Après avoir groupé `Frame 1` :

``` text
Group
└── Frame 1
    ├── Rectangle
    └── Text
```

Le Frame n'a pas été transformé en Group. Un **nouveau parent Group** a
été créé autour de lui.

Pour dégrouper cette structure, il faut sélectionner `Group`, et non
`Frame 1`.

## 15. Group versus Frame

  -----------------------------------------------------------------------
  Group                               Frame
  ----------------------------------- -----------------------------------
  Rassemble des objets                Contient structurellement des
                                      objets

  Pratique pour manipuler un ensemble Adapté à la construction
                                      d'interfaces

  Dépend davantage de son contenu     Possède ses propres dimensions et
                                      propriétés

  Regroupement pratique               Base de fonctions avancées de mise
                                      en page
  -----------------------------------------------------------------------

Règle pratique :

> **Structure d'interface → penser Frame.**

> **Regroupement pratique d'éléments graphiques → Group peut suffire.**

## 16. Quand utiliser un Group ?

Group reste utile lorsque plusieurs éléments graphiques doivent
simplement être manipulés ensemble, par exemple les différentes formes
composant une petite illustration.

Dans ce cas, le but n'est pas nécessairement de représenter une
structure d'interface.

## 17. Les Sections

Une **Section** sert principalement à organiser de grandes zones du
Canvas et le travail contenu dans le fichier.

Elle peut par exemple séparer :

-   les maquettes Desktop ;
-   les maquettes Mobile ;
-   les composants ;
-   différentes versions ou zones de travail.

## 18. Section Figma versus `<section>` HTML

Une Section Figma n'est pas l'équivalent de l'élément HTML `<section>`.

En HTML, `<section>` participe à la structure sémantique d'une page.
Dans Figma, une Section sert surtout à **organiser le Canvas et le
fichier de conception**.

Pour représenter une zone structurelle réelle d'une interface Web, un
Frame est généralement plus pertinent.

## 19. Comparaison des quatre notions

  Élément         Rôle principal
  --------------- --------------------------------------
  **Rectangle**   Créer une forme visuelle
  **Group**       Manipuler plusieurs objets ensemble
  **Frame**       Créer un conteneur structurel
  **Section**     Organiser de grandes zones du Canvas

Leur apparence visuelle ne suffit pas à déterminer leur rôle.

## 20. Nommer les layers

Des noms comme `Frame 37`, `Rectangle 12` ou `Text 42` deviennent
rapidement difficiles à comprendre.

Une structure nommée clairement est préférable :

``` text
Page accueil
├── Header
├── Hero
├── Services
├── Témoignages
└── Footer
```

Des noms explicites facilitent la navigation, la compréhension de la
hiérarchie, la collaboration et le passage du design au développement.

## 21. Construire une hiérarchie logique

Le fait que Figma permette d'imbriquer de nombreux Frames ne signifie
pas qu'il faut multiplier les conteneurs sans raison.

``` text
Header
├── Logo
├── Navigation
└── Connexion
```

est logique.

À l'inverse, plusieurs Frames imbriqués sans fonction particulière
rendent la structure inutilement complexe, comme des `<div>` superflus
en HTML.

## 22. Pourquoi les Frames préparent Auto Layout

À ce stade, un Frame définit principalement que plusieurs éléments
appartiennent à un même conteneur.

Plus tard, **Auto Layout** permettra au conteneur de gérer
automatiquement certaines relations entre ses enfants : direction,
espacement, espace autour du contenu et adaptation des dimensions.

Cette logique possède plusieurs rapprochements avec **Flexbox en CSS**.

## 23. Carte mentale du bloc

``` text
Canvas
└── Frame
    ├── Layer
    ├── Layer
    └── Frame
        ├── Layer
        └── Layer
```

Un Group peut également introduire un niveau hiérarchique :

``` text
Group
└── Frame
    ├── Rectangle
    └── Text
```

La position visuelle ne suffit pas pour connaître la structure : le
panneau des layers montre les véritables relations parent/enfant.

## Points essentiels à retenir

-   Un Frame est un conteneur structurel capable de contenir d'autres
    layers.
-   Un Frame est lui-même un layer et peut être enfant d'un autre
    conteneur.
-   Les relations parent/enfant construisent une hiérarchie.
-   Un objet visuellement placé sur un autre n'en devient pas
    automatiquement l'enfant.
-   Le panneau des layers permet de vérifier la véritable structure.
-   Un Rectangle est principalement une forme ; un Frame est
    principalement un conteneur.
-   Un Group sert surtout à manipuler plusieurs éléments ensemble.
-   Sous Windows, `Ctrl + G` groupe une sélection et `Ctrl + Shift + G`
    dégroupe le Group sélectionné.
-   Grouper un Frame peut créer un Group parent autour de celui-ci sans
    transformer le Frame.
-   Une Section sert principalement à organiser de grandes zones du
    Canvas.
-   Une Section Figma n'est pas l'équivalent d'un `<section>` HTML.
-   Une bonne hiérarchie doit avoir une raison logique et éviter les
    conteneurs inutiles.
-   Les Frames constituent une base essentielle pour l'apprentissage
    futur d'Auto Layout.
