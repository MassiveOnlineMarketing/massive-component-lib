import React from 'react'
import Title from '@/app/typography/title'
import { Heading, Paragraph } from '@/components/typography'
import { InternalAnchor } from '@/components/link'

type cardProps = {
  card: {
    icon?: React.ReactNode,
    heading?: string,
    paragraph?: string,
    button?: {
      text: string,
      link: string
    }
  },
}

export const Card1 = ({ card }: cardProps) => {
  return (
    <Title className={`gap-2 p-6 `}>
                          {card?.icon}
      {card.heading &&    <Heading level="h4" size='base'>{card?.heading}</Heading>}
      {card.paragraph &&  <Paragraph>{card.paragraph}</Paragraph>}
      {card.button &&     <InternalAnchor href={card.button.link} size='sm' variant='link' className='pl-0 text-gradient-primary' >{card.button.text}</InternalAnchor>}
    </Title>
  )
}
