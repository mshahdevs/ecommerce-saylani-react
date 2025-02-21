import React from 'react';
import { useSelector } from 'react-redux';
// import img from '@/src/assets/productimages/camera.png'
import { CiHeart, CiShoppingCart, CiZoomIn } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa6';
import wishlist from '@/src/assets/shopping-cart/wishlist.png';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../Slices/FavoriteSlice';
export const Favorite = () => {
  const { favoriteProducts, message } = useSelector((state) => state.favorite);

  const state = useSelector((state) => state.favorite);

  const dispatch = useDispatch();
  const handleFavorite = (data) => {
    dispatch(toggleFavorite(data));
  };
  if (favoriteProducts.length === 0) {
    return (
      <div className='w-full h-[70vh] flex flex-col justify-center items-center'>
        <img src={wishlist} className='w-[100px] animate-bounce' alt='' />
        <p className='font-poppins'>No products available in wishlist</p>
      </div>
    );
  }
  return (
    <div className=' p-2 w-full flex flex-col space-y-4 justify-center items-center m-auto'>
      {favoriteProducts.map((product) => (
        <div className='bg-white rounded-md shadow-lg shadow-fuchsia-200 p-2 w-[80%] gap-6 flex justify-evenly items-center'>
          <div className='w-[500px]'>
            <img src={product?.category?.image} className='w-full' alt='' />
          </div>
          <div className=' flex flex-col justify-start items-start'>
            <div className='flex items-center gap-3'>
              <h1 className='font-medium'>{product?.title}</h1>
              <div className='flex space-x-2 mt-1'>
                <span className='w-3 h-3 bg-orange-300 rounded-full'></span>
                <span className='w-3 h-3 bg-purple-400 rounded-full'></span>
                <span className='w-3 h-3 bg-pink-500 rounded-full'></span>
              </div>
            </div>
            <div>
              <span>${product?.price}</span>
            </div>
            <p>{product?.description}</p>
            <div className='flex justify-center items-center'>
              <CiShoppingCart size={20} />
              <FaHeart
                onClick={() => handleFavorite(product)}
                className={`text-red-500`}
              />
              <CiZoomIn />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
