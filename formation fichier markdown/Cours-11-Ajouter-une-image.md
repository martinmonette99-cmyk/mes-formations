# Cours 11 — Ajouter une image

## Objectif

À la fin de ce cours, tu sauras afficher une image dans un document Markdown.

Nous apprenons une seule nouvelle notion : ajouter un point d’exclamation devant une syntaxe qui ressemble à celle d’un lien.

---

## 1. La syntaxe d’une image

Pour ajouter une image, écris :

```markdown
![Texte alternatif](adresse-ou-chemin-de-l-image)
```

Exemple avec une image nommée `logo.png` :

```markdown
![Logo de mon site](logo.png)
```

Si l’image est accessible au chemin indiqué, le lecteur Markdown l’affiche dans le document.

---

## 2. Les trois parties

```markdown
![Logo de mon site](logo.png)
```

Cette syntaxe contient trois éléments importants :

1. le point d’exclamation `!` indique qu’il faut afficher une image ;
2. `[Logo de mon site]` contient le texte alternatif ;
3. `(logo.png)` contient l’emplacement de l’image.

---

## 3. Le texte alternatif

Le texte alternatif décrit brièvement l’image :

```markdown
![Logo bleu Gym+](logo-gym-plus.png)
```

Ce texte est utile notamment :

- si l’image ne peut pas être chargée ;
- pour les personnes utilisant un lecteur d’écran ;
- pour comprendre le rôle de l’image dans le code source.

Évite les descriptions vagues comme `image` lorsque tu peux décrire clairement son contenu.

---

## 4. Une image située dans le même dossier

Supposons que ces deux fichiers sont placés ensemble :

```text
mon-projet/
  README.md
  logo.png
```

Dans `README.md`, tu peux écrire :

```markdown
![Logo du projet](logo.png)
```

Markdown cherchera `logo.png` dans le même dossier que le fichier `.md`.

---

## 5. Une image située dans un sous-dossier

Supposons maintenant cette structure :

```text
mon-projet/
  README.md
  images/
    logo.png
```

Le chemin doit inclure le nom du sous-dossier :

```markdown
![Logo du projet](images/logo.png)
```

Le chemin indique à Markdown où trouver le fichier image.

---

## 6. Différence entre un lien et une image

Un lien :

```markdown
[Voir le logo](images/logo.png)
```

Une image affichée directement :

```markdown
![Logo du projet](images/logo.png)
```

La différence est le point d’exclamation `!` placé au début.

---

## Petit exercice

Tu peux répondre dans un fichier `.md` comme au cours précédent si l’interface de ChatGPT transforme ta syntaxe.

### Question 1

Écris la syntaxe nécessaire pour afficher une image qui possède :

- le texte alternatif `Photo de mon portfolio` ;
- le nom de fichier `portfolio.png` ;
- l’image se trouve dans le même dossier que le fichier Markdown.

### Question 2

Le fichier Markdown se trouve à côté d’un dossier nommé `images`. L’image `gym-plus.png` se trouve dans ce dossier.

Quel chemin dois-tu écrire entre les parenthèses ?

### Question 3

Explique la différence entre ces deux syntaxes :

```markdown
[Mon logo](logo.png)
```

```markdown
![Mon logo](logo.png)
```

---

## À retenir

```markdown
![Texte alternatif](chemin-de-l-image)
```

- `!` demande l’affichage d’une image ;
- `[ ]` contient sa description ;
- `( )` contient son adresse ou son chemin ;
- le chemin dépend de l’emplacement de l’image par rapport au fichier `.md`.

Réponds aux trois questions avant de passer au cours suivant.

