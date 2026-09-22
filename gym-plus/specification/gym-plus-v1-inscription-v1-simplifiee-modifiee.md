# Gym+ V1 --- Cas d'utilisation : inscription d'un membre

## 1. Objectif

Permettre à une personne de créer un compte Gym+.

Dans la V1, toute personne peut créer un compte. Il n'est pas nécessaire
d'être déjà membre du gym.

Gym+ demande toutefois si la personne est actuellement membre du gym et
conserve cette information. Dans la V1, cette information n'a aucun
effet sur les droits ou les fonctionnalités.

------------------------------------------------------------------------

## 2. Informations demandées

Tous les champs du formulaire sont obligatoires.

-   Prénom
-   Nom
-   Courriel
-   Date de naissance
-   Téléphone
-   Membre du gym : Oui / Non
-   si oui : Numéro de membre
-   Mot de passe
-   Confirmation du mot de passe

La confirmation du mot de passe sert uniquement à vérifier la saisie.
Elle n'est pas une information à conserver dans le profil du membre.

------------------------------------------------------------------------

## 3. Règles des champs

### Prénom et nom

-   Obligatoires.
-   Une valeur vide ou composée uniquement d'espaces est refusée.
-   La validation reste volontairement souple en V1.
-   Les noms peuvent notamment contenir des accents, espaces,
    apostrophes et traits d'union.
-   La validation du prénom et du nom pourra être améliorée dans une
    version future.

### Courriel

-   Obligatoire.
-   Doit avoir un format de courriel acceptable.
-   Un même courriel ne peut être associé qu'à un seul compte Gym+.
-   Si le courriel est déjà utilisé, l'inscription est refusée.
-   Message prévu : **« Un compte existe déjà avec cette adresse
    courriel. »**
-   La V1 ne demande pas de confirmation du courriel par lien ou par
    code.

### Date de naissance

-   Obligatoire.
-   Utilisation prévue d'un champ HTML de type `date`.
-   Doit contenir une date valide.
-   Une date située dans le futur est refusée.
-   Aucun âge minimum n'est imposé pour créer un compte Gym+.

### Téléphone

-   Obligatoire.
-   Numéro canadien seulement dans la V1.
-   Doit contenir 10 chiffres.
-   Aucun système de masque de saisie n'est exigé dans la V1.
-   Le formatage visuel du numéro pourra être amélioré plus tard.

### Membre du gym

Question :

**« Êtes-vous actuellement membre du gym ? »**

-   Deux boutons radio : `Oui` et `Non`.
-   Aucun choix sélectionné par défaut.
-   L'utilisateur doit obligatoirement choisir une réponse.
-   La réponse est enregistrée, mais n'a aucun effet fonctionnel dans la
    V1.

### Mot de passe

Le mot de passe doit :

-   contenir au minimum 10 caractères;
-   contenir au moins une lettre majuscule;
-   contenir au moins un chiffre;
-   contenir au moins un caractère spécial.

Un deuxième champ permet de confirmer le mot de passe.

Les deux mots de passe doivent être identiques.

Le mot de passe ne doit jamais être enregistré en clair dans la base de
données. Le backend sera responsable de son stockage sécurisé.

------------------------------------------------------------------------

## 4. Affichage des erreurs de validation

Dans la V1, aucun code couleur ni indicateur de validation n’est affiché pendant la saisie.

Les champs sont validés lorsque l’utilisateur tente de soumettre le formulaire.

Si une erreur est trouvée :

- l’inscription est arrêtée;
- un message d’erreur est affiché près du champ concerné;
- une seule erreur est présentée à la fois.

Le système de validation visuelle en cours de saisie (jaune, vert, rouge, symboles ✓ / X) pourra être ajouté dans une version future.

------------------------------------------------------------------------

## 5. Validation lors de la soumission

Lorsque l'utilisateur clique sur **S'inscrire** :

1.  Gym+ vérifie les champs que le frontend peut valider.
2.  Si une erreur est trouvée :
    -   l'inscription est arrêtée;
    -   le champ concerné passe en rouge;
    -   le message d'erreur est affiché directement près de ce champ;
    -   une seule erreur est présentée à la fois.
3.  Si les validations frontend réussissent :
    -   les données d'inscription peuvent être envoyées au backend.
4.  Le backend effectue ses propres validations.
5.  Si le backend refuse une donnée, l'erreur retournée doit être
    associée au champ concerné lorsque cela est possible.

Le backend doit revérifier les données importantes même si elles ont
déjà été validées par JavaScript.

------------------------------------------------------------------------

## 6. Conservation des valeurs en cas d'erreur

Lorsqu'une inscription échoue :

-   l'utilisateur reste sur le formulaire;
-   les valeurs qu'il a saisies restent visibles;
-   le mot de passe et sa confirmation restent également présents dans
    le formulaire afin que l'utilisateur puisse voir et corriger sa
    saisie;
-   seule l'erreur concernée est affichée.

Cette conservation dans le formulaire du navigateur ne signifie pas que
le mot de passe peut être enregistré en clair dans la base de données.

------------------------------------------------------------------------

## 7. Envoi en cours

Lorsque les validations frontend sont réussies et que la demande
d'inscription est envoyée :

