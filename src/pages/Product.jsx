import React from 'react'
import img1 from '../assets/imgs/img1.jpg'
import img2 from '../assets/imgs/img2.jpg'
import img3 from '../assets/imgs/img3.jpg'
import './pagesCss/product.css'
const Product = () => {
    const buttonClassName='rounded bg-blue-200 rounded text-center px-5 py-2'
    const categoryClassName='bg-gray-200 rounded px-3 py-1 inline-block w-contain text-sm m-1'
    const descriptionClassName='text-gray-600 my-2'
  return (
    <div>
        <div className='container-product'>
            <div className="nav fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 bg-white z-50 shadow-md">
                <div className='logo '>MyShop</div>
                <div className='search-bar '>
                    <input type="text" placeholder='Search for products'/>
                </div>
                <div className='cart '>Cart(0)</div>
            </div>
            <div className="filter fixed top-16 left-0 h-screen px-10 py-5 bg-white z-40 shadow-md">
                <div className='category-filter '>Category</div>
                <div className='price-filter '>Price</div>
                <div className='rating-filter '>Rating</div>
            </div>
            <div className='item'>
            
                <img src={img1} alt="" srcset="" />
                <div>bookName</div>
                <div className={`${descriptionClassName}`}>click Details to see more about story and to buy</div>
                <div>
                    
                    <div className={`${categoryClassName}`}>Fantasie</div>
                    <div className={`${categoryClassName}`}>Love</div>
                </div>
                <div className='prix-container flex items-center w-full justify-between my-2'>
                    <div className='new-price text-right'>10$</div>
                    <div className='old-price font-bold text-2xl'>20$</div>
                </div>
                <div className={`${buttonClassName}`}>discover</div>
            </div>
                        <div className='item'>
            
                <img src={img1} alt="" srcset="" />
                <div>bookName</div>
                <div className={`${descriptionClassName}`}>click Details to see more about story and to buy</div>
                <div>
                    
                    <div className={`${categoryClassName}`}>Fantasie</div>
                    <div className={`${categoryClassName}`}>Love</div>
                </div>
                <div className='prix-container flex items-center w-full justify-between my-2'>
                    <div className='new-price text-right'>10$</div>
                    <div className='old-price font-bold text-2xl'>20$</div>
                </div>
                <div className={`${buttonClassName}`}>discover</div>
            </div>
                        <div className='item'>
            
                <img src={img1} alt="" srcset="" />
                <div>bookName</div>
                <div className={`${descriptionClassName}`}>click Details to see more about story and to buy</div>
                <div>
                    
                    <div className={`${categoryClassName}`}>Fantasie</div>
                    <div className={`${categoryClassName}`}>Love</div>
                </div>
                <div className='prix-container flex items-center w-full justify-between my-2'>
                    <div className='new-price text-right'>10$</div>
                    <div className='old-price font-bold text-2xl'>20$</div>
                </div>
                <div className={`${buttonClassName}`}>discover</div>
            </div>
        </div>
    </div>
  )
}

export default Product