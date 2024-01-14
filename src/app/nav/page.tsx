import { InternalAnchor } from '@/components/link';
import { MassiveLogoColor } from '@/assets/branding';
import { NavigationMenuDemo } from './navabar-one';
import { NavbarTwo } from './navbar-two';

export default function page() {
  return (
    <div className='h-[2000px] relative'>
      {/* <nav className=' w-full bg-black'>
        <div className='flex items-center max-w-[761px] mx-auto py-2 px-3 rounded-full border border-[#000]/10  shadow-md bg-gradient-to-b from-[#fff]/60 to-[#fff]/50'>
          <InternalAnchor size='lg' option='icon' variant='link' href='/'><MassiveLogoColor className="w-6" /> Massive</InternalAnchor>
          <ul className='flex items-center gap-6 mx-auto'>
            <li>Diensten</li>
            <li>Process</li>
            <li>Producten</li>
            <li>Over ons</li>
          </ul>
          <InternalAnchor variant='nav' href='/' className=' ' >Contact</InternalAnchor>
        </div>
      </nav> */}

      {/* <div className='mt-[100px]'>
        <NavigationMenuDemo />
      </div> */}

      <div className='mt-[100px]'>
        <NavbarTwo />
      </div>
    </div>
  )
}



