import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Cart from './Cart'
import Image from 'next/image'
import Carticon from './Cart'

const Navbar = () => {
    const user=false
  return (
    <div className='h-12 text-red-500  flex justify-between p-4 items-center border-b-2 border-b-red-500  uppercase md:h-24  lg:px-20 xl:px-40'>
        <div className="hidden md:flex gap-4 flex-1">
             <Link href='/'>Homepage</Link>
             <Link href='/Menu'>Menu</Link>
             <Link href='/'>Contact</Link>
         </div>
         <div className='text-xl flex  md:justify-center  items-center text-center  md:font-bold flex-1'>
           <Link href="/">
            Massimo
           </Link>
         </div>
         <div className="hidden md:flex gap-4  items-center flex-1 justify-end">
           <div className='flex items-center bg-orange-300 gap-2 cursor-pointer rounded-md px-1 md:absolute top-3 r-2  lg:static'>
            <Image src="/phone.png" alt='' width={20} height={20}/>
            <span>12345678</span>
           </div>
           
            {!user ?<Link href='/login'>Login</Link>:
             <Link href='/orders'>Orders</Link>}
             <Carticon/>
         </div>
         <div className='md:hidden'>
         <Menu/>
         </div>
        
    </div>
  )
}

export default Navbar