'use client'

import React from 'react';

export interface AccordionProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  padding?: number;
}

interface AccordionContextProps {
  expand?: boolean;
  toggleExpand: () => void;
  padding: number;
}

// Accordion Context
const AccordionContext = React.createContext<AccordionContextProps>({
  expand: false,
  toggleExpand: () => { },
  padding: 2,
});


export const Accordion: React.FC<AccordionProps> = ({ children, isOpen = false, onToggle = () => {}, padding = 2 }) => {
  const value = { expand: isOpen, toggleExpand: onToggle, padding };

  return (
      <AccordionContext.Provider value={value}  >
          <div className=" bg-gray-50 rounded-2xl border-2 border-gray-100 hover:border-white hover:drop-shadow">
              {children}
          </div>
      </AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = React.useContext(AccordionContext);

  if (!context) {
    throw new Error('useAccordion must be used within a AccordionProvider');
  }

  return context;
}