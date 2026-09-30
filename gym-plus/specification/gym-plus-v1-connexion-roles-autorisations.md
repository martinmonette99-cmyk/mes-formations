# Gym+ V1 --- Cas d'utilisation : connexion, rôles et autorisations

## 1. Objectif

Définir comment les différents utilisateurs de Gym+ obtiennent leur
compte, se connectent et sont dirigés vers l'espace correspondant à leur
rôle.

Gym+ V1 prévoit trois rôles :

-   membre;
-   administrateur;
-   responsable d'activité.

Les trois rôles utilisent la même page de connexion.

------------------------------------------------------------------------

## 2. Principe général

Le rôle d'un utilisateur ne doit pas être choisi librement dans le
formulaire public d'inscription.

Le backend est responsable de déterminer le rôle du compte et de
contrôler les autorisations.

Après une connexion réussie, Gym+ identifie le rôle de l'utilisateur et
le dirige vers l'espace correspondant.

``` text
courriel + mot de passe
        ↓
backend
        ↓
authentification
        ↓
identification du rôle
        ↓
membre                 → espace membre
administrateur         → espace administrateur
responsable d’activité → espace responsable
```

------------------------------------------------------------------------

## 3. Inscription d'un membre

Un membre peut créer lui-même son compte à partir du formulaire public
d'inscription déjà prévu dans Gym+.

Le compte créé par ce formulaire reçoit le rôle :

``` text
membre
```

L'utilisateur ne choisit pas son rôle.

Après la création du compte :

1.  le membre n'est pas connecté automatiquement;
2.  il retourne à la page de connexion;
3.  il entre son courriel et son mot de passe;
4.  après authentification, Gym+ le dirige vers l'espace membre.

------------------------------------------------------------------------

## 4. Création d'un administrateur

Un nouvel administrateur ne peut pas s'attribuer lui-même le rôle
administrateur.

Un administrateur déjà autorisé doit d'abord créer ou inviter le nouvel
administrateur.

### Déroulement prévu

1.  L'administrateur existant obtient le courriel du nouvel
    administrateur.
2.  Il crée l'invitation depuis son espace administrateur.
3.  Gym+ associe le futur compte au rôle `admin`.
4.  Un mot de passe temporaire est généré.
5.  Le mot de passe temporaire est transmis au nouvel administrateur par
    courriel.
6.  Le nouvel administrateur utilise la page normale de connexion de
    Gym+.
7.  Il entre son courriel et son mot de passe temporaire.
8.  Le backend reconnaît que le compte doit être finalisé.
9.  Gym+ le dirige vers un formulaire de finalisation réservé aux
    administrateurs.
10. Le nouvel administrateur complète les informations nécessaires et
    choisit son mot de passe définitif.
11. Le compte est finalisé.
12. L'utilisateur retourne à la page de connexion.
13. Lors de sa prochaine connexion normale, Gym+ reconnaît son rôle
    `admin` et le dirige vers l'espace administrateur.

Une fois le compte finalisé, son rôle reste administrateur.

------------------------------------------------------------------------

## 5. Création d'un responsable d'activité

Un responsable d'activité ne peut pas non plus choisir lui-même ce rôle.

Un administrateur autorisé crée ou invite le responsable.

### Déroulement prévu

1.  L'administrateur obtient le courriel du futur responsable.
2.  Il crée l'invitation depuis son espace administrateur.
3.  Gym+ associe le futur compte au rôle `responsable_activite`.
4.  L'administrateur associe également le responsable à l'activité ou
    aux activités dont il sera responsable.
5.  Un mot de passe temporaire est généré.
6.  Le mot de passe temporaire est transmis au responsable par courriel.
7.  Le responsable utilise la page normale de connexion.
8.  Il entre son courriel et son mot de passe temporaire.
9.  Le backend reconnaît que le compte doit être finalisé.
10. Gym+ le dirige vers un formulaire de finalisation réservé au
    responsable d'activité.
11. Le responsable complète les informations nécessaires et choisit son
    mot de passe définitif.
12. Le compte est finalisé.
13. Il retourne à la page de connexion.
14. Lors de sa connexion normale, Gym+ reconnaît son rôle et le dirige
    vers son espace responsable.

------------------------------------------------------------------------

## 6. Activités autorisées pour un responsable

Le rôle `responsable_activite` ne donne pas automatiquement accès à
toutes les activités de Gym+.

Le backend doit également connaître les activités auxquelles le
responsable est associé.

Exemple :

``` text
Responsable : Sophie

Natation  → autorisée
Aquaforme → autorisée
Yoga      → non autorisée
```

