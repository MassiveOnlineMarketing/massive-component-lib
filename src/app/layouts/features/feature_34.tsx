import { FlexContainer, GridContainer, ResponsiveContainer } from '@/components/containers'
import { Heading, Paragraph } from '@/components/typography'
import { DocumentDuplicateIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


export default function Feature_34() {
  return (
    <div className="my-[100px] border-red-500">
      <FlexContainer className='pl-3 '  >
        <div className='max-w-[470px] md:ml-auto my-auto h-full flex flex-col justify-center'>
          <Heading level="h1" size="5xl" colorScheme="accent" className='md:text-6xl'>{FEATURE_34.title.heading}</Heading>
          <Paragraph size='xl' colorScheme='default' className='pt-[27px]' >{FEATURE_34.title.text}</Paragraph>
        </div>
        <Image src="/hero-iphone-x-clay.png" alt="Picture of the author" className='pt-6 md:pt-0' width={800} height={772} />
      </FlexContainer>
      <GridContainer columns='3' className=" gap-14 mt-12 md:mt-24 px-5">
        {FEATURE_34.features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="h-10 w-10">
              {feature.icon}
            </div>
            <div>
              <Heading level="h3" size="sm" colorScheme="gradient-primary" className='pt-[26px]'>{feature.heading}</Heading>
              <Paragraph size='base' colorScheme='default' className='pt-[18px]' >{feature.text}</Paragraph>
            </div>
          </div>
        ))}
      </GridContainer>
    </div>
  )
}


const FEATURE_34 = {
  title: {
    heading: 'Work Hard, Stay Humble',
    text: 'This sI have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.',
  },
  features: [
    { icon: <DocumentDuplicateIcon />, heading: 'Useful Symbol Components', text: 'They made signs for me to come down from the rock, and go towards the shore, which.' },
    { icon: <DocumentDuplicateIcon />, heading: '30 New feature pages', text: 'A child was brought in, who had swallowed a necklace o towards made.' },
    { icon: <HandRaisedIcon />, heading: 'Thoroughly Handpicked UI', text: 'She clutched the matron by the arm, and forcing her into a chair by the bedside.' },
  ]
}