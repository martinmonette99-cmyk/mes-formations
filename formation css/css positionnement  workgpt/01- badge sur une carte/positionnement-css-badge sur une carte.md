# Positionnement CSS --- Cas 1 : Badge sur une carte

## Étape 1 --- `relative`, `absolute` et les quatre côtés

### Objectif

Placer un badge « Nouveau » dans un coin d'une carte et comprendre la
relation entre le parent de référence, `position: absolute` et `top`,
`right`, `bottom`, `left`.

## Structure HTML

``` html
<div class="card">
    <span class="badge">Nouveau</span>
    <h2>Produit XYZ</h2>
    <p>39,99 $</p>
</div>
```

``` text
.card
│
├── .badge
├── h2
└── p
```

`.card` est le parent. `.badge`, `h2` et `p` sont ses enfants.

## Le parent devient la référence

``` css
.card {
    width: 300px;
    padding: 30px;
    border: 1px solid #999;
    position: relative;
}
```

Ici, `position: relative` ne sert pas à déplacer `.card`. La carte reste
dans le flux normal. Cette propriété permet surtout à `.card` de devenir
la référence de positionnement du badge.

## Le badge sort du flux

``` css
.badge {
    position: absolute;
}
```

Avec `position: absolute`, le badge sort du flux normal. Le navigateur
ne lui réserve plus de place. Le `h2` et le `p` peuvent donc remonter et
le badge peut se superposer au contenu.

``` text
.card { position: relative }
             ↓
       sert de référence
             ↓
.badge { position: absolute }
```

## `top`, `right`, `bottom` et `left`

Ces propriétés indiquent une **distance par rapport au côté
correspondant de l'élément de référence**, qui est ici `.card`.

``` text
top    → distance depuis le haut de .card
right  → distance depuis la droite de .card
bottom → distance depuis le bas de .card
left   → distance depuis la gauche de .card
```

Exemple :

``` css
.badge {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

Le badge se trouve à 10 px du haut et à 10 px de la droite de `.card`.

## Résultat avec `left: 0`

``` css
.badge {
    position: absolute;
    top: 0;
    left: 0;
}
```

Résultat :

``` text
┌──────────────────────────────┐
│[Nouveau]                     │
│                              │
│     Produit XYZ              │
│     39,99 $                  │
│                              │
└──────────────────────────────┘
```

`left: 0` signifie qu'il n'y a **aucune distance** entre le côté gauche
du badge et le côté gauche de sa référence.

## Résultat avec `right: 0`

``` css
.badge {
    position: absolute;
    top: 0;
    right: 0;
}
```

Résultat :

``` text
┌──────────────────────────────┐
│                     [Nouveau]│
│                              │
│     Produit XYZ              │
│     39,99 $                  │
│                              │
└──────────────────────────────┘
```

`right: 0` signifie qu'il n'y a **aucune distance** entre le côté droit
du badge et le côté droit de sa référence.

## Comment lire `right`

``` css
right: 50px;
```

ne signifie pas « déplace le badge de 50 px vers la droite ».

Cela signifie que le **côté droit du badge doit être à 50 px du côté
droit de `.card`**. Augmenter `right` fait donc visuellement partir le
badge vers la gauche.

Même principe pour les autres côtés : la valeur représente une distance
entre le côté de l'élément positionné et le côté correspondant de sa
référence.

## Si on retire `position: relative` de `.card`

Si le badge reste en `position: absolute` avec `top` et `right`, mais
que `.card` n'est plus positionnée, le badge ne peut plus utiliser la
carte comme référence.

S'il ne trouve aucun autre ancêtre positionné, son positionnement se
fait par rapport à la référence globale de la page, ce qui donne ici
l'impression qu'il est positionné par rapport au viewport.

## Flux normal

``` text
.card
position: relative
→ reste dans le flux
→ sert de référence

.badge
position: absolute
→ sort du flux
→ peut être placé précisément
```

## Code final utilisé

``` css
.card {
    width: 300px;
    padding: 30px;
    border: 1px solid #999;
    position: relative;
}

.badge {
    background-color: #222;
    color: white;
    padding: 5px 10px;
    position: absolute;
    top: 10px;
    right: 10px;
}
```


## Deux précisions importantes

### 1. La référence n'est pas obligatoirement le parent direct

Pour simplifier, on dit souvent :

> Un élément en `position: absolute` se positionne par rapport à son parent en `position: relative`.

Mais la règle est plus précise : l'élément en `absolute` cherche son **ancêtre de référence positionné**. Cet ancêtre n'est donc pas obligatoirement son parent direct.

Exemple :

```html
<div class="card">
    <div class="contenu">
        <span class="badge">Nouveau</span>
    </div>
</div>
```

Structure :

```text
.card
│
└── .contenu
    │
    └── .badge
```

Ici, `.contenu` est le parent direct de `.badge`.

Mais si `.card` est l'ancêtre qui établit le contexte de positionnement approprié, le badge peut utiliser `.card` comme référence.

Pour l'instant, la règle mentale importante est :

```text
position: absolute
        ↓
cherche sa référence
parmi ses ancêtres
```

Il ne faut donc pas retenir uniquement « parent en `relative` », même si le parent direct en `relative` est un cas extrêmement courant.

### 2. `absolute` ne signifie pas simplement « mettre devant »

Un élément en `position: absolute` sort du flux normal. Cela permet notamment à des éléments de se retrouver visuellement au même endroit et donc de se superposer.

Mais le rôle de `absolute` n'est pas simplement :

> mettre un élément devant un autre.

Dans notre cas, le vrai raisonnement est :

> Je veux placer précisément le badge par rapport à la carte, indépendamment de l'organisation normale du contenu de la carte.

La superposition est donc une **conséquence possible** de la sortie du flux, pas la définition de `position: absolute`.

### Ce que nous n'approfondissons pas encore

Il existe d'autres possibilités et subtilités avec le positionnement absolu, notamment :

- `z-index` ;
- les valeurs en pourcentage ;
- `transform` ;
- certaines combinaisons de `top`, `right`, `bottom` et `left` ;
- les superpositions plus complexes.

Elles seront abordées plus tard dans des composants où leur utilité sera concrète.

Pour cette première étape, l'objectif est surtout de maîtriser cette relation :

```text
élément de référence
position: relative
        ↓
reste dans le flux
        ↓
fournit une référence

élément positionné
position: absolute
        ↓
sort du flux
        ↓
top / right / bottom / left
déterminent ses distances
par rapport à la référence
```

## À retenir

``` text
Je veux placer le badge précisément dans la carte
                    ↓
.card { position: relative }
                    ↓
la carte devient la référence
                    ↓
.badge { position: absolute }
                    ↓
le badge sort du flux
                    ↓
top / right / bottom / left
déterminent ses distances par rapport à la carte
```
