import React from 'react';
import { Timer } from '../components/Timer';
import leftArrow from '@/src/assets/leftArrow.svg';
import rightArrow from '@/src/assets/rightarrow.svg';

export const TodayTimer = () => {
  return (
    <>
      <section className=' lg:w-[82%] md:w-[85%] sm:w-[94%]  xsm:w-[90%] w-full mx-auto flex flex-col justify-start items-start mt-6 '>
        <div>
          <div className='flex  gap-2 justify-center items-center'>
            <span className='bg-[#DB4444] rounded-[4px] w-[13px] h-[30px]'></span>
            <span className='font-semibold text-[16px] font-poppins text-[#DB4444]'>
              Today's
            </span>
          </div>
        </div>
        {/*Today's Section  */}
        <div className='w-full  flex md:justify-between'>
          <div className='lg:w-1/2 md:w-[60%]   sm:w-[70%] xsm:w-[80%]   flex justify-between items-end'>
            <div className='w-1/2 md:w-1/2 text-start'>
              <h1 className='font-inter font-semibold text-[36px]  md:text-[32px] sm:text-[28px] xsm:text-[20px]'>
                Flash Sales
              </h1>
            </div>
            <Timer />
          </div>
          <div className='lg:w-1/2 md:w-[40%]  sm:w-[30%]  xsm:w-[20%]  flex justify-end xsm:justify-center lg:mr-0 xsm:gap-1 md:mr-3 items-center '>
            <div className='lg:w-1/6 md:w-1/5 xsm:w-[35%]  flex xsm:justify-center  lg:gap-2 md:gap-1 xsm:gap-2'>
              <img
                src={leftArrow}
                className='bg-[#f5f5f5] xsm:w-[23px] p-1 rounded-[50px] '
                alt='leftimg'
              />
              <img
                src={rightArrow}
                className='bg-[#f5f5f5] xsm:w-[23px] p-1 rounded-[50px] '
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
