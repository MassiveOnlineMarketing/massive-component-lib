'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import useAnimatedVisibility from './CUSTOMHOOKuseAnimatedVisibility'; // Adjust the import path as needed

export const SimpleCompDisplay = () => {
    const { isVisible, setIsVisible, shouldRender, animationClass } = useAnimatedVisibility({
        initialIsVisible: false,
        animationDuration: 5000,
        animationIn: 'element',
        animationOut: 'element-out'
    });

    return (
        <div className='w-44 flex flex-col gap-10'>
            <Button className='bg-black text-white mx-auto ' onClick={() => setIsVisible(!isVisible)}>Open Modal</Button>
            {shouldRender && (
                <div className={`w-40 h-40 bg-green-500 ${animationClass} `}>
                    Modal
                </div>
            )}
        </div>
    );
};
