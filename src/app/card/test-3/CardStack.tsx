import React from 'react';

const CardStack = ({ selectedIndex }: { selectedIndex: number}) => {
  const cards = [
    {id: 1, title: 'Card 1', content: 'Card 1 content'},
    {id: 2, title: 'Card 2', content: 'Card 2 content'},
    {id: 3, title: 'Card 3', content: 'Card 3 content'},
  ];

  return (
    <div className="card-stack ">
      {cards.map((card, index) => (
        <div 
          key={card.id}
          className={`card bg-white m-2 p-4 w-fit shadow-md ${index === selectedIndex ? 'active' : ''}`}
          
        >
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CardStack;
