# Cours 16 — Créer des cases à cocher

## Objectif

À la fin de ce cours, tu sauras créer une liste de tâches et indiquer lesquelles sont terminées.

Nous apprenons une seule nouvelle notion : ajouter `[ ]` ou `[x]` après le tiret d’un élément de liste.

---

## 1. Créer une tâche non terminée

Pour créer une case vide, écris :

```markdown
- [ ] Tâche à accomplir
```

Le résultat affiché sera généralement :

- [ ] Tâche à accomplir

La case vide indique que la tâche n’est pas terminée.

---

## 2. Créer une tâche terminée

Pour indiquer qu’une tâche est terminée, place un `x` dans les crochets :

```markdown
- [x] Tâche terminée
```

Le résultat affiché sera généralement :

- [x] Tâche terminée

---

## 3. La structure complète

Une case à cocher contient :

1. un tiret `-` ;
2. un espace ;
3. des crochets contenant un espace `[ ]` ou un `x` `[x]` ;
4. un espace ;
5. le texte de la tâche.

```markdown
- [ ] À faire
- [x] Terminé
```

Les espaces autour des crochets sont importants.

---

## 4. Exemple de suivi d’un projet

```markdown
## Avancement du portfolio

- [x] Créer la structure HTML
- [x] Ajouter les styles CSS
- [ ] Ajouter les animations GSAP
- [ ] Tester le site sur mobile
```

Cette liste montre immédiatement les tâches terminées et celles qui restent à faire.

---

## 5. Les cases sont-elles toujours cliquables ?

Cela dépend du lecteur Markdown.

Certains services peuvent afficher des cases interactives dans certains contextes. Dans VS Code ou dans un simple aperçu, elles peuvent seulement être affichées sans être directement cliquables.

Tu peux toujours modifier manuellement le fichier source :

```markdown
- [ ] Tester le site
```

devient :

```markdown
- [x] Tester le site
```

Le fichier Markdown conserve donc l’état de chaque tâche sous forme de texte.

---

## Petit exercice

### Question 1

Crée une tâche non terminée nommée :

`Ajouter une page Contact`

### Question 2

Crée une tâche terminée nommée :

`Créer la page Accueil`

### Question 3

Corrige cette liste de tâches :

```markdown
-[] Préparer le HTML
-[x] Ajouter le CSS
```

Explique ce qui manquait.

---

## À retenir

```markdown
- [ ] Tâche non terminée
- [x] Tâche terminée
```

- `[ ]` représente une case vide ;
- `[x]` représente une case cochée ;
- la syntaxe commence comme une liste à puces ;
- les espaces doivent être placés correctement.

Réponds aux trois questions avant de passer au cours suivant.

