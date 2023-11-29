
import { cn } from "@/lib/utils"
import { responsiveContainer } from "./responsive-container"
import { VariantProps, cva } from "class-variance-authority"

type responsiveGridContainer = VariantProps<typeof responsiveContainerVariants> & responsiveContainer  
  

export const ResponsiveGridContainer: React.FC<responsiveGridContainer> = (
  { 
    className, 
    children, 
    columns 
  }) => {

  return (
      <div className={cn(
        // Breakpoints REQUIRED breakpoint in tailwind.config.js
        'xs:max-w-[475px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]',
        // Container styles
        'w-full mx-auto px-4 xs:px-0 border border-red-500 ',
        responsiveContainerVariants({ columns }),
        className
      )}>
        {children}
      </div>
  )
}


export const responsiveContainerVariants = cva(
  "grid",
  {
    defaultVariants: {
      columns: "2",
    },
    variants: {
      columns: {
        '2': "grid-cols-2",	
        '3': "md:grid-cols-2 xl:grid-cols-3",
        '4': "grid-cols-4",
        '5': "grid-cols-5",
        '6': "grid-cols-6",
      },
    },
  }
);