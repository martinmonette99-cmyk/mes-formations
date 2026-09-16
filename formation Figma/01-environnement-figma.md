# Bloc 01 — Découvrir Figma et son environnement

## Objectifs du bloc

Ce premier bloc présente l'environnement général de Figma avant d'aborder les outils de conception en détail.

À la fin de ce bloc, il faut principalement comprendre :

- le rôle de Figma dans un projet Web ;
- la différence entre un fichier Figma, une Page et le Canvas ;
- les grandes zones de l'interface de Figma ;
- la notion de Layer (calque) ;
- le principe de hiérarchie entre les éléments ;
- le premier rapprochement possible entre la structure d'un design Figma et celle d'un document HTML.

---

## 1. Le rôle de Figma dans la conception Web

Pour cette formation, nous utiliserons principalement **Figma Design**.

Figma permet de concevoir visuellement des interfaces telles que des sites Web et des applications. Il sert notamment à déterminer :

- la disposition générale d'une interface ;
- la position et les dimensions des éléments ;
- les espacements ;
- les couleurs ;
- la typographie ;
- l'apparence des boutons et autres composants ;
- le comportement prévu de l'interface selon différentes dimensions d'écran ;
- l'organisation et la réutilisation des éléments graphiques.

### Figma n'est pas le site Web

Figma ne remplace pas HTML, CSS ou JavaScript.

Il intervient principalement dans la phase de **conception** :

```text
Idée
  ↓
Conception dans Figma
  ↓
Structure visuelle de l'interface
  ↓
Développement HTML / CSS / JavaScript
  ↓
Site Web réel
```

Une maquette Figma représente donc ce que l'on souhaite construire. Le navigateur, lui, affiche ensuite l'interface réellement développée avec les technologies Web.

---

## 2. Le fichier Figma

Le travail de conception se déroule dans un **fichier Figma** (*Design file*).

Un fichier peut contenir plusieurs **Pages**. Chaque Page possède un espace de travail appelé **Canvas**.

Une première représentation de cette organisation est :

```text
Fichier Figma
│
├── Page
│   └── Canvas
│
├── Page
│   └── Canvas
│
└── ...
```

### Une Page Figma n'est pas nécessairement une page Web

Le mot *Page* peut prêter à confusion lorsqu'on vient du développement Web.

Dans Figma, une Page sert avant tout à **organiser le fichier**. Elle ne représente pas obligatoirement une page HTML ou une URL du futur site.

Par exemple, un fichier pourrait être organisé ainsi :

```text
Page : Brouillons
Page : Maquettes
Page : Composants
Page : Archives
```

Cette organisation pourra évoluer selon la taille et les besoins du projet.

---

## 3. Le Canvas

Le **Canvas** est la grande surface de travail disponible dans une Page Figma.

On peut l'imaginer comme une très grande table de travail sur laquelle sont placés les différents éléments du design.

On peut notamment y déposer :

- du texte ;
- des formes ;
- des images ;
- des boutons ;
- des Frames ;
- des sections d'interface ;
- des maquettes complètes.

Le Canvas peut être parcouru librement : on peut s'y déplacer, zoomer et dézoomer.

Le Canvas **n'est pas lui-même le site Web**. Il constitue l'espace dans lequel le design est construit et organisé.

---

## 4. Les grandes zones de l'interface Figma

Même si l'interface peut évoluer avec les versions de Figma, son fonctionnement repose sur quelques grandes zones.

Une représentation simplifiée est :

```text
              Barre d'outils
                    ↓

Panneau gauche →  CANVAS  ← Panneau droit
   structure                  propriétés
```

### 4.1 La barre d'outils

La barre d'outils donne accès aux principales actions et aux outils de création.

On y retrouve notamment des outils permettant de :

- sélectionner des éléments ;
- créer des Frames ;
- créer des formes ;
- ajouter du texte ;
- ajouter des commentaires ;
- effectuer différentes opérations de conception.

Il n'est pas nécessaire de mémoriser tous les outils dès le départ.

La logique essentielle est :

> **La barre d'outils sert principalement à choisir ce que l'on veut créer ou faire.**

### 4.2 Le panneau de gauche

Le panneau de gauche permet notamment de parcourir et de comprendre la **structure du fichier et du design**.

