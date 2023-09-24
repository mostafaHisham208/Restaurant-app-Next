import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-20 p-4 lg:p-20 xl:p-20 text-red-500 flex justify-between items-center '>
        <Link href='/' className='font-bold text-xl'>
            MASSIMO
        </Link>
        <p>@ ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer