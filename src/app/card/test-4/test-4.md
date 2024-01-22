```
'use client'

import React, { useState, useEffect } from 'react';
import './CardAnimation.css';
import { styles } from '@/styles/styles';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';

const CardAnimation = () => {
  const [clicked, setClicked] = useState(0);
  const [card1Class, setCard1Class] = useState('');
  const [card2Class, setCard2Class] = useState('translate-x-[-66px] scale-[0.9]');
  const [card3Class, setCard3Class] = useState('translate-x-[-132px] scale-[0.8]');


  const buttonClickOne = () => {
    if (clicked === 2) {
      setCard1Class('card bg-green-500');
      setCard2Class('card bg-blue-500 translate-x-[-66px] scale-[0.9]');
      setCard3Class('card bg-red-500 translate-x-[-132px] scale-[0.8]');
    } else if (clicked === 1) {
      setCard1Class('card bg-green-500');
      setCard2Class('card bg-blue-500 translate-x-[-66px] scale-[0.9]');
      setCard3Class('card bg-red-500 translate-x-[-132px] scale-[0.8]');
    } else {
      setCard1Class('card bg-green-500');
      setCard2Class('card bg-blue-500 translate-x-[-66px] scale-[0.9]');
      setCard3Class('card bg-red-500 translate-x-[-132px] scale-[0.8]');
    }
    setClicked(0);
  }

  const buttonClickTwo = () => {
    if (clicked === 0) {
      setCard1Class('card bg-green-500 translate-x-[66px] scale-[1.1] opacity-0');
      setCard2Class('card bg-blue-500');
      setCard3Class('card bg-red-500 transform translate-x-[-50px] scale-[0.9]');
    } else if (clicked === 2) {
      setCard1Class('card bg-green-500 translate-x-[66px] scale-[1.1] opacity-0');
      setCard2Class('card bg-blue-500 ');
      setCard3Class('card bg-red-500 translate-x-[-66px] scale-[0.9]');
    } else {
      setCard1Class('card bg-green-500 translate-x-[66px] scale-[1.1] opacity-0');
      setCard2Class('card bg-blue-500');
      setCard3Class('card bg-red-500 transform translate-x-[-50px] scale-[0.9]');
    }
    setClicked(1);
  }

  const buttonClickThree = () => {
    if (clicked === 0) {
      setCard1Class('card bg-green-500 translate-x-[66px] scale-[1.1] opacity-0');
      setCard2Class('card bg-blue-500 translate-x-[66px] scale-[1.1] opacity-0');
      setCard3Class('card bg-red-500');
    } else if (clicked === 1) {
      setCard1Class('card bg-green-500 translate-x-[66px] scale-[1.1] opacity-0');
      setCard2Class('card bg-blue-500 translate-x-[66px] scale-[1.1] opacity-0');
      setCard3Class('card bg-red-500');
    } else {
      setCard1Class('card bg-green-500 translate-x-[66px] scale-[1.1] opacity-0');
      setCard2Class('card bg-blue-500 translate-x-[66px] scale-[1.1] opacity-0');
      setCard3Class('card bg-red-500 ');
    }
    setClicked(2);

  }

  const contentRef1 = React.useRef<HTMLDivElement>(null);
  const contentRef2 = React.useRef<HTMLDivElement>(null);
  const contentRef3 = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef1.current) {
      contentRef1.current.style.maxHeight = clicked === 0 ? `${contentRef1.current.scrollHeight}px ` : '0';
    }
    if (contentRef2.current) {
      contentRef2.current.style.maxHeight = clicked === 1 ? `${contentRef2.current.scrollHeight}px ` : '0';
    }
    if (contentRef3.current) {
      contentRef3.current.style.maxHeight = clicked === 2 ? `${contentRef3.current.scrollHeight}px ` : '0';
    }
  }, [clicked]);

  return (
    <div className='grid grid-cols-2 bg-violet-500 h-screen'>
      <div className='flex flex-col gap-2 w-[500px]'>
        <h1>Card index list</h1>
        <div onClick={() => buttonClickOne()}>
          <h2 className='p-4'>title</h2>
          <div
            ref={contentRef1}
            className={cn(
              'transition-all duration-500 ease-in-out  overflow-hidden',
              clicked === 0 ? 'bg-green-500 ' : 'opacity-0 '
            )}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ducimus totam, accusamus eveniet rem placeat praesentium libero explicabo, architecto doloremque reiciendis? Odio illum minima consequuntur!
          </div>
        </div>
        <div onClick={() => buttonClickTwo()}>
          <h2 className='p-4'>title</h2>
          <div
            ref={contentRef2}
            className={cn(
              'transition-all duration-500 ease-in-out',
              clicked === 1 ? 'bg-green-500 h-fit' : 'opacity-0 h-0'
            )}>
            sentium libero explicabo, architecto doloremque reiciendis? Odio illum minima consequuntur!
          </div>
        </div>
        <div onClick={() => buttonClickThree()}>
          <h2 className='p-4'>title</h2>
          <div
            ref={contentRef3}
            className={cn(
              'transition-all duration-500 ease-in-out',
              clicked === 2 ? 'bg-green-500 h-fit' : 'opacity-0 h-0'
            )}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ducimus totam, accusamus eveniet rem placeat praesentium libero explicabo, architecto doloremque reiciendis? Odio illum minima consequuntur!
          </div>
        </div>
      </div>
      <div className="card-container mt-10">
        <div className={`${card3Class} w-[449px] h-[478px] ${styles.glass} card `}>Card 3</div>
        <div className={`${card2Class} w-[449px] h-[478px] ${styles.glass} card `}>Card 2</div>
        <div className={`${card1Class} w-[449px] h-[478px] ${styles.glass} card `}>Card 1</div>
      </div>
    </div>
  );
};
export default CardAnimation;

```