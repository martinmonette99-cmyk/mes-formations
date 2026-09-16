# Bloc 04 --- Positionnement, alignement, dimensions et contraintes

## Objectif du bloc

Ce bloc présente le positionnement classique des objets dans Figma avant
**Auto Layout**. L'objectif est de savoir positionner et dimensionner
précisément un objet, aligner et distribuer plusieurs objets, mesurer
leurs distances et utiliser les **Constraints** d'un enfant dans un
Frame.

> **Interface de référence : Figma UI3.** Les procédures de ce cours
> sont décrites pour UI3.

## 1. Positionner un objet avec X et Y

Un enfant placé dans un Frame possède une position dans le contexte de
ce Frame.

``` text
X → position horizontale
Y → position verticale
```

### Techniquement dans UI3

1.  Créer un Frame avec `F`.
2.  Créer un Rectangle avec `R` à l'intérieur.
3.  Prendre l'outil Move avec `V`.
4.  Sélectionner le Rectangle.
5.  Dans le panneau de droite, repérer `X` et `Y`.
6.  Modifier ces valeurs et observer le déplacement.

Le Frame constitue le référentiel de positionnement de son enfant.

## 2. Déplacer précisément un objet

Une fois l'objet sélectionné :

-   `← → ↑ ↓` : petits déplacements ;
-   `Shift + flèche` : déplacement plus important ;
-   `X / Y` : position numérique précise ;
-   souris : placement visuel rapide.

## 3. Dimensions : W et H

``` text
W = Width  = largeur
H = Height = hauteur
```

### Techniquement

1.  Sélectionner l'objet.
2.  Repérer `W` et `H` dans le panneau de droite.
3.  Entrer les dimensions souhaitées ou utiliser les poignées sur le
    Canvas.

Parent et enfant possèdent leurs propres dimensions. Agrandir un Frame
ne signifie donc pas automatiquement agrandir ses enfants.

## 4. Sélectionner plusieurs objets

Avec `V` :

1.  cliquer sur le premier objet ;
2.  maintenir `Shift` ;
3.  cliquer sur les autres.

On peut aussi cliquer-glisser depuis une zone vide du Canvas pour tracer
une zone de sélection.

## 5. Aligner plusieurs objets

Les commandes d'alignement font coïncider certains bords ou centres des
objets sélectionnés.

> **Align right ne signifie pas « déplacer les objets à droite du Frame
> ».** Il signifie ici : faire coïncider leurs bords droits.

Pour bien observer les différences, utiliser des rectangles de largeurs
différentes.

``` text
[A────────]

          [B───]

    [C──────────────]
```

### Techniquement dans UI3

1.  Sélectionner les objets.
2.  Utiliser les contrôles d'alignement proposés pour la sélection.
3.  Tester les commandes.

**Align left** :

``` text
[A────────]
[B───]
[C──────────────]
│
└── même bord gauche
```

**Align horizontal centers** : les centres horizontaux coïncident.

**Align right** :

``` text
      [A────────]
           [B───]
[C──────────────]
               │
               └── même bord droit
```

Avec des objets de même largeur, passer de Align left à Align right peut
sembler ne rien changer, puisque leurs deux bords coïncident déjà.

## 6. Alignement vertical

Les mêmes principes existent verticalement :

-   **Align top** : mêmes bords supérieurs ;
-   **Align vertical centers** : mêmes centres verticaux ;
-   **Align bottom** : mêmes bords inférieurs.

### Techniquement

Créer des objets de hauteurs différentes, les sélectionner et tester les
trois commandes. Les différences seront ainsi clairement visibles.

## 7. Alignement entre objets versus position dans le Frame

Des objets peuvent être alignés à gauche **entre eux** tout en restant
au milieu du Frame.

``` text
Frame
┌───────────────────────────────────────┐
│          [AAAAAAAA]                   │
│          [BBB]                        │
│          [CCCCCCCCCCCC]               │
│          ↑                            │
│     même bord gauche                  │
└───────────────────────────────────────┘
```

Aligner une sélection ne signifie donc pas automatiquement la placer
contre un bord du parent.

## 8. Distribuer et espacer régulièrement

``` text
ALIGNEMENT
→ relation entre les bords ou centres

DISTRIBUTION
→ relation entre les espaces
```

### Techniquement dans UI3

1.  Créer au moins trois objets.
2.  Les placer avec des espacements irréguliers.
3.  Les sélectionner.
4.  Dans le panneau de droite, repérer la section **Position**.
5.  Ouvrir **More actions** (`…`) si les commandes de distribution ne
    sont pas affichées directement.
