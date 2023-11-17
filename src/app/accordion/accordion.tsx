"use client";

import React, { useContext } from "react";

// Types
interface AccordionContextProps {
    expand?: boolean;
    toggleExpand: () => void;
}

interface AccordionProps {
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

interface AccordionHeaderProps {
    children: React.ReactNode;
}

interface AccordionContentProps {
    children: React.ReactNode;
}



// Accordion Context
const AccordionContext = React.createContext<AccordionContextProps>({
    expand: false,
    toggleExpand: () => {},
});


// Accordion
const Accordion: React.FC<AccordionProps> = ({ children, isOpen, onToggle }) => {
    const value = { expand: isOpen, toggleExpand: onToggle };

    return (
        <AccordionContext.Provider value={value}>
            {children}
        </AccordionContext.Provider>
        
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

    const { toggleExpand } = context;

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