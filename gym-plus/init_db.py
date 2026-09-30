import sqlite3

connexion = sqlite3.connect("gym_plus.db")

connexion.execute("""
    CREATE TABLE IF NOT EXISTS usagers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        prenom TEXT NOT NULL,
        nom TEXT NOT NULL,
        naissance TEXT NOT NULL,
        telephone TEXT NOT NULL,
        membre_gym TEXT NOT NULL,
        numero_membre TEXT,
        courriel TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'usager'
    )
""")

connexion.commit()
connexion.close()