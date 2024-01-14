import ModalTest from './contact/contact-modal';
import { SimpleCompDisplay } from './simple-comp-display';
import ModalTestAnimation from './contact/contact-modal-animation';
import "./contact/contact-modal.css"


import ModalFullScreen from '@/features/modal/FullScreenModal';
import { FlexContainer, ResponsiveContainer, ResponsiveGridContainer } from '@/components/containers';
import Image from 'next/image';
import { Paragraph, SubHeading, Heading } from '@/components/typography';
import { AcademicCapIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Card } from '@/components/card';
import { MultiStepContactForm } from './contact-form-massive/contact-form';

export default function Page() {

    return (
        // <div className="flex flex-col justify-center items-center h-[1000px] bg-white text-black">
        <div>
            <ModalFullScreen buttonText='Full screen modal' className='ml-10' animationDuration={1000} animationIn='element' animationOut='element-out'>
                {/* <ResponsiveContainer className="my-10">
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
                </ResponsiveContainer> */}
                <MultiStepContactForm />
            </ModalFullScreen>


            {/* <ModalTest />
            <ModalTestAnimation />
            <SimpleCompDisplay /> */}
        </div>
    )
}