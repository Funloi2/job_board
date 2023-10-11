import  pool  from "./../config.js"
import Advertisement from './../routes/advertisement.js';

export const getAllAdvertissment = async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM Advertisement`);
        res.status(200).json({  data: result});
        
    } catch (error) {
        console.error(error);
        res.status(400).json({ message : "requête échoué" });
    }
}