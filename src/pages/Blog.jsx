import React from 'react';
import PageHeader from '../components/pageheader/PageHeader';
import blog1 from '@/src/assets/blog/blogs1.png';
import r1 from '@/src/assets/blog/R1.png';
import p1 from '@/src/assets/blog/P1.png';

import { CiSearch } from 'react-icons/ci';
import { Parteners } from '../components/offers/Parteners';
const Blog = () => {
  return (
    <>
      <main className='  '>
        <PageHeader title='Blog' />
        <section className='my-20'>
          <div className=' max-w-[84%] mx-auto'>
            <div className=' flex p-1 justify-between flex-col md:flex-row gap-10'>
              {/* Blogs Div */}
              <div className=' md:w-[84%]  flex flex-col gap-8'>
                {/* Single blog */}
                <div className='  flex items-start gap-4 flex-col'>
                  <img src={blog1} className='w-full' alt='' />
                  {/* Author Details */}
                  <div className='flex items-center gap-4'>
                    <span className='bg-[#ffe7f9] md:px-10 px-6 text-sm py-1 '>
                      Auxion
                    </span>
                    <span className='bg-[#FFECE2] md:px-10 px-6 text-sm py-1'>
                      Aug 09 2020
                    </span>
                  </div>
                  <h3 className='md:text-3xl text-2xl font-bold text-[#151875]'>
                    Mauris at orci non vulputate diam tincidunt nec.
                  </h3>
                  <p className='text-sm text-left text-[#8A8FB9]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit facilisis quis auctor pretium ipsum, eu rutrum.
                    Condimentum eu malesuada vitae ultrices in in neque, porta
                    dignissim. Adipiscing purus, cursus vulputate id id dictum
                    at.
                  </p>
                  <div className='flex items-center space-x-2'>
                    <span className=' font-Lato font-semibold text-sm text-[#151875]'>
                      Read More
                    </span>
                    <span className='w-[6px] h-[6px] rounded-full bg-pink-500'></span>
                  </div>
                </div>

                {/* Single blog */}
                <div className=' w-full flex items-start gap-4 flex-col'>
                  <img src={blog1} className='w-full' alt='' />
                  {/* Author Details */}
                  <div className='flex items-center gap-4'>
                    <span className='bg-[#ffe7f9] md:px-10 px-6 text-sm py-1 '>
                      Auxion
                    </span>
                    <span className='bg-[#FFECE2] md:px-10 px-6 text-sm py-1'>
                      Aug 09 2020
                    </span>
                  </div>
                  <h3 className='md:text-3xl text-2xl font-bold text-[#151875]'>
                    Mauris at orci non vulputate diam tincidunt nec.
                  </h3>
                  <p className='text-sm text-left text-[#8A8FB9]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit facilisis quis auctor pretium ipsum, eu rutrum.
                    Condimentum eu malesuada vitae ultrices in in neque, porta
                    dignissim. Adipiscing purus, cursus vulputate id id dictum
                    at.
                  </p>
                  <div className='flex items-center space-x-2'>
                    <span className=' font-Lato font-semibold text-sm text-[#151875]'>
                      Read More
                    </span>
                    <span className='w-[6px] h-[6px] rounded-full bg-pink-500'></span>
                  </div>
                </div>
                {/* Single blog */}
                <div className=' w-full flex items-start gap-4 flex-col'>
                  <img src={blog1} className='w-full' alt='' />
                  {/* Author Details */}
                  <div className='flex items-center gap-4'>
                    <span className='bg-[#ffe7f9] md:px-10 px-6 text-sm py-1 '>
                      Auxion
                    </span>
                    <span className='bg-[#FFECE2] md:px-10 px-6 text-sm py-1'>
                      Aug 09 2020
                    </span>
                  </div>
                  <h3 className='md:text-3xl text-2xl font-bold text-[#151875]'>
                    Mauris at orci non vulputate diam tincidunt nec.
                  </h3>
                  <p className='text-sm text-left text-[#8A8FB9]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit facilisis quis auctor pretium ipsum, eu rutrum.
                    Condimentum eu malesuada vitae ultrices in in neque, porta
                    dignissim. Adipiscing purus, cursus vulputate id id dictum
                    at.
                  </p>
                  <div className='flex items-center space-x-2'>
                    <span className=' font-Lato font-semibold text-sm text-[#151875]'>
                      Read More
                    </span>
                    <span className='w-[6px] h-[6px] rounded-full bg-pink-500'></span>
                  </div>
                </div>
              </div>
              {/* d */}
              <div className=' md:w-[30%]  font-josefin  flex flex-col gap-10'>
                <div>
                  <span className='text-lg  text-left font-bold'>Search</span>
                  <div className='relative w-full mt-4'>
                    <input
                      type='text'
                      className='py-2 px-4 border placeholder:text-[#CBCBE0] border-[#CBCBE0] w-full'
                      placeholder='Search for posts...'
                      name='post'
                      id='post'
                    />
                    <div className='absolute right-2 top-3 '>
                      <CiSearch className='text-[#b5b5c8] w-[1em] text-[20px] h-[1em]' />
                    </div>
                  </div>
                </div>
                <div className=' flex flex-col'>
                  <span className=' text-[22px]  text-left text-[#151875] font-bold'>
                    Recent Posts
                  </span>
                  {/* All posts div */}
                  <div className='w-full flex flex-col gap-8 mt-4'>
                    {/* single post div */}
                    <div className='flex gap-2 items-center'>
                      <div className='bg-[#F5F6F8] px-2'>
                        <img
                          src={r1}
                          width={60}
                          alt=''
                          style={{ color: 'transparent' }}
                        />
                      </div>
                      <div className='flex flex-col gap-1 items-start'>
                        <span className='text-sm'>
                          It is a long established fact
                        </span>
                        <span className='text-sm'></span>
                      </div>
                    </div>
                    {/* single post div */}
                    <div className='flex gap-2 items-center'>
                      <div className='bg-[#F5F6F8] px-2'>
                        <img
                          src={r1}
                          width={'60px'}
                          alt=''
                          style={{ color: 'transparent' }}
                        />
                      </div>
                      <div className='flex flex-col gap-1 items-start'>
                        <span className='text-sm'>
                          It is a long established fact
                        </span>
                        <span className='text-sm'></span>
                      </div>
                    </div>
                    {/* single post div */}
                    <div className='flex gap-2 items-center'>
                      <div className='bg-[#F5F6F8] px-2'>
                        <img
                          src={r1}
                          width={60}
                          alt=''
                          style={{ color: 'transparent' }}
                        />
                      </div>
                      <div className='flex flex-col gap-1 items-start'>
                        <span className='text-sm'>
                          It is a long established fact
                        </span>
                        <span className='text-sm'></span>
                      </div>
                    </div>
                    {/* single post div */}
                    <div className='flex gap-2 items-center'>
                      <div className='bg-[#F5F6F8] px-2'>
                        <img
                          src={r1}
                          width={60}
                          alt=''
                          style={{ color: 'transparent' }}
                        />
                      </div>
                      <div className='flex flex-col gap-1 items-start'>
                        <span className='text-sm'>
                          It is a long established fact
                        </span>
                        <span className='text-sm'></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col '>
                  <span className='text-[22px] text-left text-[#151875] font-bold'>
                    Sale Product
                  </span>
                  {/* All Divs */}
                  <div className='w-full flex flex-col gap-8 mt-4'>
                    {/* single div */}
                    <div className='flex gap-2 items-center'>
                      <div className='bg-[#F5F6F8] px-2'>
                        <img
                          src={r1}
                          width={60}
                          style={{ color: 'transparent' }}
                          alt=''
                        />
                      </div>
                      <div className='flex flex-col gap-1 items-start'>
                        <span className='text-sm'>
                          It is a long established fact
                        </span>
                        <span className='text-sm'></span>
                      </div>
                    </div>
                    {/* single div */}
                    <div className='flex gap-2 items-center'>
                      <div className='bg-[#F5F6F8] px-2'>
                        <img
                          src={r1}
                          width={60}
                          style={{ color: 'transparent' }}
                          alt=''
                        />
                      </div>
                      <div className='flex flex-col gap-1 items-start'>
                        <span className='text-sm'>
                          It is a long established fact
                        </span>
                        <span className='text-sm'></span>
                      </div>
                    </div>
                    {/* single div */}
                    <div className='flex gap-2 items-center'>
                      <div className='bg-[#F5F6F8] px-2'>
                        <img
                          src={r1}
                          width={60}
                          style={{ color: 'transparent' }}
                          alt=''
                        />
                      </div>
                      <div className='flex flex-col gap-1 items-start'>
                        <span className='text-sm'>
                          It is a long established fact
                        </span>
                        <span className='text-sm'></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <span className='text-[22px] text-[#151875] font-bold'>
                    Offer Product
                  </span>
                  {/* All Divs */}
                  <div className='grid grid-cols-2 gap-4 mt-4'>
                    {/* single div */}
                    <div className='flex flex-col text-center items-center gap-2'>
                      <img src={p1} alt='' />
                      <div className='flex flex-col gap-1'>
                        <span className='text-xs'>
                          Elit ornare in enim mauris.
                        </span>
                        <span className='text-xs'>Aug 09 2023</span>
                      </div>
                    </div>
                    {/* single div */}
                    <div className='flex flex-col text-center items-center gap-2'>
                      <img src={p1} alt='' />
                      <div className='flex flex-col gap-1'>
                        <span className='text-xs'>
                          Elit ornare in enim mauris.
                        </span>
                        <span className='text-xs'>Aug 09 2023</span>
                      </div>
                    </div>
                    {/* single div */}
                    <div className='flex flex-col text-center items-center gap-2'>
                      <img src={p1} alt='' />
                      <div className='flex flex-col gap-1'>
                        <span className='text-xs'>
                          Elit ornare in enim mauris.
                        </span>
                        <span className='text-xs'>Aug 09 2023</span>
                      </div>
                    </div>
                    {/* single div */}
                    <div className='flex flex-col text-center items-center gap-2'>
                      <img src={p1} alt='' />
                      <div className='flex flex-col gap-1'>
                        <span className='text-xs'>
                          Elit ornare in enim mauris.
                        </span>
                        <span className='text-xs'>Aug 09 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Our Parteners */}
      <Parteners />
    </>
  );
};

export default Blog;
