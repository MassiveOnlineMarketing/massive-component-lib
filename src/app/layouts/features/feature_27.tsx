import React from 'react'
import Title from '../../typography/title'
import { Heading, Paragraph } from '@/components/typography'
import { GridContainer } from '@/components/containers'

export default function Feature_27() {
  return (
    <div className='py-[100px] max-w-[970px] mx-auto px-5'>
      <Title className='text-center gap-8 max-w-[750px] mx-auto'>
        <Heading size='5xl' colorScheme='default' level='h1' className='text-white md:text-[42px]'>{FEATURE_27.title.heading}</Heading>
        <Paragraph size='base' colorScheme='default' className='text-white'>{FEATURE_27.title.text}</Paragraph>
      </Title>
      <GridContainer columns='3' className='gap-20 pt-10 md:pt-20'>
        {FEATURE_27.features.map((feature, index) => (
          <div key={index} className='text-center'>
            <Heading level="h3" size="sm" colorScheme="gradient-primary" className='pt-[26px] text-white uppercase'>{feature.heading}</Heading>
            <Paragraph size='base' colorScheme='default' className='pt-[18px] text-white' >{feature.text}</Paragraph>
          </div>
        ))}
      </GridContainer>
    </div>
  )
}


const FEATURE_27 = {
  title: {
    heading: 'A high-quality solution for those who want a beautiful startup website quickly.',
    text: "Learn more about Startup in the light demo version. It has components from the full version, two great samples and documentation."
  },
  features: [
    { heading: "Aligned to grid", text: "All elements are made with 12-column grid alignment, which significantly simplifies the process." },
    { heading: "Design to layout", text: "Draw your design in Photoshop and use layout tools to quickly animate your site." },
    { heading: "Responsive Layout", text: "Our layout works perfectly on any modern platform, including mobile. You don’t need to create any extra code." },
  ]
}