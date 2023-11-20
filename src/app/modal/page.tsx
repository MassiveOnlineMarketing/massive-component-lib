'use client';

import React, { useState } from 'react'
import Modal from "./modal"
import ModalTest from './test-modal';

export default function Page() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center h-full bg-white text-black">
            {/* <button className='bg-green-500' onClick={() => setIsOpen(true)}>
                Open Modal
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <p>hallo</p>

            </Modal> */}

            <ModalTest />
        </div>
    )
}