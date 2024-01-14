import React from 'react';

interface CardListProps {
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
}

const CardList: React.FC<CardListProps> = ({ selectedIndex, onSelectIndex }) => {
  const handleIndexClick = (index: number) => {
    onSelectIndex(index);
  };

  return (
    <div className="card-list">
      <div onClick={() => handleIndexClick(0)} className={selectedIndex === 0 ? 'active' : ''}>Index 1</div>
      <div onClick={() => handleIndexClick(1)} className={selectedIndex === 1 ? 'active' : ''}>Index 2</div>
      <div onClick={() => handleIndexClick(2)} className={selectedIndex === 2 ? 'active' : ''}>Index 3</div>
      {/* Add more index items as needed */}
    </div>
  );
};

export default CardList;
