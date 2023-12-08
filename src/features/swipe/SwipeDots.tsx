'use client'

import React from 'react';
import { useSwipe } from './SwipeContext';

const SwipeDots: React.FC = () => {
  const { activeIndex, itemsCount } = useSwipe();

  return (
    <div className="flex justify-center mt-4 items-center">
      {Array.from({ length: itemsCount }).map((_, index) => (
        <span
          key={index}
          className={`h-4 w-4 mx-1 rounded-full ${activeIndex === index ? "bg-primary" : "bg-gray-400"}`}
        ></span>
      ))}
    </div>
  );
};

export { SwipeDots };
