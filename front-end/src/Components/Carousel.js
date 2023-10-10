import React, { useState } from 'react';
import Card from './Card';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 9) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 9 : prevIndex - 9
    );
  };

  return (
    <div className="carousel">
      <div className="CardLayout">
        {cards.slice(currentIndex, currentIndex + 9).map((card, index) => (
          <div key={index} className="slider-card">
            <Card title={card.title} description={card.description} />
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
