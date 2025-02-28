import twitter from '../../src/assets/social-icons/icon1.png';
import facebook from '../../src/assets/social-icons/icon3.png';
import instagram from '../../src/assets/social-icons/icon2.png';

export const Footer = () => {
  return (
    <>
      <div className='w-full  bg-[#EEEFFB] p-4 flex justify-center gap-5 items-center '>
        <div className='w-[23%]  flex gap-2 items-start  flex-col justify-start'>
          <h1 className='font-bold text-3xl font-josefin'>Shah's Store</h1>
          <div className='bg-white flex items-center  border border-gray-300'>
            <input
              type='email'
              placeholder='Enter Email Address'
              className='px-1'
              name=''
              id=''
            />
            <button className='bg-pink-400 px-1 text-white font-medium py-0'>
              Sign Up
            </button>
          </div>
          <span className='text-sm text-gray-400'>Contact Info</span>
          <p className='text-left text-sm text-gray-400'>
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
        <div className='w-[20%]  flex flex-col mt-6 justify-start items-start gap-1 '>
          <h1 className='font-semibold font-josefin '>Categories</h1>
          <span className='text-gray-400 text-[16px]'>Laptops & Computers</span>
          <span className='text-gray-400 text-[16px]'>Cameras & Computers</span>
          <span className='text-gray-400 text-[16px]'>Laptops & Computers</span>
          <span className='text-gray-400 text-[16px]'>Laptops & Computers</span>
          <span className='text-gray-400 text-[16px]'>Laptops & Computers</span>
        </div>
        <div className='w-[20%] flex flex-col mt-6 justify-start items-start gap-1 '>
          <h1 className='font-semibold  font-josefin'>Customer Care</h1>
          <span className='text-gray-400 text-[16px]'>My Account</span>
          <span className='text-gray-400 text-[16px]'>Discount</span>
          <span className='text-gray-400 text-[16px]'>Returns</span>
          <span className='text-gray-400 text-[16px]'>Orders History</span>
          <span className='text-gray-400 text-[16px]'>Laptops & Computers</span>
        </div>
        <div className='w-[20%] flex flex-col mt-7 justify-start items-start gap-1 '>
          <h1 className='font-semibold font-josefin'>Pages</h1>
          <span className='text-gray-400 text-[16px]'>My Account</span>
          <span className='text-gray-400 text-[16px]'>Discount</span>
          <span className='text-gray-400 text-[16px]'>Returns</span>
          <span className='text-gray-400 text-[16px]'>Orders History</span>
          <span className='text-gray-400 text-[16px]'>Laptops & Computers</span>
          <span className='text-gray-400 text-[16px]'>Laptops & Computers</span>
        </div>
      </div>
      <div className='w-full flex justify-center items-center py-1 bg-[#E7E4F8] '>
        <div className='w-[70%] flex items-center justify-between'>
          <div>
            <p className='text-gray-500'>©Webecy - All Rights Reserved</p>
          </div>
          <div className='flex space-x-2 h-5'>
            <img src={facebook} className='w-5' alt='' />
            <img src={instagram} className='w-5' alt='' />
            <img src={twitter} className='w-5' alt='' />
          </div>
        </div>
      </div>
    </>
  );
};
