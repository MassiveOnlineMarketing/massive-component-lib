'use client'

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MultiStepContactForm } from './contact-form';

function ModalTest() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button className="fancy-btn open" onClick={handleOpen}>Can I haz Modal?</button>

            {isOpen && (
                <div className={`modal-frame h-full state-${isOpen ? 'appear' : 'leave'}`}>
                    {/* modal-full */}
                    <div className="modal w-full h-full">
                        <div className="modal-inset h-full">
                            <div className="modal-body h-full">


                                <div className='flex h-full flex-col lg:flex-row'>
                                    <div className='bg-green-500 hidden md:block w-full xl:w-1/2'>
                                        beetje text
                                    </div>
                                    <div className='p-4 md:p-10 xl:flex xl:flex-col lg:min-w-[750px] xl:w-1/2'>
                                        
                                        {/* handleClose={handleClose} */}
                                        <MultiStepContactForm className="m-auto"  >
                                            <Button option='icon' variant='outline' onClick={handleClose}><XMarkIcon className='h-4 w-4' /></Button>
                                        </MultiStepContactForm>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isOpen && <div className={`modal-overlay state-${isOpen ? 'show' : ''}`}></div>}
        </div>
    );
}

export default ModalTest;