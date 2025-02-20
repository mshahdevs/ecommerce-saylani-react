import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authFailed from '../assets/authfailed.png';
import { IoIosCloseCircleOutline } from 'react-icons/io';
export const AuthMessage2 = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/');
  };
  return (
    <>
      {' '}
      {showPopup && (
        <>
          {/* <Link to={'/login'}> */}
          <div className='fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-20 backdrop-blur-sm  flex justify-center items-center max-h-screen h-full z-[100] overflow-hidden'>
            <dialog
              id='modal'
              className='w-full max-w-[500px] relative  max-h-[200px] flex   flex-col h-full transition-all duration-500 rounded-[30px]  p-[30px] shadow-md   bg-white '
            >
              <span
                onClick={handleClosePopup}
                className='absolute top-4 right-2'
              >
                <Link to={'/'} className='  rounded-full '>
                  <IoIosCloseCircleOutline size={23} color='gray' />
                </Link>
              </span>

              <div className='flex justify-center  flex-col items-center'>
                <img src={authFailed} alt='' className=' w-[40px]' />
                <h1 className='text-3xl font-bold font-josefin text-red-700'>
                  Authentication Required
                </h1>
                <p className='text-gray-500 text-sm mb-1 font-inter'>
                  Please do login or signup for buying products.
                </p>
                <Link
                  to={'/signup'}
                  className='px-3 bg-red-600 p-2 mt-4 font-josefin rounded-full text-white font-medium'
                >
                  Go to Sign Up
                </Link>
              </div>
            </dialog>
          </div>
          {/* </Link>  */}
        </>
      )}
    </>
  );
};
