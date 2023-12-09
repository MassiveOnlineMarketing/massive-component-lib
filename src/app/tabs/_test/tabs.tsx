import { cn } from "@/lib/utils";
import React, { createContext, useContext, useEffect, useRef } from "react";


interface TabsContextProps {
    activeTab: number;
    setActiveTab: (id: number) => void;
    tabWidth: number;
    setTabWidth: (width: number) => void;
}

interface TabTitleProps {
    children: React.ReactNode;
    id: number;
}

interface TabContentProps {
    children: React.ReactNode;
    id: number;
    className?: string;
}

interface TabIndicatorProps {
    activeTab: number;
    totalTabs: number;
    tabWidth: number;
    gapSize: number;
}



const TabsContext = createContext<TabsContextProps>({
    activeTab: 1,
    setActiveTab: () => { },
    tabWidth: 0,
    setTabWidth: () => { },
});

const TabTitle: React.FC<TabTitleProps> = ({ children, id }) => {
    const { activeTab, setActiveTab, setTabWidth } = useContext(TabsContext);
    const tabRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tabRef.current) {
            setTabWidth(tabRef.current.offsetWidth);
        }
    }, []);

    return (
        <div
            ref={tabRef}
            className={`cursor-pointer px-2 tab ${activeTab === id ? 'active-tab  rounded-t-md text-black' : ' rounded-b-md'}`}
            onClick={() => setActiveTab(id)}
        >
            {children}
        </div>
    ); 
};


const TabContent: React.FC<TabContentProps> = ({ children, id, className }) => {
    const { activeTab } = useContext(TabsContext);

    return (
        <div className={cn(
            className,
            ` ${activeTab === id ? "block" : 'hidden'}`
        )}
        >
            {children}
        </div>
    );
};


const TabIndicator: React.FC<TabIndicatorProps> = ({ activeTab, tabWidth, gapSize }) => {
    const leftPosition = (tabWidth + gapSize) * (activeTab - 1);


    return (
        <div
            className="hori-selector "
            style={{ left: `${leftPosition}px`, width: `${tabWidth}px` }}
        >
            <div className=" left " ></div>
            <div className=" right "></div>
        </div>
    );
};

export { TabsContext, TabTitle, TabContent, TabIndicator }