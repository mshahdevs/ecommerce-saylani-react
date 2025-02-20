import React from 'react';
// import iphonebanner from '../../src/assets/iphonebanner.png';
import remote from '../../src/assets/productimages/remote.png';
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
        <img src={lamp} alt='' className='absolute w-[200px]' />
        <div className='lg:w-[82%]   md:w-[84%] sm:w-[94%] xsm:w-[90%] mt-8  xxs:w-[90%]  mx-auto    '>
          <div className='w-full  flex items-center mx-auto justify-between  '>
            <div className=' lg:w-[90%] md:w-[50%] xxs:w-[50%] h-[349px] mx-4  xs:h-[200px] xsm:h-[300px] xs:p-4 xs:w-[50%]  xxs:p-3 xxs:items-center xxs:justify-center mt-[3.5rem]  xsm:w-[50%] px-8 py-14 flex  flex-col justify-start items-center xsm:gap-0 xs:gap-0 xs:justify-center xs:items-center  '>
              <button onClick={next} className='hidden text-white'>
                {' '}
                Next
              </button>
              <div className='w-full flex items-center justify-start  xxs:gap-0 '>
                {/* <img
                  src={carouselItems1[currentIndex].imgSrc}
                  className='w-[30px] xxs:w-[25px] xsm:w-[22px] '
                  alt='logo'
                /> */}
                <p className='font-Lato font-bold   xs:mt-3 text-[#fb2e86] text-[16px] xxs:w-full xxs:text-[8px] xsm:mt-1 xsm:text-[12px]'>
                  {carouselItems1[currentIndex].title}
                </p>
              </div>
              <div className=' flex flex-col  justify-center  xxs:gap-3 items-start'>
                <h1 className=' text-[30px] font-josefin w-[80%] text-start font-semibold xs:text-[35px] xsm:text-[23px] xxs:w-[90%] xxs:text-[25px]'>
                  {carouselItems1[currentIndex].description}
                </h1>
                <p className='text-left w-[75%]'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  beatae aliquid magnam quibusdam eligendi.
                </p>
                <div className=' flex mt-3 items-center justify-center'>
                  <span>
                    <button className='text-white py-1 px-3 rounded-sm text-[16px] bg-[#fb2e86] font-medium'>
                      Shop Now
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className='lg:w-[50%] relative  md:w-[50%] p-3 xxs:w-[50%]  xs:w-[50%] flex items-center justify-center'>
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
            <div className='lg:w-[20%] md:w-0 xxs:hidden  xxs:w-0'></div>
            <button onClick={previous} className='text-white hidden'>
              Previous
            </button>
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
        </div>
      </section>
    </>
  );
};
