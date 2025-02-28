import React from 'react';
import {
  CiAirportSign1,
  CiAlarmOn,
  CiHeart,
  CiShoppingCart,
  CiStar,
  CiZoomIn,
} from 'react-icons/ci';
import { TiStarFullOutline } from 'react-icons/ti';
import { products } from '../utils/shoplist';
import { Parteners } from '../components/offers/Parteners';
import PageHeader from '../components/pageheader/PageHeader';

const ShopList = () => {
  const handleFavorite = (data) => {
    console.log(data);
  };
  return (
    <>
      <PageHeader title='Shop List' />
      <div className='w-[84%] flex mt-4  justify-between items-center mx-auto'>
        <div className='flex flex-col items-start justify-start'>
          <h1 className='font-semibold'>
            Ecommerce Accessories & Fashion item
          </h1>
          <p className='text-gray-400 text-sm'>
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className='flex gap-4 items-center'>
          <div>
            <span>Per Page:</span>
            <input
              type='text'
              className='w-[55px] outline-none h-[25px] border border-gray-400'
            />
          </div>
          <div>
            <span>Sort By:</span>
            <select
              name=''
              id=''
              className='w-[96px] h-[25px] outline-none text-sm text-gray-500 border border-gray-400'
            >
              <option value='' className=''>
                Best Match
              </option>
            </select>
          </div>
          <div className='flex items-center h-auto gap-1'>
            <span>View:</span>
            <CiAirportSign1 />
            <CiAlarmOn />
            <input
              type='text'
              name=''
              className='w-[162px] border border-gray-400'
              id=''
            />
          </div>
        </div>
      </div>
      {/* Product List */}
      {products?.map((product) => (
        <div key={product.id} className='w-[84%] my-5  mx-auto'>
          <div className='w-[98%] bg-white  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  rounded-lg p-2  '>
            <div className='flex justify-start gap-10 items-center '>
              <div className=' '>
                <img
                  src={product?.img}
                  className='w-[313px] h-[217.5px]'
                  alt=''
                />
              </div>
              <div className='w-[50%] flex gap-2 flex-col justify-start items-start'>
                <div className='flex items-center gap-3 justify-center'>
                  <h1 className='font-semibold'>{product?.title}</h1>
                  <div className='flex items-end space-x-2 mt-1'>
                    <span className='w-3 h-3 rounded-full  bg-red-500'></span>
                    <span className='w-3 h-3 rounded-full bg-orange-400'></span>
                    <span className='w-3 h-3 rounded-full bg-pink-500'></span>
                  </div>
                </div>
                <div className='flex  items-center gap-0 '>
                  <span className='mr-4'>
                    ${product?.price}.00{' '}
                    <span className='text-[#fb2e86] line-through ml-1'>
                      ${product?.discount}.00
                    </span>
                  </span>
                  <TiStarFullOutline color='#FFC416' />
                  <TiStarFullOutline color='#FFC416' />
                  <TiStarFullOutline color='#FFC416' />
                  <CiStar color='#FFC416' />
                  <CiStar color='#FFC416' />
                </div>
                <div className='flex items-start justify-start'>
                  <p className=' text-left'>{product?.description}</p>
                </div>
                <div className='flex mt-1 gap-6'>
                  <CiShoppingCart className='bg-white shadow-md rounded-full p-[3px] text-2xl ' />
                  <CiHeart
                    onClick={() => handleFavorite(product)}
                    className='bg-white shadow-md rounded-full p-[3px] text-2xl'
                  />
                  <CiZoomIn className='bg-white shadow-md rounded-full p-[3px] text-2xl' />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Our Partners */}
      <Parteners />
    </>
  );
};

export default ShopList;
