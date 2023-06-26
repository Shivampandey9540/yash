import React from 'react';
import { useScroll, animated, useSpring } from '@react-spring/web'
import { Reveal } from './Reval/Revale';

function Gallary() {

  return (

  <div className="w-full flex items-center justify-center bg-[#000000]">
    <Reveal>
    <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap justify-between">
            <h1 className="sm:text-3xl text-6xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
              Featured Projects
            </h1>
            <div className=''> 
                                   <div className=' button_shadow relative top-[35px] right-[28px] inline-block rounded-[5px] bg-[#FF8000] z-[1]  px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100  focus-visible:ring md:text-base'> 
                                   <a href="/" className="">Download CV</a>
                                   </div>
                                     <div className='absolute py-[21px] px-[81px] bg-[#fff]  rounded-[5px]'>

                                     </div>
                                   </div>
          </div>

          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-wrap w-full rounded">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded block"
                  src="https://loremflickr.com/320/240"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block rounded"
                  src="https://loremflickr.com/320/240"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 rounded">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center rounded block"
                  src="https://loremflickr.com/320/240"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full rounded">
              <div className="md:p-2 p-1 w-full rounded">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover rounded object-center block"
                  src="https://loremflickr.com/320/240"
                />
              </div>
              <div className="md:p-2 p-1 w-full rounded">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full rounded object-center block"
                  src="https://loremflickr.com/320/240"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
   
    </div>
   
  
   
  
  );
}

export default Gallary;
