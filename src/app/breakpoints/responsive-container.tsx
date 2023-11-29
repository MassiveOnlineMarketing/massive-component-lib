import { cn } from "@/lib/utils"

export type responsiveContainer = {
  className?: string
  children: React.ReactNode
}


export const ResponsiveContainer: React.FC<responsiveContainer> = ({ className, children }) => {

  return (
      <div className={cn(
        'container bg-yellow-500',
        className
      )}>
        {children}
      </div>
  )
}