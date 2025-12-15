import React, { useEffect, useRef, useState } from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import '../partsCss/part3.css'
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";

const Part3 = () => {
  const checkArrows=()=>{
    const {scrollWidth,clientWidth,scrollLeft}=directionRef.current;
    setLeftArrowVisible(scrollLeft>0);
    setRightArrowVisible(scrollLeft +clientWidth < scrollWidth);
  }
  useEffect(() => {
    const el = directionRef.current;
    if (!el) return;

    checkArrows(); // initial check
    el.addEventListener('scroll', checkArrows);

    return () => el.removeEventListener('scroll', checkArrows);
  }, []);

  const leftDirectionHandler = () => {
    directionRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const rightDirectionHandler = () => {
    directionRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  const [leftArrowVisible,setLeftArrowVisible]=useState(false);
  const [rightArrowVisible,setRightArrowVisible]=useState(true);
  const directionRef=useRef(null);
  return (
    <div className={`flex justify-center `}>
        <div className='parent3  w-[80%]'>
          <div className='wrapper3'>
            {leftArrowVisible && <div className={`direction3 leftDirection3  `} onClick={()=>leftDirectionHandler()}><FaArrowAltCircleLeft /></div>}
            {rightArrowVisible && <div className={`direction3 rightDirection3 `} onClick={()=>rightDirectionHandler()}><FaArrowAltCircleRight /></div>}
            <div ref={directionRef}  className="container3  ">
              <Box1/>
              <Box2/>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Part3