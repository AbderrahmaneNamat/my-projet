import React from 'react'
import { imgContainer1 } from '../../../data/Part3ImgContainer'

const Box1 = () => {
  return (
            <div className="box-part3 box1 bg-amber-700">
                {imgContainer1.map((ele,id)=>
                 <div key={id} className='item'>
                  {console.log(ele.title)}
                  <img src={ele.src} alt="" />
                  <div className='text'>
                    <div className='title w-3xl'>{ele.title}</div>
                    <div className='desc'>{ele.desc}</div>
                </div>
              </div>
              )}
            </div>
  )
}

export default Box1