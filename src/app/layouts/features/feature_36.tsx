import { FlexContainer } from '@/components/containers'
import React from 'react'
import Title from '../../typography/title'
import { Heading, Paragraph } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'

export default function Feature_36() {
  return (
    <div className='px-5'>
      {/* <FlexContainer className='py-[100px]'> */}
      <div className='md:flex justify-between max-w-[960px] mx-auto py-[100px]'>

        <Title className='max-w-[492px] my-auto h-full flex flex-col justify-center gap-[22px]'>
          <Heading level="h1" size="5xl" colorScheme="gradient-primary">{FEATURE_36.title.heading}</Heading>
          <Paragraph size='base' colorScheme='default'>{FEATURE_36.title.text}</Paragraph>
          <Button variant='primary' size='lg' option='rounded'>Explore</Button>
        </Title>

        <div className=' flex-none pt-10 min-w-[227px] md:pt-0 md:pl-[75px]  flex flex-col gap-6 md:gap-12  '>
          {FEATURE_36.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="h-8 w-8">
                {feature.icon}
              </div>
              <Heading level="h3" size="sm" colorScheme="gradient-primary">{feature.heading}</Heading>
            </div>
          ))}
        </div>

      </div>
      {/* </FlexContainer> */}
    </div>
  )
}

const FEATURE_36 = {
  title: {
    heading: 'Create a beautiful, responsive website like this one in under 60 minutes',
    text: 'Introducing 30 brand new designed and coded blocks for your next impressive project'
  },
  features: [
    { icon: <DocumentDuplicateIcon />, heading: 'Useful Components' },
    { icon: <DocumentDuplicateIcon />, heading: '30 New feature pages' },
    { icon: <DocumentDuplicateIcon />, heading: 'Thoroughly Handpicked UI' },
    { icon: <DocumentDuplicateIcon />, heading: 'Ready to Prototype' },
    { icon: <DocumentDuplicateIcon />, heading: ' 12 Column Grid' },
  ]
}