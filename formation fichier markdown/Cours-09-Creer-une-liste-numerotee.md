# Cours 9 — Créer une liste numérotée

## Objectif

À la fin de ce cours, tu sauras créer une liste dont les éléments suivent un ordre précis.

Nous apprenons une seule nouvelle notion : placer un nombre, un point et un espace devant chaque élément.

---

## 1. La syntaxe d’une liste numérotée

Pour créer une liste numérotée, écris :

```markdown
1. Premier élément
2. Deuxième élément
3. Troisième élément
```

Le résultat affiché sera :

1. Premier élément
2. Deuxième élément
3. Troisième élément

---

## 2. La structure de chaque élément

Chaque ligne contient :

1. un nombre ;
2. un point `.` ;
3. un espace ;
4. le texte de l’élément.

Exemple :

```markdown
1. Ouvrir VS Code
2. Créer un fichier
3. Enregistrer le fichier avec l’extension .md
```

---

## 3. L’espace après le point

Écriture correcte :

```markdown
1. Première étape
```

Écriture à éviter :

```markdown
1.Première étape
```

Sans espace après le point, Markdown pourrait afficher du texte ordinaire plutôt qu’un élément de liste numérotée.

---

## 4. Liste à puces ou liste numérotée ?

Utilise une liste à puces lorsque l’ordre n’est pas important :

```markdown
- HTML
- CSS
- JavaScript
```

Utilise une liste numérotée lorsque l’ordre compte :

```markdown
1. Apprendre HTML
2. Apprendre CSS
3. Apprendre JavaScript
```

Dans le deuxième exemple, les nombres indiquent une progression.

---

## 5. Utiliser les notions précédentes

Tu peux aussi utiliser le gras dans une liste numérotée :

```markdown
1. Apprendre **HTML**
2. Apprendre **CSS**
3. Apprendre **JavaScript**
```

La numérotation organise la liste. Les astérisques mettent seulement les noms des langages en gras.

---

## Petit exercice

### Question 1

Transforme ces étapes en liste numérotée Markdown :

- ouvrir VS Code ;
- créer un fichier ;
- enregistrer le fichier.

### Question 2

Corrige cette liste :

```markdown
1.Ouvrir le fichier
2.Modifier le texte
3.Enregistrer
```

### Question 3

Choisis le type de liste le plus approprié pour chacune des situations et explique pourquoi :

1. afficher HTML, CSS et JavaScript comme trois compétences ;
2. expliquer les trois étapes nécessaires pour créer un fichier Markdown.

---

## À retenir

La structure d’un élément de liste numérotée est :

```markdown
1. Élément
```

- un nombre ;
- un point ;
- un espace ;
- le texte de l’élément.

Utilise une liste numérotée lorsque l’ordre des éléments est important.

Réponds aux trois questions dans la conversation avant de passer au cours suivant.

