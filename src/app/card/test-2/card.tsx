import React from 'react';

interface CardProps {
  index: number;
  selected: boolean;
}

const Card: React.FC<CardProps> = ({ index, selected }) => {
  return (
    <div className={`card ${selected ? 'selected' : ''}`}>
      <p>Card {index + 1}</p>
    </div>
  );
};

export default Card;
