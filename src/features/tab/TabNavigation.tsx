'use client'

import React, { useEffect, useRef } from "react";
import { useTab } from "./TabContext";

interface TabTitleProps {
  children: React.ReactNode;
  id: number;
}

const TabTitle: React.FC<TabTitleProps> = ({ children, id }) => {
  const { activeTab, setActiveTab, updateTabWidth } = useTab();
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabRef.current) {
      updateTabWidth(id, tabRef.current.offsetWidth);
    }
  }, [id]);
  

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

const TabTitleV2: React.FC<TabTitleProps> = ({ children, id }) => {
  const { activeTab, setActiveTab, updateTabWidth } = useTab();
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabRef.current) {
      updateTabWidth(id, tabRef.current.offsetWidth);
    }
  }, [id]);
  

  return (
      <div
          ref={tabRef}
          className={`cursor-pointer px-4 ${activeTab === id ? 'text-primary' : ''}`}
          onClick={() => setActiveTab(id)}
      >
          {children}
      </div>
  ); 
};



const TabIndicator = ({ gapSize }: {gapSize: number}) => {
  const { tabWidths, activeTab } = useTab();

  let leftPosition = gapSize * (activeTab - 1);
  for (let i = 0; i < activeTab - 1; i++) {
    leftPosition += tabWidths[i] || 0;
  }


  return (
      <div
          className="hori-selector "
          style={{ left: `${leftPosition}px`, width: `${tabWidths[activeTab - 1] || 0}px` }}
      >
          <div className=" left " ></div>
          <div className=" right "></div>
      </div>
  );
};


const TabIndicatorAnimated = ({ gapSize }: {gapSize: number}) => {
  const { tabWidths, activeTab } = useTab();

  let leftPosition = gapSize * (activeTab - 1);
  for (let i = 0; i < activeTab - 1; i++) {
    leftPosition += tabWidths[i] || 0;
  }


  return (
      <div
          className="inline-block absolute h-full left-0 transition-all duration-200 ease-in-out border-b border-primary"
          style={{ left: `${leftPosition}px`, width: `${tabWidths[activeTab - 1] || 0}px` }}
      >
      </div>
  );
};


const TabIndicatorLine = ({ gapSize }: {gapSize: number}) => {
  const { tabWidths, activeTab } = useTab();

  let leftPosition = gapSize * (activeTab - 1);
  for (let i = 0; i < activeTab - 1; i++) {
    leftPosition += tabWidths[i] || 0;
  }
  
  return (
    <div
      className="border-b-2 border-blue-500 absolute bottom-0"
      style={{ left: `${leftPosition}px`, width: `${tabWidths[activeTab - 1] || 0}px` }}
    >
    </div>
  );
};


export { TabTitle, TabTitleV2, TabIndicator, TabIndicatorAnimated, TabIndicatorLine };
