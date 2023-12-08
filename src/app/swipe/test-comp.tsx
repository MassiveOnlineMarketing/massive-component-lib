'use client'

import React from 'react'
import { SwipeProvider } from '@/features/swipe/SwipeContext'
import { SwipeContainer } from '@/features/swipe/SwipeContainer'
import { SwipeNavigation } from '@/features/swipe/SwipeNavigation'
import { SwipeArrowNav } from '@/features/swipe/SwipeArrowNav'
import { SwipeDots } from '@/features/swipe/SwipeDots'

const TestComp = () => {

  const data = [
    {
      heading: 'Heading 1',
      text: 'Text 1',
    },
    {
      heading: 'Heading 2',
      text: 'Text 2',
    },
    {
      heading: 'Heading 3',
      text: 'Text 3',
    },
    {
      heading: 'Heading 4',
      text: 'Text 4',
    }
  ]

  return (
    <div>
        <SwipeProvider>
          <SwipeNavigation data={data}/>
          <SwipeContainer>
            {data.map((item, index) => (
              <div
                key={index}
                className={`flex h-full w-full flex-col items-center justify-center gap-5 rounded-lg shadow-sm py-6 backdrop-blur bg-white/60  border border-solid border-white/10`}
              >
                <h3 className='text-[12px] font-semibold'>{item.heading}</h3>
                <h3 className='text-[12px] font-semibold'>{item.text}</h3>
              </div>
            ))}
          </SwipeContainer>

          <SwipeArrowNav/>
          <SwipeDots/>


        </SwipeProvider>
    </div>
  )
}


export default TestComp