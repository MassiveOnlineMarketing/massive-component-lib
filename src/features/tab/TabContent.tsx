'use client'

import { cn } from "@/lib/utils";
import { useTab } from "./TabContext";



interface TabContentProps {
  children: React.ReactNode;
  id: number;
  className?: string;
}

const TabContent: React.FC<TabContentProps> = ({ children, id, className }) => {
  const { activeTab } = useTab();

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

export { TabContent }