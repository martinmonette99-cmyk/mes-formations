# Cours 12 — Afficher du code en ligne

## Objectif

À la fin de ce cours, tu sauras faire ressortir une courte portion de code à l’intérieur d’une phrase.

Nous apprenons une seule nouvelle notion : placer un accent grave autour du code.

---

## 1. La syntaxe du code en ligne

Pour afficher une courte portion de code, écris un accent grave avant et après celle-ci :

```markdown
`mon code`
```

Le résultat affiché sera :

`mon code`

Cette présentation utilise généralement une police à largeur fixe et un fond différent du texte ordinaire.

---

## 2. Afficher une balise HTML

Le code en ligne est pratique pour nommer une balise dans une explication :

```markdown
La balise `<main>` contient le contenu principal de la page.
```

Résultat :

La balise `<main>` contient le contenu principal de la page.

Les accents graves empêchent le lecteur Markdown d’interpréter `<main>` comme une véritable balise HTML du document.

---

## 3. Afficher une propriété ou une valeur CSS

Tu peux faire ressortir une courte instruction CSS :

```markdown
La propriété `display: flex` active Flexbox.
```

Résultat :

La propriété `display: flex` active Flexbox.

---

## 4. Afficher un élément JavaScript

Le même principe fonctionne avec JavaScript :

```markdown
La méthode `fetch()` permet d’envoyer une requête.
```

Résultat :

La méthode `fetch()` permet d’envoyer une requête.

---

## 5. Code en ligne ou texte en gras ?

Le gras attire l’attention sur une idée importante :

```markdown
Cette vérification est **obligatoire**.
```

Le code en ligne identifie un élément technique ou du code :

```markdown
Utilise la méthode `fetch()`.
```

Ainsi, `fetch()` devrait être présenté comme du code, tandis que **obligatoire** est simplement un mot important.

---

## 6. Les accents graves doivent entourer exactement le code

Écriture recommandée :

```markdown
Utilise `text-align: center` pour centrer le texte.
```

Seule l’instruction CSS se trouve entre les accents graves. Le reste de la phrase demeure du texte ordinaire.

---

## Petit exercice

Tu peux répondre dans un fichier `.md`, ce qui permet de vérifier facilement la véritable syntaxe.

### Question 1

Écris cette phrase en présentant `<header>` comme du code en ligne :

`La balise <header> contient généralement l’en-tête de la page.`

### Question 2

Écris cette phrase en présentant `console.log()` comme du code en ligne :

`La méthode console.log() affiche une information dans la console.`

### Question 3

Dans quelle phrase utiliserais-tu du code en ligne et dans quelle phrase utiliserais-tu du gras ? Explique pourquoi.

1. `Utilise la propriété display: grid.`
2. `Cette étape est importante.`

---

## À retenir

```markdown
`courte portion de code`
```

- un accent grave ouvre le code en ligne ;
- un autre accent grave le ferme ;
- cette syntaxe convient aux balises, propriétés, valeurs, méthodes et courtes instructions ;
- elle s’utilise à l’intérieur d’une phrase.

Réponds aux trois questions avant de passer au cours suivant.

