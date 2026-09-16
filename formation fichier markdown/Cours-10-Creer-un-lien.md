# Cours 10 — Créer un lien

## Objectif

À la fin de ce cours, tu sauras créer un lien cliquable dans un document Markdown.

Nous apprenons une seule nouvelle notion : associer un texte visible à une adresse avec `[texte](adresse)`.

---

## 1. La syntaxe d’un lien

Pour créer un lien, écris :

```markdown
[Texte visible](https://adresse-du-site.com)
```

Exemple :

```markdown
[Visiter GitHub](https://github.com)
```

Résultat :

[Visiter GitHub](https://github.com)

Le lecteur voit `Visiter GitHub`. Lorsqu’il clique sur ce texte, l’adresse `https://github.com` s’ouvre.

---

## 2. Les deux parties du lien

Un lien Markdown contient deux parties :

```markdown
[texte visible](adresse)
```

- les crochets `[ ]` contiennent le texte affiché ;
- les parenthèses `( )` contiennent l’adresse de destination.

Tu peux le lire ainsi :

> Affiche ce texte et dirige le clic vers cette adresse.

---

## 3. L’adresse doit être complète

Pour un lien vers un site Web, utilise généralement l’adresse complète avec `https://`.

Écriture recommandée :

```markdown
[Mon site](https://example.com)
```

Écriture moins fiable :

```markdown
[Mon site](example.com)
```

Sans `https://`, le lecteur Markdown pourrait interpréter `example.com` comme le chemin d’un fichier plutôt que comme une adresse Web complète.

---

## 4. Les caractères doivent se suivre

Écriture correcte :

```markdown
[GitHub](https://github.com)
```

Le crochet fermant `]` est immédiatement suivi de la parenthèse ouvrante `(`.

Écriture à éviter :

```markdown
[GitHub] (https://github.com)
```

L’espace placé entre `]` et `(` peut empêcher la création du lien.

---

## 5. Un lien dans une phrase

Un lien peut faire partie d’un paragraphe :

```markdown
Tu peux consulter mon code sur [GitHub](https://github.com).
```

Résultat :

Tu peux consulter mon code sur [GitHub](https://github.com).

---

## Petit exercice

Si ChatGPT transforme ta réponse en véritable lien cliquable, c’est normal : cela signifie que ta syntaxe a été reconnue.

### Question 1

Crée un lien dont :

- le texte visible est `OpenAI` ;
- l’adresse est `https://openai.com`.

### Question 2

Dans ce code, indique le texte visible et l’adresse de destination :

```markdown
[Mon portfolio](https://parallaxeweb-studio.ca)
```

### Question 3

Corrige cette syntaxe :

```markdown
[GitHub] (https://github.com)
```

Explique ce qui empêchait le lien d’être correctement formé.

---

## À retenir

```markdown
[texte visible](https://adresse.com)
```

- `[ ]` contient le texte affiché ;
- `( )` contient l’adresse ;
- aucun espace ne sépare `]` et `(` ;
- une adresse Web complète commence généralement par `https://`.

Réponds aux trois questions dans la conversation avant de passer au cours suivant.

