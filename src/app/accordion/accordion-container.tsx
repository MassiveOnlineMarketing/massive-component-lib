"use client"

import React from "react";
import { Accordion, AccordionContent, AccordionHeader } from "@/app/accordion/accordion";

interface AccordionItems {
    header: string;
    content: string;
}

interface AccordionContainerProps {
    content: AccordionItems[];
}

const AccordionContainer: React.FC<AccordionContainerProps> = ({ content }) => {
    const [ openAccordion, setOpenAccordion ] = React.useState<number | null>(null);

    return (
        <div className="flex flex-col gap-4 mt-4 ">
            {content.map((item, index) => (
                <Accordion 
                    key={index}
                    isOpen={index === openAccordion}
                    onToggle={() => setOpenAccordion(index !== openAccordion ? index : null)}
                >
                    <AccordionHeader>{item.header}</AccordionHeader>
                    <AccordionContent>{item.content}</AccordionContent>
                </Accordion>            
            ))}
        </div>
    )
}

export default AccordionContainer;