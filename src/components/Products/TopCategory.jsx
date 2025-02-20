import React from 'react';
import { trendProducts } from '@/src/utils/products';

export const TopCategory = () => {
  return (
    <section className='lg:w-[82%] md:w-[85%]  sm:w-[94%] xsm:w-[90%] w-full mx-auto flex flex-col justify-start items-start mt-9'>
      {/* Flash Sales Products */}
      <h1 className='text-center font-josefin text-3xl font-semibold mx-auto my-2'>
        Top Category
      </h1>
      <div className='w-full grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  my-4'>
        {/* Product 1 */}
        {trendProducts.slice(0, 4).map((product) => (
          <>
            <div className='group ' key={product?.id}>
              <div className='flex justify-start gap-1  p-2   rounded-md  items-start w-[230px] flex-col'>
                <div className='h-[210px] px-4 group-hover:border-b-[6px]  group-hover:scale-105 group-hover:border-l-[7px] transition-all duration-200  border-[#644ed2b6]  rounded-full bg-[#F6F7FB] relative w-full flex justify-center items-center flex-col'>
                  <img src={product?.image} className='w-[130px]' alt='' />
                </div>
                <h1 className='w-full max-w-full mt-2 font-bold font-josefin text-[16px] text-[#4e4d4d]'>
                  {product?.title}
                </h1>

                <div className='flex mb-3 flex-col group-hover:text-white gap-1 justify-center items-center mx-auto'>
                  <span className='text-[#4e4e4e] font-josefin  text-[16px]  font-medium'>
                    ${product?.price}.00
                  </span>
                </div>
                {/* <div className="flex justify-start items-center">  
                      <img src={reviewfillstar} alt="" />  
                      <img src={reviewfillstar} alt="" />  
                      <img src={reviewfillstar} alt="" />  
                      <img src={reviewfillstar} alt="" />  
                      <img src={reviewfillstar} alt="" />  
                      <span className="ml-2 text-black opacity-55 font-semibold text-[14px]">  
                        (80)  
                      </span>  
                    </div> */}
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};
