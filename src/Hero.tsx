import React from 'react'
import { Reveal } from './Reval/Revale'
function Hero() {
    return (
        <div className='flex flex-col bg-[#000000]'>
            <Reveal>
                <div>
                    <header className="text-[white] body-font ">
                        <div className="container md: mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  ">
                            <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                <span className="ml-3 text-[#FF8000] text-xl">Yash.com</span>
                            </a>
                            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base gap-7 justify-center">
                                <a href="/" className="mr-5 hover:motion-safe:animate-bounce ">About</a>
                                <a href="/" className="mr-5  hover:motion-safe:animate-bounce">Projects</a>
                                <a href="/" className="mr-5 hover:motion-safe:animate-bounce">Services</a>
                                <a href="/" className="mr-5  hover:motion-safe:animate-bounce">Case studies</a>
                            </nav>
                            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none  rounded-full border border-[#ffffff]  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-[#fff] dark:border-[#fff] dark:hover:text-white dark:hover:bg-gray-700">Let's Connect</button>
                        </div>
                    </header>
                    <div className='flex align-center justify-center text-[#fff] pt-10 xl: md:px-[57px]  sm:px-[53px]'>
                        {/* <!-- content - start --> */}

                        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-[75%]  gap-[10px]">

                            <p className="mb-4 font-semibold text-[#FF8000] md:mb-6 md:text-lg xl:text-[64px] ">Hi,I’m Yash,</p>

                            <div className='flex align-center justify-center flex-col'>
                                <div className='flex align-center justify-center'>
                                    <h1 className="text-black-800 mb-8 md:text-[90px] font-bold md:mb-12 md:text-[80px] sm:text-[32px] text-[32px] ">

                                        I help startups design products
                                        that work
                                        <svg className='inline-flex pt-[10px] pl-[10px]' width="91" height="86" viewBox="0 0 91 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="47.6668" cy="45.4342" rx="43.3333" ry="40.566" fill="white" />
                                            <ellipse cx="43.3333" cy="40.566" rx="43.3333" ry="40.566" fill="#FF8000" />
                                            <path d="M26.8667 51.5193L58.9334 32.0476M58.9334 32.0476L55.0334 51.5193M58.9334 32.0476L37.2667 29.208" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </h1>


                                    <div className='relative  md:right-[50px]  right-[38px]'>
                                        <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40.074 18.5636L59.0699 39.5906C60.25 40.8968 61.9442 41.619 63.7037 41.5657L92.6777 40.6881L70.8298 59.7389C69.503 60.8958 68.7512 62.5771 68.7736 64.3373L69.1334 92.6719L50.1375 71.6449C48.9575 70.3386 47.2633 69.6165 45.5037 69.6698L16.5297 70.5473L38.3776 51.4966C39.7044 50.3396 40.4562 48.6584 40.4338 46.8981L40.074 18.5636Z" fill="white" />
                                            <path d="M36.3322 14.2465L54.374 34.2174C55.5541 35.5237 57.2483 36.2458 59.0079 36.1925L86.5295 35.359L65.7768 53.4548C64.4499 54.6117 63.6982 56.293 63.7205 58.0532L64.0623 84.9646L46.0205 64.9938C44.8404 63.6875 43.1462 62.9654 41.3866 63.0187L13.865 63.8522L34.6177 45.7564C35.9445 44.5995 36.6963 42.9182 36.674 41.158L36.3322 14.2465Z" fill="#FF8000" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='w-[60%] py-[10px]'>
                                    <p className='text-[20px]'>
                                        I  have 20 years of experience and design high-quality digital
                                        products that your clients will love and let your business thriv
                                    </p>
                                </div>

                            </div>




                            <div className="flex flex-col gap-[100px] sm:flex-row sm:justify-center lg:justify-start">
                                <div className=''>
                                    <div className=' button_shadow relative top-[35px] right-[28px] inline-block rounded-[5px] bg-[#FF8000] z-[1]  px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100  focus-visible:ring md:text-base'>
                                        <a href="/" className="">Download CV</a>
                                    </div>
                                    <div className='absolute py-[21px] px-[81px] bg-[#fff]  rounded-[5px]'>

                                    </div>
                                </div>
                                <div className=''>
                                    <div className='  relative top-[35px] right-[28px] '>
                                        <a href="#" className="inline-block   px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100     md:text-base">Let’s Connect</a>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* <!-- content - end --> */}
                    </div>
                </div>

            </Reveal>
        </div>
    )
}

export default Hero