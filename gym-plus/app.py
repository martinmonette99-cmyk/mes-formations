from flask import Flask, render_template, request, session, redirect
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3
import re
from datetime import date, datetime


app = Flask(__name__)

# Clé temporaire pour le développement local de Gym+
app.secret_key = "gym-plus-cle-developpement"


@app.route("/")
def accueil():
    return render_template("index.html")


# =========================================================
# INSCRIPTION
# =========================================================

@app.route("/inscription", methods=["POST"])
def inscription():

    # Récupère le JSON envoyé par fetch()
    donnees = request.get_json()

    # ---------------------------------------------------------
    # VALIDATION BACKEND
    # ---------------------------------------------------------

    # Prénom
    if not donnees.get("prenom", "").strip():
        return {
            "succes": False,
            "champ": "prenom",
            "message": "Ce champ ne peut pas être vide."
        }

    # Nom
    if not donnees.get("nom", "").strip():
        return {
            "succes": False,
            "champ": "nom",
            "message": "Ce champ ne peut pas être vide."
        }

    # Courriel
    courriel = donnees.get("courriel", "").strip()

    if not re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", courriel):
        return {
            "succes": False,
            "champ": "courriel",
            "message": "Entrez un courriel valide."
        }

    # Date de naissance
    try:
        naissance = datetime.strptime(
            donnees.get("naissance", ""),
            "%Y-%m-%d"
        ).date()

        if naissance > date.today():
            return {
                "succes": False,
                "champ": "naissance",
                "message": "La date de naissance ne peut pas être dans le futur."
            }

    except ValueError:
        return {
            "succes": False,
            "champ": "naissance",
            "message": "Entrez une date de naissance valide."
        }

    # Téléphone : conserve uniquement les chiffres
    telephone = re.sub(r"\D", "", donnees.get("telephone", ""))

    if len(telephone) != 10:
        return {
            "succes": False,
            "champ": "telephone",
            "message": "Le téléphone doit contenir 10 chiffres."
        }

    # Membre du gym
    membre_gym = donnees.get("membreGym")

    if membre_gym not in ("oui", "non"):
        return {
            "succes": False,
            "champ": "membreGym",
            "message": "Indiquez si vous êtes membre du gym."
        }

    # Numéro de membre
    numero_membre = donnees.get("numeroMembre", "").strip()

    if membre_gym == "oui" and not numero_membre:
        return {
            "succes": False,
            "champ": "numeroMembre",
            "message": "Entrez votre numéro de membre."
        }

    # Mot de passe
    password = donnees.get("password", "")
    password_verify = donnees.get("passwordVerify", "")

    if (
        len(password) < 10
        or not re.search(r"[A-Z]", password)
        or not re.search(r"[0-9]", password)
        or not re.search(r"[^A-Za-z0-9]", password)
    ):
        return {
            "succes": False,
            "champ": "password",
            "message": (
                "Le mot de passe doit contenir au moins 10 caractères, "
                "une majuscule, un chiffre et un caractère spécial."
            )
        }

    # Confirmation du mot de passe
    if password != password_verify:
        return {
            "succes": False,
            "champ": "passwordVerify",
            "message": "Les mots de passe ne correspondent pas."
        }

    # ---------------------------------------------------------
    # ENREGISTREMENT DANS SQLITE
    # ---------------------------------------------------------

    password_hash = generate_password_hash(password)

    connexion = sqlite3.connect("gym_plus.db")

    try:

        connexion.execute("""
            INSERT INTO usagers (
                prenom,
                nom,
                naissance,
                telephone,
                membre_gym,
                numero_membre,
                courriel,
                password_hash
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            donnees["prenom"].strip(),
            donnees["nom"].strip(),
            donnees["naissance"],
            telephone,
            membre_gym,
            numero_membre if membre_gym == "oui" else None,
            courriel,
            password_hash
        ))

        connexion.commit()

        return {
            "succes": True,
            "message": "Votre compte Gym+ a été créé avec succès."
        }

    except sqlite3.IntegrityError:

        return {
            "succes": False,
            "champ": "courriel",
            "message": "Un compte existe déjà avec cette adresse courriel."
        }

    finally:
        connexion.close()


# =========================================================
# CONNEXION
# =========================================================

@app.route("/connexion", methods=["POST"])
def connexion_usager():

    # JSON envoyé par le fetch() du formulaire de connexion
    donnees = request.get_json()

    courriel = donnees.get("courriel", "").strip()
    password = donnees.get("password", "")

    # Les deux champs doivent être présents
    if not courriel or not password:
        return {
            "succes": False,
            "message": "Courriel ou mot de passe incorrect."
        }

    connexion = sqlite3.connect("gym_plus.db")

    # Permet d'accéder aux colonnes par leur nom
    connexion.row_factory = sqlite3.Row

    usager = connexion.execute("""
        SELECT id, courriel, password_hash, role
        FROM usagers
        WHERE courriel = ?
    """, (courriel,)).fetchone()

    connexion.close()

    # Même message si le courriel n'existe pas
    # ou si le mot de passe est incorrect.
    if usager is None or not check_password_hash(
        usager["password_hash"],
        password
    ):
        return {
            "succes": False,
            "message": "Courriel ou mot de passe incorrect."
        }

    # La connexion est valide : mémorise l'usager dans la session.
    session["usager_id"] = usager["id"]

    return {
        "succes": True,
        "message": "Connexion réussie.",
        "role": usager["role"]
    }

@app.route("/espace-usager")
def espace_usager():

    # if "usager_id" not in session:
    #     return redirect("/")

    return render_template("espace-usager.html")


@app.route("/deconnexion", methods=["POST"])
def deconnexion():
    session.clear()

    return {
        "succes": True
    }


if __name__ == "__main__":
    app.run(debug=True)