import { FlexContainer, GridContainer, ResponsiveContainer } from '@/components/containers'
import { Heading, Paragraph } from '@/components/typography'
import './styles.css'
import Image from 'next/image'
import Feature_34 from './feature_34'
import Feature_35 from './feature_35'
import Feature_36 from './feature_36'
import Feature_16 from './feature_16'
import Feature_4 from './feature_4'
import Feature_10 from './feature_10'
import Feature_27 from './feature_27'


export default function Page() {

  return (
    <div>
      <Heading level="h1" size="5xl" colorScheme="default" className='text-center mb-4'>Feature 4 - 15 min</Heading>
      <div className='bg-test'>
        <section className='border-blue-900 max-w-[1400px] mx-auto '>
          <Feature_4 />
        </section>
      </div>

      <Heading level="h1" size="5xl" colorScheme="default" className='text-center mb-4 mt-40'>Feature 10 - 13 min</Heading>
      <section className='border-blue-900 max-w-[1400px] mx-auto'>
        <Feature_10 />
      </section>

      <Heading level="h1" size="5xl" colorScheme="default" className='text-center mb-4 mt-40'>Feature 16 - 15 min</Heading>
      <section className='border-blue-900 max-w-[1400px] mx-auto'>
        <Feature_16 />
      </section>

      <Heading level="h1" size="5xl" colorScheme="default" className='text-center mb-4 mt-40'>Feature 27 - 8 min</Heading>
      <div className='bg-[#2f1893]'>
        <section className='border-blue-900 max-w-[1400px] mx-auto'>
          <Feature_27 />
        </section>
      </div>

      <Heading level="h1" size="5xl" colorScheme="default" className='text-center mb-4 mt-40'>Feature 34 - 35 min</Heading>
      <section className='border-blue-900 max-w-[1400px] mx-auto'>
        <Feature_34 />
      </section>

      <Heading level="h1" size="5xl" colorScheme="default" className='text-center mb-4 mt-40'>Feature 35 - 20 min</Heading>
      <section className='border-blue-900 max-w-[1400px] mx-auto'>
        <Feature_35 />
      </section>

      <Heading level="h1" size="5xl" colorScheme="default" className='text-center mb-4 mt-40'>Feature 36 - 20 min</Heading>
      <section className='border-blue-900 max-w-[1400px] mx-auto'>
        <Feature_36 />
      </section>
    </div>
  )
}



