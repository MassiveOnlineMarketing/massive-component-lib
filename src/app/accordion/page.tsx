import React from "react";
import AccordionContainer from "./accordion-container";


const Page: React.FC = () => {

    return (
        <div className="grid justify-center w-full pt-[100px]">
            <AccordionContainer content={ACCORDION_DATA} />
        </div>
    )
}

export default Page;


const ACCORDION_DATA = [
    {header: 'header 1', content: 'content 1'},
    {header: 'header 2', content: 'content 2'},
    {header: 'header 3', content: 'content 3'},
    {header: 'header 4', content: 'content 4'},
]