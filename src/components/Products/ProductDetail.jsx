import React from 'react';
import img from '@/src/assets/product-detail/product1.png';
import mainimg from '@/src/assets/product-detail/product4.png';
import reviewfillstar from '@/src/assets/fillstar.svg';
import facebook from '@/src/assets/social-icons/facebook.png';
import insta from '@/src/assets/social-icons/insta.png';
import twitter from '@/src/assets/social-icons/twitter.png';

import { CiHeart } from 'react-icons/ci';

import { useSelector } from 'react-redux';
const ProductDetail = () => {
  const { products } = useSelector((state) => state.product);
  return (
    <>
      <div className='w-full bg-[#f6f5ff] h-[286px] flex justify-center'>
        <div className='w-[84%]  flex items-center justify-start'>
          <div className='text-left ml-3  my-auto'>
            <h1 className='text-3xl font-semibold font-josefin py-2'>
              Product Details
            </h1>
            <span>
              Home . Pages .{' '}
              <span className='text-[#fb2e86]'>Product Details</span>
            </span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className='w-[80%] bg-white shadow-custom my-8 p-3 rounded-[2px] flex space-x-4 mx-auto'>
        <div className=' gap-[11px] flex flex-col'>
          <div className='w-[151px]'>
            <img src={img} alt='' />
          </div>
          <div className='w-[151px]'>
            <img src={img} alt='' />
          </div>
          <div className='w-[151px]'>
            <img src={img} alt='' />
          </div>
        </div>
        <div className=''>
          <div className='w-[375px]'>
            <img src={mainimg} alt='' />
          </div>
        </div>
        <div className='w-[50%] flex  flex-col justify-center '>
          <div className='flex flex-col justify-start items-start space-x-1 gap-2'>
            <h1 className='font-josefin text-4xl text-[#0D134E]'>
              Playwood arm chair{' '}
            </h1>
            <div className='flex gap-1 items-center'>
              <div className='flex gap-[1px]'>
                <img src={reviewfillstar} alt='' />
                <img src={reviewfillstar} alt='' />
                <img src={reviewfillstar} alt='' />
                <img src={reviewfillstar} alt='' />
                <img src={reviewfillstar} alt='' />
              </div>{' '}
              <span className='text-[14px] font-josefin text-[#151875] '>
                (22)
              </span>
            </div>
            <div className='text-[16px] font-josefin'>
              <span className='text-[#151875] '>
                $23.00{' '}
                <span className='ml-1 text-[#FB2E86] line-through'>$32.00</span>
              </span>
            </div>
            <span className='font-josefin text-[16px] text-[#0D134E]'>
              Color
            </span>
            <p className='text-left text-[#A9ACC6] text-[16px] font-josefin '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              architecto beatae officia dicta molestias dignissimos quaerat
              cumque animi ratione. Soluta quae tempore hic excepturi
              necessitatibus a iusto ut molestiae nisi.
            </p>
            <div className='flex items-center gap-4'>
              <button className='ml-6 text-[#151875] text-[16px] font-josefin'>
                Add To Cart
              </button>
              <span>
                <CiHeart size={20} className='mt-[1px] text-[#151875]' />
              </span>
            </div>
            <div className='flex gap-2 flex-col justify-start items-start'>
              <span className='text-[16px] text-[#151875] font-josefin'>
                Categories
              </span>
              <span className='text-[16px] text-[#151875] font-josefin'>
                Tags
              </span>
              <div className='flex gap-5'>
                <span className='text-[16px] text-[#151875] font-josefin'>
                  Share
                </span>
                <div className='flex gap-3'>
                  <img src={facebook} alt='' />
                  <img src={insta} alt='' />
                  <img src={twitter} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='w-full relative bg-[#F2F0FF]'>
        {/* <img src={lamp} alt='' className='absolute w-[200px]' /> */}
        <div className='lg:w-[82%]   md:w-[84%] sm:w-[94%] xsm:w-[90%] mt-8  xxs:w-[90%]  mx-auto    '>
          <div className='w-full bg-green-400  flex items-center mx-auto justify-between  '>
            <div className=' lg:w-[90%] bg-gray-400 md:w-[50%]  xxs:w-[50%] h-[349px]   xs:h-[200px] xsm:h-[300px] xs:p-4 xs:w-[50%]  xxs:p-3 xxs:items-center xxs:justify-center mt-[3.5rem]  xsm:w-[50%]  flex  flex-col justify-start items-center xsm:gap-0 xs:gap-0 xs:justify-center xs:items-center  '></div>
          </div>
        </div>
      </section>
      {/* Related Products */}
      <section className='lg:w-[82%] md:w-[85%]  sm:w-[94%] xsm:w-[90%] w-full mx-auto flex flex-col justify-start items-start mt-9'>
        {/* Flash Sales Products */}
        <h1 className='text-left font-josefin text-2xl font-semibold  my-2'>
          Related Products
        </h1>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  my-4'>
          {/* Product 1 */}
          {products.slice(0, 4).map((product) => (
            <div className='group' key={product?.id}>
              <div className='flex justify-start gap-1 pb-4   border border-gray-200 rounded-md shadow-custom items-start w-[230px] flex-col'>
                <div className='px-0 rounded-sm  bg-[#F6F7FB] relative w-full flex justify-center items-center flex-col'>
                  <img
                    src={product?.category?.image}
                    className='w-[150px]'
                    alt=''
                  />
                </div>
                <div className='flex items-start justify-start m-0 p-0 '>
                  <h1 className='w-full   font-Lato font-bold text-[12px] text-[#40258a]'>
                    Mens Fashion Wear
                  </h1>
                  <div className='flex justify-start items-center'>
                    <img src={reviewfillstar} alt='' />
                    <img src={reviewfillstar} alt='' />
                    <img src={reviewfillstar} alt='' />
                    <img src={reviewfillstar} alt='' />
                    <img src={reviewfillstar} alt='' />
                  </div>
                </div>
                <span className='text-[#db4444] pl-3 group-hover:text-red-400 text-[16px] font-poppins font-medium'>
                  ${product?.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
