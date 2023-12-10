'use client'

import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useSwipe } from './SwipeContext';

interface SwipeContentProps {
  children: React.ReactNode;
}

const SwipeContent: React.FC<SwipeContentProps> = ({ children }) => {
  const { activeIndex, itemsCount, setActiveIndex } = useSwipe();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setActiveIndex(prev => (prev + 1) % itemsCount);
    },
    onSwipedRight: () => {
      setActiveIndex(prev => (prev - 1 + itemsCount) % itemsCount);
    }
  });

  return (
    <div {...handlers} className='w-full'>
      {React.Children.map(children, (child, index) => (
        <div key={index} className={`${activeIndex === index ? 'block' : 'hidden'}`}>
          {child}
        </div>
      ))}
    </div>
  );
};

export { SwipeContent };
