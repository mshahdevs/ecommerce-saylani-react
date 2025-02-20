import {
  useAuthContext,
  useFirebaseContext,
} from '@/src/context/FirebaseContext';
// import { toast } from "react-toastify";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { CiMail, CiPhone, CiSearch, CiShoppingCart } from 'react-icons/ci';
import user from '../assets/user.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
    { routename: 'Pages', url: '/', hasDropdown: true },
    { routename: 'Blog', url: '/shop-list' },
    { routename: 'Shop', url: '/shop-list' },

    { routename: 'Sign Up', url: '/signup' },
    { routename: 'Login', url: '/login' },
  ];
  const context = useFirebaseContext();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  console.log(context);
  const protectedRoutes = [
    { routename: 'Home', url: '/' },
    { routename: 'Pages', url: '/', hasDropdown: true },
    { routename: 'Product', url: '/products' },
    { routename: 'Blog', url: '/shop-list' },
    { routename: 'Shop', url: '/shop-list' },
    { routename: 'Logout', url: '' },
  ];
  const handleLogout = () => {
    signOut(auth);
    // toast.success("Logout Successfully");
    console.log('logout successfully');
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
  const handleMouseEnter = () => setDropdownVisible(!isDropdownVisible);
  // const handleMouseLeave = () => setDropdownVisible(false);
  const dropdownItems = [
    {
      routename: 'Demo',
      url: '/shop-left-sidebar',
    },
    {
      routename: 'Shop',
      url: '/shop-list',
    },
  ];
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
                      onClick={item.hasDropdown ? handleMouseEnter : undefined}
                      className='hover:border-b-[1.4px]  font-josefin  md:pb-[1px] hover:md:p-0 hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'
                      to={item.url}
                    >
                      {item.routename}
                    </Link>
                    {/* Dropdown for pages route */}
                    {item.hasDropdown && isDropdownVisible && (
                      <ul className='absolute top-4 left-[40%] bg-white/70  border border-gray-100 rounded-lg text-black mt-2 w-[35%]  shadow-lg'>
                        {/* <span className='w-3 h-3 bg-red-400'></span> */}
                        {dropdownItems.map((dropdownItem, index) => (
                          <li
                            key={index}
                            className='p-2 font-josefin rounded-lg hover:bg-gray-200'
                          >
                            <Link to={dropdownItem.url}>
                              {dropdownItem.routename}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
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
                      {item.hasDropdown && isDropdownVisible && (
                        <ul className='absolute top-4 left-[40%] bg-white/70  border border-gray-100 rounded-lg text-black mt-2 w-[35%]  shadow-lg'>
                          {/* <span className='w-3 h-3 bg-red-400'></span> */}
                          {dropdownItems.map((dropdownItem, index) => (
                            <li
                              key={index}
                              className='p-2 font-josefin hover:bg-gray-200'
                            >
                              <Link to={dropdownItem.url}>
                                {dropdownItem.routename}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
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
          <div
            className='hidden lg:flex border border-[#E7E6EF] items-center  lg:pl-2 
           '
          >
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

          <GiHamburgerMenu className='lg:hidden' onClick={handleToggle} />
        </div>
      </div>
      <ul
        className={`${
          toggle ? 'flex' : 'hidden'
        } flex-col absolute w-full  z-40 items-center py-5 bg-[#efeef8] lg:hidden gap-4`}
      >
        <li>
          <div className='flex border  border-black items-center lg:px-2 lg:py-1 rounded-[5px]'>
            {/* <label htmlFor="search">
              <CiSearch className="text-[1.3rem] lg:text-[1.5rem]" />
            </label>
            <input
              type="text"
              id="search"
              name="search"
              className="bg-transparent focus:outline-none pl-1"
            /> */}
          </div>
        </li>
        <Link
          to='/'
          className='hover:border-b-[1.4px] md:pb-[1px] hover:md:p-0 hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'
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
      </ul>
    </>
  );
};

export default Navabar;
