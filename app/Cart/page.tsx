import Image from 'next/image'
import React from 'react'

const Cartpage = () => {
  return (
    <div className="h-[calc(110vh-4rem)] md:h-[calc(110vh-5rem)] flex flex-col text-red-500 p-2 lg:flex-row  lg:justify-center lg:items-center " >
      <div className="h-1/2 w-full p-3 flex flex-col justify-center   lg:w-2/3 lg:h-full  2xl:w-1/2 lg:px-20  2xl:px-40">
        <div className='flex w-full flex-row items-center justify-between mb-4 '>
          <Image src='/temporary/p1.png' alt='' width={100} height={100} />
          <div className="-">
            <h1 className=' uppercase text-xl font-bold'>Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$79.99</h2>
          <span className=' cursor-pointer'>x</span>
        </div>
        <div className='flex flex-row items-center justify-between mb-4 '>
          <Image src='/temporary/p1.png' alt='' width={100} height={100} />
          <div className="-">
            <h1 className=' uppercase text-xl font-bold'>Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$79.99</h2>
          <span className=' cursor-pointer'>x</span>
        </div>  <div className='flex flex-row items-center justify-between mb-4 '>
          <Image src='/temporary/p1.png' alt='' width={100} height={100} />
          <div className="-">
            <h1 className=' uppercase text-xl font-bold'>Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$79.99</h2>
          <span className=' cursor-pointer'>x</span>
        </div>

      </div>

      <div className="h-1/2 p-4 bg-fuchsia-50 flex justify-center gap-5 flex-col lg:w-1/3 lg:h-full 2xl:w-1/2 lg:px-16 2xl:px-40 2xl:text-xl  2xl:gap-6">
        <div className="flex  justify-between">
          <span className=''>Subtotal (3 items)</span>
          <span className=''>$81.70</span>
        </div>
        <div className="flex  justify-between">
          <span className=''>Service Cost </span>
          <span className=''>$0.00</span>
        </div>
        <div className="flex  justify-between">
          <span className=''>Delivery Cost</span>
          <span className='text-green-500'>free</span>
        </div>
      <hr className='' />
      <div className="flex  justify-between">
          <span className='font-bold'>TOTAL (INCL. VAT)</span>
          <span className='font-bold'>$81.70</span>
        </div>
      <button className='bg-red-500 text-white p-3 rounded-md flex self-end w-1/2  justify-center'>CHECKOUT</button>
    </div>
    </div >
  )
}

export default Cartpage