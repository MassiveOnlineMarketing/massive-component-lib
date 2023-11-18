import React from "react";
import AccordionContainer from "./accordion-container";


const Page: React.FC = () => {

    return (
        <div className="grid justify-center w-full pt-[100px] h-screen bg-white p-8 px-8 pb-8">
            <AccordionContainer content={ACCORDION_DATA} />
        </div>
    )
}

export default Page;


const ACCORDION_DATA = [
    {header: 'header 1', content: 'content 1 ik probeer dit te veranderen met meer tekst zodat ik kan zien of het werkt of niet en of het goed is of niet daarvoor heb ik alleen wel meer tekst nodig'},
    {header: 'header 2', content: 'content 2 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum  doloremque, voluptatibus, quos quia quae quibusdam quod voluptates quas voluptate.'},
    {header: 'header 3', content: 'content 3'},
    {header: 'header 4', content: 'content 4'},
]