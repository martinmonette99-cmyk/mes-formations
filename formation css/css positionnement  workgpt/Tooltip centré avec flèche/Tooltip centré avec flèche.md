# Positionnement CSS — Cas 8 : Tooltip centré avec flèche

## Objectif

Construire un tooltip qui apparaît au-dessus d’un bouton sans pousser la page, reste centré, possède une flèche `::after`, apparaît progressivement au survol et ne gêne pas la souris lorsqu’il est invisible.

```text
       ┌───────────────────────┐
       │ Ajouter aux favoris   │
       └───────────▼───────────┘
                  [♥]
```

Cette fiche est volontairement autonome : les notions indispensables sont rappelées même si elles ont déjà été vues.

## 1. HTML

```html
<div class="tooltip">
    <button class="tooltip-button">♥</button>
    <div class="tooltip-text">Ajouter aux favoris</div>
</div>
```

```text
.tooltip
├── .tooltip-button
└── .tooltip-text
```

Au départ, bouton et texte sont dans le flux.

## 2. Créer la référence

```css
.tooltip {
    margin: 100px;
    position: relative;
}
```

Rien ne bouge nécessairement. `relative` sert ici surtout à faire de `.tooltip` la référence du futur élément `absolute`.

## 3. Sortir le texte du flux

```css
.tooltip-text {
    position: absolute;
}
```

Le tooltip ne réserve plus normalement sa place dans le flux et peut se superposer à l’interface.

## 4. `absolute` et `width: auto`

Observation faite pendant le cas : après `position:absolute`, `.tooltip-text` semblait avoir une largeur proche de son contenu, comme `fit-content`.

Un `<div>` bloc normal avec `width:auto` utilise généralement la largeur disponible. Dans cette configuration `absolute`, la largeur automatique peut suivre un calcul de type **shrink-to-fit**.

```text
bloc normal + width:auto
→ généralement largeur disponible

absolute dans cette configuration + width:auto
→ largeur pouvant se resserrer autour du contenu
```

Ce n’était donc pas principalement Flexbox.

## 5. Placer au-dessus

```css
.tooltip-text {
    position: absolute;
    bottom: 100%;
}
```

Le `100%` dépend de la hauteur de la référence `.tooltip`.

```text
bottom:100% → au-dessus de la référence
top:100%    → sous la référence
```

## 6. Pourquoi `left:50%` seul ne centre pas

```css
left: 50%;
```

place le **bord gauche** du tooltip à 50 % de la largeur de sa référence.

```text
0%              50%              100%
|----------------|-----------------|
                 ├──── tooltip ────
                 ↑ bord gauche
```

Ce n’est donc pas encore un centrage.

## 7. Problème rencontré : le texte partait vers le centre du viewport

`.tooltip` est un `<div>` bloc. Il occupait une grande largeur :

```text
.tooltip
┌─────────────────────────────────────┐
│ [♥]                  50%            │
└─────────────────────────────────────┘
```

`left:50%` était correct, mais le **parent de référence était trop large**.

Correction :

```css
.tooltip {
    position: relative;
    width: fit-content;
}
```

La référence se resserre autour du bouton.

Leçon : avant de corriger les coordonnées d’un élément `absolute`, vérifier aussi les dimensions de sa référence.

## 8. Centrage complet

```css
left: 50%;
transform: translateX(-50%);
```

Les deux `50%` ne parlent pas de la même boîte :

```text
left:50%
→ 50% de la largeur de la RÉFÉRENCE

translateX(-50%)
→ 50% de la largeur de L’ÉLÉMENT LUI-MÊME
```

Donc :

```text
left:50%
→ bord gauche au centre du parent

translateX(-50%)
→ recul de la moitié de la propre largeur du tooltip

résultat
→ centres alignés
```

## 9. Ajouter 8 px avec `calc()`

```css
bottom: calc(100% + 8px);
```

Cela exprime précisément :

```text
100% de la hauteur de la référence
+
8px d’espace fixe
```

C’est préférable à un pourcentage arbitraire comme `110%`.

## 10. `white-space: nowrap`

```css
white-space: nowrap;
```

garde `Ajouter aux favoris` sur une seule ligne.

Ce choix convient à un petit tooltip, mais n’est pas universel. Pour du texte long ou certains écrans mobiles, autoriser les retours à la ligne peut être préférable.

## 11. Créer la flèche avec `::after`

```css
.tooltip-text::after {
    content: "";
}
```

Mentalement :

```text
.tooltip-text
├── texte
└── ::after
```

`::after` est généré par CSS ; aucun élément HTML supplémentaire n’est nécessaire. `content:""` le génère sans texte.

