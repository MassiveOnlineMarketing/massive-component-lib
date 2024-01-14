'use client'

import React, { useState } from 'react';

const StackedCards = () => {
  const [activeCard, setActiveCard] = useState(0);

  const nextCard = () => {
    setActiveCard((prevActiveCard) => (prevActiveCard + 1) % 5);
  };

  const prevCard = () => {
    setActiveCard((prevActiveCard) => (prevActiveCard - 1 + 5) % 5);
  };

  const cardColors = ['#4CD964', '#FFCC00', '#FF3B30', '#34AADC', '#FF9500'];

  return (
    <div className="container">
      <div className="card-stack">
        <button className="buttons prev" onClick={prevCard}>
          &lt;
        </button>
        <ul className="card-list">
          {cardColors.map((color, index) => (
            <li
              key={index}
              className={`card ${index === activeCard ? 'activeNow' : ''}`}
              style={{
                backgroundColor: color,
                transform: `translateZ(${index * -10}px) scale(${
                  index === activeCard ? 1 : 0.8
                })`,
                opacity: index === activeCard ? 1 : 0.8,
                zIndex: index === activeCard ? 1 : 0,
              }}
            ></li>
          ))}
        </ul>
        <button className="buttons next" onClick={nextCard}>
          &gt;
        </button>
      </div>
    </div>
  );
};
export default StackedCards;
