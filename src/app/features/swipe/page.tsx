import { SwipeProvider, SwipeContent, SwipeNavigation, SwipeArrowNav, SwipeDots } from '@/features/swipe'

export default function Page() {
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
    <div className='relative'>
        <SwipeProvider>
          <SwipeNavigation data={data}/>
          <SwipeContent>
            {data.map((item, index) => (
              <div
                key={index}
                className={`flex h-full w-full flex-col items-center justify-center gap-5 rounded-lg shadow-sm py-6 backdrop-blur bg-white/60  border border-solid border-white/10`}
              >
                <h3 className='text-[12px] font-semibold'>{item.heading}</h3>
                <h3 className='text-[12px] font-semibold'>{item.text}</h3>
              </div>
            ))}
          </SwipeContent>

          <SwipeArrowNav className='absolute top-1/2 w-full px-10'/>
          <SwipeDots/>


        </SwipeProvider>
    </div>
  )
}