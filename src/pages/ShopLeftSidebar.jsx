import React from 'react';
import './shopleft.css';
import {
  CiAirportSign1,
  CiAlarmOn,
  CiHeart,
  CiSearch,
  CiShoppingCart,
  CiStar,
  CiZoomIn,
} from 'react-icons/ci';
import { TiStarFullOutline } from 'react-icons/ti';
import img1 from '../../src/assets/shop-left-sidebar/product1.png';
import img2 from '../../src/assets/shop-left-sidebar/product2.png';
import img3 from '../../src/assets/shop-left-sidebar/product3.png';
import img4 from '../../src/assets/shop-left-sidebar/product4.png';
import img5 from '../../src/assets/shop-left-sidebar/product5.png';
import img6 from '../../src/assets/shop-left-sidebar/product6.png';
import img7 from '../../src/assets/shop-left-sidebar/product7.png';

import reviewstar from '@/src/assets/fillstar.svg';
import reviewemptystar from '@/src/assets/emptystar.svg';

import partnerImg from '../../src/assets/productimages/partnerimg.png';
import { useState } from 'react';
import { setCategory } from '../Slices/ProductSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const ShopLeftSidebar = () => {
  const { category, filterProducts } = useSelector((state) => state.product);

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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategory(''));
  }, [dispatch]);
  const handleCategory = (event) => {
    const isChecked = event.target.checked;
    dispatch(setCategory(isChecked ? 'Clothes' : ''));
  };
  const handleFavorite = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className='w-full bg-[#f6f5ff] h-[286px] flex justify-center'>
        <div className='w-[84%]  flex items-center justify-start'>
          <div className='text-left ml-3  my-auto'>
            <h1 className='text-3xl font-semibold py-2'>Shop Left Sidebar</h1>
            <span>
              Home . Pages .{' '}
              <span className='text-[#fb2e86]'>Shop Left Sidebar</span>
            </span>
          </div>
        </div>
      </div>
      <div className='w-[84%] flex mt-3 justify-between  items-center mx-auto'>
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
      <div className='w-[84%] flex my-4 mx-auto '>
        <div className='w-[30%] flex  flex-col justify-evenly space-y-28 py-2'>
          <div className='flex flex-col justify-start items-start'>
            <h1 className='underline leading-7 font-semibold font-josefin'>
              Categories
            </h1>
            <div className='flex items-center space-x-2'>
              <input
                type='checkbox'
                onChange={handleCategory}
                className='custom-checkbox'
                name=''
                id='clothes'
              />
              <label htmlFor='clothes' className=''>
                Clothes
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <input
                type='checkbox'
                className='custom-checkbox'
                name=''
                id='fusion'
              />
              <label htmlFor='fusion'>Magento</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input
                type='checkbox'
                className='custom-checkbox'
                name=''
                id='unique'
              />
              <label htmlFor='unique'>Bigcommerce</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input
                type='checkbox'
                className='custom-checkbox'
                name=''
                id='dream'
              />
              <label htmlFor='dream'>osCommerce</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input
                type='checkbox'
                className='custom-checkbox'
                name=''
                id='young'
              />
              <label htmlFor='young'>3dcart</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input
                type='checkbox'
                className='custom-checkbox'
                name=''
                id='green'
              />
              <label htmlFor='green'>
                Bags
                {/* <div className='flex flex-col'>
                  <span>Accessories</span>
                  
                  <span>Jewellery</span>
                 </div> */}
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <input
                type='checkbox'
                className='custom-checkbox'
                name=''
                id='green'
              />
              <label htmlFor='green'>Watches</label>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <h1 className='underline leading-7 font-semibold font-josefin'>
              Discount Offer
            </h1>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='coaster' />
              <label htmlFor='coaster' className=''>
                20% Cashback
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='fusion' />
              <label htmlFor='fusion'>5% Cashback Offer</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='unique' />
              <label htmlFor='unique'>25% Discount Offer</label>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <h1 className='underline leading-7 font-semibold font-josefin'>
              Rating Item{' '}
            </h1>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='coaster' />
              <label htmlFor='coaster' className=''>
                <span className='flex'>
                  <img src={reviewstar} alt='' />
                  <img src={reviewstar} alt='' />
                  <img src={reviewstar} alt='' />
                  <img src={reviewstar} alt='' />
                  <img src={reviewemptystar} alt='' />
                  (2341)
                </span>
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='coaster' />
              <label htmlFor='coaster' className=''>
                <span className='flex'>
                  <img src={reviewstar} alt='' />
                  <img src={reviewstar} alt='' />
                  <img src={reviewstar} alt='' />
                  <img src={reviewstar} alt='' />
                  <img src={reviewemptystar} alt='' />
                  (2341)
                </span>
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='coaster' />
              <label htmlFor='coaster' className=''>
                <span className='flex'>
                  <img src={reviewstar} alt='' />
                  <img src={reviewstar} alt='' />
                  <img src={reviewstar} alt='' />
                  <img src={reviewstar} alt='' />
                  <img src={reviewemptystar} alt='' />
                  (2341)
                </span>
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='coaster' />
              <label htmlFor='coaster' className=''>
                <span className='flex'>
                  <img src={reviewstar} alt='' />
                  <img src={reviewstar} alt='' />
                  <img src={reviewstar} alt='' />
                  <img src={reviewstar} alt='' />
                  <img src={reviewemptystar} alt='' />
                  (2341)
                </span>
              </label>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <h1 className='underline leading-7 font-semibold font-josefin'>
              Categories
            </h1>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='coaster' />
              <label htmlFor='coaster' className=''>
                Prestashop
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='fusion' />
              <label htmlFor='fusion'>Magento</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='unique' />
              <label htmlFor='unique'>Bigcommerce</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='dream' />
              <label htmlFor='dream'>osCommerce</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='young' />
              <label htmlFor='young'>3dcart</label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='green' />
              <label htmlFor='green'>
                Bags
                {/* <div className='flex flex-col'>
                  <span>Accessories</span>
                  
                  <span>Jewellery</span>
                 </div> */}
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='green' />
              <label htmlFor='green'>Watches</label>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <h1 className='underline leading-7 font-semibold font-josefin'>
              Price Filter
            </h1>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='coaster' />
              <label htmlFor='coaster' className=''>
                $0.00 - $150.00
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='coaster' />
              <label htmlFor='coaster' className=''>
                $150.00 - $350.00
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='coaster' />
              <label htmlFor='coaster' className=''>
                $150.00 - $504.00
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='' id='coaster' />
              <label htmlFor='coaster' className=''>
                $450.00+
              </label>
            </div>
            <div className='relative flex mt-2 items-center border border-gray-400 px-1 rounded-sm space-x-2'>
              <input
                type='text'
                name=''
                placeholder='$10.00 - $200.00 '
                className='outline-none'
                id='search_price'
              />
              <CiSearch className='absolute top-1 right-2' />
            </div>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <h1 className='underline leading-7 font-semibold font-josefin'>
              Filter By Color
            </h1>
            <div className='flex items-center space-x-2'>
              <div className='flex  items-center gap-1'>
                <span className='h-3 w-3 rounded-full bg-[#5E37FF]'></span>
                <p>Blue</p>
              </div>
              <div className='flex  items-center gap-1'>
                <span className='h-3 w-3 rounded-full bg-[#FF9437]'></span>
                <p>Orange</p>
              </div>
              <div className='flex  items-center gap-1'>
                <span className='h-3 w-3 rounded-full bg-[#FFBF95]'></span>
                <p>Brown</p>
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='flex  items-center gap-1'>
                <span className='h-3 w-3 rounded-full bg-[#33D221]'></span>
                <p>Green</p>
              </div>
              <div className='flex  items-center gap-1'>
                <span className='h-3 w-3 rounded-full bg-[#E248FF]'></span>
                <p>Purple</p>
              </div>
              <div className='flex  items-center gap-1'>
                <span className='h-3 w-3 rounded-full bg-[#E248FF]'></span>
                <p>Sky</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[90%] py-3'>
          {filterProducts?.map((product, index) => (
            <div key={index} className='w-full my-4  mx-auto'>
              <div className='w-[98%] bg-white  shadow-custom rounded-lg p-3  '>
                <div className='flex justify-start gap-10 items-center '>
                  <div className=' '>
                    <img
                      src={product.image}
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
                          ${product?.discount}5.00
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
        </div>
      </div>

      {/* Our Partners */}
      <div className='w-full  my-20 p-4'>
        <div className='w-1/2 flex justify-center items-center mx-auto'>
          <img src={partnerImg} alt='' />
        </div>
      </div>
    </>
  );
};
