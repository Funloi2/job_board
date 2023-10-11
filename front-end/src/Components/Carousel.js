import React, { useState } from 'react';
import Card from './Card';

const Carousel = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 9;

  const nextSlide = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(cards.data.length / cardsPerPage));
  };

  const prevSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? Math.ceil(cards.data.length / cardsPerPage) - 1 : prevPage - 1
    );
  };

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Utilisez une déclaration conditionnelle pour vérifier si cards.data est défini
  const displayedCards = cards?.data ? cards.data.slice(startIndex, endIndex) : [];

  return (
    <div className="carousel">
      <div className="CardLayout">
        {displayedCards.map((card, index) => (
          <div key={index} className="slider-card">
            <Card title={card.nomAd} description={card.descriptionAd} />
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>
        Précédent
      </button>
      <button className="next-button" onClick={nextSlide}>
        Suivant
      </button>
    </div>
  );
};

export default Carousel;
