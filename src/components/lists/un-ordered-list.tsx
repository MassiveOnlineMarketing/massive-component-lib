import { cn } from '@/lib/utils'
import React from 'react'

type UnOrderedListProps = {
    items: Array<{ icon: React.ReactNode, text: string }>,
    listComponent: React.FC<ListItemProps>
    className?: string
}

const UnOrderedList: React.FC<UnOrderedListProps> = ({
    items,
    listComponent: ListComponent,
    className
}) => {
    return (
        <ul
            className={cn(
                'flex flex-col gap-4',
                className
            )}
        >
            {items.map((item, index) => (
                <ListComponent
                    key={index}
                    item={item}
                />
            ))}
        </ul>
    )
}

type ListItemProps = {
    item: {
        icon: React.ReactNode,
        heading?: string,
        text: string
    }
    className?: string
}

const SimpleListItem = ({ item, className }: ListItemProps) => {
    const { icon, text } = item
    return (
        <li
            className={cn(
                'flex gap-1 items-center',
                className
            )}
        >
            {icon}
            <p>{text}</p>
        </li>
    )
}


const SwipeGridIconsText = ({ item }: ListItemProps) => {
    const { icon, text } = item
    return (
        <li
            className={`flex h-full w-full flex-col items-center justify-center gap-5 rounded-lg shadow-sm py-6 backdrop-blur bg-white/60  border border-solid border-white/10`}
        >
            {icon}
            <h3 className='text-[12px] font-semibold'>{text}</h3>
        </li>
    )
}



type HoerenProps = {
    item: {
        icon: React.ReactNode;
        heading?: string;
        text: string;
    }
    className?: string;
    iconClassName?: string;
}

const HOEREN = ({ item, className, iconClassName }: HoerenProps) => {
    const { icon, heading, text } = item;

    return (
        <li className={cn(
            className,
        )} >
            <div
                className={cn(
                    iconClassName,
                )}
            >
                {icon}
            </div>
            <div>
                <h3 className='text-lg md:text-2xl md:leading-8 font-semibold  '>{heading}</h3>
                <p className={`pt-2 `}>{text}</p>
            </div>
        </li>
    );
}

export { SwipeGridIconsText, UnOrderedList, SimpleListItem, HOEREN }
