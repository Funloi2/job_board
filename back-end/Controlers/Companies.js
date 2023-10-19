import  pool  from "./../config.js"

export const getCompanieByAd = async (req, res) => {
    try {
        const { id } = req.params;
    
        const query = "SELECT * FROM Companie WHERE idCom = ?";
        const result = await pool.query(query, [id]);
        
        if (result.length > 0) {
          res.status(200).json({ data: result[0] });
        } else {
          res.status(404).json({ message: "Companie non trouvée" });
        }
      } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Requête échouée" });
      }
}
export const getAllCompanie = async (req, res) => {
  try {
      const result = await pool.query(`SELECT * FROM Companie`);
      res.status(200).json({  data: result});
      
  } catch (error) {
      console.error(error);
      res.status(400).json({ message : "requête échoué" });
  }
}
export const getCompanieById = async (req, res) => {
  try {
    const { id } = req.params;

    const query = "SELECT * FROM Companie WHERE idCom = ?";
    const result = await pool.query(query, [id]);

    if (result.length > 0) {
      res.status(200).json({ data: result[0] });
    } else {
      res.status(404).json({ message: "Companie non trouvée" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Requête échouée" });
  }
};
export const createCompanie = async (req, res) => {
  try {
    const { nomCom, descriptionCom, addressCom, villeCom, nbEmployeeCom, mailCom, passCom } = req.body;

    const query = "INSERT INTO Companie (nomCom, descriptionCom, addressCom, villeCom, nbEmployeeCom, mailCom, passCom) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const result = await pool.query(query, [nomCom, descriptionCom, addressCom, villeCom, nbEmployeeCom, mailCom, passCom ]);

    res.status(201).json({ message: "Companie créée avec succès", data: result });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Création de la companie échouée" });
  }
};
export const updateCompanie = async (req, res) => {
  try {
    const { id } = req.params;
    const { nomCom, descriptionCom, addressCom, villeCom, nbEmployeeCom } = req.body;

    const query = "UPDATE Companie SET nomCom = ?, descriptionCom = ?, addressCom = ?, villeCom = ?, nbEmployeeCom = ?  WHERE idCom = ?";
    const result = await pool.query(query, [nomCom, descriptionCom, addressCom, villeCom, nbEmployeeCom, id]);

    res.status(200).json({ message: "Companie mise à jour avec succès", data: result });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Mise à jour de la companie échouée" });
  }
};
export const deleteCompanie = async (req, res) => {
  try {
    const { id } = req.params;

    const query = "DELETE FROM Companie WHERE idCom = ?";
    const result = await pool.query(query, [id]);

    res.status(200).json({ message: "Companie supprimée avec succès", data: result });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Suppression de la companie échouée" });
  }
};