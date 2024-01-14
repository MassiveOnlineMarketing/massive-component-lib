'use client'

import React, { useState, useEffect } from 'react';


interface CardAnimationProps {
  index: number;
  selectedCardIndex: number | null;
  onCardClick: (index: number) => void;
  title: string;
}

const CardAnimation = ({ index, selectedCardIndex, onCardClick, title }: CardAnimationProps) => {
  const isActive = index === selectedCardIndex;
  const isBeforeSelected = index < selectedCardIndex!;
  const isAfterSelected = index > selectedCardIndex!;

  const handleCardClick = () => {
    onCardClick(index);
  };

  return (
    <div
      className={`cardd ${isActive ? 'active' : ''}`}
      onClick={handleCardClick}
      style={{
        zIndex: isActive ? 1 : isBeforeSelected ? -1 : -2,
        transform: `translate(-50%, -50%) scale(${isActive ? 2 : isAfterSelected ? 0.6 : 0.8})`,
        left: `calc(50% - ${isBeforeSelected ? 30 : isAfterSelected ? 60 : 0}px)`,
      }}
    >
      {/* Your card content goes here */}
      <p>{title}</p>
    </div>
  );
};

export default CardAnimation;



