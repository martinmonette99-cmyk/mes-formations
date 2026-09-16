# Bloc 05 --- Comprendre Auto Layout

## Objectif du bloc

Auto Layout marque un changement important dans Figma : le **parent
reçoit des règles qui organisent ses enfants**.

Ce bloc couvre le Flow, l'ordre des enfants, Gap, Padding, les boîtes de
texte, Fixed, Hug contents, Fill container, l'alignement, Gap Auto, les
Auto Layouts imbriqués et les liens avec HTML/CSS/Flexbox.

> **Interface de référence : Figma UI3.**
>
> Avant chaque test, vérifier la structure parent/enfant et les réglages
> de départ. Auto Layout est un système de dépendances : un mauvais
> réglage à un niveau peut modifier le résultat observé plus haut.

------------------------------------------------------------------------

## 1. Le changement fondamental

``` text
FRAME CLASSIQUE
Enfants → positions individuelles

AUTO LAYOUT
Parent → règles de disposition des enfants
```

Exemple :

``` text
Frame Auto Layout
├── Titre
├── Description
└── Bouton

Flow : Vertical
Gap  : 20
```

Le parent organise alors automatiquement ses enfants.

------------------------------------------------------------------------

## 2. Créer un premier Auto Layout

### État de départ requis

Créer trois textes indépendants :

``` text
Titre
Description
Bouton
```

### Techniquement dans UI3

1.  Créer les trois textes avec `T`.
2.  Reprendre Move avec `V`.
3.  Les sélectionner avec `Shift + clic`.
4.  Appuyer sur `Shift + A`.

Vérifier dans Layers :

``` text
Frame 1
├── Titre
├── Description
└── Bouton
```

### Ce qu'il faut observer

Un nouveau Frame parent existe et les trois textes sont maintenant ses
enfants.

------------------------------------------------------------------------

## 3. Flow : Vertical et Horizontal

Sélectionner **Frame 1**.

### Vertical

``` text
Titre
↓
Description
↓
Bouton
```

### Horizontal

``` text
Titre → Description → Bouton
```

### Ce qu'il faut observer

Observer uniquement l'organisation des enfants. Le contenu n'a pas
changé : **la règle du parent a changé**.

### Important

En passant de Vertical à Horizontal, le Frame peut conserver sa largeur
précédente et ne pas couvrir visuellement les trois textes. Ce n'est pas
important pour cette démonstration. Ne pas corriger encore la largeur :
Fixed, Hug et Fill seront étudiés plus loin.

------------------------------------------------------------------------

## 4. L'ordre des enfants

Avec :

``` text
Frame 1
├── Titre
├── Description
└── Bouton
```

déplacer `Bouton` au-dessus de `Description` dans Layers.

``` text
Frame 1
├── Titre
├── Bouton
└── Description
```

### Ce qu'il faut observer

L'ordre visuel change automatiquement. Auto Layout suit l'ordre des
enfants.

------------------------------------------------------------------------

## 5. Gap

### État de départ requis

Frame 1 en Flow Vertical.

### Techniquement

1.  Sélectionner Frame 1.
2.  Repérer **Gap**.
3.  Entrer par exemple `20`.

``` text
Titre
 ↕ 20 px
Description
 ↕ 20 px
Bouton
```

### Ce qu'il faut observer

Uniquement **l'espace entre les enfants**.

> **Gap = espace entre les enfants d'un Auto Layout.**

------------------------------------------------------------------------

## 6. Padding

``` text
Gap     → espace ENTRE les enfants
Padding → espace ENTRE le contenu et les bords du parent
```

### Techniquement

Sélectionner Frame 1 et utiliser par exemple :

``` text
Padding horizontal : 30
Padding vertical   : 20
```

### Ce qu'il faut observer

L'espace intérieur entre les enfants et les limites du Frame.

------------------------------------------------------------------------

## 7. La boîte d'un texte

