import React from "react";
import TabsContainer from "./tabs-container";

import "@/app/tabs/tabs.css"


const Page: React.FC = () => {

    return (
        <div className="grid justify-center w-full pt-[100px] bg-black text-white">
            <TabsContainer content={TABS_DATA} />
            <p>test</p>
        </div>
    )
}

export default Page;

const TABS_DATA = [
    {
        id: 1,
        title: "Tab 1",
        content: [
            {header: 'header 1', content: 'content 1'},
            {header: 'header 2', content: 'content 2'},
            {header: 'header 3', content: 'content 3'},
            {header: 'header 4', content: 'content 4'},
        ]
    },
    {
        id: 2,
        title: "Tab 2",
        content: [
            {header: 'header 1 1', content: 'content 1 1'},
            {header: 'header 1 2', content: 'content 1 2'},
            {header: 'header 1 3', content: 'content 1 3'},
            {header: 'header 1 4', content: 'content 1 4'},
        ]
    },
    {
        id: 3,
        title: "Tab 3",
        content: [
            {header: 'header 2 1', content: 'content 2 1'},
            {header: 'header 2 2', content: 'content 2 2'},
            {header: 'header 2 3', content: 'content 2 3'},
            {header: 'header 2 4', content: 'content 2 4'},
        ]
    },
    {
        id: 4,
        title: "Tab 4",
        content: [
            {header: 'header 3 1', content: 'content 3 1'},
            {header: 'header 3 2', content: 'content 3 2'},
            {header: 'header 3 3', content: 'content 3 3'},
            {header: 'header 3 4', content: 'content 3 4'},
        ]
    },
]