import  pool  from "./../config.js";

export const getAllUser = async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM User`);
        res.status(200).json({  data: result});
        
    } catch (error) {
        console.error(error);
        res.status(400).json({ message : "requête échoué" });
    }
  }
  export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      const query = "DELETE FROM User WHERE idUser = ?";
      const result = await pool.query(query, [id]);
  
      res.status(200).json({ message: "Utilisateur supprimé avec succès", data: result });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Suppression de l'utilisateur échouée" });
    }
  };
  
  