6.  Utiliser la distribution horizontale ou verticale selon l'axe
    souhaité.

Figma régularise l'espace vide entre les objets.

``` text
[A]
 ↕
[B]     espaces égaux
 ↕
[C]
```

Les objets n'ont pas besoin d'avoir les mêmes dimensions. **Tidy up**
peut également remettre une sélection en ordre avec des espacements
réguliers.

## 9. Mesurer les distances

### Techniquement sous Windows

1.  Sélectionner un objet.
2.  Maintenir `Alt`.
3.  Pointer vers un autre objet.

Figma affiche les distances pertinentes.

``` text
Titre
  ↕
24 px
  ↕
Texte
```

Cette fonction permet de vérifier une logique d'espacement plutôt que de
travailler uniquement à l'œil.

# Les Constraints

## 10. Pourquoi les Constraints existent

Les **Constraints** décrivent comment un enfant doit réagir lorsque son
Frame parent est redimensionné.

Elles répondent donc à :

> **Comment cet enfant doit-il se comporter si son parent change de
> dimensions ?**

## 11. Préparer et tester une Constraint dans UI3

La structure doit réellement être :

``` text
Frame parent
└── Rectangle enfant
```

### Techniquement

1.  Créer un Frame avec `F`.
2.  Créer un Rectangle avec `R` à l'intérieur.
3.  Vérifier la hiérarchie dans le panneau des layers.
4.  Sélectionner le Rectangle enfant.
5.  Accéder au contrôle **Constraints** dans ses propriétés UI3.
6.  Choisir le comportement souhaité.
7.  Sélectionner ensuite le Frame parent.
8.  Redimensionner le Frame.
9.  Observer l'enfant.

Il faut redimensionner **le parent** pour voir la Constraint agir.

## 12. Left et Right

**Left** conserve la relation avec le bord gauche.

``` text
┌────────────────────────────────────────┐
│  [Objet]                               │
└────────────────────────────────────────┘
```

**Right** conserve la relation avec le bord droit.

``` text
┌────────────────────────────────────────┐
│                               [Objet]  │
└────────────────────────────────────────┘
```

### Techniquement

Sélectionner l'enfant, choisir l'attache voulue dans **Constraints**,
puis redimensionner le Frame parent.

## 13. Left and right

L'enfant conserve sa relation avec **les deux bords horizontaux** et
peut donc changer de largeur.

``` text
Avant
┌────────────────────────────┐
│  [======================]  │
└────────────────────────────┘

Après
┌──────────────────────────────────────────┐
│  [====================================]  │
└──────────────────────────────────────────┘
```

### Techniquement

1.  Sélectionner l'enfant.
2.  Choisir **Left and right**.
3.  Sélectionner le parent.
4.  Modifier sa largeur.
5.  Observer la largeur de l'enfant.

## 14. Top, Bottom et Top and bottom

Le même principe existe verticalement :

-   **Top** : relation avec le haut ;
-   **Bottom** : relation avec le bas ;
-   **Top and bottom** : relation avec les deux côtés verticaux,
    permettant à l'enfant d'évoluer en hauteur.

### Techniquement

Sélectionner l'enfant, choisir la contrainte verticale souhaitée dans
**Constraints**, puis modifier la hauteur du Frame parent.

## 15. Center : subtilité importante

La Constraint **Center ne signifie pas « place cet objet au centre du
Frame »**.

Elle décrit son comportement lors du redimensionnement. Si l'enfant
n'est pas initialement centré, `Center` ne le déplacera pas
automatiquement au centre.

``` text
POSITION / ALIGNEMENT
→ où l'objet se trouve maintenant

CONSTRAINT CENTER
→ comment cette position évolue ensuite
```

### Pour obtenir un objet réellement centré

1.  Placer ou aligner d'abord l'enfant au centre du Frame.
2.  Lui appliquer ensuite `Center`.
3.  Redimensionner le parent pour observer son comportement.

Une Constraint ne corrige donc pas automatiquement la position initiale.

## 16. Scale

`Scale` applique un comportement proportionnel lorsque le parent est
redimensionné.

`Scale` peut apparaître pour les comportements horizontal et vertical :
il s'agit du même principe appliqué séparément aux deux axes.

``` text
Horizontal → Scale
Vertical   → Top
```

ou `Scale` peut être appliqué sur les deux axes.

### Techniquement

1.  Sélectionner l'enfant.
2.  Dans **Constraints**, choisir `Scale` sur l'axe à tester.
3.  Sélectionner le Frame parent.
4.  Le redimensionner.
5.  Observer la position et les dimensions de l'enfant.

> La Constraint **Scale** ne doit pas être confondue avec l'outil
> **Scale (`K`)**, qui sert à redimensionner manuellement des objets.

