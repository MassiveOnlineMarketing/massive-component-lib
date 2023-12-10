"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";

import {
    // Accordion,
    // AccordionContent,
    // AccordionHeader,
    AccordionProps,
} from "@/app/features/accordion/_test/accordion";

// interface AccordionContainerProps {
//     content: {
//         header: string;
//         content: string;
//     }[];
// }

// const AccordionContainer: React.FC<AccordionContainerProps> = ({ content }) => {
//     const [openAccordion, setOpenAccordion] = React.useState<number | null>(null);
//     const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

//     return (
//         <>
//             <div className="mx-auto flex flex-col gap-2 max-w-[950px]">

//                 {content.map((item, index) => (
//                     <Accordion
//                         key={index}
//                         isOpen={index === openAccordion}
//                         onToggle={() =>
//                             setOpenAccordion(index !== openAccordion ? index : null)
//                         }
//                         padding={isMobile ? 16 : 32}
//                     >
//                         <AccordionHeader level='h3' size='xl' className="rounded-lg text-black" activeClassName='text-green-500' >{item.header}</AccordionHeader>
//                         <AccordionContent>{item.content}</AccordionContent>
//                     </Accordion>
//                 ))}

//             </div>
//         </>
//     );
// };


const AccordionContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [openAccordion, setOpenAccordion] = React.useState<number | null>(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const clonedChildren = React.Children.map(children, (child, index) => {
        if (React.isValidElement<AccordionProps>(child)) {
            return React.cloneElement(child, {
                isOpen: index === openAccordion,
                onToggle: () => setOpenAccordion(index !== openAccordion ? index : null),
                padding: isMobile ? 16 : 32,
            });
        }
        return child;
    });
    

    return (
        <div className="mx-auto flex flex-col gap-2 max-w-[950px]">
            {clonedChildren}
        </div>
    );
};


export default AccordionContainer;
