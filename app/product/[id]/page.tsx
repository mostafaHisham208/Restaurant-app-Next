import Pric from '@/app/components/Pric'
import { singleProduct } from '@/app/data'
import Image from 'next/image'
import React from 'react'

const Singlproductpage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row'>
      {singleProduct.img &&<div className="relative">
        <Image src={singleProduct.img} alt='' className='object-contain' fill/>
      </div>  }   
      <div>
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Pric price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/> 
      </div>
   </div>
  )
}

export default Singlproductpage