Un même responsable pourra donc être associé à une ou plusieurs
activités.

Un responsable de natation ne doit pas pouvoir consulter ou modifier les
informations réservées au responsable du yoga simplement parce qu'il
connaît l'adresse de la page ou de la route.

------------------------------------------------------------------------

## 7. Rôle et autorisation

Ces deux notions doivent rester distinctes.

### Rôle

Le rôle indique la catégorie générale de l'utilisateur.

Exemples :

``` text
membre
admin
responsable_activite
```

### Autorisation

L'autorisation détermine ce que cet utilisateur précis a le droit de
consulter ou de modifier.

Exemple :

``` text
role = responsable_activite
activités autorisées = natation, aquaforme
```

Le rôle permet donc d'identifier le type d'espace général, tandis que
les autorisations précisent les ressources auxquelles l'utilisateur peut
accéder.

------------------------------------------------------------------------

## 8. Connexion commune

Les trois rôles utilisent la même page et le même formulaire de
connexion.

Le formulaire envoie :

-   le courriel;
-   le mot de passe.

Le backend :

1.  recherche le compte;
2.  vérifie le mot de passe;
3.  détermine si le compte est en attente de finalisation;
4.  détermine le rôle;
5.  crée la session lorsque la connexion normale est autorisée;
6.  dirige l'utilisateur vers l'espace approprié.

Trajet conceptuel :

``` text
formulaire
    ↓
JavaScript
    ↓
JSON
    ↓
fetch()
    ↓
Flask
    ↓
SQLite
    ↓
vérification du mot de passe
    ↓
état du compte + rôle
    ↓
session
    ↓
redirection
```

------------------------------------------------------------------------

## 9. Première connexion avec mot de passe temporaire

Le mot de passe temporaire constitue uniquement une porte d'entrée
permettant à l'administrateur ou au responsable invité de finaliser son
compte.

Une première connexion réussie avec ce mot de passe ne doit pas être
traitée comme une connexion normale à l'espace de travail.

Gym+ doit reconnaître que le compte est encore à finaliser et envoyer
l'utilisateur vers le formulaire correspondant à son rôle.

Après la finalisation, le mot de passe temporaire ne doit plus être
utilisé.

------------------------------------------------------------------------

## 10. Sécurité des rôles et autorisations

Les rôles et autorisations doivent être vérifiés par le backend.

Le frontend peut afficher ou masquer certaines options pour améliorer
l'interface, mais cela ne constitue pas une protection.

Exemple :

``` text
responsable de natation
        ↓
demande une ressource yoga
        ↓
backend vérifie ses autorisations
        ↓
accès refusé
```

De la même façon, un membre ne doit pas pouvoir accéder directement à
une route administrateur en entrant son adresse dans le navigateur.

------------------------------------------------------------------------

## 11. Premier administrateur de Gym+

Le tout premier administrateur constitue un cas particulier puisqu'aucun
administrateur n'existe encore pour l'inviter.

Pour Gym+ V1, le premier compte administrateur sera créé lors de
l'installation ou de la configuration initiale de l'application.

Une fois ce premier administrateur disponible, les futurs comptes
privilégiés pourront suivre le système normal d'invitation.

------------------------------------------------------------------------

## 12. Décisions techniques à intégrer progressivement

Cette spécification implique notamment que Gym+ devra éventuellement
représenter :

-   le rôle d'un utilisateur;
-   l'état du compte (par exemple : invitation à finaliser ou compte
    finalisé);
-   les activités attribuées aux responsables;
-   les sessions de connexion;
-   les contrôles d'autorisation côté backend;
-   le mécanisme de mot de passe temporaire;
-   l'envoi du mot de passe temporaire par courriel.

Ces éléments seront construits progressivement. Ils ne doivent pas tous
être ajoutés en une seule étape.

------------------------------------------------------------------------

## 13. Principe pédagogique

La connexion actuellement en construction reste le point de départ.

Les nouvelles notions seront ajoutées dans un ordre permettant de
comprendre le trajet des données :

``` text
connexion actuelle
      ↓
rôle dans les données
      ↓
identification du rôle
      ↓
redirection
      ↓
session
      ↓
autorisation
      ↓
invitations et finalisation des comptes privilégiés
```

Chaque fonctionnalité sera testée avant de passer à la suivante.

------------------------------------------------------------------------

## 14. Principe d'évolution

Cette spécification fixe le fonctionnement actuellement prévu pour Gym+
V1.

Elle pourra être ajustée si les futurs cas d'utilisation font apparaître
de nouveaux besoins. Les fonctionnalités non nécessaires immédiatement
seront ajoutées au moment où elles deviennent pertinentes.
