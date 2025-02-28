import React from 'react';
import { trendProducts } from '@/src/utils/products';
import product5 from '@/src/assets/trendingP/P1.png';
import product6 from '@/src/assets/trendingP/p2.png';
import product7 from '@/src/assets/trendingP/p3.png';
import product8 from '@/src/assets/trendingP/p4.png';
import product9 from '@/src/assets/trendingP/p5.png';
export const TrendingProducts = () => {
  return (
    <section className='lg:w-[82%] md:w-[85%]  sm:w-[94%] xsm:w-[90%] w-full mx-auto flex flex-col justify-start items-start mt-9'>
      {/* Flash Sales Products */}
      <h1 className='text-center font-josefin text-3xl font-semibold mx-auto my-2'>
        Trending Products
      </h1>
      <div className='w-full grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  my-4'>
        {/* Product 1 */}
        {trendProducts.slice(0, 4).map((product, index) => (
          <>
            <div className='group ' key={index}>
              <div className='flex justify-start gap-1 h-[340px] p-2  border border-gray-200 rounded-md shadow-custom items-start w-[230px] flex-col'>
                <div className='h-[230px] px-4 rounded-sm group-hover:bg-[#F7F7F7] bg-[#F6F7FB] relative w-full flex justify-center items-center flex-col'>
                  <img src={product?.image} className='w-[150px]' alt='' />

                  {/* <Link  className="w-full rounded-b-sm font-poppins font-medium text-[16px] absolute bottom-0 hover:visible  hover:bg-black text-transparent transition-all duration-500 ease-out hover:text-white py-1">Add to Cart</Link> */}
                </div>
                <h1 className='w-full  max-w-full font-Lato font-bold text-[16px] text-[#4e4d4d]'>
                  {product?.title}
                </h1>

                <div className='flex mb-3 flex-col group-hover:text-white gap-1 justify-center items-center mx-auto'>
                  <span className='text-[#4e4e4e]  text-[16px] font-poppins font-medium'>
                    ${product?.price}
                    <span className='ml-3 text-[16px] opacity-55 line-through text-black'>
                      $160
                    </span>
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
        <div className='w-[1000px] grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-4  '>
          <div className=' flex flex-col items-start rounded-md bg-[#FFF6FB] p-4 shadow-md'>
            <h2 className='text-xl font-semibold font-josefin'>
              23% off in all products
            </h2>
            <button className='text-[#FB2E86] font-Lato text-[14px] border-b border-[#FB2E86]'>
              Shop Now
            </button>
            <div className=' '>
              <img
                src={product5}
                className='relative top-0 -right-[12rem] w-[100px]'
                alt=''
              />
            </div>
          </div>
          <div className=' flex flex-col items-start rounded-md bg-[#EEEFFB] p-4 shadow-md'>
            <h2 className='text-xl font-semibold font-josefin'>
              23% off in all products
            </h2>
            <button className='text-[#FB2E86] font-Lato text-[14px] border-b border-[#FB2E86]'>
              Shop Now
            </button>
            <div className=' '>
              <img
                src={product6}
                className='relative top-0 -right-[8rem] w-[150px]'
                alt=''
              />
            </div>
          </div>
          <div className=' flex flex-col gap-2 items-start  p-1 '>
            <div className=' w-full flex gap-3  items-center '>
              <div className='bg-[#F5F6F8] rounded-md px-3 py-1'>
                <img src={product7} className='w-[43px]' alt='' />
              </div>
              <div className='flex flex-col items-start justify-center'>
                <h3 className='font-josefin font-medium'>
                  Executive Seat chair
                </h3>
                <span>$32.00</span>
              </div>
            </div>
            <div className=' w-full flex gap-3  items-center '>
              <div className='bg-[#F5F6F8] rounded-md px-3 py-1'>
                <img src={product8} className='w-[43px]' alt='' />
              </div>
              <div className='flex flex-col items-start justify-center'>
                <h3 className='font-josefin font-medium'>
                  Executive Seat chair
                </h3>
                <span>$32.00</span>
              </div>
            </div>
            <div className=' w-full flex gap-3  items-center '>
              <div className='bg-[#F5F6F8] rounded-md px-3 py-1'>
                <img src={product9} className='w-[43px]' alt='' />
              </div>
              <div className='flex flex-col items-start justify-center'>
                <h3 className='font-josefin font-medium'>
                  Executive Seat chair
                </h3>
                <span>$32.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
