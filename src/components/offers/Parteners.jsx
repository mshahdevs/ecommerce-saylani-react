import React from 'react';
import partnerImg from '@/src/assets/productimages/partnerimg.png';

export const Parteners = () => {
  return (
    <>
      {/* Our Partners */}
      <div className='w-full  my-20 p-4'>
        <div className='w-1/2 flex justify-center items-center mx-auto'>
          <img src={partnerImg} alt='' />
        </div>
      </div>
    </>
  );
};
