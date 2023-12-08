'use client'

import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useSwipe } from './SwipeContext';

interface SwipeContainerProps {
  children: React.ReactNode;
}

const SwipeContainer: React.FC<SwipeContainerProps> = ({ children }) => {
  const { activeIndex, itemsCount, setActiveIndex } = useSwipe();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setActiveIndex(prev => (prev + 1) % itemsCount); //@ ts-ignore
    },
    onSwipedRight: () => {
      setActiveIndex(prev => (prev - 1 + itemsCount) % itemsCount); //@ ts-ignore
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

export { SwipeContainer };