import React, { useState } from 'react';
import IndexList from './IndexList';
import CardStack from './CardStack';
import './test-3.css';

const StackedCardViewer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle index selection
  const handleIndexSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="stacked-card-viewer">
      <IndexList onIndexSelect={handleIndexSelect} />
      <CardStack selectedIndex={selectedIndex} />
    </div>
  );
};

export default StackedCardViewer;
