import React from 'react';
// import iphonebanner from '../../src/assets/iphonebanner.png';
import { useState } from 'react';
import lamp from '../assets/home/lamp.png';
import sofaheader from '../assets/home/chair.png';
import circle from '../assets/home/circle.png';
import chair from '../assets/shop/g2.png';
import sofa from '../assets/shop/g8.png';

const carouselItems1 = [
  {
    id: 1,
    title: 'Best Furniture For Your Castle....',
    discount: 50,
    imgBanner: sofa,
    description: 'New Furniture Collection Trends in 2020',
  },
  {
    id: 2,
    title: 'Expert Quality Contemporary chair',
    discount: 78,
    imgBanner: sofaheader,
    description: 'Elevate Your Space: Stunning Sofa at 78% OFF!',
  },
  {
    id: 3,
    title: '5-Star Armchair',
    discount: 42,
    imgBanner: chair,
    description:
      'Level Up Your Gaming Experience with the 5-Star Chair – 42% OFF!',
  },
];

export const Hero_Section = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  const previous = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems1.length) % carouselItems1.length
    );
  };
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems1.length);
  };
  return (
    <>
      <section className='w-full relative bg-[#F2F0FF]'>
        <img
          src={lamp}
          alt=''
          className='absolute sm:-left-7 xsm:-left-12 xxs:hidden w-[200px]'
        />
        {/* <div className='lg:w-[82%]   md:w-[84%] md:bg-green-500 bg-red-600  mt-8    mx-auto    '> */}
        <div className='w-[84%]  flex items-center xxs:flex-col mx-auto justify-between  '>
          <div className='md:w-[64%]  sm:w-[67%]  xsm:w-[67%] xxs:w-full h-[349px] md:mx-4 m-0  xxs:justify-center xxs:items-center xxs:mx-auto  mt-[3.5rem]   md:pl-14 md:pr-0 md:py-8 py-14 xxs:py-2 flex sm:pl-14 sm:py-8 flex-col justify-start items-center   '>
            <div className='w-full flex items-center justify-start   '>
              <p className='font-Lato font-bold text-[#fb2e86] xxs:text-[10px]  md:text-[14px] lg:text-[16px] text-[10px] xsm:pl-12  xsm:text-[12px] '>
                {carouselItems1[currentIndex].title}
              </p>
            </div>
            <div className=' flex flex-col   justify-center  xxs:gap-2 items-start'>
              <h1 className='  md:text-[24px] xxs:text-[18px] font-josefin  w-[80%] text-start font-semibold xsm:pl-12 text-[23px] xsm:text-[22px]  '>
                {carouselItems1[currentIndex].description}
              </h1>
              <p className='text-left xsm:pl-12 w-[75%]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                beatae aliquid magnam quibusdam eligendi.
              </p>
              <div className=' flex mt-3 items-center justify-center'>
                <span className='xsm:pl-12'>
                  <button className='text-white py-1 px-3  rounded-sm text-[16px] bg-[#fb2e86] font-medium'>
                    Shop Now
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className='lg:w-[50%] w-[50%] relative bg-red-200  md:w-[50%] p-3 xxs:w-[50%]  xs:w-[50%] flex items-center justify-center'>
            <img src={circle} alt='' className='absolute w-[350px] ' />
            <span className='absolute text-[12px] z-30 text-center flex justify-center items-center circle-offer w-[60px]  h-[60px] -top-32 right-8'>
              <span className='w-7 text-white text-[15px] text-center  font-medium'>
                {carouselItems1[currentIndex].discount}% OFF
              </span>
            </span>
            <img
              src={carouselItems1[currentIndex].imgBanner}
              className='w-[300px] absolute object-contain'
              alt='bannerimg'
            />
          </div>
        </div>
        <div className='flex justify-center  m-0 '>
          {carouselItems1.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 mb-3 rounded-full mx-1 ${
                currentIndex === index
                  ? 'bg-[#db4444] border-[1.5px] border-white'
                  : 'bg-gray-500'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        {/* </div> */}
      </section>
    </>
  );
};
