import  pool  from "./../config.js"
console.log("coucou")
export const postUser = async (req, res) => {
    try {
        // TODO: fix register
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const {email, name, username, password, isCompany} = req.body;
        const passwordHash = await bcrypt.hash(password, saltRounds);
            const newUser = await pool.query("INSERT INTO userapplicant (emailUser, nameUser, usernameUser, passwordUser)" +
                "VALUES (?, ?, ?, ?)", [email, name, username, passwordHash, isCompany]);
            res.status(200).json(newUser);
        



    } catch (error) {
        console.error(error);
        res.status(400).json({message: "Requête échouée"});
    }
}