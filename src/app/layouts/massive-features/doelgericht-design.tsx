import Title from '@/app/typography/title'
import { ResponsiveContainer, ResponsiveGridContainer } from '@/components/containers'
import { InternalAnchor } from '@/components/link'
import { Heading, Paragraph, SubHeading } from '@/components/typography'
import { AcademicCapIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import { Card1 } from './cards/card-1'

export const DoelgerichtDesign = () => {
  return (
    <ResponsiveGridContainer columns='2' className='gap-6'>
      <div>
        <Title className='mb-[56px]'>
          <SubHeading level='h2' size='lg' colorScheme='gradient-primary' >{DATA.title.subHeading}</SubHeading>
          <Heading level='h3' size='4xl'>{DATA.title.heading}</Heading>
          <Paragraph >{DATA.title.paragraph}</Paragraph>
        </Title>

        {DATA.cards.map((card, i) => (
          <Card1 card={card} key={i} />
        ))}
      </div>

      <Image src={'/images/ellipse-4187.png'} width={638} height={638} alt="Picture of the author" className='my-auto' />

    </ResponsiveGridContainer>
  )
}









const DATA = {
  title: {
    subHeading: 'Doelgericht Design voor Direct Resultaat',
    heading: "Waarom Websites van Massive het Verschil Maakt",
    paragraph: "Onze doelgerichte ontwerpen versterken klant vertrouwen, verbeteren gebruikersinteracties en tillen jouw merk naar nieuwe hoogten. Niet alleen mooi, maar ook resultaatgericht. Waarom settle for less? Ontketen de kracht van jouw zakelijke website met Massive Online Marketing."
  },
  cards: [
    {
      // icon: <AcademicCapIcon className='w-5' />,
      // heading: 'Doelgericht Design',
      paragraph: 'Zet uw zakelijke visie om in tastbare sucessen met strategieën die ondernemerschap en resultaatgerichtheid combineren',
      // button: {
      //   text: 'Lees meer',
      //   link: 'https://www.google.com'
      // },
    },
    {
      icon: <AcademicCapIcon className='w-5' />,
      heading: 'Doelgericht Design',
      paragraph: "Zet uw zakelijke visie om in tastbare sucessen met strategieën die ondernemerschap en resultaatgerichtheid combineren",
      button: {
        text: 'Lees meer',
        link: 'https://www.google.com'
      }
    }
  ]
}




type cardProps = {
  card: {
    icon: React.ReactNode,
    heading: string,
    paragraph: string,
    button: {
      text: string,
      link: string
    }
  },
}
const ExampleCard = ({ card }: cardProps) => {
  return (
    <Title className={`gap-2 p-6 `}>
      {card.icon}
      <Heading level="h4" size='base'>{card?.heading}</Heading>
      <Paragraph>{card.paragraph}</Paragraph>
      <InternalAnchor href={card.button.link} size='sm' variant='link' className='pl-0 text-gradient-primary' >{card.button.text}</InternalAnchor>
    </Title>
  )
}