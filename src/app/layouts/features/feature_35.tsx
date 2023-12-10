import { ResponsiveContainer, ResponsiveGridContainer } from '@/components/containers'
import { Heading, Paragraph } from '@/components/typography'
import { DiamondIcon } from 'lucide-react'
import { BellAlertIcon, DocumentDuplicateIcon, FunnelIcon, HandRaisedIcon, UserPlusIcon } from '@heroicons/react/24/outline'

import React from 'react'
import { Button } from '@/components/ui/button'

export default function Feature_35() {
  return (
    <div className='my-[100px] '>
      <ResponsiveGridContainer columns='3' className=" gap-[62px] mt-12 md:mt-24 px-5 max-w-[1137px] mx-auto border-none">
        {FEATURE_35.map((feature, index) => (
          <div key={index} className="flex flex-col ">
            <div className="h-10 w-10">
              {feature.icon}
            </div>
            <div>
              <Heading level="h3" size="sm" colorScheme="gradient-primary" className='pt-[26px]'>{feature.heading}</Heading>
              <Paragraph size='base' colorScheme='default' className='pt-[18px]' >{feature.text}</Paragraph>
            </div>
          </div>
        ))}
      </ResponsiveGridContainer>
      <Button variant='outline' size='lg' option='rounded' className='flex mx-auto mt-10 md:mt-20' >Explore all Feautures</Button>
    </div>
  )
}


const FEATURE_35 = [
  { icon: <DiamondIcon />, heading: 'Sketch Version', text: 'We made everythings for your comfortable work in Sketch.' },
  { icon: <DocumentDuplicateIcon />, heading: '30 New Feature Pages', text: 'A child was brought in, who had swallowed a necklace o towards made.' },
  { icon: <DocumentDuplicateIcon />, heading: 'Well Organized', text: 'She clutched the matron by the arm, and forcing her into a chair by the bedside.' },
  { icon: <BellAlertIcon />, heading: 'HTML5 ', text: 'HTML layout is based on one of the most common and framework - Bootstrap.' },
  { icon: <UserPlusIcon />, heading: 'Pixel Perfect Design', text: 'They made signs for me to come down from the rock, and go towards the shore.' },
  { icon: <FunnelIcon />, heading: 'Free Google Fonts', text: 'Startup Framework works fine on devices supporting Retina Desplay.' },
]