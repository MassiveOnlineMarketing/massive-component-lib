import React from 'react'
import Title from '../../typography/title'
import { Heading, Paragraph } from '@/components/typography'
import { ResponsiveGridContainer } from '@/components/containers'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

export default function Feature_4() {
  return (
    <div className='py-[100px] '>
      <Title className='max-w-[732px] mx-auto text-center'>
        <Heading level="h1" size="5xl" colorScheme="default" className='text-white'>{FEATURE_4.title.heading}</Heading>
        <Paragraph size='base' colorScheme='default' className='text-white'>{FEATURE_4.title.text}</Paragraph>
      </Title>
      <ResponsiveGridContainer columns='3' className='gap-8 max-w-[1100px] mx-auto pt-7 md:pt-14 text-white' >
        {FEATURE_4.features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center border-2 border-white rounded-xl pt-16 px-14 pb-20">
            <div className="h-10 w-10">
              {feature.icon}
            </div>
            <div>
              <Heading level="h3" size="sm" colorScheme="gradient-primary" className='pt-[26px] text-white'>{feature.heading}</Heading>
              <Paragraph size='base' colorScheme='default' className='pt-[18px] text-white' >{feature.text}</Paragraph>
              <Button variant='primary' size='lg' option='rounded' className='mt-10'>Learn More</Button>
            </div>
          </div>
        ))}
      </ResponsiveGridContainer>

    </div>
  )
}

const FEATURE_4 = {
  title: {
    heading: 'Features',
    text: 'We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.'
  },
  features: [
    { icon: <DocumentDuplicateIcon />, heading: 'Easy to Use', text: 'To get started, you select the desired sample and base the entire website on it. It’s that simple!' },
    { icon: <DocumentDuplicateIcon />, heading: 'Variety of Designs', text: 'You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations.' },
    { icon: <DocumentDuplicateIcon />, heading: 'Feel Our Design', text: 'Samples will show you the feeling on how to play around using the components in the website building process.' },
  ]

}