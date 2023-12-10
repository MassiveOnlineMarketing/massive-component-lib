'use client'

import React from 'react';
import { useSwipe } from './SwipeContext';
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SwipeArrowNavProps {
  className?: string;
}

const SwipeArrowNav: React.FC<SwipeArrowNavProps> = ({ className }) => {
  const { activeIndex, itemsCount, setActiveIndex } = useSwipe();

  return (
    <div className={cn(
      "flex mt-4 justify-between",
      className
    )}>
      <button
        onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0))}
        disabled={activeIndex === 0}
        aria-label="Previous item"
        role="button"
        // className="hidden lg:block"
      >
        <ChevronLeftCircleIcon size={32}  />
      </button>

      <button
        onClick={() => setActiveIndex(prev => (prev < itemsCount - 1 ? prev + 1 : itemsCount - 1))}
        disabled={activeIndex === itemsCount - 1}
        aria-label="Next item"
        role="button"
        // className="hidden lg:block"
      >
        <ChevronRightCircleIcon size={32} />
      </button>
    </div>
  );
};

export { SwipeArrowNav };
