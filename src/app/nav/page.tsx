import { InternalAnchor } from '@/components/link';
import { MassiveLogoColor } from '@/assets/branding';

export default function page() {
  return (
    <div>
      <nav className=' w-full'>
        <div className='flex items-center max-w-[761px] mx-auto py-2 px-3 rounded-full border border-[#000]/10  shadow-md bg-gradient-to-b from-[#fff]/60 to-[#fff]/50'>
          <InternalAnchor size='lg' variant='icon' colorScheme='link' href='/'><MassiveLogoColor className="w-6" /> Massive</InternalAnchor>
          <ul className='flex items-center gap-6 mx-auto'>
            <li>Diensten</li>
            <li>Process</li>
            <li>Producten</li>
            <li>Over ons</li>
          </ul>
          <InternalAnchor colorScheme='nav' href='/' className='transition-all duration-500 hover:shadow-none hover:border-transparent  '>Contact</InternalAnchor>
        </div>
      </nav>
    </div>
  )
}