import { Button } from "@/components/ui/button";
import { InternalAnchor, ExternalAnchor } from "@/components/link"

import { AcademicCapIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24 ">
      <div className="grid grid-cols-4 gap-10 items-center">
        <Button size="xs" variant="primary">Ondek onze Diensten</Button>
        <Button size="sm" variant="primary">Ondek onze Diensten</Button>
        <Button size="md" variant="primary">Ondek onze Diensten</Button>
        <Button size="lg" variant="primary">Ondek onze Diensten</Button>

        <Button size="xs" variant="light" className="hover:-translate-y-[1px]">Ondek onze Diensten</Button>
        <Button size="sm" variant="light" className="hover:-translate-y-[2px]">Ondek onze Diensten</Button>
        <Button size="md" variant="light" className="hover:-translate-y-[3px]">Ondek onze Diensten</Button>
        <Button size="lg" variant="light" className="hover:-translate-y-[4px]">Ondek onze Diensten</Button>

        <Button size="xs" variant="dark">Ondek onze Diensten</Button>
        <Button size="sm" variant="dark">Ondek onze Diensten</Button>
        <Button size="md" variant="dark">Ondek onze Diensten</Button>
        <Button size="lg" variant="dark">Ondek onze Diensten</Button>

        <Button size="xs" variant="flat">Ondek onze Diensten</Button>
        <Button size="sm" variant="flat">Ondek onze Diensten</Button>
        <Button size="md" variant="flat">Ondek onze Diensten</Button>
        <Button size="lg" variant="flat">Ondek onze Diensten</Button>

        <Button size="xs" variant="text">Ondek onze Diensten</Button>
        <Button size="sm" variant="text">Ondek onze Diensten</Button>
        <Button size="md" variant="text">Ondek onze Diensten</Button>
        <Button size="lg" variant="text">Ondek onze Diensten</Button>

        <Button size="xs" variant="disabled">Ondek onze Diensten</Button>
        <Button size="sm" variant="disabled">Ondek onze Diensten</Button>
        <Button size="md" variant="disabled">Ondek onze Diensten</Button>
        <Button size="lg" variant="disabled">Ondek onze Diensten</Button>
        

      </div>

      <Button size="lg" variant="soft" option="icon" className=" relative" >
        <AcademicCapIcon className="mr-0.5 h-5 w-5" /> Hello
      </Button>

      {/* <MyLink href="/about" colorScheme="primary" variant="rounded" className="bg-amber-500">
        This is a linkz
      </MyLink> */}

      <ExternalAnchor href="/about" variant="dark" size='xs'>
        External Anchor
      </ExternalAnchor>

      <InternalAnchor href="/about" variant="primary" size='lg' >
        Internal Anchor
      </InternalAnchor>

    </main>
    // <AcademicCapIcon className='h-4 w-4 mr-2' />
  );
} 
