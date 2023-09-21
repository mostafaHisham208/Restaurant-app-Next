import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:p20 xl:p-40 text-red-500 flex justify-between items-center '>
        <Link href='/' className='font-bold text-xl'>
            MASSIMO
        </Link>
        <p>@ ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer