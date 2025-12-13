import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import '../partsCss/part3.css'
const Part3 = () => {

  return (
    <div className={`flex justify-center `}>
        <div className='parent3  w-[80%]'>
          <div className='wrapper3'>
            <div className="container3  ">
              <Box2/>
              <Box1/>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Part3