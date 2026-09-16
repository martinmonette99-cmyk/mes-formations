# Cours 13 — Créer un bloc de code

## Objectif

À la fin de ce cours, tu sauras afficher plusieurs lignes de code dans un bloc distinct.

Nous apprenons une seule nouvelle notion : entourer le code avec trois accents graves.

---

## 1. La syntaxe d’un bloc de code

Le cours précédent utilisait un accent grave de chaque côté pour une courte portion de code :

```markdown
`fetch()`
```

Pour plusieurs lignes, utilise trois accents graves sur une ligne avant le code et trois autres sur une ligne après le code :

````markdown
```
première ligne de code
deuxième ligne de code
```
````

Les trois premiers accents graves ouvrent le bloc. Les trois derniers le ferment.

---

## 2. Exemple avec du HTML

Voici la syntaxe écrite dans le fichier Markdown :

````markdown
```
<header>
  <h1>Mon portfolio</h1>
</header>
```
````

Le résultat affiché sera :

```
<header>
  <h1>Mon portfolio</h1>
</header>
```

Le code conserve ses retours à la ligne et son indentation.

---

## 3. Indiquer le langage

Tu peux écrire le nom du langage immédiatement après les trois accents graves d’ouverture :

````markdown
```html
<header>
  <h1>Mon portfolio</h1>
</header>
```
````

Le lecteur Markdown peut alors colorer les différentes parties du code :

```html
<header>
  <h1>Mon portfolio</h1>
</header>
```

Cette coloration s’appelle la **coloration syntaxique**.

---

## 4. Exemples de noms de langages

### HTML

````markdown
```html
<p>Bonjour</p>
```
````

### CSS

````markdown
```css
p {
  color: blue;
}
```
````

### JavaScript

````markdown
```javascript
console.log("Bonjour");
```
````

Le nom du langage est facultatif, mais il améliore souvent la lisibilité.

---

## 5. Code en ligne ou bloc de code ?

Utilise le code en ligne pour une courte instruction intégrée à une phrase :

```markdown
Utilise `display: grid`.
```

Utilise un bloc pour plusieurs lignes :

````markdown
```css
.container {
  display: grid;
  gap: 20px;
}
```
````

---

## Petit exercice

Effectue les exercices dans un fichier `.md` afin de conserver exactement les accents graves.

### Question 1

Présente ce code comme un bloc HTML avec coloration syntaxique :

```html
<main>
  <h1>Accueil</h1>
</main>
```

### Question 2

Présente ce code comme un bloc JavaScript avec coloration syntaxique :

```javascript
const nom = "Martin";
console.log(nom);
```

### Question 3

Choisis entre code en ligne et bloc de code, puis explique ton choix :

1. mentionner `fetch()` au milieu d’une phrase ;
2. présenter une fonction JavaScript complète de cinq lignes.

---

## À retenir

- un accent grave de chaque côté convient au code en ligne ;
- trois accents graves ouvrent un bloc de code ;
- trois autres accents graves ferment le bloc ;
- le nom du langage après l’ouverture permet la coloration syntaxique.

Structure générale :

````markdown
```langage
code sur plusieurs lignes
```
````

Réponds aux trois questions avant de passer au cours suivant.

