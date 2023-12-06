import { Button } from "@/components/ui/button";
import { InternalAnchor, ExternalAnchor } from "@/components/link"

import { AcademicCapIcon, DocumentPlusIcon } from "@heroicons/react/24/solid";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24 ">
      <div className="grid grid-cols-4 gap-10 items-center">
        <Button size="xs" variant="primary" className="pr-[8px]">Ondek onze Diensten <AcademicCapIcon className="w-4 h-4" /></Button>
        <Button size="sm" variant="primary">Ondek onze Diensten</Button>
        <Button size="md" variant="primary">Ondek onze Diensten</Button>
        <Button size="lg" variant="primary">Ondek onze Diensten</Button>

        <Button size="xs" variant="light">Ondek onze Diensten</Button>
        <Button size="sm" variant="light" className="pr-[10px]">Ondek onze Diensten <AcademicCapIcon className="w-4 h-4" /></Button>
        <Button size="md" variant="light">Ondek onze Diensten</Button>
        <Button size="lg" variant="light">Ondek onze Diensten</Button>

        <Button size="xs" variant="dark">Ondek onze Diensten</Button>
        <Button size="sm" variant="dark">Ondek onze Diensten</Button>
        <Button size="md" variant="dark" className="pr-[16px]">Ondek onze Diensten<AcademicCapIcon className="w-4 h-4" /></Button>
        <Button size="lg" variant="dark">Ondek onze Diensten</Button>

        <Button size="xs" variant="flat">Ondek onze Diensten</Button>
        <Button size="sm" variant="flat">Ondek onze Diensten</Button>
        <Button size="md" variant="flat">Ondek onze Diensten</Button>
        <Button size="lg" variant="flat" className="pr-[20px]">Ondek onze Diensten <AcademicCapIcon className="w-4 h-4" /></Button>

        <Button size="xs" variant="text" className="pr-[8px]">Ondek onze Diensten <AcademicCapIcon className="w-4 h-4" /></Button>
        <Button size="sm" variant="text">Ondek onze Diensten</Button>
        <Button size="md" variant="text">Ondek onze Diensten</Button>
        <Button size="lg" variant="text">Ondek onze Diensten</Button>

        <Button size="xs" variant="disabled" className="pr-[8px]">Ondek onze Diensten <AcademicCapIcon className="w-4 h-4" /></Button>
        <Button size="sm" variant="disabled">Ondek onze Diensten</Button>
        <Button size="md" variant="disabled">Ondek onze Diensten</Button>
        <Button size="lg" variant="disabled">Ondek onze Diensten</Button>
      </div>

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
