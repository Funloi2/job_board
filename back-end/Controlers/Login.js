import  pool  from "./../config.js";
import bcrypt from "bcrypt";

export const verifyLogin = async (req, res) => {
    try {
        const saltRounds = 10;
        const {email, password} = req.body;
        const getUser = await pool.query(
            "SELECT * FROM userapplicant WHERE emailUser = ?", [email]
        );
        if(getUser.length === 0) {
            res.status(400).json({message: "Email ou mot de passe incorrect"});
        }
        const passwordHash = await bcrypt.compare(password, getUser[0].passwordUser);
        if(!passwordHash) {
            res.status(400).json({message: "Email ou mot de passe incorrect"});
        }

        res.status(200).json(getUser);




    } catch (error) {
        console.error(error);
        res.status(400).json({message: "Requête échouée"});
    }
}