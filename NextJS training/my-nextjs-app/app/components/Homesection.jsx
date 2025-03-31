'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const CustomCarousel = () => {
  const slides = [
    {
      image: 'https://wallpapers.com/images/hd/nike-girl-model-athlete-photograph-eo2hz4vsqhfftdku.jpg',
      title: 'AIR MAX DN8',
      subtitle: 'Exploration 3 of 8: Yuto Horigome',
      buttonText: 'Shop DN8',
    },
    {
      image: 'https://cdn.suwalls.com/wallpapers/sports/michael-jordan-28131-1920x1200.jpg',
      title: 'AIR MAX DN8',
      subtitle: 'Exploration 4 of 8: Michael Jordan',
      buttonText: 'Explore',
    },
    {
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3',
      title: 'NIKE FLY',
      subtitle: 'High Performance Gear',
      buttonText: 'Discover',
    },
    {
      image: 'https://images.unsplash.com/photo-1531315261055-0a4c88e46d6c',
      title: 'TRAIN LIKE A PRO',
      subtitle: 'Train Hard, Win Easy',
      buttonText: 'Start Now',
    },
  ];

  return (
    <div className="w-full aspect-[2/1] overflow-hidden relative">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold">
                <h5 className="text-sm md:text-base">Just in</h5>
                <h1 className="text-4xl md:text-7xl">{slide.title}</h1>
                <h3 className="text-base md:text-xl mt-2">{slide.subtitle}</h3>
                <Link href="/products/crocs">
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
