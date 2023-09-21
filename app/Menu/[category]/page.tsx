import { pizzas } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categorypage = () => {
  return (
    <div className='flex flex-wrap text-red-500 '>
       {pizzas.map((item)=>(
        <Link href={`/product/${item.id}`} key={item.id} className='w-full h-[60vh] border-r-2 border-b-2 group border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between even:bg-fuchsia-50'>

         {item.img && 
         <div className='relative h-[80%] hover:rotate-45 transition-all duration-300 '>
            <Image src={item.img} alt='' fill className='object-contain'/>
          </div>}

          <div className='flex  items-center justify-between font-bold  '>
            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
            <h2 className='group-hover:hidden'>${item.price}</h2>
            <button className=' hidden uppercase bg-red-500 text-white rounded-md p-2 group-hover:block'>Add to Cart</button>
          </div>

        </Link>
       ))}
    </div>
  )
}

export default Categorypage