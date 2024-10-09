import React from "react";
import TabsContainer from "./_test/tabs-container";

import "./tabs.css"
import { TabContainer, TabContent, TabIndicator, TabTitle, TabIndicatorLine } from "@/features/tab";
import { TabIndicatorAnimated, TabTitleV2 } from "@/features/tab/TabNavigation";


const Page: React.FC = () => {

    return (
        <div className="grid justify-center w-full pt-[100px] h-screen text-black">
            {/* <TabsContainer content={TABS_DATA} /> */}
            {/* <p>test</p> */}
            <div >
                <TabContainer> 
                    <div className="flex relative gap-4 overflow-hidden  mb-4">
                        <TabTitleV2 id={1}>Tab nummer 1</TabTitleV2>
                        <TabTitleV2 id={2}>Tab 2s</TabTitleV2>
                        <TabTitleV2 id={3}>Ta 3</TabTitleV2>
                        <TabTitleV2 id={4}>Laatste tab in de tabs</TabTitleV2>
                        <TabIndicatorAnimated gapSize={12} />
                    </div>

                    <div className="bg-white text-black border-green-500 border">
                        <TabContent id={1}> <h1>Tab 1</h1> </TabContent>
                        <TabContent id={2}> <h1>Tab 2</h1> </TabContent>
                        <TabContent id={3}> <h1>Tab 3</h1> </TabContent>
                        <TabContent id={4}> <h1>Tab 4</h1> </TabContent>
                    </div>
                </TabContainer>
            </div>
        </div>
    )
}

export default Page;

const TABS_DATA = [
    {
        id: 1,
        title: "Tab nummer 1",
        content: [
            {header: 'header 1', content: 'content 1'},
            {header: 'header 2', content: 'content 2'},
            {header: 'header 3', content: 'content 3'},
            {header: 'header 4', content: 'content 4'},
        ]
    },
    {
        id: 2,
        title: "Tab 2s",
        content: [
            {header: 'header 1 1', content: 'content 1 1'},
            {header: 'header 1 2', content: 'content 1 2'},
            {header: 'header 1 3', content: 'content 1 3'},
            {header: 'header 1 4', content: 'content 1 4'},
        ]
    },
    {
        id: 3,
        title: "Ta 3",
        content: [
            {header: 'header 2 1', content: 'content 2 1'},
            {header: 'header 2 2', content: 'content 2 2'},
            {header: 'header 2 3', content: 'content 2 3'},
            {header: 'header 2 4', content: 'content 2 4'},
        ]
    },
    {
        id: 4,
        title: "Laatste Tab in de Tabs",
        content: [
            {header: 'header 3 1', content: 'content 3 1'},
            {header: 'header 3 2', content: 'content 3 2'},
            {header: 'header 3 3', content: 'content 3 3'},
            {header: 'header 3 4', content: 'content 3 4'},
        ]
    },
]