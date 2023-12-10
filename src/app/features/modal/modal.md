'use client'

import React, { useState } from 'react';

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
                <div className={`modal-frame state-${isOpen ? 'appear' : 'leave'}`}>
                    {/* modal-full */}
                    <div className="modal w-full h-full">
                        <div className="modal-inset h-full">
                            <div className="button close" onClick={handleClose}><i className="fa fa-close">X</i></div>
                            <div className="modal-body">
                               <div className='grid md:grid-cols-2'>
                                <div className='bg-green-500'>
                                    c
                                </div>

                                <div className='bg-blue-500'>
c
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




.modal-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  margin: auto;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
  z-index: 40;
  transition: opacity .25s ease 0s, visibility linear .35s;
}

.modal-overlay.state-show {
  opacity: .7;
  visibility: visible;
  transition-delay: 0s;
  transition-duration: .2s, 0s;
}

.modal-frame {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  margin: auto;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  visibility: hidden;
}

.modal-frame.state-appear {
  visibility: visible;
}

.modal-frame.state-appear .modal-inset {
  animation: modalComeIn .25s ease;
  visibility: visible;
}

.modal-frame.state-appear .modal-body {
  opacity: 1;
  transform: translateY(0) scale(1,1);
}

.modal-frame.state-leave {
  visibility: visible;
}

.modal-frame.state-leave .modal-inset {
  animation: modalHeadOut .35s ease .1s;
  visibility: visible;
}

.modal-frame.state-leave .modal-body {
  opacity: 0;
  transition-delay: 0s;
  transition-duration: .35s;
  transition-timing-function: ease;
  transform: translateY(25px);
}

@-moz-document url-prefix() {
  .modal-frame {
      height: calc(100% - 55px);
  }
}

.modal {
  display: block;
  vertical-align: middle;
  text-align: center;
}

.modal-inset {
  position: relative;
  padding: 60px;
  background-color: white;
  min-width: 320px;
  min-height: 126px;
  margin: auto;
  visibility: hidden;
  box-shadow: 2px 2px 8px 1px rgba(0,0,0,.2);
  backface-visibility: hidden;
  transform: translate3d(0,0,0);
  transform-style: preserve-3d;
}

.modal-inset .close {
  display: block;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  opacity: .4;
}

.modal-inset .close:hover {
  opacity: 1;
}

.modal-body {
  margin: auto;
  opacity: 0;
  transform: translateY(0) scale(.8, .8);
  transition-property: opacity, transform;
  transition-duration: .25s;
  transition-delay: .1s;
}


@keyframes modalComeIn {
  0% {
    visibility: hidden;
    opacity: 0;
    transform: scale(.8, .8);
  }
  65.5% {
    transform: scale(1, 1);
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: scale(1, 1);
  }
}

@keyframes modalHeadOut {
  0% {
    visibility: visible;
    opacity: 1;
    transform: translateY(0) scale(1, 1);
  }
  100% {
    visibility: hidden;
    opacity: 0;
    transform: translateY(35px) scale(.97, .97);
  }
}