Un layer Text n'est pas seulement constitué des lettres visibles. Il
possède une **boîte de texte** avec une largeur et une hauteur.

``` text
┌─────────────────┐
│ Confirmer la    │
│ réservation     │
└─────────────────┘
```

Auto Layout travaille avec les **dimensions calculées de ses enfants**,
y compris celles de cette boîte.

------------------------------------------------------------------------

## 8. Redimensionnement des layers Text

### Auto width

La largeur de la boîte s'adapte au texte.

### Auto height

La largeur est définie, mais la hauteur augmente lorsque le texte prend
plusieurs lignes.

### Fixed size

La largeur et la hauteur de la boîte sont déterminées.

### Auto height dans une carte

Pour :

``` text
Carte — Auto Layout
├── Titre
├── Description
└── Bouton
```

`Auto height` convient particulièrement à `Description`, et peut aussi
convenir à `Titre`.

``` text
Texte plus long
      ↓
Text en Auto height
      ↓
boîte de texte plus haute
      ↓
Carte en Hug height
      ↓
Carte plus haute
```

------------------------------------------------------------------------

## 9. Fixed, Hug contents et Fill container

``` text
FIXED
→ dimension déterminée

HUG CONTENTS
→ dimension dépendante du contenu

FILL CONTAINER
→ dimension dépendante de l'espace disponible dans le parent
```

Mémo :

``` text
HUG  : contenu → parent
FILL : parent → enfant
FIXED: dimension déterminée
```

------------------------------------------------------------------------

## 10. Fixed

### État de départ requis

``` text
Frame 1 — Auto Layout vertical
├── Titre
├── Description
└── Bouton
```

### Techniquement

1.  Sélectionner `Titre`.
2.  Régler sa largeur sur **Fixed**.
3.  Donner par exemple `150 px`.
4.  Laisser Description et Bouton en Fill s'ils le sont déjà.
5.  Élargir Frame 1.

### Ce qu'il faut observer

**Regarder les largeurs, pas le déplacement.**

``` text
┌──────────────────────────────────────┐
│ Titre────────                        │ ← Fixed
│ Description════════════════════════  │ ← Fill
│ Bouton═════════════════════════════  │ ← Fill
└──────────────────────────────────────┘
```

Titre conserve sa largeur ; les enfants en Fill utilisent l'espace
disponible.

------------------------------------------------------------------------

## 11. Construire un bouton pour comprendre Hug

### État de départ requis

Créer uniquement le texte `Acheter`.

### Techniquement

1.  Sélectionner le texte.
2.  Faire `Shift + A`.
3.  Vérifier :

``` text
Frame 2 — Auto Layout
└── Acheter
```

4.  Donner un Fill au Frame pour voir ses limites.
5.  Ajouter par exemple :

``` text
Padding horizontal : 24
Padding vertical   : 12
```

------------------------------------------------------------------------

## 12. Hug contents

Hug signifie :

> **Adapter la dimension du parent aux dimensions calculées de son
> contenu.**

### Techniquement

1.  Mettre Frame 2 en Hug sur la dimension étudiée.
2.  Modifier le texte `Acheter`.
3.  Tester un texte plus long.

### Ce qu'il faut observer

Regarder **les limites du Frame**. Le Frame s'adapte à son enfant tout
en conservant son Padding.

------------------------------------------------------------------------

## 13. Le piège de Hug avec le texte

``` text
Frame en Hug
      ↓
dimensions calculées des enfants
      ↓
Text
      ↓
sa propre boîte et son propre comportement
```

Hug ne signifie donc pas simplement « entoure exactement les lettres
visibles ».

Il peut rappeler conceptuellement `fit-content` en CSS, mais Figma
s'appuie sur la structure et les dimensions calculées des layers.

------------------------------------------------------------------------

## 14. Fill container

> **Fill container nécessite un parent Auto Layout approprié dont
> l'espace peut être rempli.**

