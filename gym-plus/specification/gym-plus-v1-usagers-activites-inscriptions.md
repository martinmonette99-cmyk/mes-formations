# Gym+ V1 --- Usagers, activités et inscriptions

## 1. Objectif

Définir les décisions prises pour Gym+ V1 concernant les usagers, les
activités et les inscriptions. Ce document complète la spécification sur
la connexion, les rôles et les autorisations.

------------------------------------------------------------------------

## 2. Terminologie Gym+

-   **Usager** : personne qui possède et utilise un compte Gym+.
-   **Membre** : usager qui est réellement membre du gym.
-   **Non-membre** : usager Gym+ qui n'est pas membre du gym.

Le rôle de l'usager et son statut de membre du gym sont deux
informations différentes.

``` text
role
→ rôle de l'usager dans Gym+

membre_gym
→ indique si l'usager est réellement membre du gym
→ oui / non
```

------------------------------------------------------------------------

## 3. Activités de Gym+ V1

Gym+ V1 proposera quatre activités prédéfinies :

1.  Yoga
2.  Natation
3.  Course
4.  Nutrition

Elles seront enregistrées dans la base de données.

Dans la V1, l'administrateur ne créera pas dynamiquement de nouvelles
activités. Cette possibilité pourra être réévaluée dans une version
future.

------------------------------------------------------------------------

## 4. Informations d'une activité

Chaque activité doit pouvoir posséder au minimum :

-   un nom;
-   un jour;
-   une heure;
-   un point de rassemblement;
-   un responsable d'activité;
-   une date de début;
-   une date de fin;
-   un nombre maximal de participants.

Exemple :

``` text
Activité               : Yoga
Jour                   : Mardi
Heure                   : 18:30
Point de rassemblement : Gymnase
Responsable            : Sophie Tremblay
Date de début          : 6 octobre 2026
Date de fin            : 15 décembre 2026
Capacité maximale      : 20 participants
```

Les valeurs exactes des quatre activités seront fixées au moment de leur
insertion dans la base de données.

------------------------------------------------------------------------

## 5. Affichage d'une activité

Lorsqu'un usager sélectionne une activité, Gym+ affiche les informations
correspondant à cette activité.

``` text
L'usager sélectionne Yoga
        ↓
Gym+ récupère les données de Yoga
        ↓
jour / heure
point de rassemblement
responsable
date de début / date de fin
information sur les places
```

Cette fonctionnalité permettra notamment de pratiquer :

``` text
SQLite
   ↓
backend
   ↓
JSON
   ↓
fetch()
   ↓
JavaScript
   ↓
tableau / objet
   ↓
DOM
   ↓
affichage
```

------------------------------------------------------------------------

## 6. Inscription d'un usager à une activité

Un usager connecté pourra choisir une activité et demander à s'y
inscrire.

``` text
usager connecté
      ↓
sélectionne une activité
      ↓
consulte les informations
      ↓
clique sur S'inscrire
      ↓
frontend envoie la demande
      ↓
backend vérifie la situation
      ↓
inscription acceptée ou refusée
      ↓
base de données mise à jour si nécessaire
```

------------------------------------------------------------------------

## 7. Capacité maximale

Chaque activité possède un nombre maximal de participants.

Tant que ce maximum n'est pas atteint, l'inscription peut être effectuée
normalement selon les règles de Gym+.

Lorsque le maximum est atteint, le statut membre/non-membre devient
important.

------------------------------------------------------------------------

## 8. Activité complète --- non-membre

Si l'activité est complète et qu'un **non-membre** tente de s'inscrire :

``` text
activité complète
        ↓
non-membre
        ↓
inscription refusée
```

Un non-membre ne remplace pas un autre participant lorsque l'activité
est complète.

------------------------------------------------------------------------

## 9. Activité complète --- priorité d'un membre

Si l'activité est complète et qu'un **membre** demande à s'inscrire,
Gym+ vérifie si un non-membre est actuellement inscrit.

Si au moins un non-membre est présent, le membre obtient la place du
**non-membre dont l'inscription à cette activité est la plus récente**.

Exemple :

``` text
Yoga — capacité maximale : 4

Paul   — membre      — inscrit lundi
Sophie — non-membre  — inscrite mardi
Julie  — non-membre  — inscrite mercredi
Marc   — membre      — inscrit jeudi

Un nouveau membre demande une inscription.

Parmi les non-membres :
Sophie → mardi
Julie  → mercredi

Julie possède l'inscription non-membre la plus récente.

Résultat :
Julie perd sa place.
Le nouveau membre obtient la place.
```