## 12. Pourquoi `::after` était initialement inline

`::before` et `::after` ont par défaut un comportement `inline`.

Nous avions essayé :

```css
.tooltip-text::after {
    content: "";
    width: 10px;
    height: 10px;
    background-color: red;
}
```

Les dimensions ne produisaient pas la boîte attendue avec ce comportement inline.

Le test :

```css
display: block;
```

a rendu le carré `10 × 10px` visible.

Pour notre vraie flèche, nous avons ensuite retiré `display:block` et utilisé :

```css
position: absolute;
```

Un élément positionné en `absolute` est retiré du flux et sa boîte est **blockifiée pour les besoins de la mise en page**, ce qui permet notamment à `width` et `height` de produire la boîte attendue.

## 13. Positionnements imbriqués

```text
.tooltip
position: relative
│
└── .tooltip-text
    position: absolute
    │
    └── ::after
        position: absolute
```

`.tooltip-text`, bien qu’en `absolute`, est un élément positionné et peut devenir la référence de son propre descendant `absolute`.

```text
.tooltip-text → positionné par rapport à .tooltip
::after       → positionné par rapport à .tooltip-text
```

## 14. `top:100%` de la flèche

```css
.tooltip-text::after {
    top: 100%;
}
```

Cette fois, le `100%` dépend de `.tooltip-text`, pas de `.tooltip`.

```text
.tooltip-text
0%   ┌────────────────────────┐
     │ Ajouter aux favoris    │
100% └────────────────────────┘
     ■  ← ::after
```

Réflexe à retenir : **100 % de quoi ?**

## 15. Centrer la flèche

```css
left: 50%;
transform: translateX(-50%);
```

Même technique, autre niveau :

```text
.tooltip-text → centré sur .tooltip
::after       → centré sur .tooltip-text
```

## 16. Transformer le carré en flèche

```css
width: 10px;
height: 10px;
background-color: #222;
transform: translateX(-50%) rotate(45deg);
```

Le carré tourné de 45° devient un losange. Sa partie supérieure se fond dans le fond du tooltip et la partie visible ressemble à une flèche.

## 17. Plusieurs transformations

Ne pas écrire :

```css
transform: translateX(-50%);
transform: rotate(45deg);
```

La deuxième déclaration remplacerait la première.

Il faut combiner :

```css
transform: translateX(-50%) rotate(45deg);
```

## 18. La flèche utilise une partie de l’espace

```css
bottom: calc(100% + 8px);
```

place la **boîte principale** du tooltip 8 px au-dessus de sa référence. `::after` descend ensuite depuis cette boîte et occupe une partie de cet espace.

Il faut distinguer la boîte principale de son élément décoratif.

## 19. Masquer avec `opacity`

```css
opacity: 0;
```

rend le tooltip transparent, mais sa boîte existe toujours.

```text
opacity:0   → invisible, boîte présente
display:none → élément non affiché
```

Nous utilisons `opacity` parce qu’elle permet une transition progressive.

## 20. Pourquoi `::after` disparaît aussi

Quand `.tooltip-text` reçoit :

```css
opacity: 0;
```

son rendu complet, incluant son contenu et son pseudo-élément, devient transparent.

Ce n’est pas simplement une propriété héritée comme `color`.

Même un `opacity:1` sur `::after` ne peut pas rendre visible le contenu d’un parent dont le rendu global est à `opacity:0`.

## 21. Afficher au survol

```css
.tooltip:hover .tooltip-text {
    opacity: 1;
}
```

Lecture :

```text
.tooltip:hover
→ quand le composant est survolé

.tooltip-text
→ sélectionner son descendant
```

## 22. Transition

```css
transition: opacity 0.3s;
```

permet :

```text
apparition    0 → 1
disparition   1 → 0
```

On préfère ici `transition: opacity` à `transition: all`, car seule l’opacité doit être animée.

## 23. Problème caché de `opacity:0`

Observation faite pendant l’exercice : avant `pointer-events:none`, survoler l’emplacement du tooltip invisible pouvait le faire apparaître.

Pourquoi ?

`opacity:0` ne supprime pas sa boîte. `.tooltip-text` est toujours un descendant de `.tooltip`, et la souris peut encore le détecter.

## 24. `pointer-events:none`

```css
pointer-events: none;
```

fait ignorer cette boîte par la souris.

```text
opacity:0
→ invisible
→ boîte présente
→ interactions encore possibles

pointer-events:none
→ souris ignore la boîte

display:none
→ élément non affiché
```

