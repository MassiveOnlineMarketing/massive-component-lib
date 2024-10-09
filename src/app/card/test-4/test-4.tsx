'use client'

import React, { useState, useEffect } from 'react';
import './CardAnimation.css';
import { styles } from '@/styles/styles';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { GrijsBol, PaarBol } from '.';
import { useSwipeable } from 'react-swipeable';

const CardAnimation = () => {
  const [clicked, setClicked] = useState(0);
  const [card1Class, setCard1Class] = useState('');
  const [card2Class, setCard2Class] = useState('translate-x-[-66px] scale-[0.9]');
  const [card3Class, setCard3Class] = useState('translate-x-[-132px] scale-[0.8]');

  const buttonClick = (index: number) => {
    if (index === 0) {
      animateCard(index);
      setClicked(0);
    } else if (index === 1) {
      animateCard(index);
      setClicked(1);
    } else if (index === 2) {
      animateCard(index);
      setClicked(2);
    }

  }

  const animateCard = (index: number) => {
    if (index === 0) {
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
    } else if (index === 1) {
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
    } else if (index === 2) {
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
    }
  }



  const contentRefs = [React.useRef<HTMLDivElement>(null), React.useRef<HTMLDivElement>(null), React.useRef<HTMLDivElement>(null)];

  useEffect(() => {
    contentRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.style.maxHeight = clicked === index ? `${ref.current.scrollHeight}px ` : '0';
      }
    });
  }, [clicked]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setClicked(prev => (prev < 2 ? prev + 1 : prev));
      if (clicked < 3) {
        animateCard(clicked + 1);
      }
    },
    onSwipedRight: () => {
      setClicked(prev => (prev > 0 ? prev - 1 : prev));
      if (clicked > 0) {
        animateCard(clicked - 1);
      }
    }
  });


  return (
    <div className='grid md:grid-cols-2 h-screen'>
      <div className='flex flex-col w-[500px]'>
        <h1>Card index list</h1>
        {contentRefs.map((ref, index) => (
          <div key={index} onClick={() => buttonClick(index)}>

            <div className={`flex gap-2 items-center relative  ${index !== 0 ? 'pt-4' : ''}`}>
              {clicked === index ? <PaarBol /> : <GrijsBol />}
              <h2 className={`text-lg font-medium leading-7 ${clicked === index ? 'text-gray-800' : 'text-gray-500'}`}>title</h2>
              <div className={cn(
                  `absolute w-[1.5px] h-full  left-[8.5px] `,
                  `${clicked === index ? 'bg-[#7857FF]' : 'bg-gray-300'}`,
                  `${index === 0 ? 'h-1/2 bottom-0' : 'top-0'}`,
                  `${index === 2 ? 'h-2/3 top-0' : 'bottom-0'}`,
                  { 'h-full': index === 2 && clicked === 2 }
                )}>
              </div>
            </div>

            <div
              ref={ref}
              className={cn(
                'transition-all duration-500 ease-in-out  overflow-hidden',
                clicked === index ? '' : 'opacity-0 '
              )}>
              <div className='flex gap-2  '>
                <div className='min-w-[19px] flex justify-center '>
                  <div className={`w-[1.5px] ${clicked === index ? 'bg-[#7857FF]' : 'bg-gray-300'} `}></div>
                </div>
                <p className=' pb-4 border-b-[1.5px] border-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ducimus totam, accusamus eveniet rem placeat praesentium libero explicabo, architecto doloremque reiciendis? Odio illum minima consequuntur!</p>
              </div>
            </div>

          </div>
        ))}
      </div>
      <div {...handlers} className="card-container mt-10">
        <div className={`${card3Class} w-[449px] h-[478px] ${styles.glass} card `}>Card 3</div>
        <div className={`${card2Class} w-[449px] h-[478px] ${styles.glass} card `}>Card 2</div>
        <div className={`${card1Class} w-[449px] h-[478px] ${styles.glass} card `}>Card 1</div>
      </div>
    </div>
  );
};
export default CardAnimation;




