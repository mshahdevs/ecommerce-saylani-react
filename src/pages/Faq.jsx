import PageHeader from '../components/pageheader/PageHeader';
import { Parteners } from '../components/offers/Parteners';

export default function Faq() {
  return (
    <>
      <PageHeader title='FAQ' />
      <div className='lg:px-14 px-3 font-josefin'>
        <div className='md:container md:px-[1.3rem] px-[.8rem] md:grid grid-cols-2 gap-16 md:mt-32 mt-12 mb-10 md:mb-32'>
          <div className='flex flex-col items-start'>
            <h2 className='text-[#1D3178] md:text-4xl text-2xl font-[800] '>
              Generel Information
            </h2>
            <div>
              <div>
                <div className='my-6 md:my-16 flex flex-col  items-start'>
                  <h3 className='text-[#1D3178] font-bold '>
                    Eu dictumst cum at sed euismood condimentum?
                  </h3>
                  <h4 className='text-[#A1ABCC] text-left md:mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </h4>
                </div>
              </div>
              {/* 2nd div */}
              <div>
                <div className='my-6 md:my-16 flex flex-col  items-start'>
                  <h3 className='text-[#1D3178] font-bold '>
                    Eu dictumst cum at sed euismood condimentum?
                  </h3>
                  <h4 className='text-[#A1ABCC] text-left md:mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </h4>
                </div>
              </div>
              {/* 3rd div */}
              <div>
                <div className='my-6 md:my-16 flex flex-col  items-start'>
                  <h3 className='text-[#1D3178] font-bold '>
                    Eu dictumst cum at sed euismood condimentum?
                  </h3>
                  <h4 className='text-[#A1ABCC] text-left md:mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </h4>
                </div>
              </div>
              {/* 4th div */}
              <div>
                <div className='my-6 md:my-16 flex flex-col  items-start'>
                  <h3 className='text-[#1D3178] font-bold '>
                    Eu dictumst cum at sed euismood condimentum?
                  </h3>
                  <h4 className='text-[#A1ABCC] text-left md:mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#F8F8FD] rounded-md lg:w-[566px] sm:w-[400px] '>
            <h3 className='text-[#1D3178] font-bold text-[24px] md:p-12 p-2 pt-5  mt-5'>
              Ask a Question
            </h3>
            <div className='mt-4 md:p-12 p-2 pb-7'>
              <input
                type='text'
                className='border-gray-300 border-2 h-[50px] rounded-md w-full md:my-6 my-4'
                placeholder='Your Name'
                name=''
                id=''
              />
              <input
                type='text'
                className='border-gray-300 border-2 h-[50px] rounded-md w-full md:my-6'
                placeholder='Subject*'
                name=''
                id=''
              />
              <textarea
                name=''
                className='w-full border-gray-300 border-2 h-[197px] rounded-md md:my-6 my-4'
                placeholder='Your Message*'
                id=''
              ></textarea>
              <button className='rounded w-[163px] h-[50px] bg-[#FB2E86] text-white'>
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Our Parteners */}
      <Parteners />
    </>
  );
}
