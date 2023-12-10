import { ResponsiveGridContainer } from '@/components/containers'
import { Heading, Paragraph } from '@/components/typography'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function Feature_16() {
  return (
    <div className='my-[100px] max-w-[848px] mx-auto flex flex-col px-5'>
      <Heading level="h1" size="5xl" colorScheme="gradient-primary" className='text-center'>{FEATURE_16.title.heading}</Heading>
      <Paragraph size='base' colorScheme='default' className='text-center pt-4 md:pt-8' >{FEATURE_16.title.text}</Paragraph>
      <Image src="/hero-iphone-x-clay-2.png" alt="Picture of the author" className=' mx-auto pt-7 md:pt-14' width={772} height={387} />
      <ResponsiveGridContainer columns='2' className='pt-8 md:pt-16 md:gap-14 '>
        {FEATURE_16.features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-[315px] mx-auto">
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
    </div>
  )
}



const FEATURE_16 = {
  title: {
    heading: 'Better design for your content',
    text: 'Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions.'
  },
  features: [
    { icon: <DocumentDuplicateIcon />, heading: 'Retina Ready', text: 'Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!'},
    { icon: <DocumentDuplicateIcon />, heading: 'Happy Customers', text: 'We’re super proud to share the fact that Startup has a whopping 97% customer satisfaction rate.'},
    { icon: <DocumentDuplicateIcon />, heading: 'Feel Our Design', text: 'Samples will show you the feeling on how to play around using the components in the website building process.'},
    { icon: <DocumentDuplicateIcon />, heading: 'Variety of Designs', text: 'You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations.'},
  ]
}