### État de départ requis

``` text
Frame parent — Auto Layout vertical
└── Rectangle enfant
```

### Techniquement

1.  Sélectionner le Rectangle.
2.  Régler sa largeur sur **Fill container**.
3.  Modifier la largeur du parent.

### Ce qu'il faut observer

La largeur du Rectangle suit l'espace disponible dans son parent.

> **Fill = utilise l'espace disponible dans ton parent Auto Layout.**

------------------------------------------------------------------------

## 15. Hug vs Fill

``` text
HUG
CONTENU
   ↓
PARENT

FILL
PARENT
   ↓
ENFANT

FIXED
dimension déterminée
```

Cette distinction est une des notions centrales d'Auto Layout.

------------------------------------------------------------------------

## 16. Combiner Hug et Fill avec une carte

Pour cette démonstration, **Carte est le parent Auto Layout**.

### État de départ requis

``` text
Frame 3 — Carte — Auto Layout vertical
├── Titre
├── Description
└── Bouton
```

Titre et Description peuvent utiliser **Auto height**.

Configuration simple :

``` text
Carte
Width  → Fixed
Height → Hug

Titre
Width → Hug

Description
Width → Fill

Bouton
Width → Hug
```

### Ce qu'il faut observer

Une Description plus longue peut prendre plusieurs lignes et gagner en
hauteur. Puisque Carte est en Hug height, sa hauteur s'adapte à son
contenu.

### Quand Carte peut-elle être en Fill ?

Avec un niveau supplémentaire :

``` text
Conteneur — Auto Layout
└── Carte
    ├── Titre
    ├── Description
    └── Bouton
```

Carte peut alors utiliser `Width → Fill`, puisqu'elle possède un parent
Auto Layout dont elle peut remplir l'espace.

------------------------------------------------------------------------

## 17. Alignement dans Auto Layout

Pour observer l'alignement horizontal, les enfants ne doivent pas déjà
remplir toute la largeur.

### État de départ requis

``` text
Frame 1 — Auto Layout vertical
Width  → Fixed
Height → Fixed

├── Titre       → Width : Hug contents
├── Description → Width : Hug contents
└── Bouton      → Width : Hug contents
```

Le Frame doit être plus large que ses enfants.

### Pourquoi Hug ?

Un enfant en Fill occupe déjà la largeur disponible ; il reste donc peu
ou pas d'espace horizontal pour observer son déplacement.

### Techniquement

1.  Sélectionner le Frame.
2.  Utiliser **Alignment** dans UI3.
3.  Tester gauche, centre et droite.

### Ce qu'il faut observer

La **position des enfants dans l'espace libre du Frame**.

------------------------------------------------------------------------

## 18. Gap Auto

### État de départ requis

``` text
Frame — Auto Layout
Flow  → Horizontal
Width → Fixed et suffisamment grande
├── Logo
└── Menu
```

### Techniquement

1.  Sélectionner le Frame.
2.  Dans Gap, choisir **Auto**.
3.  Modifier la largeur du Frame.

### Ce qu'il faut observer

L'espace entre Logo et Menu absorbe l'espace disponible.

Cela rappelle conceptuellement `justify-content: space-between` en
Flexbox.

------------------------------------------------------------------------

## 19. Auto Layout imbriqués

Une interface peut nécessiter plusieurs directions :

``` text
Avatar     Pierre
           Administrateur
```

Structure :

``` text
Profil — Horizontal
├── Avatar
└── Informations — Vertical
    ├── Pierre
    └── Administrateur
```

------------------------------------------------------------------------

## 20. Construire une imbrication

### Informations

1.  Créer `Pierre` et `Administrateur`.
2.  Les sélectionner.
3.  `Shift + A`.
4.  Flow → Vertical.

### Avatar

Créer une Ellipse avec `O`.

### Profil

