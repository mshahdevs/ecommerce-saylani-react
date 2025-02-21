import React from 'react';

export default function PageHeader({ title }) {
  return (
    <div className='w-full bg-[#f6f5ff] h-[286px] flex justify-center'>
      <div className='w-[84%]  flex items-center justify-start'>
        <div className='text-left ml-3  my-auto'>
          <h1 className='text-3xl font-semibold py-2'>{title}</h1>
          <span>
            Home . Pages . <span className='text-[#fb2e86]'>{title} Page</span>
          </span>
        </div>
      </div>
    </div>
  );
}
