import React, { useState, useEffect } from "react";

import Carousel from "./Carousel";

function Home() {
  const [advertisementData, setAdvertisementData] = useState([]);

  useEffect(() => {
    // Effectuez une requête HTTP (par exemple, avec fetch) pour récupérer les données d'annonces depuis le backend

    fetch("http://localhost:3000/advertisement/") // Assurez-vous que cette URL correspond à votre route backend
      .then((response) => response.json())
      .then((data) => setAdvertisementData(data))
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des données d'annonces:",
          error
        )
      );
  }, []);
  return (
    <div>
      <div className="CardLayout">
        <Carousel cards={advertisementData} />
      </div>
    </div>
  );
}

export default Home;