1.  Sélectionner l'Ellipse et le Frame Informations.
2.  `Shift + A`.
3.  Flow → Horizontal.
4.  Régler Gap et Alignment.

### Ce qu'il faut observer

La hiérarchie :

``` text
Profil
├── Avatar
└── Informations
    ├── Pierre
    └── Administrateur
```

Un Auto Layout est enfant d'un autre Auto Layout.

------------------------------------------------------------------------

## 21. Lien avec HTML/CSS

Cette structure :

``` text
Profil
├── Avatar
└── Informations
    ├── Nom
    └── Rôle
```

rappelle :

``` html
<div class="profil">
    <img>
    <div class="informations">
        <p>Pierre</p>
        <p>Administrateur</p>
    </div>
</div>
```

et :

``` css
.profil {
    display: flex;
}

.informations {
    display: flex;
    flex-direction: column;
}
```

------------------------------------------------------------------------

## 22. Auto Layout et Flexbox

  Figma Auto Layout             Idée proche en CSS/Flexbox
  ----------------------------- ----------------------------------
  Horizontal                    `flex-direction: row`
  Vertical                      `flex-direction: column`
  Gap                           `gap`
  Padding                       `padding`
  Gap Auto, dans certains cas   `justify-content: space-between`
  Alignment                     propriétés d'alignement Flexbox

> **Auto Layout n'est pas Flexbox.** Ces rapprochements servent de
> modèle mental, pas de traduction exacte propriété par propriété.

------------------------------------------------------------------------

## 23. Auto Layout et responsive design

Des niveaux imbriqués peuvent former une chaîne de réactions :

``` text
Page
└── Section
    └── Carte
        ├── Titre
        ├── Description
        └── Bouton
```

Un parent peut fournir l'espace, un enfant en Fill peut l'utiliser, un
texte en Auto height peut gagner en hauteur et un parent en Hug peut
alors s'adapter.

------------------------------------------------------------------------

## 24. Auto Layout et Constraints

Les notions du Bloc 04 restent utiles.

Auto Layout organise principalement le **flux** des enfants. Les
Constraints décrivent d'autres comportements liés notamment au
redimensionnement du parent.

Les deux systèmes ne sont pas simplement interchangeables.

------------------------------------------------------------------------

## 25. Retirer Auto Layout

Sélectionner le Frame et utiliser la commande de retrait d'Auto Layout
dans UI3 ou le menu contextuel.

Sous Windows, le raccourci est :

``` text
Alt + Shift + A
```

------------------------------------------------------------------------

## 26. Ne pas utiliser Auto Layout partout sans raison

Auto Layout est particulièrement pertinent pour :

-   navigation ;
-   bouton ;
-   carte ;
-   liste ;
-   formulaire ;
-   Header ;
-   ensemble titre + paragraphe ;
-   rangée d'icônes.

Question utile :

> **Ces éléments doivent-ils conserver une disposition cohérente lorsque
> le contenu ou les dimensions changent ?**

------------------------------------------------------------------------

## 27. Lire Layers avec Auto Layout

Se demander :

-   Quel est le parent ?
-   Quel Frame possède Auto Layout ?
-   Quel est son Flow ?
-   Quel est l'ordre des enfants ?
-   Quels Auto Layouts sont imbriqués ?
-   Quelles dimensions sont Fixed ?
-   Quelles dimensions sont Hug ?
-   Quels enfants utilisent Fill ?

------------------------------------------------------------------------

## 28. Méthode de vérification

Lorsqu'un résultat semble incorrect :

1.  vérifier le parent ;
2.  vérifier la hiérarchie dans Layers ;
3.  vérifier que l'Auto Layout est sur le bon Frame ;
4.  vérifier le Flow ;
5.  vérifier l'ordre des enfants ;
6.  vérifier Fixed ;
7.  vérifier Hug ;
8.  vérifier Fill ;
9.  pour un texte, vérifier Auto width / Auto height / Fixed size ;
10. vérifier la taille de la boîte de texte ;
11. vérifier Gap ;
12. vérifier Padding ;
13. vérifier qu'il existe assez d'espace libre pour observer l'effet
    recherché.

