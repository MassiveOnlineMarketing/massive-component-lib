import ModalTest from './contact/contact-modal';


import "./contact/contact-modal.css"
import "./animations.css"
import { SimpleCompDisplay } from './simple-comp-display';
import ModalTestAnimation from './contact/contact-modal-animation';

export default function Page() {

    return (
        <div className="flex flex-col justify-center items-center h-full bg-white text-black">
            <ModalTest />

            <ModalTestAnimation />
            <SimpleCompDisplay />
        </div>
    )
}