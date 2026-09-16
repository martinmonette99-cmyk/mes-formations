# Cours 8 — Créer une liste à puces

## Objectif

À la fin de ce cours, tu sauras créer une liste simple à puces.

Nous apprenons une seule nouvelle notion : placer un tiret `-` et un espace devant chaque élément.

---

## 1. La syntaxe d’une liste à puces

Pour créer une liste à puces, écris :

```markdown
- Premier élément
- Deuxième élément
- Troisième élément
```

Le résultat affiché sera :

- Premier élément
- Deuxième élément
- Troisième élément

Markdown remplace visuellement les tirets par des puces.

---

## 2. La structure de chaque élément

Chaque ligne de la liste contient :

1. un tiret `-` ;
2. un espace ;
3. le texte de l’élément.

```markdown
- HTML
- CSS
- JavaScript
```

Tous les tirets commencent au même niveau et chaque élément occupe sa propre ligne.

---

## 3. L’espace après le tiret

Écriture correcte :

```markdown
- Mon projet
```

Écriture à éviter :

```markdown
-Mon projet
```

Sans espace après le tiret, Markdown pourrait interpréter la ligne comme du texte ordinaire plutôt que comme un élément de liste.

---

## 4. Quand utiliser une liste à puces ?

Une liste à puces est utile lorsque l’ordre des éléments n’est pas important.

Exemple :

```markdown
## Mes compétences

- HTML
- CSS
- JavaScript
```

Ici, il n’est pas nécessaire de numéroter les compétences. Nous voulons simplement les présenter clairement.

---

## 5. Utiliser les notions précédentes

Tu peux mettre un mot en gras ou en italique à l’intérieur d’un élément :

```markdown
- **HTML** pour structurer la page
- *CSS* pour sa présentation
```

Le tiret crée l’élément de liste. Les astérisques modifient seulement le texte qu’ils entourent.

---

## Petit exercice

### Question 1

Transforme ces trois technologies en liste à puces Markdown :

- HTML
- CSS
- JavaScript

Écris la véritable syntaxe Markdown.

### Question 2

Corrige cette liste :

```markdown
-Accueil
-À propos
-Contact
```

### Question 3

Crée une liste à puces contenant les trois éléments suivants et mets `Markdown` en gras :

- HTML
- CSS
- Markdown

---

## À retenir

La structure d’un élément de liste à puces est :

```markdown
- Élément
```

- un tiret ;
- un espace ;
- le texte de l’élément ;
- un nouvel élément sur chaque ligne.

Réponds aux trois questions dans la conversation avant de passer au cours suivant.

