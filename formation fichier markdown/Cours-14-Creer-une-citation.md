# Cours 14 — Créer une citation

## Objectif

À la fin de ce cours, tu sauras faire ressortir une phrase sous forme de citation.

Nous apprenons une seule nouvelle notion : placer le caractère `>` et un espace au début de la ligne.

---

## 1. La syntaxe d’une citation

Pour créer une citation, écris :

```markdown
> Texte de la citation
```

Le résultat affiché sera :

> Texte de la citation

Selon le lecteur Markdown, la citation peut être affichée avec une barre verticale, un retrait ou une couleur différente.

---

## 2. La structure

Une ligne de citation contient :

1. le caractère `>` ;
2. un espace ;
3. le texte de la citation.

Exemple :

```markdown
> Une notion à la fois.
```

Le caractère `>` indique que la ligne doit être présentée séparément du paragraphe ordinaire.

---

## 3. Quand utiliser une citation ?

Une citation peut servir à présenter :

- les paroles d’une personne ;
- une phrase tirée d’une source ;
- une remarque que tu souhaites faire ressortir ;
- un principe important dans une documentation.

Exemple dans une formation :

```markdown
> Toujours valider les données du côté du serveur.
```

Résultat :

> Toujours valider les données du côté du serveur.

---

## 4. Une citation sur plusieurs lignes

Pour conserver plusieurs lignes dans la même citation, commence chaque ligne par `>` :

```markdown
> Première ligne de la citation.
> Deuxième ligne de la citation.
```

Résultat :

> Première ligne de la citation.
> Deuxième ligne de la citation.

Les deux lignes appartiennent au même bloc de citation.

---

## 5. Utiliser les notions précédentes

Tu peux ajouter du gras ou du code en ligne à l’intérieur d’une citation :

```markdown
> La validation du serveur est **obligatoire**.
```

```markdown
> Utilise `fetch()` pour envoyer la requête.
```

Le caractère `>` crée la citation. Les astérisques ou accents graves modifient seulement une partie de son contenu.

---

## Petit exercice

### Question 1

Présente cette phrase sous forme de citation Markdown :

`La pratique permet de progresser.`

### Question 2

Présente ces deux lignes dans une même citation :

`Le frontend prépare les données.`

`Le backend les vérifie.`

### Question 3

Corrige cette syntaxe :

```markdown
>Cette remarque est importante.
```

Explique ce qui manque.

---

## À retenir

```markdown
> Texte de la citation
```

- `>` commence une citation ;
- un espace sépare `>` du texte ;
- pour plusieurs lignes, place `>` au début de chaque ligne.

Réponds aux trois questions avant de passer au cours suivant.

