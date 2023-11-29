import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority";



// imports for the card
import { RectangleGroupIcon } from "@heroicons/react/20/solid";
import { Heading, Paragraph } from '@/components/typography';

const StyledCard: React.FC = () => {

  return (
    <Card className='p-10 bg-white rounded-2xl' transition='transition-all duration-500 hover:bg-green-500 hover:-translate-y-4'>
      <Icon color='accent' border='accent' background='donker' varient='rounded' className='p-2' >
        <RectangleGroupIcon className='w-8 ' />
      </Icon>
      <Heading level='h2' size='2xl' colorScheme='default' highlight='Website' colorSchemeHighlight='accent' transition='group-hover:text-blue-500 duration-500'>Zakelijke Website</Heading>
      <Paragraph size='lg' colorScheme='default' >Transformeer uw zakelijke visie, laat nu een professionele, op maat gemaakte website bouwen die even indrukwekkend is als uw</Paragraph>
    </Card>
  )
}


// Type for Cards
export type CardProps = {
  children: React.ReactNode;
  className?: string;
  transition?: string;
};

// Type for Icon 
export type IconProps = VariantProps<typeof iconVariants> & {
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
      className,
      transition,
  }) => {
  
  return (
    <div className={cn(
      'flex flex-col gap-8 p-2 bg-blue-500',
      className,
      `group ${transition}`
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


export { Card, Icon, StyledCard };