## 17. Combiner les contraintes horizontales et verticales dans UI3

Dans UI3, les comportements horizontaux et verticaux sont configurés
dans le même contrôle **Constraints**.

Par exemple :

``` text
Right + Bottom
```

permet de conserver les relations de l'enfant avec le bord droit et le
bord inférieur.

### Techniquement

1.  Sélectionner l'enfant.
2.  Ouvrir son contrôle **Constraints**.
3.  Définir les attaches souhaitées sur les deux axes dans ce contrôle.
4.  Sélectionner le Frame parent.
5.  Augmenter sa largeur et sa hauteur.
6.  Observer le comportement.

De même :

-   **Left and right** concerne les deux côtés horizontaux ;
-   **Top and bottom** concerne les deux côtés verticaux.

## 18. Exemple : Header

``` text
Frame Header
├── Logo
└── Connexion
```

On veut que le Logo reste lié à gauche et Connexion à droite.

### Techniquement

1.  Sélectionner `Logo` et lui donner une relation avec `Left`.
2.  Sélectionner `Connexion` et lui donner une relation avec `Right`.
3.  Sélectionner `Header`.
4.  Augmenter sa largeur.

``` text
┌────────────────────────────────────────────────────┐
│ LOGO                                  Connexion    │
└────────────────────────────────────────────────────┘
```

Deux enfants d'un même Frame peuvent donc réagir différemment au
redimensionnement.

## 19. Constraints et responsive Web

Les Constraints introduisent une question centrale du responsive design
:

> **Que doit faire un élément lorsque son conteneur change de dimensions
> ?**

Il n'existe toutefois pas de traduction directe du type « Constraint
Right = telle propriété CSS ».

CSS dispose de nombreux mécanismes : dimensions, positionnement,
pourcentages, unités relatives, Flexbox, Grid, media queries, etc.

Figma et CSS peuvent donc résoudre des problèmes conceptuellement
similaires avec des systèmes différents.

## 20. Ce qu'Auto Layout changera

Sans Auto Layout, une disposition peut nécessiter du positionnement
manuel, des alignements, des mesures, de la distribution et des
réajustements.

Avec Auto Layout, le **parent** pourra prendre en charge automatiquement
une grande partie de cette disposition.

``` text
Positionnement classique :
Chaque enfant → voici ta position

Auto Layout :
Parent → voici comment organiser tes enfants
```

## 21. Ce qu'Auto Layout ne rend pas inutile

Même après Auto Layout, il reste nécessaire de comprendre :

-   X et Y ;
-   W et H ;
-   sélection et déplacement ;
-   alignements ;
-   mesure des distances ;
-   hiérarchie parent/enfant ;
-   comportement au redimensionnement ;
-   positionnement classique lorsque certains objets ne suivent pas le
    flux automatique.

## Carte mentale du Bloc 04

``` text
POSITION
├── souris
├── flèches
└── X / Y

DIMENSIONS
├── W
└── H

PLUSIEURS OBJETS
├── sélection multiple
├── alignement
├── distribution / espacement
└── mesure des distances

ENFANT DANS UN FRAME
└── Constraints
    ├── Left / Right / Left and right
    ├── Top / Bottom / Top and bottom
    ├── Center
    └── Scale

PUIS
↓
AUTO LAYOUT
```

## Points essentiels à retenir

-   `X` et `Y` décrivent la position d'un objet dans son contexte.
-   `W` et `H` définissent sa largeur et sa hauteur.
-   Parent et enfant possèdent leurs propres dimensions.
-   Les alignements font coïncider les bords ou centres des objets
    sélectionnés.
-   **Align right** ne signifie pas automatiquement « placer les objets
    à droite du Frame ».
-   La distribution concerne l'espace entre les objets.
-   `Alt` permet de mesurer les distances sous Windows.
-   Les Constraints décrivent comment un enfant réagit au
    redimensionnement du parent.
-   `Center` ne centre pas automatiquement un objet : sa position
    initiale compte.
-   `Scale` peut intervenir sur les deux axes et ne doit pas être
    confondu avec l'outil Scale (`K`).
-   Dans UI3, les comportements horizontaux et verticaux sont configurés
    dans le même contrôle Constraints.
-   **Left and right** et **Top and bottom** conservent une relation
    avec les deux côtés de leur axe.
-   Auto Layout automatisera une partie de ces tâches, sans rendre les
    notions de ce bloc inutiles.

## Progression

**Bloc 04 terminé --- Positionnement, alignement, dimensions et
contraintes.**

Bloc suivant : **Auto Layout**.
