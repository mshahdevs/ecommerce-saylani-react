import React from 'react';

export const BackgroundImageBanner = () => {
  return (
    <>
      <div class='bg-contain bg-no-repeat bg-bottom h-[54vh] bg-iphone'>
        <div class='flex items-center justify-center h-full bg-gray-300 bg-opacity-5'>
          <div class='text-center flex flex-col justify-center items-center'>
            <h2 class='text-3xl text-center font-bold w-[70%] capitalize text-[#151875] font-josefin'>
              Get Latest Update By Subscribe Our Newsletter
            </h2>
            <button class='mt-4 px-8 py-2 bg-pink-600 text-white'>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
