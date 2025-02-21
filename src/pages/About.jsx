import React from 'react';
import aboutimg from '@/src/assets/aboutbanner.png';
import support from '@/src/assets/offers/quality.png';
import client from '@/src/assets/client1.png';
export default function About() {
  return (
    <>
      <div className='w-full bg-[#f6f5ff] font-josefin h-[286px] flex justify-center'>
        <div className='w-[84%]  flex items-center justify-start'>
          <div className='text-left ml-3  my-auto'>
            <h1 className='text-3xl font-semibold py-2'>About Us</h1>
          </div>
        </div>
      </div>
      {/* About Section */}
      <section className='max-w-[1920px] mx-auto my-16 relative'>
        <div className='max-w-[84%] mx-auto '>
          <div className='flex justify-center items-center md:flex-row flex-col gap-8 md:gap-10'>
            <div className='border-l-[12px] rounded-md border-[#2B3CAB] border-b-[12px]'>
              <img src={aboutimg} width={500} alt='' />
            </div>
            <div className='flex flex-col gap-8 md:w-1/2 items-start'>
              <h1 className='md:text-4xl text-[#151875] text-3xl font-bold'>
                Know About Our Ecomerce
                <br />
                Business, History
              </h1>
              <p className='set_lato text-[#8A8FB9]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <div className='flex gap-6'>
                <button className='rounded w-[163px] h-[50px] bg-[#FB2E86] text-white'>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='max-w-[1200px]   px-5 sm:mx-10 lg:mx-32 xl:mx-auto my-20'>
        <h1 className='text-[#151875] text-center text-[32px] sm:text-[36px] lg:text-[42px] py-2 font-[700]'>
          Our Features
        </h1>
        <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-5'>
          <div className='shadow-lg  shadow-[#dcd9d9] border-b-[3px] border-b-transparent hover:border-b-[3px] hover:border-yellow-600 text-center flex justify-center items-center gap-y-2  flex-col  w-full lg:w-[270px] 2xl:w-[300px] mx-auto'>
            <img src={support} width={100} alt='' />
            <h2 className='text-[18px] sm:text-[20px] lg:text-[22px] text-[#151875] font-[600] '>
              24/7 Support
            </h2>
            <p className=' max-w-60 text-[#1A0B5B4D] font-[500] text-[14px] sm:text-[15px] lg:text-[16px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda
            </p>
          </div>
          {/* 2nd div */}
          <div className='shadow-lg   shadow-[#dcd9d9] border-b-[3px] border-b-transparent hover:border-b-[3px] hover:border-yellow-600 text-center flex justify-center items-center gap-y-2 flex-col h-[320px] w-full lg:w-[270px] 2xl:w-[300px] mx-auto'>
            <img src={support} width={100} alt='' />
            <h2 className='text-[18px] sm:text-[20px] lg:text-[22px] text-[#151875] font-[600] '>
              24/7 Support
            </h2>
            <p className=' max-w-60 text-[#1A0B5B4D] font-[500] text-[14px] sm:text-[15px] lg:text-[16px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda
            </p>
          </div>
          {/* 3rd div */}
          <div className='shadow-lg   shadow-[#dcd9d9] border-b-[3px] border-b-transparent hover:border-b-[3px] hover:border-yellow-600 text-center flex justify-center items-center gap-y-2  flex-col h-[320px] w-full lg:w-[270px] 2xl:w-[300px] mx-auto'>
            <img src={support} width={100} alt='' />
            <h2 className='text-[18px] sm:text-[20px] lg:text-[22px] text-[#151875] font-[600] '>
              24/7 Support
            </h2>
            <p className=' max-w-60 text-[#1A0B5B4D] font-[500] text-[14px] sm:text-[15px] lg:text-[16px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda
            </p>
          </div>
          {/* 4th Div */}
          <div className='shadow-lg   shadow-[#dcd9d9] border-b-[3px] border-b-transparent hover:border-b-[3px] hover:border-yellow-600 text-center flex justify-center items-center gap-y-2 flex-col h-[320px] w-full lg:w-[270px] 2xl:w-[300px] mx-auto'>
            <img src={support} width={100} alt='' />
            <h2 className='text-[18px] sm:text-[20px] lg:text-[22px] text-[#151875] font-[600] '>
              24/7 Support
            </h2>
            <p className=' max-w-60 text-[#1A0B5B4D] font-[500] text-[14px] sm:text-[15px] lg:text-[16px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda
            </p>
          </div>
        </div>
      </div>
      <section className='py-16 bg-[#FBFBFF] md:mb-40 mb-10'>
        <div className='flex justify-center items-center flex-col gap-4 md:max-w-[50%] max-w-[90%] mx-auto text-center'>
          <h2 className='md:text-5xl text-2xl font-bold'>Our Client Say!</h2>
          <div className='flex gap-2 items-center justify-between mt-4'>
            <img src={client} width={60} height={20} alt='' />
            <img src={client} width={60} className='mb-4' height={10} alt='' />
            <img src={client} width={60} alt='' />
          </div>
          <h6 className='md:text-[22px] text-[19px] set_lato font-bold '>
            Selina Gomez
          </h6>
          <span className='text-[10px] text-[#8A8FB9] set_lato'>
            Ceo At Webecy Digital
          </span>
          <p className='text-sm font-bold set_lato text-[#8A8FB9] leading-[25.6px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
            lacus volutpat praesent.
          </p>
        </div>
      </section>
    </>
  );
}
