import React from 'react';

// import circle from '@/src/assets/';

import clubsofa from '@/src/assets/home/discountsofa.png';
import tick from '@/src/assets/tick.svg';

export const DiscountBanner = () => {
  return (
    <>
      <section className='w-full relative '>
        {/* <img src={lamp} alt='' className='absolute w-[200px]' /> */}
        <div className='lg:w-[82%]   md:w-[84%] sm:w-[94%] xsm:w-[90%]  xxs:w-[90%]  mx-auto    '>
          <h1 className='text-[40px] font-semibold font-josefin'>
            Discount Item
          </h1>
          <div className='flex justify-center my-2 mx-auto gap-6'>
            <span className='text-[#FB4997]  border-b-2 border-[#FB4997] font-Lato  text-[18px] font-normal'>
              Wood Chair
            </span>
            <span className='font-Lato  text-[18px] font-normal'>
              Plastic Chair
            </span>
            <span className='font-Lato  text-[18px] font-normal'>
              Sofa Collection
            </span>
          </div>
          <div className='w-full   flex items-center  justify-between  '>
            <div className=' lg:w-[60%] md:w-[50%]  xxs:w-[50%] h-[349px] mx-4  xs:h-[200px] xsm:h-[300px] xs:p-4 xs:w-[50%]  xxs:p-3 xxs:items-center xxs:justify-center mt-[3.5rem] py-12 m-0  xsm:w-[50%]  flex  flex-col justify-start items-center xsm:gap-0 xs:gap-0 xs:justify-center xs:items-center  '>
              <div className=' flex flex-col  justify-start  xxs:gap-3 items-start'>
                <h1 className=' text-[30px] text-[#151875] font-josefin w-[80%] text-start font-semibold xs:text-[35px] xsm:text-[23px] xxs:w-[90%] xxs:text-[25px]'>
                  20% Discount Of All Products
                </h1>
                <span className='text-[18px] font-josefin my-3 text-[#FB2E86]'>
                  Eams Sofa Compact
                </span>
                <p className='text-left text-[#B7BACB] w-[75%]'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  beatae aliquid magnam quibusdam eligendi.
                </p>
                <div className='grid grid-cols-2 mt-2 gap-4 '>
                  <span className='flex items-center gap-1 text-[#B7BACB]'>
                    <img src={tick} alt='' />
                    Material expose like metals
                  </span>
                  <span className='flex items-center  gap-1 text-[#B7BACB]'>
                    <img src={tick} className='' alt='' />
                    Material expose like metals
                  </span>
                  <span className='flex items-center gap-1 text-[#B7BACB]'>
                    <img src={tick} alt='' />
                    Material expose like metals
                  </span>
                  <span className='flex items-center gap-1 text-[#B7BACB]'>
                    <img src={tick} alt='' />
                    Material expose like metals
                  </span>
                </div>
                <div className=' flex gap-1 mt-3 items-center justify-center'>
                  <button className='text-white py-2 px-4  text-[17px] bg-[#fb2e86] '>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className='lg:w-[50%]    md:w-[50%] p-3 xxs:w-[50%]  xs:w-[50%] flex items-center justify-center'>
              {/* <img src={circle} alt='' className='absolute w-[350px] ' /> */}

              <img
                src={clubsofa}
                className='w-[500px] absolute object-contain'
                alt='bannerimg'
              />
            </div>

            {/* <div className='lg:w-[20%] md:w-0 xxs:hidden  xxs:w-0'></div> */}
          </div>
        </div>
      </section>
    </>
  );
};
