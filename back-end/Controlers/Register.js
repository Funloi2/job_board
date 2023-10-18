import  pool  from "./../config.js";
import bcrypt from "bcrypt";

export const postUser = async (req, res) => {
    try {
        const saltRounds = 10;
        const {email, name, username, password} = req.body;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const newUser = await pool.query(
            "INSERT INTO userapplicant (emailUser, nameUser, usernameUser, passwordUser) VALUES (?, ?, ?, ?)",
            [email, name, username, passwordHash]
        );
        res.status(200).json(newUser);
        



    } catch (error) {
        console.error(error);
        res.status(400).json({message: "Requête échouée"});
    }
}