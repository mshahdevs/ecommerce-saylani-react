import React, { useState } from 'react';
import { CiHeart, CiShoppingCart, CiZoomIn } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa6';
import { latestProducts } from '@/src/utils/products';
import sale from '@/src/assets/features/sale.png';
export const LatestProducts = () => {
  const [favorites, setFavorites] = useState({});

  return (
    <>
      <section className='lg:w-[82%] md:w-[85%]  sm:w-[94%] xsm:w-[90%] w-full mx-auto flex flex-col justify-start items-start mt-9'>
        <h1 className='text-center font-josefin text-3xl font-semibold mx-auto my-2'>
          Latest Products
        </h1>
        <div className='flex justify-center my-2 mx-auto gap-6'>
          <span className='text-[#FB4997] border-b-2 border-[#FB4997] font-Lato  text-[18px] font-normal'>
            New Arrival
          </span>
          <span className='font-Lato  text-[18px] font-normal'>
            Best Seller
          </span>
          <span className='font-Lato  text-[18px] font-normal'>Featured</span>
          <span className='font-Lato  text-[18px] font-normal'>
            Special Offer
          </span>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5 mb-10'>
          {/* Product 1 */}

          {latestProducts?.map((product) => (
            <div className='group' key={product?.id}>
              <div className='flex justify-start gap-1 w-[340px] group-hover:bg-transparent  group-hover:drop-shadow-sm  rounded-md  items-start  flex-col'>
                <div className='h-[230px] px-4 rounded-sm group-hover:bg-white  bg-[#F7F7F7]  relative w-full flex justify-center items-center flex-col'>
                  <img
                    src={product?.image}
                    className='w-[150px] group-hover:drop-shadow-md'
                    alt=''
                  />
                  <img
                    src={sale}
                    className='absolute group-hover:block hidden w-14 top-6 left-5'
                    alt=''
                  />
                  <span className='flex flex-col border border-b'>
                    <CiShoppingCart
                      onClick={() => handleAddToCart(product)}
                      className='absolute top-24 left-3 hover:bg-[#ebecf1] text-[#2F1AC4] p-1 text-[24px] cursor-pointer rounded-[50px]'
                    />

                    <span className='absolute top-32 z-40 left-2  p-1 cursor-pointer rounded-[50px]'>
                      {favorites[product.id] ? (
                        <FaHeart
                          className='text-red-500 text-[12px]'
                          onClick={() => handleFavorite(product)}
                        />
                      ) : (
                        <CiHeart
                          className='hover:bg-[#ebecf1] p-1 text-[24px] cursor-pointer rounded-[50px] text-[#2F1AC4]'
                          onClick={() => handleFavorite(product)}
                        />
                      )}
                    </span>

                    <CiZoomIn className='absolute top-[10.5rem] left-3 hover:bg-[#ebecf1] text-[#2F1AC4] p-1 text-[24px] cursor-pointer rounded-[50px]' />
                  </span>
                  {/* <Link  className="w-full rounded-b-sm font-poppins font-medium text-[16px] absolute bottom-0 hover:visible  hover:bg-black text-transparent transition-all duration-500 ease-out hover:text-white py-1">Add to Cart</Link> */}
                </div>
                <div className='flex justify-between items-center gap-24'>
                  <h1 className='w-full  max-w-full font-josefin border-b-[2px] border-[#EEEFFB]  text-[16px] text-[#151875]'>
                    {product?.title}
                  </h1>
                  <span className=' text-[14px] font-josefin '>
                    ${product?.price}.00
                    <span className='ml-1  text-[13px] opacity-55 line-through font-josefin text-[#FB2448]'>
                      ${product?.discount}.00
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
          ))}
        </div>
      </section>
    </>
  );
};
