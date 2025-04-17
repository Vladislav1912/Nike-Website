'use client'
import { useState } from 'react'
import Link from 'next/link'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function SaleOff() {
  const saleOffs = [
    {
      sale: 'UP TO 30% OFF',
      link: '/products/crocs'
    },
    {
      sale: 'SHOP ALL NEW ARRIVALS',
      link: '/products/crocs'
    },
    {
      sale: 'FREE DELIVERY AND RETURNS',
      link: '#'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? saleOffs.length - 1 : prevIndex - 1
    );
  };

  const handleNextBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === saleOffs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='w-full bg-gray-200 text-black font-bold flex justify-center items-center h-16'>
      <button className='text-gray-700 hover:text-black mx-4' onClick={handlePrevBtn}>
        <IoIosArrowBack size={24} />
      </button>

      <div className='text-center'>
        <span>{saleOffs[currentIndex].sale} </span>
        <Link href={saleOffs[currentIndex].link} className=' ml-2'>
          Shop
        </Link>
      </div>

      <button className='text-gray-700 hover:text-black mx-4' onClick={handleNextBtn}>
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
}
