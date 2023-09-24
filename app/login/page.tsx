import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Loginpage = () => {
  return (
    <div className='w-full flex justify-center p-4 h-[calc(100vh-2rem)]  md:h-[calc(100vh-5rem)]' >
    <div className='flex  w-full   flex-col md:flex-row md:h-[80%] md:w-full  lg:w-[70%] xl:w-[50%] items-center justify-center   shadow-md shadow-gray-500'>
        <div className="relative w-full h-2/5 md:h-full md:w-1/2">
            <Image src='/loginBg.png' alt='' fill/>
        </div>
        <div className="w-full h-3/5 p-6 flex flex-col gap-4 md:gap-8 md:p-8 md:h-full md:w-1/2">
            <h1 className='text-xl xl:text-3xl  font-extrabold'>Welcome</h1>
            <span>log into your account  or Create a new one  using social button</span>
            <button className='flex gap-4  ring-1 ring-gray-300 p-3 md:p-4 '><Image src='/google.png' alt='' width={20} height={20} className=' object-contain'/><span>sign in with Google</span></button>
            <button className='flex gap-4 ring-1 ring-gray-300 p-3 md:p-4'><Image src='/facebook.png' alt='' width={20} height={20} className=' object-contain'/> <span>sign in with Google</span></button>
            <span className='text-sm'>Have a Problem? <Link href="/" className=' underline'>contact us </Link></span>
        </div>
    </div>
    </div>
  )
}

export default Loginpage