Si l'activité est complète et que tous les participants sont déjà
membres :

``` text
activité complète
        ↓
nouveau membre
        ↓
aucun non-membre à remplacer
        ↓
inscription refusée
```

La capacité maximale n'est jamais dépassée.

------------------------------------------------------------------------

## 10. Date et heure de l'inscription

Gym+ devra conserver la date et l'heure de chaque inscription à une
activité afin de pouvoir déterminer quel non-membre s'est inscrit le
plus récemment.

Conceptuellement :

``` text
usager
activité
date_heure_inscription
```

Cette information appartient à l'inscription, et non directement à
l'usager ou à l'activité.

------------------------------------------------------------------------

## 11. Relation entre usagers et activités

Les activités ne seront pas représentées par des colonnes `oui/non`
directement dans la table des usagers.

Elles seront des données distinctes.

``` text
USAGERS
- Martin
- Sophie
- Julie

ACTIVITES
- Yoga
- Natation
- Course
- Nutrition

INSCRIPTIONS
- Martin → Yoga
- Martin → Course
- Julie  → Natation
```

Une relation entre les usagers et les activités permettra de représenter
les inscriptions.

La structure SQL exacte sera étudiée progressivement au moment de sa
mise en place.

------------------------------------------------------------------------

## 12. Responsable d'activité

Un responsable d'activité est un usager possédant le rôle approprié.

Il doit être associé uniquement à l'activité ou aux activités dont il
est responsable.

``` text
Sophie
role = responsable_activite

activité autorisée :
Natation

Yoga :
non autorisé
```

Le backend devra contrôler cette autorisation.

Les fonctions détaillées du responsable seront définies plus tard.

------------------------------------------------------------------------

## 13. Administrateur

L'administrateur possède les droits administratifs prévus par Gym+.

Dans la V1, il ne sera pas nécessaire de lui permettre de créer
dynamiquement de nouvelles activités.

Ses fonctions précises seront définies progressivement lorsqu'elles
deviendront nécessaires.

------------------------------------------------------------------------

## 14. Usager connecté et session

Après une connexion réussie, l'usager doit rester reconnu comme connecté
lorsqu'il change de page.

``` text
page de connexion
        ↓
connexion réussie
        ↓
Gym+ reconnaît l'usager
        ↓
page correspondant à son rôle
        ↓
page de réservation d'une activité
        ↓
Gym+ reconnaît toujours le même usager
        ↓
déconnexion
        ↓
fin de la connexion
```

La notion utilisée pour conserver cet état entre les pages sera la
**session**.

Le fonctionnement technique des sessions sera abordé lorsque ce besoin
sera intégré au code.

------------------------------------------------------------------------

## 15. Prochain objectif fonctionnel

Le prochain grand objectif est :

> **Un usager connecté peut consulter une activité et s'y inscrire.**

Les fondations seront construites progressivement :

``` text
connexion
    ↓
identification de l'usager
    ↓
session
    ↓
activités dans SQLite
    ↓
récupération des activités
    ↓
affichage avec JavaScript et le DOM
    ↓
sélection d'une activité
    ↓
demande d'inscription
    ↓
vérification backend
    ↓
enregistrement de l'inscription
```

------------------------------------------------------------------------

## 16. Objectif pédagogique

Gym+ sert principalement d'introduction pratique à la relation
frontend/backend et de terrain d'exploration pour HTML, CSS et surtout
JavaScript.

Les fonctionnalités doivent faire apparaître de vrais problèmes de
programmation sans transformer Gym+ en application complète de gestion
de gym.

Les notions seront introduites lorsqu'un besoin réel les justifie,
notamment :

-   objets;
-   tableaux et tableaux d'objets;
-   fonctions;
-   conditions;
-   boucles et méthodes de tableaux;
-   DOM;
-   événements;
-   `fetch()`;
-   JSON;
-   relations entre les données;
-   sessions.

La priorité reste la compréhension, la pratique et la capacité à
réutiliser ces notions plus tard dans le projet d'application de
commandes pour restaurant.

------------------------------------------------------------------------

## 17. Principe d'évolution

Cette spécification décrit les décisions actuelles pour Gym+ V1.

Les fonctions détaillées de l'administrateur et du responsable
d'activité seront définies seulement lorsqu'elles deviendront
nécessaires.

La création dynamique d'activités par un administrateur est reportée à
une éventuelle version future.

Les nouvelles fonctionnalités doivent rester cohérentes avec l'objectif
principal de Gym+ : progresser en développement frontend et comprendre
progressivement les échanges avec le backend.
