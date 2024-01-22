import React from 'react'
import AnimateWhenInView from '@/features/animation/intersection-observer'
import './animation.css'

const page = () => {
  return (
    <>
      {/* <PageContainer /> */}
      <AnimateWhenInView classNameInView='showElement' classNameNotInView='hiddenElement'>
        <section>
          <h2>Buy my product</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, delectus?
          </p>
        </section>
      </AnimateWhenInView>

      <AnimateWhenInView classNameInView='showElement' classNameNotInView='hiddenElement'>
        <section>
          <h2>Buy my product</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, delectus?
          </p>
        </section>
      </AnimateWhenInView>

      <AnimateWhenInView classNameInView='showElement' classNameNotInView='hiddenElement'>
        <section>
          <h2>Buy my product</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, delectus?
          </p>
        </section>
      </AnimateWhenInView>

      <AnimateWhenInView classNameInView='showElement' classNameNotInView='hiddenElement'>
        <section>
          <h2>Buy my product</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, delectus?
          </p>
        </section>
      </AnimateWhenInView>
    </>
  )
}

export default page