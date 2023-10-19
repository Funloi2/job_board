import pool from "./../config.js";

export const loginUser = async (req, res) => {
    try {
        const bcrypt = require('bcrypt');
        const { email, password } = req.body;
        
        const user = await pool.query(
            "SELECT * FROM userapplicant WHERE emailUser = ?",
            [email]
        );
        if (user.length === 0) {
            return res.status(401).json({ message: "Utilisateur non trouvé" });
        }
        const passwordMatch = await bcrypt.compare(password, user[0].passwordUser);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }
        res.status(200).json({ message: "Connexion réussie" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Requête échouée" });
    }
}
