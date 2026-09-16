# Positionnement CSS — Cas 5 : Bouton fixé dans le viewport

## Objectif réel

Construire un bouton flottant qui reste visible dans un coin de l'écran pendant le défilement : retour en haut, chat, aide ou raccourci.

Le point central est `position: fixed` et sa différence avec `position: absolute`.

## 1. Page de départ

```html
<main>
    <h1>Ma page</h1>
    <p>Faites défiler la page pour observer le bouton.</p>

    <div class="long-content">
        <p>Contenu de la page...</p>
    </div>
</main>

<button class="back-top">↑</button>
```

```css
.long-content {
    height: 1500px;
}

.back-top {
    padding: 12px 16px;
}
```

`height: 1500px` sert seulement à provoquer du scroll pour l'expérience.

Au départ, le bouton est dans le flux normal et se retrouve après le contenu.

## 2. `position: fixed`

```css
.back-top {
    padding: 12px 16px;
    position: fixed;
}
```

Le bouton sort du flux.

```text
fixed
→ sort du flux
→ dans le cas courant, se positionne par rapport au viewport
```

Sans coordonnées, sa position peut sembler étrange. L'important est d'abord d'observer son changement de comportement.

## 3. L'attacher au coin du viewport

```css
.back-top {
    padding: 12px 16px;
    position: fixed;
    right: 20px;
    bottom: 20px;
}
```

`right: 20px` signifie 20 px du bord droit du viewport.

`bottom: 20px` signifie 20 px du bas du viewport.

```text
VIEWPORT
┌────────────────────────────────────┐
│                                    │
│                                    │
│                            [ ↑ ]   │
│                                    │
└────────────────────────────────────┘
```

Quand la page défile, le contenu bouge mais le bouton reste au même endroit à l'écran.

## 4. Pas besoin d'un parent `relative`

Avec `absolute`, nous avions souvent :

```css
.parent {
    position: relative;
}

.enfant {
    position: absolute;
}
```

Avec notre bouton :

```css
.back-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
}
```

nous n'avons pas besoin de mettre `position: relative` sur `body` ou `main`.

Dans notre situation simple, la référence est le viewport.

Même si le bouton est placé à l'intérieur de `main` dans le HTML, son positionnement visuel reste fixé au viewport avec ce CSS.

Note : certains ancêtres utilisant notamment `transform` ou certaines autres propriétés peuvent créer des cas particuliers pour `fixed`. Pour le raisonnement courant de ce cas : référence = viewport.

## 5. Risque de chevauchement

Comme le bouton est hors du flux, le contenu ne lui réserve aucune place.

```text
.back-top
position: fixed
        ↓
hors du flux
        ↓
le contenu ignore son espace
        ↓
chevauchement possible
```

C'est le même principe rencontré avec l'icône dans l'input et le bouton de fermeture.

Une protection possible :

```css
body {
    padding-bottom: 80px;
}
```

`80px` n'est pas une valeur magique. Elle dépend de la taille du bouton, de son `bottom` et de l'espace souhaité.

La vraie question est : l'élément fixe risque-t-il de masquer du contenu important sur les tailles d'écran supportées ?

## 6. `fixed` et `z-index`

Si le bouton passe derrière d'autres éléments :

```css
.back-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    padding: 12px 16px;
    z-index: 10;
}
```

Les rôles sont distincts :

```text
position: fixed
→ attache le bouton au viewport

right + bottom
→ règlent ses distances aux bords

z-index
→ contrôle devant / derrière
```

Il n'est pas nécessaire d'utiliser `z-index: 999999`.

Une hiérarchie lisible pourrait être :

```text
contenu normal  → 0
bouton flottant → 10
navbar          → 20
overlay modal   → 100
modal           → 110
```

Ces valeurs sont seulement un exemple d'organisation.

## 7. `absolute` contre `fixed`

### `absolute` : attaché à un composant

```css
.window {
    position: relative;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

```text
✕ doit rester attaché à .window
        ↓
absolute
        ↓
référence = .window
```

### `fixed` : attaché au viewport

```css
.back-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
}
```

```text
↑ doit rester attaché à l'écran
        ↓
fixed
        ↓
référence = viewport
```

## Question mentale à retenir

```text
À QUOI l'élément
doit-il rester attaché ?
        │
        ├── à un composant
        │       ↓
        │    absolute
        │    + référence appropriée
        │
        └── au viewport
                ↓
             fixed
```

C'est une simplification très utile pour choisir le mécanisme dans les cas courants.

## Point commun

Dans les cas étudiés :

```text
absolute ─┐
          ├→ sortent du flux
fixed ────┘
```

Il faut donc toujours se demander si l'élément risque de recouvrir du contenu.

## Code final de démonstration

```html
<main>
    <h1>Ma page</h1>
    <p>Faites défiler la page pour observer le bouton.</p>

    <div class="long-content">
        <p>Contenu de la page...</p>
    </div>

    <p>Une information importante se trouve tout en bas.</p>
</main>

<button class="back-top">↑</button>
```

```css
.long-content {
    height: 1500px;
}

body {
    padding-bottom: 80px;
}

.back-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    padding: 12px 16px;
    z-index: 10;
}
```

Le `padding-bottom` et le `z-index` sont à conserver seulement si le composant réel en a besoin.

## Raisonnement complet

```text
Je veux que le bouton reste visible pendant le scroll
        ↓
il doit être attaché au viewport
        ↓
position: fixed
        ↓
right + bottom
→ position dans le viewport
        ↓
il est hors du flux
        ↓
vérifier s'il masque du contenu
        ↓
si nécessaire : espace de protection
        ↓
si nécessaire : z-index
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
relative + absolute + top/right
→ élément attaché à un composant

Cas 5 — Bouton fixé au viewport
fixed + bottom/right + protection + z-index
→ élément attaché à l'écran
```

Le réflexe principal du cas 5 est de ne pas seulement demander « où dois-je mettre cet élément ? », mais surtout : **à quoi doit-il rester attaché ?**
