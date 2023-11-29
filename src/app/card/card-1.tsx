import { Heading } from '@/components/typography'
import { Button } from '@/components/ui/button'
import React from 'react'
import { RectangleGroupIcon } from "@heroicons/react/20/solid";


import { SimpleListItem, UnOrderedList } from '@/components/lists/un-ordered-list';
import { SwipeGridIconsText } from '@/components/lists/un-ordered-list';
import { RoundPurpleCheckmark } from '@/assets/icons';
import { Icon } from '@/components/card';

export const CardOne = () => {
    return (
        <div>
            <div className='flex flex-col gap-8 p-10 border border-green-500'>
                <Icon color='accent' border='accent' background='donker' varient='rounded' className='p-2' >
                    <RectangleGroupIcon className='w-8' />
                </Icon>
                
                <Heading level='h2' size='2xl' colorScheme='default' highlight='Website' colorSchemeHighlight='accent'>Zakelijke Website</Heading>
                
                <p>paragraaf</p>

                <UnOrderedList items={TEST_DATA} listComponent={SimpleListItem} />
                <UnOrderedList items={TEST_DATA} listComponent={(item) => <SimpleListItem className="bg-blue-500 p-4" {...item} />} />

                <Button size='xl' colorScheme='outline'>Neem Contact op</Button>
            </div>
        </div>
    )
}


  








const TEST_DATA = [
    { icon: <RoundPurpleCheckmark />, text: 'Website' },
    { icon: <RoundPurpleCheckmark />, text: 'Op Maat Gemaakr' },
    { icon: <RoundPurpleCheckmark />, text: 'Analytische Inzichten' },
    { icon: <RoundPurpleCheckmark />, text: 'Beveiligd en Snel' },
    { icon: <RoundPurpleCheckmark />, text: 'Ondersteuning en Onderhoud' },
]