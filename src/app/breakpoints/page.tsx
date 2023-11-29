import React from 'react'
import './container.css'
import { ResponsiveContainer } from './responsive-container'
import { ResponsiveGridContainer } from './responsive-grid-container'

import { RectangleGroupIcon } from "@heroicons/react/20/solid";
import { Heading, Paragraph } from '@/components/typography';
import { Card, Icon } from '@/components/card'

export default function page() {
  return (
    <div className=''>
      <div className='container'>page</div>
      <ResponsiveContainer>
        This is a container
      </ResponsiveContainer>


      <section className='bg-gray-100 py-10'>
        <ResponsiveGridContainer columns='3' className='gap-5'>

          <Card className='p-10 bg-white rounded-2xl'>
            <Icon color='accent' border='accent' background='donker' varient='rounded' className='p-2' >
              <RectangleGroupIcon className='w-8 ' />
            </Icon>
            <Heading level='h2' size='2xl' colorScheme='default' highlight='Website' colorSchemeHighlight='accent'>Zakelijke Website</Heading>
            <Paragraph size='lg' colorScheme='default' >Transformeer uw zakelijke visie, laat nu een professionele, op maat gemaakte website bouwen die even indrukwekkend is als uw</Paragraph>
          </Card>

          <Card className='p-10 bg-white rounded-2xl'>
            <Icon color='accent' border='accent' background='donker' varient='rounded' className='p-2' >
              <RectangleGroupIcon className='w-8 ' />
            </Icon>
            <Heading level='h2' size='2xl' colorScheme='default' highlight='Website' colorSchemeHighlight='accent'>Zakelijke Website</Heading>
            <Paragraph size='lg' colorScheme='default' >Transformeer uw zakelijke visie, laat nu een professionele, op maat gemaakte website bouwen die even indrukwekkend is als uw</Paragraph>
          </Card>

          <Card className='p-10 bg-white rounded-2xl'>
            <Icon color='accent' border='accent' background='donker' varient='rounded' className='p-2' >
              <RectangleGroupIcon className='w-8 ' />
            </Icon>
            <Heading level='h2' size='2xl' colorScheme='default' highlight='Website' colorSchemeHighlight='accent'>Zakelijke Website</Heading>
            <Paragraph size='lg' colorScheme='default' >Transformeer uw zakelijke visie, laat nu een professionele, op maat gemaakte website bouwen die even indrukwekkend is als uw</Paragraph>
          </Card>

          <Card className='p-10 bg-white rounded-2xl'>
            <Icon color='accent' border='accent' background='donker' varient='rounded' className='p-2' >
              <RectangleGroupIcon className='w-8 ' />
            </Icon>
            <Heading level='h2' size='2xl' colorScheme='default' highlight='Website' colorSchemeHighlight='accent'>Zakelijke Website</Heading>
            <Paragraph size='lg' colorScheme='default' >Transformeer uw zakelijke visie, laat nu een professionele, op maat gemaakte website bouwen die even indrukwekkend is als uw</Paragraph>
          </Card>

          <Card className='p-10 bg-white rounded-2xl'>
            <Icon color='accent' border='accent' background='donker' varient='rounded' className='p-2' >
              <RectangleGroupIcon className='w-8 ' />
            </Icon>
            <Heading level='h2' size='2xl' colorScheme='default' highlight='Website' colorSchemeHighlight='accent'>Zakelijke Website</Heading>
            <Paragraph size='lg' colorScheme='default' >Transformeer uw zakelijke visie, laat nu een professionele, op maat gemaakte website bouwen die even indrukwekkend is als uw</Paragraph>
          </Card>

          <Card className='p-10 bg-white rounded-2xl'>
            <Icon color='accent' border='accent' background='donker' varient='rounded' className='p-2' >
              <RectangleGroupIcon className='w-8 ' />
            </Icon>
            <Heading level='h2' size='2xl' colorScheme='default' highlight='Website' colorSchemeHighlight='accent'>Zakelijke Website</Heading>
            <Paragraph size='lg' colorScheme='default' >Transformeer uw zakelijke visie, laat nu een professionele, op maat gemaakte website bouwen die even indrukwekkend is als uw</Paragraph>
          </Card>

        </ResponsiveGridContainer>
      </section>
    </div>
  )
}


