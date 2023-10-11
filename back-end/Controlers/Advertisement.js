import  pool  from "./../config.js"
import Advertisement from './../routes/advertisement.js';

export const getAllAdvertissment = async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM Advertisement`);
        // console.log(result);
        res.status(200).json({ message : "requete réussis", data: result.row});
    } catch (error) {
        console.error(error);
        res.status(400).json({ message : "requête échoué" });
    }
}