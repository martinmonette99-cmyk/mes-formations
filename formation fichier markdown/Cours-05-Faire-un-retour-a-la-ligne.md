# Cours 5 — Faire un retour à la ligne

## Objectif

À la fin de ce cours, tu sauras faire un simple retour à la ligne sans créer un nouveau paragraphe.

Nous apprenons une seule nouvelle notion : les **deux espaces placés à la fin d’une ligne**.

---

## 1. Paragraphe ou simple retour à la ligne ?

Au cours 4, tu as appris qu’une ligne vide sépare deux paragraphes :

```markdown
Premier paragraphe.

Deuxième paragraphe.
```

Il est parfois utile de commencer une nouvelle ligne tout en restant dans le même paragraphe. C’est ce qu’on appelle ici un **retour à la ligne**.

---

## 2. Les deux espaces à la fin de la ligne

Pour forcer un retour à la ligne en Markdown :

1. écris la première ligne ;
2. ajoute deux espaces après son dernier caractère ;
3. appuie sur Entrée ;
4. écris la ligne suivante.

Exemple :

```markdown
Nom : Martin  
Formation : Markdown
```

Après `Martin`, il y a deux espaces avant le retour à la ligne.

Le résultat sera affiché ainsi, sans ligne vide entre les deux :

Nom : Martin  
Formation : Markdown

---

## 3. Les espaces sont invisibles

Les espaces placés à la fin d’une ligne sont difficiles à voir.

Dans la représentation suivante, chaque point `·` représente un espace :

```text
Nom : Martin··
Formation : Markdown
```

Tu ne dois pas écrire les points. Ils servent seulement à montrer l’emplacement des deux espaces.

Dans VS Code, tu peux placer le curseur après le dernier mot et appuyer deux fois sur la barre d’espace avant d’appuyer sur Entrée.

---

## 4. Comparaison

### Deux paragraphes

```markdown
Première partie.

Deuxième partie.
```

Une ligne vide sépare les textes.

### Un simple retour à la ligne

```markdown
Prénom : Martin  
Sujet : Markdown
```

Deux espaces terminent la première ligne, mais il n’y a aucune ligne vide.

---

## Petit exercice

### Question 1

Tu veux afficher une adresse sur trois lignes, sans créer trois paragraphes :

```text
Martin
123, rue Exemple
Montréal
```

Après quelles lignes dois-tu ajouter deux espaces ?

### Question 2

Quelle est la différence entre ces deux méthodes ?

- laisser une ligne vide ;
- ajouter deux espaces à la fin d’une ligne, puis appuyer sur Entrée.

### Question 3

Dans l’exemple ci-dessous, les points `·` représentent des espaces invisibles. Est-ce que Markdown devrait effectuer un retour à la ligne après `HTML` ? Explique pourquoi.

```text
Langage : HTML··
Utilité : structurer une page
```

---

## À retenir

- une ligne vide crée un nouveau paragraphe ;
- deux espaces à la fin d’une ligne créent un simple retour à la ligne ;
- les deux espaces doivent être placés avant d’appuyer sur Entrée.

Réponds aux trois questions dans la conversation avant de passer au cours suivant.

