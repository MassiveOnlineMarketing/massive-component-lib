"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";

import {
    Accordion,
    AccordionContent,
    AccordionHeader,
} from "@/app/accordion/accordion";

interface AccordionContainerProps {
    content: {
        header: string;
        content: string;
    }[];
}

const AccordionContainer: React.FC<AccordionContainerProps> = ({ content }) => {
    const [openAccordion, setOpenAccordion] = React.useState<number | null>(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)'})

    return (
        <div className="flex flex-col gap-4 mt-4 ">
            <div className="mx-auto flex flex-col gap-2 max-w-[950px]">
                <h1>Voorbeeld 1 </h1>
                {content.map((item, index) => (
                    <Accordion
                        key={index}
                        isOpen={index === openAccordion}
                        onToggle={() =>
                            setOpenAccordion(index !== openAccordion ? index : null)
                        }
                        padding={isMobile ? 16 : 32}
                    >
                        <AccordionHeader level='h3' size='xl' className="rounded-lg text-black" activeClassName='text-green-500' >{item.header}</AccordionHeader>
                        <AccordionContent>{item.content}</AccordionContent>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

export default AccordionContainer;
