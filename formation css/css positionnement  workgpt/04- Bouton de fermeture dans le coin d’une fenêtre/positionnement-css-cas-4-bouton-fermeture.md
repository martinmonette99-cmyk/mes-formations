# Positionnement CSS — Cas 4 : Bouton de fermeture dans le coin d’une fenêtre

## Objectif réel

Construire une fenêtre, une modal, une notification ou un panneau avec un bouton de fermeture `✕` placé dans le coin supérieur droit, sans que ce bouton perturbe l’organisation normale du contenu.

## Structure de départ

```html
<div class="window">
    <button class="close-button">✕</button>

    <h2>Informations</h2>
    <p>Contenu de la fenêtre...</p>
</div>
```

```text
.window
├── .close-button
├── h2
└── p
```

Au départ, tout est dans le flux normal.

## Faire de `.window` la référence

```css
.window {
    width: 350px;
    padding: 30px;
    border: 1px solid #999;
    position: relative;
}
```

Ici, `position: relative` ne déplace pas `.window`.

Il sert à faire de `.window` la référence du bouton.

```text
.window
position: relative
→ reste dans le flux
→ devient la référence
```

## Sortir le bouton du flux

```css
.close-button {
    padding: 5px 8px;
    position: absolute;
}
```

Le bouton sort du flux normal. Le navigateur ne lui réserve plus de place.

Le `h2` peut donc remonter comme si le bouton n’occupait plus d’espace.

## Attacher le bouton au coin

```css
.close-button {
    padding: 5px 8px;
    position: absolute;
    top: 10px;
    right: 10px;
}
```

Comme `.window` est la référence :

- `top: 10px` = 10 px depuis le haut de `.window`;
- `right: 10px` = 10 px depuis la droite de `.window`.

```text
.window
position: relative
        ↓
référence

.close-button
position: absolute
        ↓
hors du flux
        ↓
top: 10px
right: 10px
```

## Pourquoi ne pas pousser le bouton avec des marges ?

Une solution comme :

```css
margin-left: 300px;
```

dépendrait fortement de la largeur de la fenêtre.

Avec `top` et `right`, on exprime directement la relation voulue :

> Le bouton doit rester à 10 px du coin supérieur droit.

Si la fenêtre change de largeur, le bouton suit automatiquement.

## Flexbox et `position` dans le même composant

Exemple avec des boutons d’action :

```html
<div class="window">
    <button class="close-button">✕</button>

    <h2>Supprimer le membre ?</h2>
    <p>Cette action est définitive.</p>

    <div class="actions">
        <button>Annuler</button>
        <button>Supprimer</button>
    </div>
</div>
```

```css
.actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}
```

Les rôles sont différents :

```text
.close-button
→ position: absolute
→ placement indépendant du flux

.actions
→ display: flex
→ organisation de ses enfants dans le flux
```

## Risque de chevauchement

Comme `.close-button` est en `absolute`, le reste du contenu ignore l’espace qu’il occupe.

Avec un long titre, un petit viewport ou une fenêtre responsive, le texte peut s’approcher de la zone du bouton.

```text
élément en absolute
        ↓
hors du flux
        ↓
le contenu normal ne lui réserve aucune place
        ↓
chevauchement possible
```

Une solution robuste consiste à réserver plus d’espace à droite :

```css
.window {
    padding-top: 30px;
    padding-right: 60px;
    padding-bottom: 30px;
    padding-left: 30px;
}
```

Ici :

```text
top + right
→ placent le bouton ✕

padding-right
→ protège la zone utilisée par le contenu normal
```

## Pourquoi prévenir peut être utile

Avec une largeur confortable, le texte peut revenir à la ligne naturellement avant d’atteindre le bouton.

Mais un redimensionnement du viewport peut changer la situation.

Pour un composant réutilisable et responsive, on peut décider que :

> La zone supérieure droite appartient au bouton de fermeture. Le contenu normal ne doit pas l’utiliser.

C’est une façon de rendre le composant plus robuste avant qu’un problème apparaisse.

## Rendre la fenêtre responsive

Au lieu de :

```css
.window {
    width: 350px;
}
```

on peut écrire :

```css
.window {
    width: 90%;
    max-width: 350px;
}
```

```text
grand écran
→ maximum 350px

petit écran
→ environ 90% de la largeur disponible
```

Le bouton reste :

```css
.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

Comme ses coordonnées sont liées à `.window`, il suit automatiquement le redimensionnement de la fenêtre.

## Code final

```html
<div class="window">
    <button class="close-button">✕</button>

    <h2>Supprimer le membre ?</h2>
    <p>Cette action est définitive.</p>

    <div class="actions">
        <button>Annuler</button>
        <button>Supprimer</button>
    </div>
</div>
```

```css
.window {
    width: 90%;
    max-width: 350px;

    padding-top: 30px;
    padding-right: 60px;
    padding-bottom: 30px;
    padding-left: 30px;

    border: 1px solid #999;

    position: relative;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 8px;
}

.actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
```

## Raisonnement à retenir

```text
Je veux un bouton ✕ dans le coin
        ↓
mais je ne veux pas qu’il pousse le contenu
        ↓
.close-button → position: absolute
        ↓
il sort du flux
        ↓
il doit rester attaché à la fenêtre
        ↓
.window → position: relative
        ↓
top + right
→ fixent sa distance au coin
```

Puis :

```text
le bouton est hors du flux
        ↓
le contenu ne lui réserve aucune place
        ↓
sur petit écran ou avec un long titre,
un chevauchement peut apparaître
        ↓
padding-right plus généreux
→ protège la zone du bouton
```

Enfin :

```text
.window devient plus petite
        ↓
le texte se réorganise
        ↓
le bouton reste à 10px
du haut et de la droite
```

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
relative + absolute + top/right + padding de protection
→ élément indépendant du flux dans un composant responsive
```

L’idée importante est que `absolute` ne sert pas seulement à placer un élément dans un coin. Il faut aussi réfléchir à la conséquence de sa sortie du flux et à l’espace que les autres éléments peuvent alors utiliser.
