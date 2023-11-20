'use client'

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { XMarkIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { ReactHookFormZod } from '../form/react-hook-form-zod';

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


                                <div className='grid md:grid-cols-2 h-full'>
                                    <div className='bg-green-500 hidden md:block'>
                                        c
                                    </div>

                                    <div className='p-4 md:p-10 flex flex-col'>
                                        <div className='flex gap-6'>
                                            <Button variant='icon' colorScheme='ghost' size='sm' className=' ml-auto' ><EnvelopeIcon className='h-5 w-5' />Direct contact</Button>
                                            <Button variant='icon' colorScheme='secondary' size='icon' onClick={handleClose}><XMarkIcon className='h-4 w-4' /></Button>
                                        </div>
                                        <ReactHookFormZod className="m-auto md:p-8" />
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