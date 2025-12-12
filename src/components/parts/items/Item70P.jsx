import React from 'react'
import personnage from '../../../assets/imgs/personnage.jpg'

const Item70P = ({classNameParent,classNameButton, classNameText}) => {
  return (
    <div className={`items bg-blue-600 relative p-4 ${classNameParent}`}>
        <div>
            <div className={`text-white md:text-2xl text-lg pb-4 ${classNameText}`}>-50% sur Canva Pro ou Pro+ pendant 3mois. offre sous conditions.</div>
            <div className={`bg-white  rounded-lg w-fit p-2 px-4 ${classNameButton}`}>50% de Réduction</div>
            <img className='absolute bottom-5 left-0 h-[300px] w-full' src={personnage} alt="" />
        </div>
    </div>
  )
}

export default Item70P