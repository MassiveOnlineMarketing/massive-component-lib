import { Heading, SubHeading } from "@/components/typography"

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div>
        <Heading level="h1" size="5xl" colorScheme="accent" className="" highlight="voorbeeld" colorSchemeHighlight="default">{ HEADING_TEXT }</Heading>
        <Heading level="h2" size="4xl" colorScheme="muted" className="" >{ HEADING_TEXT }</Heading>
        <Heading level="h3" size="3xl" colorScheme="default" className="">{ HEADING_TEXT }</Heading>
        <Heading level="h4" size="2xl" colorScheme="accent" className="">{ HEADING_TEXT }</Heading>
        <Heading level="h5" size="xl" colorScheme="accent" className="">{ HEADING_TEXT }</Heading>
        <Heading level="h6" size="lg" colorScheme="accent" className="">{ HEADING_TEXT }</Heading>
        <Heading level="h6" size="base" colorScheme="accent" className="">{ HEADING_TEXT }</Heading>
        <Heading level="h6" size="sm" colorScheme="accent" className="">{ HEADING_TEXT }</Heading>
        <Heading level="h6" size="xs" colorScheme="accent" className=" rounded">{ HEADING_TEXT }</Heading>
      </div>
      <div className="flex flex-col gap-2 w- ">
        <SubHeading level='h6' size='sm' colorScheme='purple' variant="test" >subheading</SubHeading>
        <SubHeading level='h4' size='sm' colorScheme='gray' variant='base' >Digital Marketing Bureau</SubHeading>
        <SubHeading level="h2" size="sm" colorScheme='gradient-primary' >Digital Marketing Bureau</SubHeading>
        <SubHeading level="h2" size="sm" colorScheme='glass' variant='pill' className="" >Digital Marketing Bureau</SubHeading>
      </div>
    </div>
  )
}

export default page

const HEADING_TEXT = 'Dit is een voorbeeld heading' 

