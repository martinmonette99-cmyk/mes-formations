# Cours 4 — Créer des paragraphes

## Objectif

À la fin de ce cours, tu sauras séparer correctement deux paragraphes dans un fichier Markdown.

Nous apprenons une seule nouvelle notion : la **ligne vide entre deux paragraphes**.

---

## 1. Écrire un paragraphe

Pour écrire un paragraphe en Markdown, tu écris simplement ton texte.

```markdown
J’apprends à créer des fichiers Markdown.
```

Il n’est pas nécessaire d’ajouter une balise comme `<p>` en HTML.

---

## 2. Séparer deux paragraphes

Pour créer un nouveau paragraphe, laisse une ligne complètement vide entre les deux textes.

```markdown
J’apprends à créer des fichiers Markdown.

Cette formation avance une notion à la fois.
```

Le résultat contient deux paragraphes distincts.

La structure est donc :

1. le premier paragraphe ;
2. une ligne vide ;
3. le deuxième paragraphe.

---

## 3. Pourquoi la ligne vide est-elle importante ?

Voici deux lignes écrites l’une sous l’autre, sans ligne vide :

```markdown
Première ligne.
Deuxième ligne.
```

Dans plusieurs lecteurs Markdown, elles peuvent être interprétées comme un seul paragraphe.

Voici maintenant deux véritables paragraphes :

```markdown
Premier paragraphe.

Deuxième paragraphe.
```

La ligne vide indique clairement qu’un paragraphe se termine et qu’un autre commence.

---

## 4. Comparaison avec HTML

En HTML, tu pourrais écrire :

```html
<p>Premier paragraphe.</p>
<p>Deuxième paragraphe.</p>
```

En Markdown, tu écris simplement :

```markdown
Premier paragraphe.

Deuxième paragraphe.
```

---

## Petit exercice

### Question 1

Écris ces deux phrases sous forme de deux paragraphes Markdown :

- `Je construis mon portfolio.`
- `J’apprends Markdown pour rédiger sa documentation.`

### Question 2

Combien de paragraphes ce code devrait-il produire ?

```markdown
HTML structure le contenu.

CSS crée la présentation visuelle.

JavaScript ajoute des comportements.
```

Explique brièvement comment Markdown reconnaît les paragraphes.

### Question 3

Corrige ce texte pour qu’il contienne deux paragraphes distincts :

```markdown
Je commence par les notions simples.
Je progresserai ensuite vers des documents complets.
```

---

## À retenir

Pour séparer deux paragraphes en Markdown, laisse une ligne vide entre eux.

```markdown
Premier paragraphe.

Deuxième paragraphe.
```

Réponds aux trois questions dans la conversation avant de passer au cours suivant.

