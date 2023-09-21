"use client"
import React, { useEffect, useState } from 'react'

type props={
    price:number;
    id:number;
    options?:{title:string; additionalPrice:number}[]
}

const Pric = ({price,id,options}:props) => {
    const [total,settotal]=useState(price);
    const [quantity,setquantity]=useState(1);
    const [selected,setselected]=useState(0);

    useEffect(()=>{
        settotal(quantity * (options ? price+options[selected].additionalPrice: price));
    },[quantity,selected,options,price]);
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
        
        <div className="flex gap-4">
            {options?.map((option,index)=>(
                <button 
                className=' min-w-[6rem]   ring-2 ring-red-400 p-2   rounded-md'
                 key={option.title}
                 style={{background:selected === index ? "rgb(248 113 113)" : "white",
                 color:selected === index ? "white" : "red"
                }}
                onClick={()=>setselected(index)}
                 >{option.title}</button>
            ))}
        </div>
        <div className="flex w-full items-center mt-2">
            <div className='w-full flex justify-between border-red-500 border-2 p-3'>
               <span>Quantity</span>
               <div className="flex gap-4 items-center">
                <button onClick={()=>setquantity(prev=>(prev>1 ? prev-1 :1))}>{'<'}</button>
                <span className=''>{quantity}</span>
                <button onClick={()=>setquantity(prev=>(prev<9 ? prev+1 :1))}>{'>'}</button>
                </div> 
            </div>
            <button className='bg-red-500 text-white w-56   ring-1 ring-red-500 p-3'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Pric