-   le bouton **S'inscrire** est temporairement désactivé;
-   son texte peut devenir **« Inscription... »**;
-   cela empêche plusieurs soumissions successives pendant l'attente de
    la réponse.

Si l'inscription échoue, le bouton redevient disponible.

------------------------------------------------------------------------

## 8. Erreur provenant d'un champ

Exemple : le courriel possède un format valide, mais le backend découvre
qu'il est déjà utilisé.

Le champ courriel doit alors :

-   afficher le message correspondant;
-   conserver la valeur saisie.

Les autres champs restent tels quels.

------------------------------------------------------------------------

## 9. Erreur technique générale

Si le serveur ne répond pas ou qu'un problème technique empêche de
traiter l'inscription :

-   aucun champ ne doit être marqué comme fautif simplement à cause de
    cette erreur;
-   un message général est affiché, par exemple :

**« Une erreur est survenue. Veuillez réessayer. »**

-   le bouton **S'inscrire** redevient disponible.

------------------------------------------------------------------------

## 10. Inscription réussie

Après une inscription réussie :

1.  le compte Gym+ est créé;
2.  l'utilisateur n'est pas connecté automatiquement;
3.  un message de confirmation est affiché :

**« Votre compte Gym+ a été créé avec succès. »**

4.  un bouton **Continuer** est présenté;
5.  le clic sur **Continuer** amène l'utilisateur à la page de
    connexion.

La connexion constitue un cas d'utilisation distinct qui sera défini
séparément.

------------------------------------------------------------------------

## 11. Répartition pédagogique frontend / backend

### Frontend --- zone d'apprentissage principale

La première version frontend de ce cas d'utilisation sera construite
avant l'intégration complète avec le backend.

Le travail frontend comprend notamment :

-   HTML du formulaire;
-   CSS;
-   responsive;
-   animations et transitions;
-   JavaScript;
-   DOM;
-   validations réalisables dans le navigateur;
-   récupération des valeurs;
-   préparation des données à transmettre;
-   traitement futur des réponses du backend.

Le projet Gym+ sert également à pratiquer le CSS. Les pages peuvent donc
comporter davantage de travail visuel, de responsive et d'animations que
le strict minimum fonctionnel.

Les choix visuels précis ne sont pas figés dans cette spécification afin
de laisser de la place à l'expérimentation.

### Backend --- compréhension fonctionnelle

L'objectif est de comprendre :

-   ce que le frontend envoie;
-   à quelle route les données sont envoyées;
-   le rôle du backend;
-   les validations qui doivent être refaites côté serveur;
-   l'enregistrement dans la base de données;
-   ce que le backend retourne au frontend.

La maîtrise détaillée de la syntaxe Flask n'est pas un objectif
principal.

------------------------------------------------------------------------

## 12. Jinja et fetch

Gym+ peut utiliser une approche hybride.

-   Jinja peut être utilisé lorsque le rendu initial d'une page côté
    serveur est pertinent.
-   JavaScript, `fetch()` et JSON peuvent être utilisés pour les
    interactions dynamiques entre une page déjà chargée et le backend.
-   Jinja n'est pas imposé pour tout contenu dynamique.
-   Le choix sera fait selon le cas d'utilisation.

L'intégration avec `fetch()` sera abordée lorsque le frontend de
l'inscription sera suffisamment avancé et que cette notion sera
pertinente dans l'apprentissage.

------------------------------------------------------------------------

## 13. Rôles utilisateurs de Gym+

Gym+ prévoit trois rôles d'utilisateurs :

-   membre;
-   administrateur;
-   responsable d'activité.

Les trois rôles utiliseront la même page de connexion.

Après authentification, le backend identifiera le rôle de l'utilisateur
et le dirigera vers l'espace correspondant.

Les pages et fonctionnalités accessibles pourront différer selon le rôle.

Le contrôle des autorisations devra être effectué par le backend et ne
reposera pas uniquement sur l'affichage ou le masquage d'éléments dans
le frontend.

Par exemple, un membre ne devra pas pouvoir accéder directement à une
route réservée à un administrateur ou à un responsable d'activité,
même s'il connaît son adresse.

Le fonctionnement détaillé de la connexion, des redirections et des
autorisations sera défini dans un cas d'utilisation distinct.

------------------------------------------------------------------------

## 14. Hors V1 / pistes futures

Ces possibilités sont connues, mais ne font pas partie du cas
d'utilisation actuel :

-   vérification réelle de l'adresse courriel par lien ou code;
-   utilisation du statut « membre du gym » pour modifier les droits ou
    avantages;
-   restrictions d'âge propres aux activités;
-   amélioration des règles de validation du prénom et du nom;
-   formatage automatique du numéro de téléphone;
-   support des numéros internationaux.
-   validation visuelle en cours de saisie avec code couleur et indicateurs.

Ces éléments seront rediscutés uniquement lorsqu'un futur cas
d'utilisation en aura besoin.

------------------------------------------------------------------------

## 15. Principe d'évolution

Cette spécification décrit le comportement attendu pour **Gym+ V1**.

Elle pourra évoluer lorsque de nouveaux cas d'utilisation ou de
nouvelles versions de Gym+ feront apparaître de nouveaux besoins. Les
décisions futures ne doivent pas être anticipées inutilement dans la V1.
