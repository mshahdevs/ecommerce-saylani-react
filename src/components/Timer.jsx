import React from 'react';
import { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

export const Timer = () => {
  const {
    seconds,
    minutes,
    hours,
    days,

    restart,
  } = useTimer();
  const handleRestart = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 1000000);
    restart(time);
  };
  useEffect(() => {
    handleRestart();
  }, []);
  return (
    <div className='w-1/2 flex  justify-end items-end  '>
      <div className='flex flex-col justify-center  items-start'>
        <span className='font-poppins font-medium text-[12px] xsm:text-[8px] '>
          {days === 1 || days === 0 ? 'Day' : 'Days'}
        </span>
        <span className='font-inter font-bold text-[32px] sm:text-[30px] xsm:text-[22px] '>
          {days >= 10 ? `${days}` : `0${days}`}
        </span>
      </div>
      <div className='relative flex flex-col w-[30%] xsm:w-[25%] md:w-[35%] md:mr-1 items-center justify-center'>
        <span className='absolute -top-12 sm:-top-11 xsm:-top-7  mx-0 text-[20px] text-[#E07575]'>
          •
        </span>
        <span className='absolute -top-8 mx-0 text-[20px] xsm:-top-[37px] text-[#E07575]'>
          •
        </span>
      </div>

      <div className='flex flex-col items-start'>
        <span className='font-poppins font-medium text-[12px] xsm:text-[8px]'>
          {hours === 1 || hours === 0 ? 'Hour' : 'Hours'}
        </span>
        <span className='font-inter font-bold text-[32px] sm:text-[30px] xsm:text-[22px] '>
          {hours >= 10 ? `${hours}` : `0${hours}`}
        </span>
      </div>
      <div className='relative flex flex-col w-[30%] xsm:w-[25%] md:w-[34%] md:mr-1 bg-green-300  items-center justify-center'>
        <span className='absolute -top-12 sm:-top-11 xsm:-top-7 mx-0 text-[20px] text-[#E07575]'>
          •
        </span>
        <span className='absolute -top-8 mx-0 text-[20px] xsm:-top-[37px] text-[#E07575]'>
          •
        </span>
      </div>

      <div className='flex flex-col items-start '>
        <span className='font-poppins font-medium text-[12px] xsm:text-[8px]'>
          {minutes === 1 || minutes === 0 ? 'Minute' : 'Minutes'}
        </span>
        <span className='font-inter font-bold text-[32px] sm:text-[30px] xsm:text-[22px]'>
          {minutes >= 10 ? `${minutes}` : `0${minutes}`}
        </span>
      </div>
      <div className='relative flex flex-col w-[30%] xsm:w-[25%] md:w-[35%] md:mr-1 bg-green-300  items-center justify-center'>
        <span className='absolute -top-12 sm:-top-11 xsm:-top-7 mx-0 text-[20px] text-[#E07575]'>
          •
        </span>
        <span className='absolute -top-8 mx-0 text-[20px] xsm:-top-[37px] text-[#E07575]'>
          •
        </span>
      </div>

      <div className='flex flex-col items-start '>
        <span className='font-poppins font-medium text-[12px] xsm:text-[8px] '>
          {seconds === 1 || seconds === 0 ? 'Second' : 'Seconds'}
        </span>
        <span className='font-inter font-bold text-[32px] sm:text-[30px] xsm:text-[22px] '>
          {seconds >= 10 ? `${seconds}` : `0${seconds}`}
        </span>
      </div>
      <button
        onClick={handleRestart}
        className='text-[12px] bg-red-400 px-2 hidden'
      >
        Restart
      </button>
    </div>
  );
};
