import { FlexContainer, GridContainer } from '@/components/containers'
import { Heading, Paragraph } from '@/components/typography'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Title from '../../typography/title'
import Image from 'next/image'

export default function Feature_10() {
  return (
    <div className='my-[100px] flex flex-col gap-20 max-w-[1070px] mx-auto'>
      <FlexContainer className=''>
        <Title className='max-w-[410px]'>
          <Heading level="h1" size="4xl" colorScheme="gradient-primary" className='md:text-[42px]'>{FEATURE_10.title.heading}</Heading>
          <Paragraph size='xl' colorScheme='default' className='text-[22px]'>{FEATURE_10.title.text}</Paragraph>
        </Title>
        <Image src="/Video.png" alt="Picture of the author" className='pt-6 md:pt-0' width={570} height={322} />
      </FlexContainer>
      <div className='h-[2px] w-full bg-gray-200'></div>
      <GridContainer columns='3' className=" gap-10 ">
        {FEATURE_10.feautures.map((feature, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-10 w-10">
              {feature.icon}
            </div>
            <div>
              <Heading level="h3" size="xl" colorScheme="gradient-primary" className='pt-[26px]'>{feature.heading}</Heading>
              <Paragraph size='base' colorScheme='default' className='pt-[18px]' >{feature.text}</Paragraph>
            </div>
          </div>
        ))}
      </GridContainer>
    </div>
  )
}


const FEATURE_10 = {
  title: {
    heading: 'Startup Framework',
    text: 'Startup Framework contains components and complex blocks which can easily be integrated into almost any design. '
  },
  feautures: [
    { icon: <DocumentDuplicateIcon />, heading: 'Full Control', text: 'Easily change and tweak your content when you need to, however you want. No more third party vendor lock-in.' },
    { icon: <DocumentDuplicateIcon />, heading: 'For Freelancers and Agencies', text: "Pay once and it’s yours forever. Use it to build as many sites as you need; long form, presen-tations, splash sites, and more." },
    { icon: <DocumentDuplicateIcon />, heading: 'Cmd + C / Cmd + V', text: "Edit content in a comfortable manner. It’s as simple as copy and paste." },
  ]
  }