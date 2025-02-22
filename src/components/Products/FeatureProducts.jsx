import React from 'react';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';

import { useDispatch, useSelector } from 'react-redux';
const FeaturedProduct = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);
  const state = useSelector((state) => state.cart);

  const handleFavorite = (data) => {
    dispatch(toggleFavorite(data));
  };
  const handleAddToCart = (data) => {
    dispatch(toggleCart(data));
    toast({ title: state.message });
  };

  return (
    <div className='flex flex-col px-8 gap-5 md:gap-10 py-5 xl:px-[12rem] md:py-10'>
      <h1 className='text-center font-bold text-blue-950 text-xl md:text-3xl'>
        Featured Products
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 gap-y-8 md:gap-x-8'>
        {/* {isLoading ? (
          <p>Loading...</p>
        ) : ( */}
        {products?.slice(0, 4).map((product) => (
          <div
            key={product.id} // Add a unique key for each product
            className='flex flex-col border rounded-lg hover:shadow-2xl shadow-xl group cursor-pointer h-[24rem]'
          >
            <div className='border flex justify-center py-0 bg-[#f6f7fb] group-hover:bg-[#f7f7f7] rounded-t-lg h-[18rem]'>
              <img src={product?.images[0]} alt={product.name} />{' '}
              {/* Add alt text */}
            </div>
            <div className='flex flex-col h-[8rem] justify-center items-center py-3 gap-1 rounded-b-lg group-hover:bg-blue-950'>
              <h3 className='text-xl font-semibold group-hover:text-white text-red-400'>
                {product.name}
              </h3>
              <p className='group-hover:text-white text-blue-950 font-semibold'>
                Code - {product.code}
              </p>
              <span className='group-hover:text-white text-blue-950 font-semibold'>
                ${product.price}
              </span>
              <div className='flex gap'>
                <span className='group-hover:text-white text-blue-950 font-semibold'>
                  <CiHeart
                    onClick={() => handleFavorite(product)}
                    className='text-[1.3rem] lg:text-[1.5rem] hover:text-red-800 shadow-2xl shadow-red-800 cursor-pointer'
                  />
                </span>
                <span className='group-hover:text-white text-blue-950 font-semibold'>
                  <CiShoppingCart
                    onClick={() => handleAddToCart(product)}
                    className='text-[1.3rem] lg:text-[1.5rem] hover:text-red-800 shadow-2xl shadow-red-800 cursor-pointer'
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
        {/* )} */}
      </div>
    </div>
  );
};

export default FeaturedProduct;
