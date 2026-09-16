# Cours 15 — Créer une ligne de séparation

## Objectif

À la fin de ce cours, tu sauras séparer visuellement deux parties d’un document Markdown.

Nous apprenons une seule nouvelle notion : écrire trois tirets `---` sur une ligne indépendante.

---

## 1. La syntaxe

Pour créer une ligne de séparation horizontale, écris :

```markdown
---
```

Le résultat est une ligne horizontale, comme celles qui séparent les différentes parties de ce cours.

---

## 2. Placer la séparation entre deux parties

Exemple :

```markdown
## Première partie

Contenu de la première partie.

---

## Deuxième partie

Contenu de la deuxième partie.
```

La ligne horizontale indique visuellement que la première partie est terminée et qu’une nouvelle partie commence.

---

## 3. Laisser une ligne vide autour

Prends l’habitude de laisser une ligne vide avant et après les trois tirets :

```markdown
Premier texte.

---

Deuxième texte.
```

Cette écriture est claire dans le code source et évite certaines interprétations inattendues de Markdown.

Par exemple, des tirets placés directement sous un texte peuvent parfois être interprétés comme une autre syntaxe de titre :

```markdown
Mon texte
---
```

Pour notre formation, nous utiliserons donc toujours une ligne vide avant et après `---`.

---

## 4. Quand utiliser une séparation ?

Une ligne horizontale peut servir à séparer :

- deux grandes parties d’un document ;
- le contenu principal et une conclusion ;
- une explication et un exercice ;
- deux sujets différents.

Évite toutefois d’en placer après chaque petit paragraphe. Les titres et les lignes vides suffisent souvent.

---

## Petit exercice

### Question 1

Ajoute une ligne de séparation entre ces deux paragraphes :

```markdown
Voici la présentation de mon projet.

Voici les technologies utilisées.
```

### Question 2

Laquelle de ces deux écritures suivrons-nous dans la formation, et pourquoi ?

```markdown
Premier texte.
---
Deuxième texte.
```

```markdown
Premier texte.

---

Deuxième texte.
```

### Question 3

Dans laquelle de ces situations une ligne de séparation est-elle la plus utile ? Explique ton choix.

1. entre chaque phrase d’un paragraphe ;
2. entre la présentation complète d’un projet et sa conclusion.

---

## À retenir

Écris trois tirets sur une ligne indépendante et laisse une ligne vide avant et après :

```markdown
Première partie.

---

Deuxième partie.
```

Réponds aux trois questions avant de passer au cours suivant.

