import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../firebas.config';
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../../src/assets/googleicon.png';

import partnerImg from '../../src/assets/productimages/partnerimg.png';
import { toast } from 'react-toastify';

export const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignInActive, setIsSignInActive] = useState(true);
  const [error, setError] = useState('');
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleMethodChange = () => {
    setIsSignInActive(!isSignInActive);
    setError('');
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter your email and password');
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        toast.success('Login Successfully!');
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter your email and password');
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        toast.success('Sign Up Successfully!');
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const provider = new GoogleAuthProvider();
  //   const handleResetPassword = (e) => {
  //     e.preventDefault();
  //     // if (email) {
  //     //     setError("Please enter your email");
  //     //     return;
  //     // }
  //     sendPasswordResetEmail(auth, 'mshahaurangzeb45@gmail.com')
  //       .then(() => {
  //         setError('Password reset email sent!');
  //         // setResetEmail(""); // Clear input field after sending email
  //       })
  //       .catch((error) => {
  //         const errorMessage = error.message;
  //         setError(errorMessage);
  //       });
  //   };
  const handleSignInwithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };
  return (
    <>
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
      <div className='flex justify-center flex-col font-poppins p-8  items-center mx-auto w-full'>
        <form className='w-1/3  flex gap-1 flex-col p-8 bg-white rounded-md shadow-custom '>
          {isSignInActive ? (
            <span className='mb-3 font-josefin font-bold'>Login</span>
          ) : (
            <span className='mb-3 font-bold font-josefin'>Sign Up</span>
          )}
          {isSignInActive ? (
            <span className='mb-3 text-[15px] font-normal text-[#9096B2] font-Lato '>
              Please login using account detail below.
            </span>
          ) : (
            <span className='mb-3 text-[15px] font-Lato text-[#9096B2]'>
              Please sign up using account detail below.
            </span>
          )}

          <div className='relative gap-2 flex flex-col'>
            <input
              type='email'
              name=''
              placeholder='Email Address'
              onChange={handleChangeEmail}
              className='border border-[#C2C5E1] h-10   p-1 text-[16px] outline-none'
              id='email'
            />
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name=''
              placeholder='Password'
              className='border border-[#C2C5E1] text-[16px] h-10 p-1 outline-none'
              onChange={handleChangePassword}
              id='password'
            />
            <span
              className='absolute top-[3.7rem] right-3'
              onClick={handlePasswordVisible}
            >
              {isPasswordVisible ? (
                <FaEye className='text-gray-600' />
              ) : (
                <FaEyeSlash className='text-gray-400' />
              )}
            </span>
            <div className='flex'>
              <Link
                to={'/forget-password'}
                className='text-[14px] text-[#9096B2] cursor-pointer'
              >
                {isSignInActive ? (
                  'Forget your password?'
                ) : (
                  <Link className='h-10 invisible'>ddd</Link>
                )}{' '}
              </Link>
              <span></span>
            </div>
          </div>

          <span className='text-red-400 text-sm'>{error}</span>
          {isSignInActive ? (
            <button
              onClick={handleSignIn}
              className='w-full px-2 my-2 p-1 py-2 text-white bg-[#FB2E86] text-[15px] font-Lato'
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleSignUp}
              className='w-full  px-2 my-2 p-1 py-2 rounded-[2px] text-white bg-[#FB2E86] text-[15px] font-Lato'
            >
              Sign Up
            </button>
          )}
          <button
            className=' flex justify-center bg-white/80 border  items-center gap-2 px-3 py-[6px] text-[14px] '
            onClick={handleSignInwithGoogle}
          >
            {' '}
            <img src={googleIcon} className='w-[26px]' alt='' /> Sign in with
            Google
          </button>
          <p className='w-full text-sm'>
            {isSignInActive
              ? "Don't have an account ? "
              : 'Already have an account? '}
            <span
              className='text-blue-400 cursor-pointer'
              onClick={handleMethodChange}
            >
              {isSignInActive ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </form>
      </div>
      {/* Our Partners */}
      <div className='w-full  my-20 p-4'>
        <div className='w-1/2 flex justify-center items-center mx-auto'>
          <img src={partnerImg} alt='' />
        </div>
      </div>
    </>
  );
};
