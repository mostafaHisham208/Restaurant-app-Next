"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import Cart from './Cart';

const links = [
    { id: 1, title: "Homepage", href: "/" },
    { id: 2, title: "Menu", href: "/Menu" },
    { id: 3, title: "Working Hours", href: "/" },
    { id: 4, title: "Contact", href: "/" },
];

const Menu = () => {
    const [open, setopen] = useState(false)

    const user=false
    return (
        <div >
            {open ? (<Image src="/close.png" alt='' width={20} height={20} onClick={() => setopen(false)} />) :
                (<Image src="/open.png" alt='' width={20} height={20} onClick={() => setopen(true)} />)
            }

           {open && <div className='bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex items-center justify-center text-3xl flex-col gap-8 z-10' >
                {links.map(item =>(
                    <Link href={item.href} key={item.id} onClick={()=>setopen(false)}>{item.title}</Link>
                ))}

                {!user? (<Link href="/login" onClick={()=>setopen(false)}>Login</Link>):
                (<Link href="/orders" onClick={()=>setopen(false)}>Orders</Link>)}

                <Link href="/cart" onClick={()=>setopen(false)}>
                   <Cart/>
                </Link>


            </div>}
        </div>
    )
}

export default Menu