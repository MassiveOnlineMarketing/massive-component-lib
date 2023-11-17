"use client";

import React, { createContext, useContext } from "react";
import { useToggle } from "@/hooks/useToggle";

// Types
interface AccordionContextProps {
    expand?: boolean;
    toggleExpand: () => void;
}

interface AccordionProps {
    title: string;
    content: string;
}

interface AccordionHeaderProps {
    children: React.ReactNode;
}

interface AccordionContentProps {
    children: React.ReactNode;
}


// Accoriodn Context
const AccordionContext = createContext<AccordionContextProps | undefined>(
    undefined
);
const { Provider } = AccordionContext;



// Accordion
const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const { status: expand, toggleStatus: toggleExpand } = useToggle();
    const value = {
        expand,
        toggleExpand,
    };

    return (
        <Provider value={value}>
            <div className=" w-40">
                <AccordionHeader>{title}</AccordionHeader>
                <AccordionContent>{content}</AccordionContent>
            </div>
        </Provider>
    );
};


// Header
const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children }) => {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error(
            "AccordionHeader must be used within AccordionContext provider"
        );
    }

    const { expand, toggleExpand } = context;

    return (
        <button
            className="p-4 bg-white text-black w-full inline-flex justify-between rounded-lg"
            onClick={toggleExpand}
        >
            {children} <AccordionIcon />
        </button>
    );
};




// Content
const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error(
            "AccordionContent must be used within AccordionContext provider"
        );
    }

    const { expand } = context;

    return <>{expand && <div className="px-4 pb-4">{children}</ div>}</>;
};



// Icon 
const AccordionIcon = () => {
    const context = useContext(AccordionContext);
    const { expand } = context ?? { expand: false };


    return (
        <span>{expand ? "-" : "+"}</span>
    )
}

export { Accordion, AccordionHeader, AccordionContent};