"use client";

// react
import React, { useContext, useEffect, useRef } from "react";

//  typescript
import { HeadingProps, headingVariants } from "@/components/typography";

// utils
import { cn } from "@/lib/utils";

// components
import { ChevronDownIcon } from "@heroicons/react/20/solid";


// Types
interface AccordionContextProps {
    expand?: boolean;
    toggleExpand: () => void;
    padding: number;
}

export interface AccordionProps {
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    padding?: number;
}

interface AccordionHeaderProps extends HeadingProps{
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
}

interface AccordionContentProps {
    children: React.ReactNode;
}



// Accordion Context
const AccordionContext = React.createContext<AccordionContextProps>({
    expand: false,
    toggleExpand: () => { },
    padding: 2,
});


// Accordion
const Accordion: React.FC<AccordionProps> = ({ children, isOpen = false, onToggle = () => {}, padding = 2 }) => {
    const value = { expand: isOpen, toggleExpand: onToggle, padding };

    return (
        <AccordionContext.Provider value={value}  >
            <div className=" bg-gray-50 rounded-2xl border-2 border-gray-100 hover:border-white hover:drop-shadow">
                {children}
            </div>
        </AccordionContext.Provider>
    );
};


// Header
const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children, className, activeClassName, size = "xl", colorScheme = "default" }) => {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error(
            "AccordionHeader must be used within AccordionContext provider"
        );
    }

    const { toggleExpand, expand, padding } = context;
    const tailwindPadding = padding / 4;
    const headingClasses = headingVariants({ size, colorScheme });

    return (
        <button
            className={cn(
                'w-full inline-flex justify-between items-center',
                'transition-colors duration-300 ease-linear',
                className,
                headingClasses,
                `p-${tailwindPadding} `,
                `${expand ? `${activeClassName}` : ''}`,
            )}
            onClick={toggleExpand}
        >
            {children} <AccordionIcon />
        </button>
    );
};



// AccordionContent
const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => {
    const context = useContext(AccordionContext);
    const contentRef = useRef<HTMLDivElement>(null);

    const { expand, padding } = context;
    const tailwindPadding = padding / 4;

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = context.expand ? `${contentRef.current.scrollHeight + padding}px` : '0';
        }
    }, [context.expand]);

    if (!context) {
        throw new Error(
            "AccordionContent must be used within AccordionContext provider"
        );
    }

    return (
        <div ref={contentRef} className={cn('max-h-0 overflow-hidden transition-all duration-300 ease-out text-black',
            `px-${tailwindPadding}  `,
            `${expand ? `pb-${tailwindPadding}` : ''}`)}
        >
            {children}
        </div>
    );
};


// Icon 
const AccordionIcon = () => {
    const context = useContext(AccordionContext);
    const { expand } = context ?? { expand: false };

    return (
        <span>
            <ChevronDownIcon
                className={`fw-8 ml-auto h-8 transform transition-all duration-300 ${expand ? '-rotate-90' : ''}`}
            />
        </span>
    )
}

export { Accordion, AccordionHeader, AccordionContent };