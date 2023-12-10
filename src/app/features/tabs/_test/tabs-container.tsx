"use client";

import React, { useState } from 'react';
import { TabContent, TabTitle, TabsContext, TabIndicator } from './tabs';

import AccordionContainer from '@/app/features/accordion/_test/accordion-container';

interface TabsContainerProps {
    content: TabItems[];
}

interface TabItems {
    id: number;
    title: string;
    content: AccodionItems[];
}

interface AccodionItems {
    header: string;
    content: string
} 

const TabsContainer: React.FC<TabsContainerProps> = ({ content }) => {
    const [activeTab, setActiveTab] = useState<number>(1);
    const [tabWidth, setTabWidth] = useState(0);

    const gapSize = 16;

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab, tabWidth, setTabWidth }}>

            <div className="flex relative gap-4 overflow-hidden">
            {/* <div className="hori-selector" ><div className="left"></div><div className="right"></div></div> */}
            <TabIndicator activeTab={activeTab} totalTabs={content.length} tabWidth={tabWidth} gapSize={gapSize} />
                {content.map((item) => (
                    <TabTitle key={item.id} id={item.id}>{item.title}</TabTitle>
                ))}
            </div>


            {content.map((item) => (
                <TabContent key={item.id} id={item.id} className=" rounded-b-md bg-white color-black" >
                    {/* {item.content} */}
                    {/* <AccordionContainer content={item.content} /> */}
                    <h1 className='text-black'> { item.id } </h1>
                </TabContent>
            ))}

        </TabsContext.Provider>
    );
};

export default TabsContainer;
