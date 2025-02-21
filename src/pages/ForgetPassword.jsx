import React from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa6';
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { auth } from '@/firebas.config';

import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
export const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmitForgetEmail = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setEmail('');
      toast.success('Check your email for password reset link');
    } catch (error) {
      toast.error(error?.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {' '}
      <div className='w-full bg-[#f6f5ff] h-[286px] flex justify-center'>
        <div className='w-[84%]  flex items-center justify-start'>
          <div className='text-left ml-3  my-auto'>
            <h1 className='text-3xl font-semibold py-2'>My Account</h1>
            <span>
              Home . Pages . <span className='text-[#fb2e86]'>My Account</span>
            </span>
          </div>
        </div>
      </div>
      {/* Form Forget password */}
      <div className='flex justify-center flex-col font-poppins p-8  items-center mx-auto w-full'>
        <form
          className='w-1/3  flex gap-1 flex-col p-8 bg-white rounded-md shadow-custom '
          onSubmit={handleSubmitForgetEmail}
        >
          <span className='mb-3 font-josefin font-bold'>Forget Password</span>

          <span className='mb-3 text-[15px] font-Lato text-[#9096B2]'>
            Please reset your password by email sent!
          </span>

          <div className='relative gap-2 flex flex-col'>
            <input
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email Address'
              className='border border-[#C2C5E1] h-10   p-1 text-[16px] outline-none'
              id='email'
              disabled={loading}
              required
            />
          </div>

          <button
            className={`w-full px-2 my-2 p-1 py-2 ${
              !email ? 'text-gray-200 bg-gray-400' : 'text-white bg-[#FB2E86]'
            }   text-[15px] font-Lato`}
            disabled={!email}
          >
            Send email
          </button>
        </form>
      </div>
    </>
  );
};
