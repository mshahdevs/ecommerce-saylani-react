import React from 'react';
import { latestBlog } from '@/src/utils/blog';
import pin from '@/src/assets/pin.svg';
import calender from '@/src/assets/calender.svg';

export const LatestBlog = () => {
  return (
    <section className='lg:w-[82%] md:w-[85%]  sm:w-[94%] xsm:w-[90%] w-full mx-auto flex flex-col justify-start items-start mt-9'>
      {/* Flash Sales Products */}
      <h1 className='text-center font-josefin text-3xl font-semibold mx-auto my-2'>
        Latest Blog
      </h1>
      <div className='w-full grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-3  my-4'>
        {/* Product 1 */}
        {latestBlog?.map((blog, index) => (
          <>
            <div className='group ' key={index}>
              <div className='flex justify-start gap-1  border border-gray-200 rounded-md shadow-custom items-start w-[330px] flex-col'>
                <img src={blog?.image} className='w-full rounded-t-md' alt='' />
                <div className='w-full flex p-3 gap-3 items-start  justify-start flex-col'>
                  <div className='flex p-2 gap-5 w-full '>
                    <span className='flex items-center gap-1 '>
                      {' '}
                      <img src={pin} className='w-3 pt-1' alt='' />{' '}
                      {blog.author}
                    </span>
                    <span className='flex items-center gap-1 '>
                      {' '}
                      <img
                        src={calender}
                        className='w-3 pt-[2px]'
                        alt=''
                      />{' '}
                      {blog.date}
                    </span>
                  </div>
                  <h1
                    className={`w-full  odd: even:text-[#FB2E86]  font-Lato font-bold text-left  text-[16px] text-[#4e4d4d]`}
                  >
                    {blog?.title}
                  </h1>
                  <p className='text-[#72718F] leading-5 text-left text-sm font-Lato'>
                    {blog?.description}
                  </p>
                  <button className='border-b border-[#72718F] text-[#72718F] text-[14px]'>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};
