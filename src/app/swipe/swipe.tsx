"use client"

import React from 'react';
import { useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

// install react-swipeable

interface SwipeContainer {
  children: React.ReactNode;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  itemsCount: number;
}

interface SwipeDots {
  activeIndex: number;
  itemsCount: number;
}

interface SwipeArrowNav {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  itemsCount: number;
}

interface SwipeableNavigation {
  data: {
    heading: string;
    text: string;
  }[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const SwipeContainer: React.FC<SwipeContainer> = ({ children, activeIndex, setActiveIndex, itemsCount }) => {
  // Swipeable handlers, used to detect swipe events, 
  // and update the activeIndex state, 
  // which is used to show/hide the correct child, 
  // and update the navigation dots, 
  // Currently, this only supports left/right swiping,  
  // Once itemCount is reached, it will loop back to the beginning
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setActiveIndex(prev => {
        const newIndex = (prev + 1) % itemsCount;
        console.log('swiped left', newIndex);
        return newIndex;
      });
    },
    onSwipedRight: () => {
      setActiveIndex(prev => {
        const newIndex = (prev - 1 + itemsCount) % itemsCount;
        console.log('swiped right', newIndex);
        return newIndex;
      });
    }
  });

  return (
    <div {...handlers} className='w-full'>
      {React.Children.map(children, (child, index) => (
        <div key={index} className={`${activeIndex === index ? 'block' : 'hidden'}`}>
          {child}
        </div>
      ))}
    </div>
  );
};


const SwipeableNavigation: React.FC<SwipeableNavigation> = ({ data, activeIndex, setActiveIndex }) => {
  const itemRefs = useRef<(HTMLSpanElement | null)[]>(new Array(data.length).fill(null));

  useEffect(() => {
    itemRefs.current[activeIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeIndex]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  }; 

  return (
    <div className={`flex gap-0 md:gap-6 py-2 px-2 bg-[#EFF4FB] my-8 md:w-fit md:px-2 rounded-xl overflow-auto`}>
      {data.map((item, index) => (
        <span
          key={index}
          ref={el => itemRefs.current[index] = el} // @ts-ignore
          className={`whitespace-nowrap rounded-[10px] cursor-pointer hover:bg-gray-50 ${activeIndex === index ? " bg-white " : "border border-secondary-100 "}`}
          onClick={() => handleClick(index)}
        >
          <p className={`whitespace-nowrap rounded-3xl cursor-pointer text-sm leading-5 font-semibold px-6 py-3 ${activeIndex === index ? "text-gradient-primary " : "text-secondary-500"}`}
          >
            {item.heading}
          </p>
        </span>
      ))}
    </div>
  );
}


const SwipeDots: React.FC<SwipeDots> = ({ activeIndex, itemsCount }) => {
  return (
    <div className="flex justify-center mt-4 items-center">

      {Array.from({ length: itemsCount }).map((_, index) => (
        <span
          key={index}
          className={`h-4 w-4 mx-1 rounded-full ${activeIndex === index ? "bg-primary" : "bg-gray-400"}`}
        ></span>
      ))}

    </div>
  );
};



const SwipeArrowNav: React.FC<SwipeArrowNav> = ({ activeIndex, itemsCount, setActiveIndex }) => {
  return (
    <div className="flex justify-center mt-4 items-center">
      <button
        onClick={() => setActiveIndex(prev => (prev > 0 ? prev - 1 : 0))}
        disabled={activeIndex === 0}
        aria-label="Previous item"
        role="button"
        className="hidden lg:block"
      >
        ◀
      </button>

      <button
        onClick={() => setActiveIndex(prev => (prev < itemsCount - 1 ? prev + 1 : itemsCount - 1))}
        disabled={activeIndex === itemsCount - 1}
        aria-label="Next item"
        role="button"
        className="hidden lg:block"
      >
        ▶
      </button>
    </div>
  );
};


export { SwipeContainer, SwipeArrowNav, SwipeDots, SwipeableNavigation };