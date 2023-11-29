
import Image from 'next/image'  
import React from "react";
import { Heading, Paragraph, SubHeading } from "@/components/typography";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/card";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { FlexContainer, GridContainer, ResponsiveContainer, ResponsiveFlexContainer, ResponsiveGridContainer } from "@/components/containers";
import Title from '../typography/title';

import { OnsProces1, OnsProces2, OnsProces3 } from "./assets";
import { HOEREN, SimpleListItem, UnOrderedList } from '@/components/lists/un-ordered-list';
import { cn } from '@/lib/utils';


export default function page() {

  return (
    <>
      <ResponsiveContainer className="my-10">
        the container
      </ResponsiveContainer>


      <ResponsiveContainer className="my-10">
        <FlexContainer className="flex-row-reverse">
          <Image src="/test-img.png" alt="Picture of the author" width={800} height={700} />
          <div className="bg-green-500 w-full flex flex-col gap-8 md:max-w-[500px]">
            <SubHeading level="h2" size="sm" colorScheme='glass' variant='pill' type='icon'> <AcademicCapIcon className="w-4 h-4" /> Massive</SubHeading>
            <Heading level="h1" size="5xl" colorScheme="accent" className="" highlight="voorbeeld" colorSchemeHighlight="default">Verhoog uw positie in google</Heading>
            <div>
              <Paragraph size='base' colorScheme='default' >Zet uw zakelijke visie om in tastbare sucessen met strategieën die ondernemerschap en resultaatgerichtheid combineren</Paragraph>
              <div className="border-dotted border-b-2 border-gray-300 mt-4"></div>
            </div>
            <Paragraph size='base' colorScheme='default' >Verhoog uw positie in Google door uw content te optimaliseren voor relevante zoekwoorden. Verhoog uw positie in Google door uw content te optimaliseren voor relevante zoekwoorden. </Paragraph>

          </div>
        </FlexContainer>
        <ResponsiveGridContainer columns='3' className="gap-6 mt-6">
          <Card className="p-4 gap-2">
            <Heading level="h4" size="base" colorScheme="default" type='icon' > <MagnifyingGlassIcon className="w-5 h-5" /> Zoekwoordenoptimalizatie</Heading>
            <Paragraph size='base' colorScheme='default' >Verhoog uw positie in Google door uw content te optimaliseren voor relevante zoekwoorden.  </Paragraph>
          </Card>
          <Card className="p-4 gap-2">
            <Heading level="h4" size="base" colorScheme="default" type='icon' > <MagnifyingGlassIcon className="w-5 h-5" /> Zoekwoordenoptimalizatie</Heading>
            <Paragraph size='base' colorScheme='default' >Verhoog uw positie in Google door uw content te optimaliseren voor relevante zoekwoorden.  </Paragraph>
          </Card>
          <Card className="p-4 gap-2">
            <Heading level="h4" size="base" colorScheme="default" type='icon' > <MagnifyingGlassIcon className="w-5 h-5" /> Zoekwoordenoptimalizatie</Heading>
            <Paragraph size='base' colorScheme='default' >Verhoog uw positie in Google door uw content te optimaliseren voor relevante zoekwoorden.  </Paragraph>
          </Card>
        </ResponsiveGridContainer>
      </ResponsiveContainer>

      <ResponsiveFlexContainer className="my-10 flex-row-reverse">
        <Image src="/test-img.png" alt="Picture of the author" width={800} height={700} />
          <div className="w-full flex flex-col gap-8 md:max-w-[500px]">
            <SubHeading level="h2" size="sm" colorScheme='glass' variant='pill' type='icon'> <AcademicCapIcon className="w-4 h-4" /> Massive</SubHeading>
            <Heading level="h1" size="5xl" colorScheme="accent" className="" highlight="voorbeeld" colorSchemeHighlight="default">Verhoog uw positie in google</Heading>
            <div>
              <Paragraph size='base' colorScheme='default' >Zet uw zakelijke visie om in tastbare sucessen met strategieën die ondernemerschap en resultaatgerichtheid combineren</Paragraph>
              <div className="border-dotted border-b-2 border-gray-300 mt-4"></div>
            </div>
            <Paragraph size='base' colorScheme='default' >Verhoog uw positie in Google door uw content te optimaliseren voor relevante zoekwoorden. Verhoog uw positie in Google door uw content te optimaliseren voor relevante zoekwoorden. </Paragraph>

          </div>
      </ResponsiveFlexContainer>

      <ResponsiveContainer className="my-10">
        <Title>
          <SubHeading level="p" size="sm" colorScheme='gradient-primary' >Digital Marketing Bureau</SubHeading>
          <Heading level='h1' size='5xl' colorScheme='donker' highlight='Online Succes' colorSchemeHighlight='gradient-primary'>Uw marketing partner voor Online Succes</Heading>
          <Paragraph size='base' colorScheme='default' className='max-w-[750px] text-center' >Zet uw zakelijke visie om in tastbare sucessen met strategieën die ondernemerschap en resultaatgerichtheid combineren</Paragraph>
        </Title>
        <GridContainer columns='3' className="gap-6 mt-6">
          <div className='flex flex-col gap-8'>
            <div className='bg-[#CDCAFF] w-full aspect-square'></div>
            <Heading level="h4" size="base" colorScheme="default" type='icon' > <MagnifyingGlassIcon className="w-5 h-5" /> Zoekwoordenoptimalizatie</Heading>
            <Paragraph size='base' colorScheme='default' >Verhoog uw positie in Google door uw content te optimaliseren voor relevante zoekwoorden.  </Paragraph>
          </div>

          <div className='flex flex-col gap-8'>
            <div className='bg-[#CDCAFF] w-full aspect-square'></div>
            <Heading level="h4" size="base" colorScheme="default" type='icon' > <MagnifyingGlassIcon className="w-5 h-5" /> Zoekwoordenoptimalizatie</Heading>
            <Paragraph size='base' colorScheme='default' >Verhoog uw positie in Google door uw content te optimaliseren voor relevante zoekwoorden.  </Paragraph>
          </div>

          <div className='flex flex-col gap-8'>
            <div className='bg-[#CDCAFF] w-full aspect-square'></div>
            <Heading level="h4" size="base" colorScheme="default" type='icon' > <MagnifyingGlassIcon className="w-5 h-5" /> Zoekwoordenoptimalizatie</Heading>
            <Paragraph size='base' colorScheme='default' >Verhoog uw positie in Google door uw content te optimaliseren voor relevante zoekwoorden.  </Paragraph>
          </div>
        </GridContainer>
      </ResponsiveContainer>

      {/* <GridContainer columns='3' className="gap-6 mt-6"> */}
      <ResponsiveContainer className="my-10">
        <UnOrderedList className='grid gap-12 lg:grid-cols-3 lg:gap-auto' items={cols} listComponent={(item) => 
          <SompleList {...item} />} />
      </ResponsiveContainer>
      {/* </GridContainer> */}
    </>
  )

}

