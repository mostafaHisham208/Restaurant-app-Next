import React from 'react'

type props={
    price:number;
    id:number;
    options?:{title:string; additionalPrice:number}[]
}

const Pric = ({price,id,options}:props) => {
  return (
    <div>
        <h2>${price.toFixed(2)}</h2>
        
        <div className="flex gap-4 justify-between">
            {options?.map((option)=>(
                <button className='border-2  rounded-md p-3' key={option.title}>{option.title}</button>
            ))}
        </div>
        <div className="flex w-full items-center mt-2">
            <div className='w-1/2 flex justify-between border-red-500 border-2 p-4'>
               <span>Quantity</span>
               <div className="">
                <button>{'<'}</button>
                <span className='px-1'>1</span>
                <button>{'>'}</button>
                </div> 
            </div>
            <button className='bg-red-500 text-white w-1/2 p-4'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Pric