Pour notre tooltip purement informatif, `pointer-events:none` peut rester actif même quand le tooltip est visible.

## 25. Tooltip coupé par `overflow:hidden`

Un ancêtre peut avoir :

```css
overflow: hidden;
```

et couper la partie du tooltip qui dépasse.

Un énorme `z-index` ne règle pas nécessairement cela :

```text
z-index
→ ordre des couches

overflow:hidden
→ découpage du débordement
```

Si `overflow:hidden` n’est pas nécessaire, on peut le retirer. S’il sert réellement, par exemple à couper une image selon les coins d’une carte, on peut parfois déplacer le découpage vers un enfant plus précis :

```text
.card
├── .card-image
│   overflow:hidden
│   └── img
└── .tooltip
    libre de dépasser
```

Réflexe :

```text
tooltip coupé
↓
inspecter les ancêtres
↓
overflow:hidden / clip ?
↓
peut-on retirer cette contrainte ?
↓
sinon, peut-on restructurer où elle s’applique ?
```

## 26. Bord du viewport

Un tooltip peut être parfaitement centré sur son bouton et quand même sortir de l’écran si le bouton est près d’un bord.

Il faut distinguer :

```text
mal centré sur le bouton
→ problème de positionnement

bien centré mais hors écran
→ espace disponible dans le viewport

coupé par un parent
→ overflow

derrière un élément
→ superposition / z-index
```

Pour un tooltip très robuste qui détecte l’espace disponible et change automatiquement de côté, JavaScript ou une solution spécialisée peut devenir préférable.

## 27. Code final

### HTML

```html
<div class="tooltip">
    <button class="tooltip-button">♥</button>

    <div class="tooltip-text">
        Ajouter aux favoris
    </div>
</div>
```

### CSS

```css
.tooltip {
    margin: 100px;
    position: relative;
    width: fit-content;
}

.tooltip-button {
    font-size: 24px;
    padding: 10px 15px;
}

.tooltip-text {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);

    padding: 8px 12px;
    background-color: #222;
    color: white;
    border-radius: 5px;
    white-space: nowrap;

    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}

.tooltip:hover .tooltip-text {
    opacity: 1;
}

.tooltip-text::after {
    content: "";

    width: 10px;
    height: 10px;
    background-color: #222;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
}
```

## 28. Raisonnement complet

```text
information au-dessus d’un bouton
↓
ne doit pas pousser la page
↓
.tooltip-text → absolute
↓
.tooltip → relative
↓
vérifier la largeur de la référence
↓
width:fit-content
↓
bottom:calc(100% + 8px)
↓
left:50%
→ bord gauche au centre du parent
↓
translateX(-50%)
→ recul de la moitié de sa propre largeur
↓
tooltip centré
↓
::after
→ élément décoratif généré par CSS
↓
absolute + top:100%
→ sous .tooltip-text
↓
left:50% + translateX(-50%)
→ flèche centrée
↓
rotate(45deg)
→ carré transformé en losange
↓
opacity:0
→ invisible mais présent
↓
pointer-events:none
→ souris l’ignore
↓
:hover → opacity:1
↓
transition
→ apparition/disparition progressive
```

## 29. Carte de référence

```text
relative
→ crée la référence

absolute
→ sort du flux et permet le placement précis

fit-content
→ resserre ici la référence autour du contenu

bottom:100%
→ au-dessus de la référence

calc(100% + 8px)
→ pourcentage relatif + espace fixe

left:50%
→ 50% de la référence

translateX(-50%)
→ 50% de l’élément lui-même

white-space:nowrap
→ pas de retour à la ligne

::after
→ pseudo-élément généré par CSS

content:""
→ pseudo-élément sans texte

::after par défaut
→ comportement inline

absolute sur ::after
→ hors du flux + boîte blockifiée pour le layout

top:100%
→ sous sa propre référence

rotate(45deg)
→ carré en losange

opacity:0
→ invisible mais toujours présent

pointer-events:none
→ souris ignore l’élément

:hover
→ état de survol

transition:opacity
→ changement progressif

overflow:hidden sur un ancêtre
→ peut couper le tooltip

z-index
→ superposition, pas solution au découpage par overflow
```

## 30. Relation avec les cas précédents

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
relative + absolute + top:100% + largeur + état
→ composant positionné et interactif

Cas 8 — Tooltip
relative + absolute + 50%/translate + ::after
+ opacity + pointer-events
→ positionnements imbriqués et interaction au survol
```

L’objectif n’est pas de mémoriser immédiatement chaque propriété. Cette fiche sert à retrouver le cas, reconnaître le problème et reconstruire le raisonnement.
