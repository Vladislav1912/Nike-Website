'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [product, setProduct] = useState("");
  const [infoProduct, setInfoProduct] = useState("");
  const [buttonText, setButtonText] = useState("");

  const slides = [
    { img1: 'https://kith.com/cdn/shop/files/1_ea4f3435-c59a-4d53-82dd-aa1630762ed8.jpg?v=1738854613&width=1024', img2: 'https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/9d7e257ea7659d94383748dd7edc0d2d_1741195454.jpg' },
    { img1: 'https://cdn.suwalls.com/wallpapers/sports/michael-jordan-28131-1920x1200.jpg', img2: 'https://sneakernews.com/wp-content/uploads/2024/12/nike-air-max-dn8-official-images-7.jpg' },
  ];


  useEffect(() => {
    if (currentSlide === 0) {
      setProduct("AIR MAX DN8");
      setInfoProduct("Exploration 3 of 8: Yuto Horigome");
      setButtonText("Shop DN8");
    } else {
      setProduct("AIR MAX DN8");
      setInfoProduct("Exploration 4 of 8: Michael Jordan");
      setButtonText("Explore");
    }
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[900px]">
      <div className="flex justify-between items-center w-full h-full">
        <div
          className="flex-1 bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${slides[currentSlide].img1})` }}
        ></div>
        <div
          className="flex-1 bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${slides[currentSlide].img2})` }}
        ></div>
      </div>


      <div className="absolute top-1/2 left-1/2 text-white font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h5>Just in</h5>
        <h1 className="text-8xl">{product}</h1>
        <h3 className="text-xl">{infoProduct}</h3>
        <Link href='/products/crocs'><button className="mt-4 px-6 py-2 bg-white text-black rounded-lg">{buttonText}</button></Link>
      </div>


      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white p-2 rounded hover:bg-gray-500"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white p-2 rounded hover:bg-gray-500"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default CustomCarousel;
