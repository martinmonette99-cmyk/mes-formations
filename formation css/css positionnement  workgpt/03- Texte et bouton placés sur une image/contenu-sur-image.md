# Positionnement CSS — Cas 3 : Texte et bouton sur une image

## Objectif réel

Créer une carte ou bannière avec une image, du contenu superposé et un overlay sombre.

```text
┌────────────────────────────────┐
│             IMAGE              │
│                                │
│   Découvrir la collection      │
│   [ Voir plus ]                │
└────────────────────────────────┘
```

## 1. Structure HTML

```html
<div class="image-card">
    <img src="paysage.jpg" alt="Paysage">

    <div class="image-content">
        <h2>Découvrir la collection</h2>
        <button>Voir plus</button>
    </div>
</div>
```

```text
.image-card
├── img
└── .image-content
    ├── h2
    └── button
```

Le titre et le bouton sont regroupés pour pouvoir positionner le groupe entier.

## 2. Image de départ

```css
.image-card {
    width: 400px;
}

.image-card img {
    width: 100%;
    display: block;
}
```

L'image et `.image-content` sont encore dans le flux.

### Pourquoi `display: block` ?

Une `<img>` est inline par défaut et peut laisser un petit espace sous elle lié à la ligne de base du texte. `display: block` supprime ce comportement. Ici, cela aide `.image-card` à épouser proprement l'image.

## 3. Créer la référence

```css
.image-card {
    width: 400px;
    position: relative;
}
```

Visuellement, rien ne change.

```text
.image-card
position: relative
→ reste dans le flux
→ devient la référence
```

## 4. Sortir le contenu du flux

```css
.image-content {
    position: absolute;
}
```

`.image-content` sort du flux. L'image reste dans le flux et contribue à la hauteur de `.image-card`.

Sans coordonnées, il est possible de ne voir presque aucun déplacement immédiat.

## 5. Placer le contenu

```css
.image-content {
    position: absolute;
    left: 20px;
    bottom: 20px;
}
```

`left: 20px` : le bord gauche du contenu est à 20 px du bord gauche de `.image-card`.

`bottom: 20px` : le bord inférieur du contenu est à 20 px du bas de `.image-card`.

On choisit `bottom` parce que notre intention est de conserver une distance depuis le bas de la carte.

## 6. Superposition et lisibilité

```css
.image-content {
    position: absolute;
    left: 20px;
    bottom: 20px;
    color: white;
}
```

Le contenu occupe maintenant la même région visuelle que l'image.

Dans cette situation simple, `.image-content`, qui vient après l'image dans le HTML et est positionné, apparaît déjà devant. Il n'est pas nécessaire d'ajouter automatiquement un énorme `z-index`.

## 7. Introduction de `z-index`

Pour créer volontairement un conflit de profondeur :

```css
.image-card img {
    width: 100%;
    display: block;
    position: relative;
    z-index: 2;
}
```

Le `position: relative` de l'image n'a pas la même intention que celui de `.image-card`.

```text
.image-card { position: relative }
→ sert de référence aux enfants en absolute

img { position: relative }
→ ici, permet notamment de participer explicitement
  à l'empilement avec z-index
```

Pour remettre le contenu devant :

```css
.image-content {
    position: absolute;
    left: 20px;
    bottom: 20px;
    z-index: 3;
}
```

Dans notre situation :

```text
z-index: 3 → contenu
z-index: 2 → image
```

Une valeur de `z-index` ne signifie pas « avancer de X niveaux » : elle sert à déterminer l'ordre de superposition entre des éléments comparables dans un même contexte d'empilement.

Note : en CSS moderne, `z-index` peut aussi fonctionner dans certains autres cas, notamment sur des enfants Flexbox ou Grid. La règle « z-index exige toujours position » n'est donc pas universelle.

Les stacking contexts seront approfondis plus tard.

## 8. Ajouter un overlay

HTML :

```html
<div class="image-card">
    <img src="paysage.jpg" alt="Paysage">

    <div class="overlay"></div>

    <div class="image-content">
        <h2>Découvrir la collection</h2>
        <button>Voir plus</button>
    </div>
</div>
```

```text
.image-card
├── img
├── .overlay
└── .image-content
    ├── h2
    └── button
```

CSS :

```css
.overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgb(0 0 0 / 0.35);
}
```

Les quatre côtés à `0` collent chaque côté de l'overlay au côté correspondant de `.image-card`.

```text
top: 0    → haut
right: 0  → droite
bottom: 0 → bas
left: 0   → gauche
```

L'overlay couvre donc toute la référence sans ajouter de hauteur, puisqu'il est hors du flux.

## 9. Overlay HTML ou pseudo-élément

Le même type d'overlay peut être créé avec `::before` ou `::after`, par exemple :

```css
.image-card::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0 0 0 / 0.35);
}
```

Pour cette formation, `<div class="overlay"></div>` est volontairement plus pédagogique : chaque couche existe clairement dans le HTML. Les pseudo-éléments seront étudiés plus tard dans un contexte où leur utilité est concrète.

## 10. Organiser les trois couches

```css
.image-card img {
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
}

.overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0 0 0 / 0.35);
    z-index: 2;
}

.image-content {
    position: absolute;
    left: 20px;
    bottom: 20px;
    color: white;
    z-index: 3;
}
```

```text
DEVANT

3 → .image-content
2 → .overlay
1 → img

DERRIÈRE
```

Si l'overlay passe devant le contenu, il assombrit aussi le texte et le bouton. S'il passe derrière l'image opaque, l'image le cache et l'effet sombre disparaît.

On peut visualiser :

```text
X → horizontal
Y → vertical
Z → profondeur : devant / derrière
```

## Code final

```css
.image-card {
    width: 400px;
    position: relative;
}

.image-card img {
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
}

.overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0 0 0 / 0.35);
    z-index: 2;
}

.image-content {
    position: absolute;
    left: 20px;
    bottom: 20px;
    color: white;
    z-index: 3;
}
```

## Raisonnement à retenir

```text
Je veux du contenu SUR une image
        ↓
il faut une superposition
        ↓
contenu en absolute
        ↓
par rapport à quoi ?
        ↓
conteneur en relative
        ↓
left / bottom placent le contenu
        ↓
le texte manque de contraste
        ↓
j'ajoute un overlay
        ↓
overlay en absolute
avec les 4 côtés à 0
        ↓
plusieurs couches se superposent
        ↓
z-index contrôle leur ordre
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
relative + absolute + plusieurs côtés + overlay + z-index
→ superposition de plusieurs couches
```

L'objectif n'est pas de mémoriser le code exact, mais de reconnaître le problème d'interface et de reconstruire le raisonnement qui mène aux propriétés appropriées.
