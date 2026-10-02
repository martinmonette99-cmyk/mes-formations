# Gym+ — Guide des adresses, routes Flask et `fetch()`

> Notes de référence pour la V1. À mettre à jour lorsqu'une nouvelle route est créée.

## 1. Démarrer le projet

Dans le terminal, à la racine du projet :

```bash
python app.py
```

Adresse locale de base : `http://127.0.0.1:5000`

**Important :** `/espace-usager` est une route Flask, pas un chemin vers `templates/espace-usager.html`. Les fichiers du dossier `templates/` sont servis par Flask.

## 2. Adresses à ouvrir dans le navigateur

| Adresse | Rôle | Route Flask / résultat |
|---|---|---|
| `/` | Accueil, inscription et connexion | Affiche `index.html` |
| `/espace-usager` | Espace de l'usager | Affiche `espace-usager.html` ; si aucune session, redirige vers `/` |
| `/api/usager` | **Test technique** de la réponse JSON | Renvoie les informations de l'usager connecté, ou une erreur si aucune session |

Exemples complets :

- `http://127.0.0.1:5000/`
- `http://127.0.0.1:5000/espace-usager`
- `http://127.0.0.1:5000/api/usager`

**Attention :** pendant la construction de la page, la protection de `/espace-usager` a pu être commentée temporairement. La réactiver pour tester le comportement réel et avant toute mise en ligne.

## 3. Carte des routes utilisées par `fetch()`

| Route | Méthode | Fichier JS | Données envoyées | Réponse / utilité |
|---|---|---|---|---|
| `/inscription` | POST | `index.js` | JSON du formulaire d'inscription | `succes`, `message`, parfois `champ` ; crée un usager si valide |
| `/connexion` | POST | `index.js` | JSON `{courriel, password}` | `succes`, `message`, et `role` en cas de réussite ; crée la session |
| `/api/usager` | GET (par défaut) | `espace-usager.js` | Aucun `body` | `succes` et objet `usager` ; lit l'identité depuis la session |
| `/deconnexion` | POST | `espace-usager.js` | Aucun `body` | `{ "succes": true }` ; supprime la session |

**Ne pas confondre :** le nom de la fonction JavaScript et l'adresse de la route Flask sont deux choses différentes. C'est l'URL dans `fetch("/...")` qui indique à Flask quelle route appeler.

## 4. Où aller chercher quelle information ?

| Besoin | Appel à faire | Où est réellement l'information ? |
|---|---|---|
| Inscrire un nouvel usager | `POST /inscription` | Le formulaire fournit les données ; Flask valide et écrit dans SQLite |
| Connecter un usager | `POST /connexion` | Flask vérifie SQLite puis enregistre `session["usager_id"]` |
| Connaître le prénom, nom, courriel, etc. de l'usager connecté | `GET /api/usager` | Flask lit `session["usager_id"]`, puis cherche cet ID dans `usagers` |
| Déconnecter l'usager | `POST /deconnexion` | Flask exécute `session.clear()` |
| Récupérer les quatre activités | **Route à créer** | La table SQLite `activites` existe, mais son endpoint `fetch()` n'est pas encore défini |
| Voir les activités auxquelles l'usager est inscrit | **Pas encore disponible** | Il faudra la future table de liaison `inscriptions_activites` et une route dédiée |

## 5. Exemples pratiques de `fetch()`

### A. Obtenir des données — GET

```js
fetch("/api/usager")
    .then(function (response) {
        return response.json();
    })
    .then(function (donnees) {
        console.log(donnees); // utile pour observer la structure
        // donnees.usager.prenom, donnees.usager.nom, etc.
    });
```

Pour ce GET simple : pas de `body`, pas de `JSON.stringify()`, pas de `Content-Type` à ajouter. Le navigateur transmet normalement le cookie de session pour cette même origine.

### B. Envoyer des données JSON — POST

```js
fetch("/connexion", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        courriel: "exemple@courriel.com",
        password: "mot-de-passe-de-test"
    })
})
.then(function (response) {
    return response.json();
})
.then(function (donnees) {
    // Lire donnees.succes et donnees.message
});
```

Exemple pédagogique seulement : dans Gym+, les valeurs viennent des champs du formulaire, pas de valeurs écrites en dur.

### C. Demander une action sans transmettre de JSON — POST

```js
fetch("/deconnexion", {
    method: "POST"
})
.then(function (response) {
    return response.json();
})
.then(function (donnees) {
    if (donnees.succes === true) {
        window.location.href = "/";
    }
});
```

## 6. Comprendre la réponse de `/api/usager`

Exemple de structure (valeurs illustratives) :

```json
{
  "succes": true,
  "usager": {
    "id": 1,
    "prenom": "Premier",
    "nom": "Usager",
    "courriel": "exemple@courriel.com",
    "telephone": "5555555555",
    "membre_gym": "non",
    "numero_membre": null
  }
}
```

Après `response.json()`, `donnees` est l'objet principal :

```text
donnees
├── succes
└── usager
    ├── id
    ├── prenom
    ├── nom
    ├── courriel
    ├── telephone
    ├── membre_gym
    └── numero_membre
```

Ainsi : `donnees.usager.prenom` donne le prénom. Pour afficher du texte venant de SQLite, préférer `textContent` à `innerHTML`.

## 7. Le rôle de la session

```text
Connexion réussie
    ↓
Flask : session["usager_id"] = id de l'usager
    ↓
Navigateur conserve le cookie de session
    ↓
fetch("/api/usager")
    ↓
Flask reconnaît la session et cherche l'usager dans SQLite
    ↓
Réponse JSON → JavaScript → DOM
```

Le frontend **n'a pas à envoyer lui-même un ID d'usager** pour demander « mes informations ». C'est Flask qui détermine l'identité à partir de la session. Les routes sensibles doivent toujours vérifier les droits côté backend.

## 8. Les tables SQLite à ce stade

**`usagers`** : `id`, `prenom`, `nom`, `naissance`, `telephone`, `membre_gym`, `numero_membre`, `courriel`, `password_hash`, `role`.

**`activites`** : `id`, `nom`, `jour`, `heure_debut`, `heure_fin`, `lieu`, `date_debut`, `date_fin`, `capacite`.

Activités de départ : **Natation, Yoga, Zumba, Karaté**.

**À venir :** `inscriptions_activites` pour relier les usagers à leurs activités et conserver la date/heure d'inscription.

## 9. Quand une nouvelle route est ajoutée

Compléter cette mini-fiche :

```text
Nom / utilité :
Adresse : /...
Méthode : GET ou POST ?
Fichier JS qui l'appelle :
Données envoyées :
Données retournées :
Session obligatoire ?
Table SQLite consultée ou modifiée :
```

**Rappel :** une table SQLite n'est pas directement une adresse `fetch()`. Il faut une route Flask entre le navigateur et la base de données.
