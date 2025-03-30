'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link';

export default function Partofhome3() {
  return (
     <div className="relative w-full h-[1000px]">  
      <div className="flex justify-between items-center w-full h-full">
        <div
          className="flex-1 bg-cover bg-center h-full"
          style={{ backgroundImage: `url(https://kith.com/cdn/shop/files/9_f728b60e-348a-48cd-a1d5-fdcfd60e8489.jpg?v=1738854613&width=1024)` }}
        ></div>
        <div
          className="flex-1 bg-cover bg-center h-full"
          style={{ backgroundImage: `url(https://cdn.lesitedelasneaker.com/wp-content/images/2024/03/nike-air-max-dn-triple-white-lsdls-4.jpg)` }}
        ></div>
      </div>

      
      <div className="absolute top-1/2 left-1/2 text-white font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-bold text-9xl">AIRMAXDn</h1>
     </div>

     <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-center '>  
         <Link href="#">
            <button className="bg-white  text-black py-2 px-6 rounded-full text-lg hover:bg-gray-500">Shop</button>
          </Link>
     </div>
    </div>
  )
}
