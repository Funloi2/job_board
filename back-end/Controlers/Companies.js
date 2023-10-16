import  pool  from "./../config.js"

export const getCompanieByAd = async (req, res) => {
    try {
        const { id } = req.params;
    
        const query = "SELECT nomCom FROM Companie WHERE idCom = ?";
        const result = await pool.query(query, [id]);
        
        if (result.length > 0) {
          res.status(200).json({ data: result[0] }); // result.rows[0] pour obtenir la première ligne de résultat.
        } else {
          res.status(404).json({ message: "Annonce non trouvée" });
        }
      } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Requête échouée" });
      }
}