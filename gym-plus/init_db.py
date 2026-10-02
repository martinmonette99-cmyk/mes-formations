import sqlite3

connexion = sqlite3.connect("gym_plus.db")


# =========================
# TABLE USAGERS
# =========================

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


# =========================
# TABLE ACTIVITES
# =========================

connexion.execute("""
    CREATE TABLE IF NOT EXISTS activites (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL UNIQUE,
        jour TEXT NOT NULL,
        heure_debut TEXT NOT NULL,
        heure_fin TEXT NOT NULL,
        lieu TEXT NOT NULL,
        date_debut TEXT NOT NULL,
        date_fin TEXT NOT NULL,
        capacite INTEGER NOT NULL
    )
""")


# =========================
# ACTIVITES DE DEPART
# =========================

activites = [
    (
        "Natation",
        "Lundi",
        "18:00",
        "19:00",
        "Piscine",
        "2026-10-05",
        "2026-11-23",
        12
    ),
    (
        "Yoga",
        "Mardi",
        "19:00",
        "20:00",
        "Salle 1",
        "2026-10-06",
        "2026-11-24",
        15
    ),
    (
        "Zumba",
        "Mercredi",
        "18:30",
        "19:30",
        "Salle 2",
        "2026-10-07",
        "2026-11-25",
        20
    ),
    (
        "Karaté",
        "Jeudi",
        "19:30",
        "21:00",
        "Dojo",
        "2026-10-08",
        "2026-11-26",
        16
    )
]


connexion.executemany("""
    INSERT OR IGNORE INTO activites (
        nom,
        jour,
        heure_debut,
        heure_fin,
        lieu,
        date_debut,
        date_fin,
        capacite
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
""", activites)

# TABLE RESERVATIONS

connexion.execute("""
    CREATE TABLE IF NOT EXISTS reservations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usager_id INTEGER NOT NULL,
        activite_id INTEGER NOT NULL,
        date_reservation TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

        FOREIGN KEY (usager_id) REFERENCES usagers(id),
        FOREIGN KEY (activite_id) REFERENCES activites(id),

        UNIQUE (usager_id, activite_id)
    )
""")

# RÉSERVATIONS DE TEST POUR L'USAGER 1

connexion.execute("""
    INSERT OR IGNORE INTO reservations (usager_id, activite_id)
    SELECT 1, id
    FROM activites
    WHERE nom = 'Natation'
""")

connexion.execute("""
    INSERT OR IGNORE INTO reservations (usager_id, activite_id)
    SELECT 1, id
    FROM activites
    WHERE nom = 'Yoga'
""")


connexion.commit()
connexion.close()