'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { SwipeArrowNav, SwipeContainer, SwipeDots, SwipeableNavigation } from './swipe'


const Test = () => {
  const [activeIndex, setActiveIndex] = useState(0)

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
      <SwipeableNavigation data={data} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <SwipeContainer activeIndex={activeIndex} setActiveIndex={setActiveIndex} itemsCount={data.length}>
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
      <SwipeArrowNav activeIndex={activeIndex} itemsCount={data.length} setActiveIndex={setActiveIndex}/>
      <SwipeDots activeIndex={activeIndex} itemsCount={data.length}/>
    </div>
  )
}


export default Test