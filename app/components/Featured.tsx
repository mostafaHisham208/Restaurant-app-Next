import Image from 'next/image'
import React from 'react'
import { featuredProducts } from '../data'

const Featured = () => {
  return (
    <div className='w-scrren overflow-x-scroll text-red-500'>
      <div className="w-max flex">
      {featuredProducts.map((product) =>(

        <div key={product.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-100  transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
         {product.img && <div className="relative flex-1 w-full hover:rotate-45  transition-all duration-300" >
            <Image src={product.img} alt='' fill className='object-contain'/>
          </div>}
          <div className="flex-1 flex flex-col gap-4 text-center items-center justify-center">
            <h1 className='text-xl font-bold uppercase xl:text-2xl  2xl:text-3xl'>{product.title}</h1>
            <p className='p-4 2xl:p-8'>{product.desc}</p>
            <span className='text-xl font-bold'>${product.price}</span>
            <button className='bg-red-500 text-white p-2  rounded-md '>Add to cart</button>
          </div>
          </div>

          ))}
      </div>
    </div>
  )
}

export default Featured