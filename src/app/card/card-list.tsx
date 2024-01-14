import React from 'react';

interface CardListProps {
  titles: string[];
  onTitleClick: (index: number) => void;
}



const CardList = ({ titles, onTitleClick }: CardListProps) => {
  return (
    <div className="card-list">
      <h2>Card Titles</h2>
      <ul>
        {titles.map((title, index) => (
          <li key={index} onClick={() => onTitleClick(index)}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;