Il devient particulièrement important lorsque l'interface contient beaucoup d'éléments.

On y retrouve notamment les différents **Layers** et leur organisation hiérarchique.

### 4.3 Le panneau de droite

Le panneau de droite affiche les propriétés et les options associées à l'élément actuellement sélectionné.

Selon le type d'élément, on peut notamment y retrouver :

- la largeur ;
- la hauteur ;
- la position ;
- la couleur ;
- les bordures ;
- le rayon des coins ;
- l'opacité ;
- différentes propriétés propres au type d'objet sélectionné.

Le contenu du panneau change donc selon la sélection.

Une logique fondamentale de Figma est :

> **Je sélectionne quelque chose → Figma me montre les propriétés et actions pertinentes pour cette sélection.**

---

## 5. La notion de Layer

**Layer** signifie *calque*.

Pour commencer, on peut également le comprendre comme un **élément présent dans le design**.

Par exemple :

- un texte est un Layer ;
- un rectangle est un Layer ;
- une image est un Layer ;
- une Frame est également un Layer.

Si une interface contient :

```text
Logo
Titre
Texte
Bouton
```

Figma doit gérer ces différents éléments dans la structure du design.

Cette structure peut devenir hiérarchique :

```text
Frame
├── Logo
├── Titre
├── Texte
└── Bouton
```

Cela introduit une notion fondamentale pour la suite de la formation : les relations **parent/enfant** entre les éléments.

Cette notion sera approfondie dans le bloc consacré aux Frames, groupes, sections et à la hiérarchie.

---

## 6. Premier rapprochement avec HTML

Figma et HTML sont deux technologies différentes. Il ne faut donc pas chercher une équivalence exacte entre leurs éléments.

Cependant, leur manière d'organiser une interface peut présenter des ressemblances conceptuelles utiles pour un développeur Web.

### Exemple HTML

```html
<section>
    <h1>Titre</h1>
    <p>Texte</p>
    <button>Bouton</button>
</section>
```

On retrouve une structure hiérarchique : la `section` contient plusieurs éléments enfants.

### Représentation conceptuelle dans Figma

```text
Frame
├── Texte « Titre »
├── Texte « Texte »
└── Bouton
```

Dans les deux cas, certains éléments peuvent donc en **contenir d'autres**.

Cette comparaison deviendra beaucoup plus importante lorsque seront étudiés :

- les Frames ;
- les relations parent/enfant ;
- les contraintes ;
- Auto Layout ;
- les composants ;
- le responsive design.

Auto Layout présentera notamment certaines logiques qui pourront rappeler **Flexbox en CSS**, comme la direction des éléments, les espacements et le comportement des dimensions.

Il est cependant préférable de comprendre d'abord le fonctionnement propre de Figma avant d'établir des correspondances trop précises avec CSS.

---

## 7. Carte mentale du bloc

La structure générale à retenir est :

```text
Fichier Figma
│
├── Page
│   │
│   └── Canvas
│       │
│       ├── Frame
│       │   ├── Layer
│       │   ├── Layer
│       │   └── Layer
│       │
│       └── autres éléments...
│
└── autre Page...
```

Pour l'interface de travail :

```text
              Barre d'outils
                    ↓

Panneau gauche →  CANVAS  ← Panneau droit
   structure                  propriétés
```

---

## 8. Points essentiels à retenir

1. **Figma Design sert à concevoir l'interface**, mais ne remplace pas HTML, CSS et JavaScript.
2. Un **fichier Figma** peut contenir plusieurs **Pages**.
3. Une Page Figma sert à organiser le fichier et ne correspond pas nécessairement à une page Web.
4. Le **Canvas** est l'espace de travail sur lequel le design est construit.
5. Le **panneau de gauche** permet notamment d'examiner la structure et les Layers.
6. Le **panneau de droite** présente les propriétés de l'élément sélectionné.
7. Un **Layer** peut être compris comme un élément du design.
8. Les éléments peuvent être organisés selon une **hiérarchie parent/enfant**.
9. Cette hiérarchie permettra plus tard d'établir des rapprochements utiles avec la structure HTML et certaines logiques CSS.

---

## Progression

**Bloc 01 — Découvrir Figma et son environnement : terminé**

Prochaine étape : **Bloc 02 — Objets, formes, texte et propriétés visuelles**.
