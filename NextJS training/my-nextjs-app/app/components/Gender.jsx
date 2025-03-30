'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link';

export default function Gender() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-800">
      
      <div className="relative">
        <img src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_454,c_limit/faaa351d-c8dd-44b6-b850-7d853382ce09/nike-air-max-day-2025-introducing-the-air-max-dn8%C2%A0%C2%A0.jpg" alt="Men's Fashion" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-center">
          <Link href="#">
            <button className="bg-white text-black py-2 px-6 rounded-full text-lg hover:bg-gray-500">Men's</button>
          </Link>
        </div>
      </div>

      
      <div className="relative">
        <img src="https://media.about.nike.com/img/e994c74b-8f7a-46ee-869c-3a7134c40e80/midge-purce-air-max-dn8.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjowLCJ0b3AiOjAsIndpZHRoIjoyMTMzLCJoZWlnaHQiOjMyMDB9LCJyZXNpemUiOnsid2lkdGgiOjM4NDB9fX0%3D&s=0b426211a568d896f8ab053688ca24c559eeaa8d127f891d2c694416dfd47a55" alt="Women's Fashion" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-center">
          <Link href="#">
            <button className="bg-white  text-black py-2 px-6 rounded-full text-lg hover:bg-gray-500">Women's</button>
          </Link>
        </div>
      </div>

      
      <div className="relative">
        <img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/8dc8a813-87e7-413c-a88b-714d361f572f/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="Kids' Fashion" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-center">
          <Link href="#">
            <button className="bg-white  text-black py-2 px-6 rounded-full text-lg hover:bg-gray-500">Kids'</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
