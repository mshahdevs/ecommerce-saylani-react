import React from 'react';

import circle from '@/src/assets/ellipse.png';

import clubsofa from '@/src/assets/clubsofa.png';

export const Banner = () => {
  return (
    <>
      <section className='w-full relative bg-[#F2F0FF]'>
        {/* <img src={lamp} alt='' className='absolute w-[200px]' /> */}
        <div className='lg:w-[82%]   md:w-[84%] sm:w-[94%] xsm:w-[90%] mt-8  xxs:w-[90%]  mx-auto    '>
          <div className='w-full  flex items-center mx-auto justify-between  '>
            <div className='lg:w-[60%] relative   md:w-[50%] p-3 xxs:w-[50%]  xs:w-[50%] flex items-center justify-center'>
              <img src={circle} alt='' className='absolute w-[350px] ' />

              <img
                src={clubsofa}
                className='w-[300px] absolute object-contain'
                alt='bannerimg'
              />
            </div>
            <div className=' lg:w-[90%] md:w-[50%]  xxs:w-[50%] h-[349px] mx-4  xs:h-[200px] xsm:h-[300px] xs:p-4 xs:w-[50%]  xxs:p-3 xxs:items-center xxs:justify-center mt-[3.5rem]  xsm:w-[50%] px-8 py-14 flex  flex-col justify-start items-center xsm:gap-0 xs:gap-0 xs:justify-center xs:items-center  '>
              <div className=' flex flex-col  justify-center  xxs:gap-3 items-start'>
                <h1 className=' text-[30px] font-josefin w-[80%] text-start font-semibold xs:text-[35px] xsm:text-[23px] xxs:w-[90%] xxs:text-[25px]'>
                  Unique Features Of leatest & Trending Poducts
                </h1>
                <p className='text-left w-[75%]'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  beatae aliquid magnam quibusdam eligendi.
                </p>
                <div className=' flex gap-1 mt-3 items-center justify-center'>
                  <button className='text-white py-1 px-2 rounded-sm text-[16px] bg-[#fb2e86] font-medium'>
                    Add To Cart
                  </button>
                  <div className='flex items-start flex-col'>
                    <span className='text-sm font-medium'>
                      B&B Italian Sofa{' '}
                    </span>
                    <span className='text-sm font-medium'>$21.00</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='lg:w-[20%] md:w-0 xxs:hidden  xxs:w-0'></div> */}
          </div>
        </div>
      </section>
    </>
  );
};