type HoerenProps = {
  item: {
      icon: React.ReactNode;
      heading?: string;
      text: string;
  }
  className?: string;
  iconClassName?: string;
}

const SompleList = ({ item }: HoerenProps) => {
  const { icon, heading, text } = item;

  return (
      <li className={cn(
          'items-center text-center max-w-[424px] mx-auto gap-6 lg:gap-12',
      )} >
          <div
              className={cn(
                  'h-[136px] w-[136px]  md:h-[224px] md:w-[224px] mx-auto',
              )}
          >
              {icon}
          </div>
          <div>
            <Heading level="h3" size="2xl" colorScheme="default">{heading}</Heading>
            <Paragraph size='base' colorScheme='default' className='pt-2' >{text}</Paragraph>
          </div>
      </li>
  );
}



const cols = [
  {
    icon: <OnsProces1 className='mr-[21px] md:mr-[35px]' />,
    heading: 'Kennismaking en Plan',
    text: 'We leren uw bedrijf kennen en schetsen een websiteconcept gebaseerd op uw doelen.',
  },
  {
    icon: <OnsProces2 className='mr-[21px] md:mr-[35px]' />,
    heading: 'Ontwerp en Ontwikkeling',
    text: 'Na uw goedkeuring, ontwerpen en ontwikkelen we de website terwijl we u op de hoogte houden.',
  },
  {
    icon: <OnsProces3 className='mr-[21px] md:mr-[35px]' />,
    heading: 'Lancering en Onderhoud',
    text: 'Na de lancering, optimaliseren we de site voor zoekmachines en bieden aanvullende ondersteuning.',
  },
]