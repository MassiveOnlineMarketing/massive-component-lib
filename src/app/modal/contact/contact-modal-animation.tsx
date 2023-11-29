'use client'

import { Button } from '@/components/ui/button';
import React from 'react';
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MultiStepContactForm } from './contact-form';
import useAnimatedVisibility from '../CUSTOMHOOKuseAnimatedVisibility';

function ModalTestAnimation() {
    const { isVisible, setIsVisible, shouldRender, animationClass } = useAnimatedVisibility({
        initialIsVisible: false,
        animationDuration: 500,
        animationIn: 'element',
        animationOut: 'element-out'
    });

    return (
        <div>
            <button onClick={() => setIsVisible(true)}>Can I haz Modal?</button>

            {shouldRender && (
                
                // navbar height aan top toevoegen
                <div className='absolute w-full h-full-minus-56 top-14 left-0 z-50'>
                    <div className={`flex h-full flex-col lg:flex-row ${animationClass} `}>
                        <div className='bg-green-500 hidden md:block w-full xl:w-1/2'>
                            beetje text
                        </div>
                        <div className='p-4 md:p-10 xl:flex xl:flex-col lg:min-w-[750px] xl:w-1/2 bg-white'>
                            <MultiStepContactForm className="m-auto" >
                                <Button variant='icon' colorScheme='secondary' size='icon' onClick={() => setIsVisible(false)}><XMarkIcon className='h-4 w-4' /></Button>
                            </MultiStepContactForm>
                        </div>
                    </div>

                </div>
                


            )}

            {/* {shouldRender && <div className={`modal-overlay state-${shouldRender ? 'show' : ''}`}></div>} */}
        </div>
    );
}

export default ModalTestAnimation;