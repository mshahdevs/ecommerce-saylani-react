import {
  useAuthContext,
  useFirebaseContext,
} from '@/src/context/FirebaseContext';
// import { toast } from "react-toastify";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { CiCrop, CiHeart } from 'react-icons/ci';
import { CiMail, CiPhone, CiSearch, CiShoppingCart } from 'react-icons/ci';
import user from '../assets/user.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';
import { RxHamburgerMenu } from 'react-icons/rx';
const Navabar = () => {
  const [toggle, setToggle] = useState(false);
  const { favoriteProducts } = useSelector((state) => state.favorite);
  const { cartProducts } = useSelector((state) => state.cart);
  const auth = useAuthContext();
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const publicRoutes = [
    { routename: 'Home', url: '/' },

    { routename: 'Product', url: '/all-products' },
    { routename: 'Pages', url: '/pages', hasDropdown: true },
    { routename: 'Blog', url: '/blog' },
    { routename: 'Shop', url: '/shop-list' },

    { routename: 'Sign Up', url: '/signup' },
    { routename: 'Login', url: '/login' },
  ];
  const context = useFirebaseContext();

  const protectedRoutes = [
    { routename: 'Home', url: '/' },
    { routename: 'Pages', url: '/pages', hasDropdown: true },
    { routename: 'Product', url: '/products' },
    { routename: 'Blog', url: '/blog' },
    { routename: 'Shop', url: '/shop-list' },
    { routename: 'Logout', url: '' },
  ];
  const handleLogout = () => {
    signOut(auth);
    // toast.success("Logout Successfully");
    toast.success('logout successfully');
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        context.setIsLogin(true);
      } else {
        context.setIsLogin(false);
      }
    });
  });

  return (
    <>
      <div className='w-full flex gap-32 text-white justify-center items-center bg-[#7E33E0] p-1'>
        <div className='flex gap-2 text-white'>
          <span className='flex items-center'>
            {' '}
            <CiMail />
            mshahdev@gmail.com
          </span>
          <span className='flex items-center'>
            {' '}
            <CiPhone /> (091 45 3432){' '}
          </span>
        </div>
        <div className='flex gap-2 items-center'>
          <span className=' '>
            <select name='' id='' className='bg-transparent'>
              <option value=''>English</option>
              <option value=''>Urdu</option>
            </select>
          </span>

          <span className=''>
            <select name='' id='' className='bg-transparent'>
              <option value=''>USD</option>
              <option value=''>PKR</option>
            </select>
          </span>
          <span className='flex items-center'>
            Login
            <img src={user} alt='' />
          </span>
          <span className='flex items-center'>
            Wishlist <CiHeart />
          </span>
          <CiShoppingCart />
        </div>
      </div>
      <div className=' h-[3rem] shadow-sm lg:h-[5rem] flex items-center justify-between px-4 lg:px-10 w-[100%]'>
        <div className='flex gap-10 items-center w-[60%] justify-between'>
          <h1 className='font-inter font-bold md:text-[16px] sm:text-[16px] lg:text-[24px] tracking-wide'>
            Shah's Store
          </h1>

          <ul className='hidden lg:flex relative  w-auto z-50 h-auto md:flex lg:mt-[0px] lg:gap-7  md:mt-[0px] transition-all duration-500 font-poppins lg:text-[16px] md:text-[12px] md:gap-3 gap-9'>
            {!context.isLogin
              ? publicRoutes.map((item, index) => (
                  <>
                    <Link
                      key={index}
                      className='hover:border-b-[1.4px]  font-josefin  md:pb-[1px] hover:md:p-0 hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'
                      to={item.url}
                    >
                      {item.routename}
                    </Link>
                  </>
                ))
              : protectedRoutes.map((item, index) => {
                  return item.routename === 'Logout' ? (
                    <li
                      onClick={handleLogout}
                      className='hover:border-b-[1.4px]   font-josefin  md:pb-[1px] hover:md:p-0 hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'
                    >
                      <Link
                        to={item.url}
                        className='hover:border-b-[1.4px]   font-josefin  md:pb-[1px] hover:md:p-0 hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px]  cursor-pointer'
                        onClick={
                          item.hasDropdown ? handleMouseEnter : undefined
                        }
                      >
                        {item.routename}
                      </Link>
                    </li>
                  ) : (
                    <li className='hover:border-b-[1.4px]  font-josefin  md:pb-[1px] hover:md:p-0 hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>
                      <Link to={item.url}>{item.routename}</Link>
                    </li>
                  );
                })}
          </ul>
        </div>
        <div className='flex items-center gap-3 '>
          <div className='hidden lg:flex border border-[#E7E6EF] items-center  lg:pl-2 '>
            <input
              type='text'
              id='search'
              placeholder='Search here....'
              className='outline-none'
              name='search'
            />
            <label htmlFor='search' className='bg-pink-600 px-[5px] p-1'>
              <CiSearch className='text-[1.3rem] text-white lg:text-[1.5rem]' />
            </label>
          </div>
          <Link to='/favorite'>
            <div className='relative'>
              <span
                className={`${
                  favoriteProducts?.length === 0 && 'invisible'
                } absolute text-sm top-[-10px] border border-black rounded-full bg-black text-white flex justify-center items-center right-0 w-4 h-4`}
              >
                {favoriteProducts?.length}
              </span>
              <CiHeart className='text-[1.3rem] lg:text-[1.5rem]' />
            </div>
          </Link>
          <Link to='/cart'>
            <div className='relative'>
              <span
                className={`absolute text-sm top-[-10px] border border-black rounded-full bg-black text-white flex justify-center items-center right-0 w-4 h-4`}
              >
                {cartProducts?.length}
              </span>
              <CiShoppingCart className='text-[1.3rem] lg:text-[1.5rem]' />
            </div>
          </Link>

          {toggle ? (
            <RxCross2 onClick={handleToggle} />
          ) : (
            <RxHamburgerMenu className='lg:hidden' onClick={handleToggle} />
          )}
        </div>
      </div>
      <ul
        className={`${
          toggle ? 'flex' : 'hidden'
        } flex-col  absolute w-full h-full transition-all duration-300 top-20 right-0  z-40 items-center py-5 bg-[#060606] bg-opacity-50 lg:hidden gap-4`}
      >
        <div className='w-1/3 transition-all duration-300 bg-[#e2e5e5] shadow-lg h-screen items-center flex flex-col py-16 justify-start gap-y-7 absolute top-0 right-0'>
          <Link
            to='/'
            className='hover:border-b-[1.4px]   md:pb-[1px] hover:md:p-0 hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'
          >
            Home
          </Link>

          <li className='hover:border-b-[1.4px] md:pb-[1px] hover:md:p-0 hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>
            Product
          </li>
          <li className='hover:border-b-[1.4px] md:pb-[1px] hover:md:p-0 hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>
            Contact
          </li>
          <li className='hover:border-b-[1.4px] md:pb-[1px] hover:md:p-0 hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>
            Logout
          </li>
        </div>
      </ul>
    </>
  );
};

export default Navabar;
