import React from 'react';
import { Link } from 'react-router-dom';

import { CiHeart, CiShoppingCart, CiZoomIn } from 'react-icons/ci';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '@/src/Slices/FavoriteSlice';
import { toggleCart } from '@/src/Slices/CartSlice';
import { useState } from 'react';
import authfailed from '@/src/assets/authfailed.png';
import { setSearchQuery } from '@/src/Slices/ProductSlice';
import { useFirebaseContext } from '@/src/context/FirebaseContext';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import DialogMessage from '../DialogMessage';
export const AllProducts = () => {
  const [addProduct, setAddProduct] = useState({
    products: [],
  });
  const { currentUser } = useFirebaseContext();
  console.log('add', addProduct.products);
  const { filterProducts } = useSelector((state) => state.product);
  const { cartProducts } = useSelector((state) => state.cart);
  const { message } = useSelector((state) => state.favorite);
  console.log('cart', cartProducts);
  const dispatch = useDispatch();
  const handleFavorite = (product) => {
    if (!currentUser) {
      modal.current.open();
      toast.warning('Authentication is required.');
      return;
    }

    dispatch(toggleFavorite(product));
    toast.success('Prduct added to favorite');
  };
  const handleAddToCart = (data) => {
    if (!currentUser) {
      modal.current.open();
      toast.warning('Authentication is required.');
      return;
    }
    console.log('data', data);
    console.log(data.id);
    const updateCart = { ...addProduct, [data.id]: !addProduct[data.id] };
    console.log('updateCart', updateCart);
    setAddProduct(updateCart);
    dispatch(toggleCart(data));
    toast.success('Product added to Cart');
  };
  const lastChange = useRef();
  const handleSearchProduct = (event) => {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      dispatch(setSearchQuery(event.target.value));
    }, 500);
  };

  const modal = useRef();

  return (
    <>
      <DialogMessage ref={modal}>
        <div className='flex justify-center  flex-col items-center'>
          <img src={authfailed} alt='' className=' w-[36px] mb-3' />
          <h1 className='text-2xl font-bold font-josefin text-red-700'>
            Authentication Required
          </h1>
          <p className='text-gray-500 text-sm mb-2 font-inter'>
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
      <input
        type='text'
        onChange={handleSearchProduct}
        className='w-[82%] mt-4 px-3 text-center py-2 rounded-xl mx-auto flex outline-none border border-gray-500'
        placeholder='Search Product by name '
        name=''
        id=''
      />
      <section className=' lg:w-[82%] md:w-[85%] sm:w-[94%]  xsm:w-[90%] w-full mx-auto flex flex-col justify-start items-start mt-6 '>
        {/*All Products  */}
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-4'>
          {filterProducts.length === 0 ? (
            <div className='w-full h-[30vh] text-center flex  flex-col items-center my-12 mx-64'>
              <img src='search.png' alt='' width={100} />
              <p className='font-josefin text-center drop-shadow-xl'>
                No products available yet.
              </p>
            </div>
          ) : (
            filterProducts.map((product) => (
              <div className='group' key={product?.id}>
                <div
                  className='flex justify-start gap-1 h-[340px] group-hover:bg-[#2F1AC4] border border-gray-200 rounded-md shadow-custom items-start w-[240px]  flex-col'
                  key={product?.id}
                >
                  <div className='bg-[#f5f5f5] h-[230px] px-4 rounded-sm relative w-full flex justify-center items-center flex-col'>
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
                  </div>
                  <h1 className='w-full group-hover:text-white max-w-full font-poppins font-medium text-[16px] text-black'>
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
            ))
          )}
        </div>
      </section>
    </>
  );
};
