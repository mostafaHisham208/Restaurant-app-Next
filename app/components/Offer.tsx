import Image from 'next/image'
import React, { Suspense } from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='bg-black h-screen  flex flex-col md:flex-row md:bg-[url("/offerBg.png")] md:h-[70vh]'>
      <div className='flex-1 flex items-center justify-center text-center flex-col gap-8 p-6'>
        <h1 className='text-5xl text-white font-bold '>Delicious Burger & Franch Fry</h1>
        <p className='text-white xl:text-xl'>Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel. </p>
        
        <CountDown/>
        
        <button className='bg-red-500 text-white rounded-md py-3 px-6'>Order Now</button>
      </div>
      <div className='relative w-full flex-1 md:h-full'>
        <Image src="/offerProduct.png" alt='' fill className='object-contain'/>
      </div>
    </div>
  )
}

export default Offer