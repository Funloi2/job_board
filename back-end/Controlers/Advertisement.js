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
export const getAdvertisementById = async (req, res) => {
  try {
    const { id } = req.params;

    const query = "SELECT * FROM Advertisement WHERE idAd = ?";
    const result = await pool.query(query, [id]);
    
    if (result.length > 0) {
      res.status(200).json({ data: result[0] }); // Utilisez result.rows[0] pour obtenir la première ligne de résultat.
    } else {
      res.status(404).json({ message: "Annonce non trouvée" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Requête échouée" });
  }
};
  