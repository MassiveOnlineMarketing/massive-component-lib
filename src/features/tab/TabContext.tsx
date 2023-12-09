'use client'

import React, { useState, createContext } from "react";

interface TabContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface TabsContextProps {
  activeTab: number;
  setActiveTab: (id: number) => void;
  tabWidths: number[]; // Array of widths for each tab
  updateTabWidth: (index: number, width: number) => void; // Function to update width of a specific tab
}

export const TabsContext = createContext<TabsContextProps>({
  activeTab: 1,
  setActiveTab: () => {},
  tabWidths: [], // Initialize as empty array
  updateTabWidth: () => {}, // Placeholder function
});

export const TabContainer: React.FC<TabContainerProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [tabWidths, setTabWidths] = useState<number[]>([]); // State to store widths of all tabs

  // Function to update the width of a specific tab
  const updateTabWidth = (index: number, width: number) => {
    setTabWidths(prevWidths => {
      const newWidths = [...prevWidths];
      newWidths[index - 1] = width; // Adjust for zero-based index
      return newWidths;
    });
  };

  const value = { activeTab, setActiveTab, tabWidths, updateTabWidth };

  return (
    <TabsContext.Provider value={value}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTab = () => {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error('useTab must be used within a TabProvider');
  }

  return context;
}
