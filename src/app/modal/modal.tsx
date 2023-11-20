"use client"

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
    const [visible, setVisible] = useState(isOpen);
    const timerRef = useRef<null | NodeJS.Timeout>(null);


    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            setVisible(false);
        }

        return () => {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
            }
        }
    }, [isOpen]);

    const handleClose = () => {
        setVisible(false);
        timerRef.current = setTimeout(onClose, 500);
    };


    if (!isOpen) return null;



    return (
        <div className="modal fixed flex justify-center items-center z-40 inset-0 p-6">
            <div
                className={`bg-white opacity-0 p-4 md:p-8 max-w-[1000px] w-[95%] max-h-[900px] h-[95%] relative z-50 rounded-xl overflow-y-scroll ${visible ? "animate-modal-opacity-in" : "animate-modal-opacity-out"}`}
            >
                {children}
                <button className="absolute top-8 right-8" onClick={handleClose}>
                    <XMarkIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}

export default Modal;
