'use client'

import React, { createContext, useState } from 'react';

type SwipeContextType = {
  activeIndex: number;
  itemsCount: number;
  setActiveIndex: (index: number) => void;
};

interface SwipeProviderProps {
  children: React.ReactNode;
}

const SwipeContext = React.createContext<SwipeContextType | undefined>(undefined);

export const SwipeProvider = ({ children }: SwipeProviderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsCount = React.Children.count(children);
  const value = {
    activeIndex,
    itemsCount,
    setActiveIndex
  }; 


  return (
    <SwipeContext.Provider value={value}>
      {children}
    </SwipeContext.Provider>
  );
};

export const useSwipe = () => {
  const context = React.useContext(SwipeContext);

  if (!context) {
    throw new Error('useSwipe must be used within a SwipeProvider');
  }

  return context;
};