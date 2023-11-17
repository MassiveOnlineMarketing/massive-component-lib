import { Button } from "@/components/ui/button";
import { InternalAnchor, ExternalAnchor } from "@/components/link"

import { AcademicCapIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Button size="lg" colorScheme="soft" variant="icon" >
        <AcademicCapIcon className="mr-0.5 h-5 w-5" /> Hello
      </Button>

      {/* <MyLink href="/about" colorScheme="primary" variant="rounded" className="bg-amber-500">
        This is a linkz
      </MyLink> */}

      <ExternalAnchor href="/about" colorScheme="secondary" size='xs'>
        External Anchor
      </ExternalAnchor>

      <InternalAnchor href="/about" colorScheme="primary" size='xl' >
        Internal Anchor
      </InternalAnchor>

      {/* <Card>
        <Cardo.title colorScheme="primary" size="4xl"> TITLE </Cardo.title>
        <Cardo.image> IMAGE </Cardo.image>
        <Cardo.body> BODY </Cardo.body>
        <Cardo.footer> FOOTER </Cardo.footer>
      </Card> */}

      {/* <TitleTypography>
        <Subtitle size=""></Subtitle>
        <Title></Title>
        <Text></Text>
      </TitleTypography> */}

    </main>
    // <AcademicCapIcon className='h-4 w-4 mr-2' />
  );
} 
