import React, { useState } from 'react';
import CardList from './card-list';
import Card from './card';

const StackedCardsComponent: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleIndexChange = (newIndex: number) => {
    setSelectedIndex(newIndex);
  };

  return (
    <div>
      <CardList selectedIndex={selectedIndex} onSelectIndex={handleIndexChange} />
      <div className="stacked-cards-container">
        <div className="cards-stack">
          <Card index={0} selected={selectedIndex === 0} />
          <Card index={1} selected={selectedIndex === 1} />
          <Card index={2} selected={selectedIndex === 2} />
          {/* Add more cards as needed */}
        </div>
      </div>

    </div>
  );
};

export default StackedCardsComponent;
