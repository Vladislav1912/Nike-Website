'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const CustomCarousel = () => {
  const slides = [
    {
      image: 'tylajpg.jpg',
      title: 'TYLA X NIKE DN8',
      subtitle: 'Exploration 1 of 8: Tyla',
      buttonText: 'Explore Tyla x Nike',
      link: '/products/crocs'
    },
    {
      image: 'https://media.gq-magazine.co.uk/photos/60619704650d793eef7feb2f/master/pass/29032021_LilNas_HP.jpg',
      title: 'DEVILISH NIKE',
      subtitle: 'Exploration 2 of 8: Lil Nas X',
      buttonText: 'Explor Devilish Nike',
      link: '/products/crocs'
    },
    {
      image: 'https://23jumpmanstreet.com/wp-content/uploads/2024/10/Travis-Scott-Air-Jordan-1-Low-UNC.jpg',
      title: 'TRAVIS SCOTT X JORDAN 1',
      subtitle: 'Exploration 3 of 8: Travis Scott',
      buttonText: 'Shop T.S. Jordan 1',
      link: '/products/crocs'
    },
    {
      image: 'https://cdn.sanity.io/images/pu5wtzfc/production/4132eb82590f795adcbdd7f1442a0dc70b644a04-1920x1080.webp',
      title: '30% OF NOW',
      subtitle: 'Train Hard, Win Easy',
      buttonText: 'Shop 30% off',
      link: '/products/crocs'
    },
  ];
   
  return (
    <div className="flex w-full aspect-video overflow-hidden relative ">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full h-full object-cover"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
          <div className="w-full h-full relative bg-black">
            {slide.image ? (
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white text-xl">
                Image not available
              </div>
            )}
        
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold">
              <h5 className="text-sm md:text-base">Just in</h5>
              <h1 className="text-9xl md:text-7xl">{slide.title}</h1>
              <h3 className="text-base md:text-xl mt-2">{slide.subtitle}</h3>
              <Link href={slide.link}>
                <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;
