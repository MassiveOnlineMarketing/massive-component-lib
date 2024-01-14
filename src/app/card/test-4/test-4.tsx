'use client'

import React, { useState } from 'react';
import './CardAnimation.css';

const CardAnimation = () => {
  const [clicked, setClicked] = useState(0);
  const [card1Class, setCard1Class] = useState('card bg-green-500 position-1');
  const [card2Class, setCard2Class] = useState('card bg-blue-500 position-2');
  const [card3Class, setCard3Class] = useState('card bg-red-500 position-3');

  const buttonClickOne = () => {
    if (clicked === 2) {
      setCard1Class('card bg-green-500 fadeIn');
      setCard2Class('card bg-blue-500 fadeInCardTwo');
      setCard3Class('card bg-red-500 position-3');
    } else if (clicked === 1) {
      setCard1Class('card bg-green-500 fadeIn');
      setCard2Class('card bg-blue-500 test-animation');
      setCard3Class('card bg-red-500 position-3');
    } else {
      setCard1Class('card bg-green-500 position-1');
      setCard2Class('card bg-blue-500 position-2');
      setCard3Class('card bg-red-500 position-3');
    }
  
    setClicked(0);
  }

  const buttonClickTwo = () => {
    if (clicked === 0 ) {
      setCard1Class('card bg-green-500 fadeOut');
      setCard2Class('card bg-blue-500 position-1');
      setCard3Class('card bg-red-500 test-animation-2');
    } else if (clicked === 2) {
      setCard1Class('card bg-green-500 hide');
      setCard2Class('card bg-blue-500 fadeIn'); 
      setCard3Class('card bg-red-500 position-2');
    } else {
      setCard1Class('card bg-green-500 hide');
      setCard2Class('card bg-blue-500 position-1');
      setCard3Class('card bg-red-500 position-2');
    }

    setClicked(1);
  }

  const buttonClickThree = () => {
    if (clicked === 0) {
      setCard1Class('card bg-green-500 fadeOut');
      setCard2Class('card bg-blue-500 fadeOutCardTwo');
      setCard3Class('card bg-red-500 position-1');
    } else if (clicked === 1) {
      setCard1Class('card bg-green-500 hide');
      setCard2Class('card bg-blue-500 fadeOut');
      setCard3Class('card bg-red-500 position-1');
    } else {
      setCard1Class('card bg-green-500 hide');
      setCard2Class('card bg-blue-500 hide');
      setCard3Class('card bg-red-500 position-1');
    }

    setClicked(2);
  }

  return (
    <div>
      <div className='flex flex-col gap-2'>
        <h1>Card index list</h1>
        <button onClick={() => buttonClickOne()}>one</button>
        <button onClick={() => buttonClickTwo()}>two</button>
        <button onClick={() => buttonClickThree()}>three</button>
      </div>
      <div className="card-container mt-10">
        <div className={card3Class}>Card 3</div>
        <div className={card2Class}>Card 2</div>
        <div className={card1Class}>Card 1</div>
      </div>
    </div>
  );
};
export default CardAnimation;