// routes/apiRoutes.mjs
import express from 'express';
const router = express.Router();
import pool from '../config.js';

router.get('/api/advertisements', (req, res) => {
    const sql = 'SELECT nomAd, salaireAd FROM Advertisement';

  pool.getConnection()
    .then(conn => {
      conn.query(sql)
        .then(rows => {
          // Traitement des données récupérées depuis la base de données
          res.json(rows);
        })
        .catch(err => {
          // Gestion des erreurs de requête SQL
          console.error(err);
          res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
        })
        .finally(() => {
          conn.release(); // Libération de la connexion après utilisation
        });
    })
    .catch(err => {
      // Gestion des erreurs de connexion à la base de données
      console.error(err);
      res.status(500).json({ error: 'Erreur de connexion à la base de données.' });
    });
});

export default router;
