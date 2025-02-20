import React, { useState } from 'react';
import { CiHeart, CiShoppingCart, CiZoomIn } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa6';
import { offers } from '@/src/utils/offers';
import sale from '@/src/assets/features/sale.png';

export const Offers = () => {
  const [favorites, setFavorites] = useState({});

  return (
    <>
      <section className='lg:w-[82%] md:w-[85%]  sm:w-[94%] xsm:w-[90%] w-full mx-auto flex flex-col justify-start items-start mt-9'>
        <h1 className='text-center text-[#151875] font-josefin text-[40px] font-bold mx-auto my-2'>
          What Shopex Offer!
        </h1>

        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 mb-10'>
          {offers?.map((offer) => (
            <div className='group' key={offer?.id}>
              <div className='flex justify-center h-[240px] items-center gap-1 w-[230px] group-hover:bg-transparent shadow-custom group-hover:drop-shadow-sm  rounded-md  p-3  flex-col'>
                <img
                  src={offer?.image}
                  className='w-[50px] group-hover:drop-shadow-md'
                  alt=''
                />

                <h2 className='font-semibold font-josefin'>{offer?.title}</h2>
                <p className='w-full  max-w-full font-josefin   text-[14px] text-[#aaaaaa]'>
                  {offer?.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
