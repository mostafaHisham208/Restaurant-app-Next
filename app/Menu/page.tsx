import Link from 'next/link'
import React from 'react'
import { menu } from '../data'

const Menupage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-32 h-[calc(105vh-6rem)] md:h-[calc(90vh-5rem)] flex  flex-col md:flex-row items-center justify-center'>
       {menu.map((item) =>(
         <Link href={`/Menu/${item.slug}`} key={item.id} className='w-full h-1/3 bg-cover p-4 lg:p-8  md:h-2/3'  style={{backgroundImage:`url(${item.img})`}}>
            <div className={`text-${item.color} w-1/2`}>
              <h1 className='uppercase font-bold text-3xl'>{item.title}</h1>
              <p className='text-sm my-3 lg:my-6'>{item.desc}</p>
              <button className={`hidden lg:block bg-${item.color} rounded-lg text-${item.color === "black" ? "white" : "red-500" } py-2 px-4 `}>Explore</button>
            </div>
         </Link>
       ))}
    </div>
  )
}

export default Menupage