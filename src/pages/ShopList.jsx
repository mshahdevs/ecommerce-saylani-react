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
import img1 from '../../src/assets/productimages/product1.png';
import img2 from '../../src/assets/productimages/product2.png';
import img3 from '../../src/assets/productimages/product3.png';
import img4 from '../../src/assets/productimages/product4.png';
import img5 from '../../src/assets/productimages/product5.png';
import img6 from '../../src/assets/productimages/product6.png';
import img7 from '../../src/assets/productimages/product7.png';
import { Parteners } from '../components/offers/Parteners';

const ShopList = () => {
  const products = [
    {
      id: 1,
      title: 'Accumsan tincidunt',
      price: 26.0,
      discount: 52.0,
      img: img1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    },
    {
      id: 2,
      title: 'Accumsan tincidunt',
      price: 26.0,
      discount: 52.0,
      img: img2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    },
    {
      id: 3,
      title: 'Accumsan tincidunt',
      price: 26.0,
      discount: 52.0,
      img: img3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    },
    {
      id: 4,
      title: 'Accumsan tincidunt',
      price: 26.0,
      discount: 52.0,
      img: img4,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    },
    {
      id: 5,
      title: 'Accumsan tincidunt',
      price: 26.0,
      discount: 52.0,
      img: img5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    },
    {
      id: 6,
      title: 'Accumsan tincidunt',
      price: 26.0,
      discount: 52.0,
      img: img6,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    },
    {
      id: 7,
      title: 'Accumsan tincidunt',
      price: 26.0,
      discount: 52.0,
      img: img7,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    },
  ];

  const handleFavorite = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className='w-full bg-[#f6f5ff] h-[286px] flex justify-center'>
        <div className='w-[84%]  flex items-center justify-start'>
          <div className='text-left ml-3  my-auto'>
            <h1 className='text-3xl font-semibold py-2'>Shop List</h1>
            <span>
              Home . Pages . <span className='text-[#fb2e86]'>Shop List</span>
            </span>
          </div>
        </div>
      </div>
      <div className='w-[84%] flex mt-3 justify-between items-center mx-auto'>
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
        <div key={product.id} className='w-[84%] my-2  mx-auto'>
          <div className='w-[98%] bg-white shadow-custom rounded-lg p-2  '>
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
