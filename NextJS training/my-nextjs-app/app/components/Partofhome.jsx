'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link';

export default function Partofhome() {
  return (
    <div 
      className='flex w-full h-[800px] relative' 
      style={{
        backgroundImage: `url(https://static.nike.com/a/images/w_1920,c_limit,f_auto,q_auto/ecf17c46-2f05-4857-8d0c-883afd336c7b/image.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-center '>  
         <Link href="#">
            <button className="bg-white  text-black py-2 px-6 rounded-full text-lg hover:bg-gray-500">Shop AIR MAX PLUS</button>
          </Link>
          <Link href="#">
            <button className="bg-white  text-black py-2 px-6 rounded-full text-lg hover:bg-gray-500">Shop AIR MAX</button>
          </Link>
          </div>
    </div>
    
  )
}
