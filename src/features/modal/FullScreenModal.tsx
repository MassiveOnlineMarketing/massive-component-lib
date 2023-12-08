'use client'

import React from 'react';
import useAnimatedVisibility from '@/app/modal/CUSTOMHOOKuseAnimatedVisibility';
import { Button } from '@/components/ui/button';
import { XMarkIcon } from "@heroicons/react/24/outline";


interface ModalProps {
  children: React.ReactNode;
  buttonText: string;
  className?: string;
  initialIsVisible?: boolean;
  animationDuration: number;
  animationIn: string;
  animationOut: string;
}

const ModalFullScreen: React.FC<ModalProps> = ({ children, buttonText, className, initialIsVisible = false, animationDuration, animationIn, animationOut }) => {
  const { setIsVisible, shouldRender, animationClass } = useAnimatedVisibility({
    initialIsVisible,
    animationDuration,
    animationIn,
    animationOut
  });

  return (
    <>
      <Button className={className} onClick={() => setIsVisible(true)}>{buttonText}</Button>

      {shouldRender && (
        // navbar height aan top toevoegen
        <div className={`fixed top-14 left-0 right-0 bottom-0 z-50  bg-white p-4 overflow-y-auto ${animationClass}`}>
          <Button option='icon' variant='secondary' onClick={() => setIsVisible(false)} className='fixed ml-auto top-[72px] right-4'>
            <XMarkIcon className='h-4 w-4' />
          </Button>
          <div className={` flex overflow-y-auto items-center`}>
              {children}
          </div>
        </div>
      )}
    </>
  );
}

export default ModalFullScreen;