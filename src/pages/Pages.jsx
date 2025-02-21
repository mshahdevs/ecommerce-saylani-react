import React from 'react';
import PageHeader from '../components/pageheader/PageHeader';
import { Link } from 'react-router-dom';
import { CircleArrowOutUpRight } from 'lucide-react';
export const Pages = () => {
  return (
    <>
      <div className='w-full bg-[#f6f5ff] font-josefin h-[286px] flex justify-center'>
        <div className='w-[84%]  flex items-center justify-start'>
          <div className='text-left ml-3  my-auto'>
            <h1 className='text-3xl font-semibold py-2'>Pages</h1>
            <span>
              Home . Pages .
              <div className='flex flex-col gap-2 ml-28'>
                <Link
                  to='/about'
                  className='font-josefin flex items-center gap-1'
                >
                  About
                  <CircleArrowOutUpRight
                    size={13}
                    className='text-gray-400 hover:text-pink-500'
                  />
                </Link>
                <Link
                  to='/pages/shop-left-sidebar'
                  className='font-josefin flex items-center gap-1'
                >
                  Shop Left Sidebar
                  <CircleArrowOutUpRight
                    size={13}
                    className='text-gray-400 hover:text-pink-500'
                  />
                </Link>
                <Link
                  to='/pages/faq'
                  className='font-josefin flex items-center gap-1'
                >
                  FAQ
                  <CircleArrowOutUpRight
                    size={13}
                    className='text-gray-400 hover:text-pink-500'
                  />
                </Link>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className='w-72 h-[34vh] invisible'>d</div>
    </>
  );
};
