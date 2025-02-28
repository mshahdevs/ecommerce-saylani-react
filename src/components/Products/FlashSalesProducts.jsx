import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CiHeart, CiShoppingCart, CiZoomIn } from 'react-icons/ci';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '@/src/Slices/FavoriteSlice';
import { toggleCart } from '@/src/Slices/CartSlice';
import { useState } from 'react';
import { useFirebaseContext } from '@/src/context/FirebaseContext';
import authFailed from '@/src/assets/authfailed.png';
import { toast } from 'react-toastify';
import DialogMessage from '../DialogMessage';
export const FlashSalesProducts = () => {
  const { currentUser } = useFirebaseContext();
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const handleFavorite = (product) => {
    if (!currentUser) {
      // setShowAuthMessage(!showAuthMessage);
      modal.current.open();

      toast.warning('Authentication is required.');
      return;
    }

    dispatch(toggleFavorite(product));
    toast.success('Product added to Favorite!');
  };

  const handleAddToCart = (data) => {
    if (!currentUser) {
      // setShowAuthMessage(!showAuthMessage);
      modal.current.open();
      toast.warning('Authentication is required.');
      return;
    }
    dispatch(toggleCart(data));
    toast.success('Product added to Cart');
  };
  const modal = useRef();

  return (
    <>
      <DialogMessage ref={modal}>
        <div className='flex justify-center  flex-col items-center'>
          <img src={authFailed} alt='' className=' w-[35px] mb-3' />
          <h1 className='text-2xl font-bold font-josefin text-red-700'>
            Authentication Required
          </h1>
          <p className='text-gray-500 text-sm mb-1 font-inter'>
            Please do login or signup for buying products.
          </p>
          <Link
            to={'/signup'}
            className='px-3 bg-red-600 p-2 mt-4 font-josefin rounded-full text-white font-medium'
          >
            Go to Sign Up
          </Link>
        </div>
      </DialogMessage>

      <section className='lg:w-[82%] md:w-[85%]  sm:w-[94%] xsm:w-[90%] w-full mx-auto flex flex-col justify-start items-start mt-9'>
        {/* Flash Sales Products */}
        <h1 className='text-center font-josefin text-3xl font-semibold mx-auto my-2'>
          Featured Products
        </h1>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  my-4'>
          {/* Product 1 */}
          {products.slice(0, 4).map((product) => (
            <div className='group' key={product?.id}>
              <div className='flex justify-start gap-1 h-[340px]  group-hover:bg-[#2F1AC4] border border-gray-200 rounded-md shadow-custom items-start w-[230px] flex-col'>
                <div className='h-[230px] px-4 rounded-sm group-hover:bg-[#F7F7F7] bg-[#F6F7FB] relative w-full flex justify-center items-center flex-col'>
                  <img
                    src={product?.category?.image}
                    className='w-[150px]'
                    alt=''
                  />
                  <span className=''>
                    <CiShoppingCart
                      onClick={() => handleAddToCart(product)}
                      className='absolute top-1 left-1 bg-white p-1 text-[24px] cursor-pointer rounded-[50px]'
                    />

                    <span className='absolute top-1 z-40 left-10 bg-white p-1 cursor-pointer rounded-[50px]'>
                      <CiHeart onClick={() => handleFavorite(product)} />
                    </span>

                    <CiZoomIn className='absolute top-1 left-[4.8rem] bg-white p-1 text-[24px] cursor-pointer rounded-[50px]' />
                  </span>
                  {/* <Link  className="w-full rounded-b-sm font-poppins font-medium text-[16px] absolute bottom-0 hover:visible  hover:bg-black text-transparent transition-all duration-500 ease-out hover:text-white py-1">Add to Cart</Link> */}
                </div>
                <h1 className='w-full group-hover:text-white max-w-full font-Lato font-bold text-[16px] text-[#FB2E86]'>
                  {product?.title}
                </h1>
                <div className='flex justify-center space-x-2 mx-auto items-center'>
                  <span className='bg-[#05E6B7] w-3 h-1 rounded-lg'></span>
                  <span className='bg-[#F701A8] w-3 h-1 rounded-lg'></span>
                  <span className='bg-[#00009D] group-hover:bg-[#FFEAC1] w-3 h-1 rounded-lg'></span>
                </div>
                <div className='flex mb-3 flex-col group-hover:text-white gap-1 justify-center items-center mx-auto'>
                  <span>Code:YT4930</span>
                  <span className='text-[#db4444] group-hover:text-red-400 text-[16px] font-poppins font-medium'>
                    ${product?.price}
                    <span className='ml-3 group-hover:text-gray-100 text-[16px] opacity-55 line-through text-black'>
                      $160
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full my-7 flex justify-center items-center'>
          <div className='flex justify-center space-x-2 mx-auto items-center'>
            <span className='bg-[#F701A8] w-5 h-1 rounded-lg'></span>
            <span className=' bg-[#FEBAD7] w-5 h-1 rounded-lg'></span>
            <span className='bg-[#FEBAD7]  w-5 h-1 rounded-lg'></span>
            <span className='bg-[#FEBAD7]  w-5 h-1 rounded-lg'></span>
          </div>
        </div>
      </section>
    </>
  );
};
