# Gestionnaire de tâches — Cas d’utilisation V1

## 1. Objectif

Créer une application pédagogique de gestion de tâches. La V1 est utilisée sans compte utilisateur. Une tâche reste conservée tant qu’une action explicite de suppression n’est pas effectuée.

## 2. Structure d’une tâche

| Propriété | Description | Valeurs |
|---|---|---|
| `id` | Identifiant unique | Attribué automatiquement |
| `titre` | Description de la tâche | Texte non vide |
| `priorite` | Niveau de priorité | `basse`, `moyenne`, `elevee` |
| `statut` | État de la tâche | `active`, `terminee` |

Une nouvelle tâche reçoit automatiquement le statut `active`. Les valeurs enregistrées sont sans accents; les libellés affichés peuvent comporter les accents.

## 3. Acteur

**Utilisateur** : personne qui utilise le gestionnaire de tâches. Il n’y a ni inscription ni connexion dans la V1.

## 4. Cas d’utilisation

### CU-01 — Créer une tâche

**Déclencheur :** l’utilisateur remplit le formulaire et demande l’ajout.

1. Saisir un titre.
2. Choisir une priorité : basse, moyenne ou élevée.
3. Cliquer sur « Ajouter la tâche ».
4. Vérifier que le titre n’est pas vide.
5. Créer la tâche avec un identifiant unique et le statut `active`.
6. Afficher la nouvelle tâche dans les tâches actives.

**Résultat attendu :** la tâche est ajoutée aux données et visible. Un titre vide ne crée aucune tâche.

### CU-02 — Afficher les tâches

**Déclencheur :** l’utilisateur ouvre le gestionnaire ou une tâche change.

1. Lire l’ensemble des tâches disponibles.
2. Afficher séparément les tâches actives et les tâches terminées.
3. Présenter le titre et la priorité de chaque tâche.
4. Rendre accessibles les actions correspondant à chaque tâche.

**Résultat attendu :** chaque tâche apparaît une seule fois, dans la section correspondant à son statut. Une section peut être vide.

### CU-03 — Marquer une tâche comme terminée

**Précondition :** la tâche est active.

1. L’utilisateur indique que la tâche est terminée.
2. Le statut passe de `active` à `terminee`.
3. L’affichage est mis à jour.

**Résultat attendu :** la tâche apparaît dans les tâches terminées. Elle n’est pas supprimée des données.

### CU-04 — Réactiver une tâche terminée

**Précondition :** la tâche est terminée.

1. L’utilisateur indique que la tâche est de nouveau active.
2. Le statut passe de `terminee` à `active`.
3. L’affichage est mis à jour.

**Résultat attendu :** la tâche réapparaît dans les tâches actives, avec son titre et sa priorité inchangés.

### CU-05 — Supprimer une tâche individuellement

**Précondition :** la tâche existe, qu’elle soit active ou terminée.

1. L’utilisateur clique sur l’action de suppression de cette tâche.
2. La tâche désignée par son identifiant est retirée des données.
3. L’affichage est mis à jour.

**Résultat attendu :** seule la tâche visée disparaît. Cette suppression est définitive dans la V1.

### CU-06 — Supprimer toutes les tâches terminées

**Déclencheur :** l’utilisateur demande la suppression globale des tâches terminées.

1. L’utilisateur clique sur « Supprimer toutes les tâches terminées ».
2. Une confirmation est demandée.
3. Si l’utilisateur annule, aucune donnée ne change.
4. S’il confirme, toutes les tâches dont le statut est `terminee` sont supprimées.
5. L’affichage est mis à jour.

**Résultat attendu :** aucune tâche active n’est supprimée. Si aucune tâche n’est terminée, aucune donnée n’est modifiée.

### CU-07 — Conserver les tâches

**Phase A :** les tâches sont manipulées dans un tableau d’objets JavaScript; leur conservation après fermeture ou rechargement de la page n’est pas encore assurée.

**Phases B et C :** les opérations passent progressivement par Flask, puis les tâches sont enregistrées dans SQLite. Une tâche terminée demeure enregistrée jusqu’à une suppression individuelle ou globale explicite.

**Résultat attendu à la fin de la V1 :** les tâches conservées dans SQLite sont retrouvées après rechargement de l’application locale.

## 5. Règles communes

- Une tâche possède une seule priorité et un seul statut à la fois.
- Changer le statut ne modifie ni le titre ni la priorité.
- La suppression individuelle est possible quel que soit le statut.
- La suppression globale concerne exclusivement les tâches terminées.
- L’interface affiche les données existantes; elle ne constitue pas une seconde source de vérité.
- En phase A, un seul tableau d’objets JavaScript contient toutes les tâches.

## 6. Hors périmètre de la V1

Comptes utilisateurs, connexion, catégories, dates limites, notifications, sous-tâches, modification du titre ou de la priorité après création, et fonctionnalités supplémentaires non définies. Les comptes et l’association des tâches à leur propriétaire sont envisagés seulement pour une éventuelle V2.

## 7. Ordre pédagogique prévu

1. HTML statique : formulaire, priorité et sections actives/terminées.
2. CSS et responsive.
3. Tableau d’objets JavaScript et affichage DOM.
4. Création, changement de statut et suppressions en JavaScript.
5. Introduction progressive des échanges JSON / `fetch()` / Flask, une route à la fois.
6. Conservation SQLite et tests.
7. GitHub et déploiement Render, en tenant compte du caractère éphémère du système de fichiers du service.

**Principe :** ne commencer une étape qu’après compréhension et validation de la précédente.
