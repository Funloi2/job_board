import pool from "./../config.js"

export const postUser = async (req, res) => {
    try {
        // TODO: fix register
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const {email, name, username, password, isCompany} = req.body;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        if(isCompany === "true"){
            const newUser = await pool.query("INSERT INTO usercom (emailuserCom, nameUserCom, usernameUserCom, passwordUserCom) " +
                "VALUES ($1, $2, $3, $4) RETURNING *", [email, name, username, passwordHash]);
            res.status(200).json(newUser.rows[0]);

        }
        else{
            const newUser = await pool.query("INSERT INTO userapplicant (emailUser, nameUser, usernameUser, passwordUser)" +
                " VALUES ($1, $2, $3, $4) RETURNING *", [email, name, username, passwordHash, isCompany]);
            res.status(200).json(newUser.rows[0]);
        }



    } catch (error) {
        console.error(error);
        res.status(400).json({message: "Requête échouée"});
    }
}