import  pool  from "./../config.js"

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
      res.status(200).json({ data: result[0] }); // result.rows[0] pour obtenir la première ligne de résultat.
    } else {
      res.status(404).json({ message: "Annonce non trouvée" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Requête échouée" });
  }
};

export const getAdvertisementByCom = async (req, res) => {
  try {
    const { idCom } = req.params;

    const query = "SELECT * FROM Advertisement WHERE idCom = ?";
    const result = await pool.query(query, [idCom]);
    
    if (result.length > 0) {
      res.status(200).json({ data: result }); 
    } else {
      res.status(404).json({ message: "Annonces non trouvées" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Requête échouée" });
  }
};
export const createAdvertisement = async (req, res) => {
  try {
    const { nomAd, dateCreationAd, descriptionAd, salaireAd, typeAd, contractAd, VilleAd } = req.body;

    const query = "INSERT INTO Advertisement (nomAd, dateCreationAd, descriptionAd, salaireAd, typeAd, contractAd, VilleAd) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const result = await pool.query(query, [nomAd, dateCreationAd, descriptionAd, salaireAd, typeAd, contractAd, VilleAd]);

    res.status(201).json({ message: "Annonce créée avec succès", data: result });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Création de l'annonce échouée" });
  }
};
export const updateAdvertisement = async (req, res) => {
  try {
    const { id } = req.params;
    const { nomAd, dateCreationAd, descriptionAd, salaireAd, typeAd, contractAd, VilleAd } = req.body;

    const query = "UPDATE Advertisement SET nomAd = ?, dateCreationAd = ?, descriptionAd = ?, salaireAd = ?, typeAd = ?, contractAd = ?, VilleAd = ? WHERE idAd = ?";
    const result = await pool.query(query, [nomAd, dateCreationAd, descriptionAd, salaireAd, typeAd, contractAd, VilleAd, id]);

    res.status(200).json({ message: "Annonce mise à jour avec succès", data: result });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Mise à jour de l'annonce échouée" });
  }
};
export const deleteAdvertisement = async (req, res) => {
  try {
    const { id } = req.params;

    const query = "DELETE FROM Advertisement WHERE idAd = ?";
    const result = await pool.query(query, [id]);

    res.status(200).json({ message: "Annonce supprimée avec succès", data: result });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Suppression de l'annonce échouée" });
  }
};


  