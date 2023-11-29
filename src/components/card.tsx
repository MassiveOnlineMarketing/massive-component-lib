import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority";

// Type for Cards
export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

// Type for Icon 
type IconProps = VariantProps<typeof iconVariants> & {
  children: React.ReactNode;
  className?: string;
};



export const iconVariants = cva(
  "",
  {
      defaultVariants: {
      color: "default",
      },
      variants: {
      color: {
          default: "text-gray-900 dark:text-gray-100",
          muted: "text-gray-600 dark:text-gray-400",
          accent: "text-indigo-600 dark:text-indigo-400",
          donker: "text-[#1F2937]"
      },
      border: {
          default: "border border-gray-900 dark:border-gray-100",
          muted: "border border-gray-600 dark:border-gray-400",
          accent: "border border-indigo-600 dark:border-indigo-400",
          donker: "border border-[#1F2937]"
      },
      background: {
          default: "bg-gray-900 dark:bg-gray-100",
          muted: "bg-gray-600 dark:bg-gray-400",
          accent: "bg-indigo-600 dark:bg-indigo-400",
          donker: "bg-[#1F2937]"
      },
      varient: {
          'rounded': "rounded-lg",
          'rounded-full': "rounded-full",
      },
    },
  }
);




const Card: React.FC<CardProps> = (
  {
      children,
      className
  }) => {
  
  return (
    <div className={cn(
      'flex flex-col gap-8 p-2 bg-blue-500',
      className
    )}>
      {children}
    </div>
  )
}


const Icon: React.FC<IconProps> = (
  {
    children,
    color,
    border,
    background,
    varient,
    className
  }) => {

  const iconClasses = iconVariants({ color, border, background, varient })

  return (
    <div className={cn(
        'w-fit',
        iconClasses,
        className,
      )}
    >
      {children}
    </div>
  )
}


export { Card, Icon };