------------------------------------------------------------------------

## 29. Carte mentale

``` text
AUTO LAYOUT
│
├── STRUCTURE
│   ├── Parent
│   └── Enfants
│
├── ORGANISATION
│   ├── Vertical
│   ├── Horizontal
│   └── ordre
│
├── ESPACEMENT
│   ├── Gap
│   ├── Gap Auto
│   └── Padding
│
├── TEXTE
│   ├── Auto width
│   ├── Auto height
│   └── Fixed size
│
├── DIMENSIONS
│   ├── Fixed
│   ├── Hug contents
│   └── Fill container
│
├── ALIGNEMENT
│
└── IMBRICATION
    └── Auto Layout
        └── Auto Layout
```

------------------------------------------------------------------------

## 30. Points essentiels à retenir

-   Auto Layout donne au parent des règles pour organiser ses enfants.
-   `Shift + A` crée rapidement un Auto Layout autour d'une sélection.
-   Vertical et Horizontal déterminent le Flow.
-   L'ordre des layers participe à l'ordre du flux.
-   Gap = espace entre enfants.
-   Padding = espace intérieur du parent.
-   Un texte possède sa propre boîte et son propre redimensionnement.
-   Auto width adapte la largeur au texte.
-   Auto height adapte la hauteur au nombre de lignes pour une largeur
    définie.
-   Fixed size fixe largeur et hauteur de la boîte de texte.
-   Fixed = dimension déterminée.
-   Hug = contenu → parent.
-   Fill = parent → enfant.
-   Fill nécessite un parent Auto Layout approprié.
-   Un Frame peut être à la fois parent de ses enfants et enfant d'un
    autre Auto Layout.
-   Pour voir un alignement, il faut laisser de l'espace libre ; Fill
    peut masquer l'effet.
-   Les Auto Layouts imbriqués combinent plusieurs organisations.
-   Auto Layout ressemble conceptuellement à Flexbox sans être une copie
    exacte.
-   En cas de résultat inattendu, vérifier d'abord la structure et les
    réglages de départ.

------------------------------------------------------------------------

## 31. Lexique Figma anglais → français

  -----------------------------------------------------------------------
  Terme Figma                         Sens pratique à retenir
  ----------------------------------- -----------------------------------
  **Auto Layout**                     Mise en page automatique

  **Flow**                            Direction / flux d'organisation

  **Vertical**                        Organisation verticale

  **Horizontal**                      Organisation horizontale

  **Gap**                             Espacement entre les enfants

  **Gap Auto**                        Espacement utilisant
                                      automatiquement l'espace disponible

  **Padding**                         Espacement intérieur du parent

  **Fixed**                           Dimension fixe / déterminée

  **Hug contents**                    Adapter la dimension au contenu

  **Fill container**                  Remplir l'espace disponible du
                                      parent

  **Auto width**                      Largeur de la boîte de texte
                                      adaptée au texte

  **Auto height**                     Hauteur de la boîte de texte
                                      adaptée au nombre de lignes

  **Fixed size**                      Dimensions fixes de la boîte de
                                      texte

  **Alignment**                       Alignement

  **Parent**                          Élément conteneur

  **Child / Children**                Enfant / enfants

  **Nested Auto Layout**              Auto Layout imbriqué

  **Frame**                           Cadre / conteneur Figma
  -----------------------------------------------------------------------

> Les traductions servent à comprendre le concept. Il reste utile de
> connaître les termes anglais exacts affichés par Figma.

------------------------------------------------------------------------

## Progression

**Bloc 05 terminé --- Auto Layout : fondamentaux, dimensionnement et
imbrication.**

Le Bloc 06 sera traité dans une nouvelle conversation.
