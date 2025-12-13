import React, { useRef, useEffect } from "react";
import Item30P from './items/Item30P'
import Item70P from './items/Item70P'

const Parts2 = () => {
    const optionsArr=["A la une","IA","Réseaux sociaux","Vidéos","Présentations"]
      const scrollRef = useRef(null);

useEffect(() => {
  const el = scrollRef.current;

  const onWheel = (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      el.scrollLeft += e.deltaY; // vertical wheel → horizontal scroll
    }
  };

  el.addEventListener("wheel", onWheel);

  return () => el.removeEventListener("wheel", onWheel);
}, []);
  return (
    <div className='flex justify-center part2'>
        <div className='w-[80%]'>
            <div className='text-center md:text-5xl text-2xl p-3'>Des outils pour optimiser votre travail</div>
            <div className='flex items-center'>
             {
                optionsArr.map((ele,id)=>{
                    <div key={id}className='bg-blue-500 rounded-lg p-2 pointer' >
                        {ele}
                    </div>
                })
               }
            </div>
            <div className='md:block hidden'>
                <div className='flex gap-5 h-[600px] pb-5'>
                    <Item70P classNameButton="md:text-lg text-sm" classNameParent="basis-[65%]"/>
                    <Item30P classNameButton="md:text-lg text-sm" classNameText="md:text-2xl text-sm" classNameParent="basis-[35%]"/>
                </div>
                <div className='flex gap-5 h-[600px]'>
                    <Item30P classNameButton="md:text-lg text-sm" classNameText="md:text-2xl text-sm" classNameParent="basis-[35%]"/>
                    <Item70P classNameButton="md:text-lg text-sm" classNameParent="basis-[65%]"/>
                </div>
            </div>
<div
  ref={scrollRef}
  className="md:hidden block overflow-x-scroll whitespace-nowrap snap-x snap-mandatory no-scrollbar"
>
    <div className="flex gap-3 h-[600px] pb-5">
        <Item70P classNameParent="w-[450px] snap-start" />
        <Item30P classNameParent="w-[450px] snap-start" />
        <Item30P classNameParent="w-[450px] snap-start" />
        <Item70P classNameParent="w-[450px] snap-start" />
    </div>
</div>

        </div>
        
    </div>
  )
}

export default Parts2