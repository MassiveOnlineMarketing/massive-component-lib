import React from 'react';

interface IndexListProps {
  onIndexSelect: (index: number) => void;
}


const IndexList = ({ onIndexSelect }: IndexListProps ) => {
  const indices = [1, 2, 3, 4, 5]; // Adjust based on your data

  return (
    <ul className="index-list">
      {indices.map((index) => (
        <li key={index} onClick={() => onIndexSelect(index)}>
          {index}
        </li>
      ))}
    </ul>
  );
};

export default IndexList;
