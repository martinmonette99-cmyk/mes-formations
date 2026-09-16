# Positionnement CSS — Cas 2 : Une icône dans un input

## Objectif réel

Construire un champ de recherche dans lequel une icône semble être placée à l'intérieur de l'`input`.

```text
┌────────────────────────────────┐
│   ⌕   Rechercher...            │
└────────────────────────────────┘
```

Ce cas relie `relative`, `absolute`, le flux normal, `left`, `top`, `padding-left`, les pourcentages et `transform`.

## 1. Structure HTML

```html
<div class="search">
    <span class="search-icon">⌕</span>
    <input type="text" placeholder="Rechercher...">
</div>
```

```text
.search
│
├── .search-icon
└── input
```

L'icône n'est pas enfant de l'input. L'icône et l'input sont deux éléments frères ayant `.search` comme parent commun.

Un `<input>` ne peut pas contenir d'éléments HTML enfants.

## 2. Créer la référence

```css
.search {
    width: 300px;
    position: relative;
}
```

Visuellement, rien ne change.

Dans ce cas, `relative` ne sert pas à déplacer `.search`. Il permet à `.search` de devenir la référence de positionnement de l'icône.

```text
.search
position: relative
→ reste dans le flux
→ devient la référence
```

## 3. Sortir l'icône du flux

```css
.search-icon {
    position: absolute;
}
```

L'icône sort du flux normal. Le navigateur ne lui réserve plus de place.

L'input reste dans le flux et donne essentiellement sa hauteur au conteneur `.search`.

L'icône peut donc se retrouver visuellement sur la même zone que l'input.

Important : l'icône semble être « dans l'input », mais elle est en réalité superposée à sa zone visuelle.

## 4. Positionner avec `left` et `top`

```css
.search-icon {
    position: absolute;
    left: 10px;
    top: 10px;
}
```

Puisque `.search` est la référence :

- `left: 10px` = le bord gauche de l'icône est à 10 px du bord gauche de `.search`;
- `top: 10px` = le bord supérieur de l'icône est à 10 px du haut de `.search`.

## 5. Le texte passe sous l'icône

L'icône étant hors du flux, l'input ne sait pas qu'elle occupe visuellement une partie de sa zone.

On réserve donc de l'espace au contenu de l'input :

```css
.search input {
    width: 100%;
    padding: 10px;
    padding-left: 25px;
}
```

Les rôles sont différents :

```text
position + left
→ placent l'icône

padding-left
→ réserve une zone au texte
```

Avec :

```css
padding: 10px;
padding-left: 25px;
```

le résultat est :

```text
top    = 10px
right  = 10px
bottom = 10px
left   = 25px
```

La seconde déclaration remplace seulement le padding gauche.

## 6. Pourquoi `top: 10px` est fragile

`top: 10px` est une distance fixe.

Si l'input devient plus haut, l'icône reste simplement à 10 px du haut. Elle n'est donc pas nécessairement centrée.

Nous voulons plutôt exprimer :

> Le centre vertical de l'icône doit rester aligné avec le centre vertical de `.search`.

## 7. `top: 50%`

```css
.search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
}
```

Le `50%` est calculé par rapport à la hauteur de `.search`.

Mais `top: 50%` place le **bord supérieur** de l'icône au milieu de `.search`. Cela ne centre donc pas encore l'icône : elle se retrouve trop basse.

```text
.search
┌──────────────────────────────┐
│                              │
├──────── 50% ─────────────────┤
│   ⌕ ← l'icône commence ici   │
│                              │
└──────────────────────────────┘
```

## 8. `transform: translateY(-50%)`

On ajoute :

```css
transform: translateY(-50%);
```

Code :

```css
.search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
}
```

Les deux `50%` n'ont pas la même référence.

```text
top: 50%
→ 50% de la hauteur du PARENT DE RÉFÉRENCE (.search)

translateY(-50%)
→ -50% de la hauteur de L'ÉLÉMENT LUI-MÊME (.search-icon)
```

`top: 50%` amène le haut de l'icône au milieu de `.search`.

`translateY(-50%)` remonte ensuite l'icône de la moitié de sa propre hauteur.

Le centre de l'icône se retrouve donc sur le centre vertical de `.search`.

## 9. Vérifier que le centrage est adaptable

On peut rendre temporairement l'input beaucoup plus haut :

```css
.search input {
    width: 100%;
    padding: 25px 10px;
    padding-left: 25px;
}
```

L'icône reste centrée sans modifier son `top`.

```text
.search devient plus haute
→ top: 50% est recalculé
→ le nouveau milieu est trouvé
→ translateY(-50%) replace le centre de l'icône sur ce milieu
```

Cette méthode exprime une relation réelle plutôt que de choisir des pixels jusqu'à ce que le résultat semble correct.

## 10. Pourquoi pas simplement Flexbox ?

Flexbox est très utile pour organiser des éléments dans le flux :

```text
[ icône ] [ texte ] [ bouton ]
```

Ici, nous voulons plutôt une superposition :

```text
┌──────────────────────────────┐
│   ⌕   Rechercher...          │
└──────────────────────────────┘
    ↑
icône superposée à la zone de l'input
```

Nous ne voulons pas que l'icône prenne une place normale à côté de l'input.

```text
Flexbox
→ organise des éléments dans le flux

position: absolute
→ sort un élément du flux
→ permet son placement précis et sa superposition
```

Flexbox n'est pas mauvais : il répond simplement à un autre type de problème.

## Code final

```html
<div class="search">
    <span class="search-icon">⌕</span>
    <input type="text" placeholder="Rechercher...">
</div>
```

```css
.search {
    width: 300px;
    position: relative;
}

.search input {
    width: 100%;
    padding: 10px;
    padding-left: 25px;
}

.search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
}
```

Les valeurs comme `25px` peuvent être ajustées selon la taille réelle de l'icône.

## Raisonnement à retenir

```text
Je veux une icône visuellement dans la zone de l'input
        ↓
elle doit être superposée
        ↓
.search-icon → position: absolute
        ↓
je veux qu'elle se positionne par rapport au composant
        ↓
.search → position: relative
        ↓
l'icône est hors du flux
        ↓
l'input ignore l'espace qu'elle occupe
        ↓
padding-left réserve une place au texte
        ↓
top: 50% trouve le milieu du parent
        ↓
translateY(-50%) remonte l'icône
de la moitié de sa propre hauteur
        ↓
centrage vertical adaptable
```

## Relations essentielles

- `relative` : crée ici la référence tout en laissant `.search` dans le flux.
- `absolute` : sort l'icône du flux.
- `left` : place horizontalement l'icône par rapport à `.search`.
- `padding-left` : réserve de l'espace au contenu de l'input.
- `top: 50%` : utilise 50 % de la hauteur du parent de référence.
- `translateY(-50%)` : utilise 50 % de la hauteur de l'icône elle-même.
- Flexbox : organise principalement des éléments dans le flux; ce n'est pas le mécanisme choisi ici pour la superposition.
