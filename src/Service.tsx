import React from 'react';
import FAQ from "./Components/Faq";
import { animated, useTransition } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from "./Components/style/style.module.css"
import Footer from './Footer';
import { Reveal } from './Reval/Revale';
interface FAQItem {
  id: number;
  question: string;
  imgUrl: string;
}

function Service() {
  const questions: FAQItem[] = [
    {
      id: 1,
      question: 'Education',
      imgUrl: ""
    },
    {
      id: 2,
      question: 'Certifications',
      imgUrl: ""
    },
    {
      id: 3,
      question: 'Browse the web',
      imgUrl: ""
    },
    {
      id: 4,
      question: 'Search on your phone or tablet',
      imgUrl: ""
    }
  ];
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const faqsList = [
    {
      q: "MAY 1, 2023",
      a: `What UX designers can learn from religions to create more connected experiences`
    },
    {
      q: "MAY 1, 2023",
      a: `The Brand with the Strongest Tribe wins`
    },
    {
      q: "MAY 1, 2023",
      a: "Design Levels & How it affects Company Turnover & Your Salary"
    },
    {
      q: "MAY 1, 2023",
      a: "Design Innovation that makes $40 Billion for a furniture brand"
    },
    {
      q: "MAY 1, 2023",
      a: "UI/UX !Where to start?"
    },
    {
      q: "MAY 1, 2023",
      a: "Product Design Journey: MeMix"
    },
    {
      q: "MAY 1, 2023",
      a: "Law of Attraction is God, is law of attraction."
    }
  ]


  return (
    <div>

      <section className="text-[white] bg-[#000000]">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold sm:text-4xl">About</h2>
          </div>

          <div className="space-y-4">
            <FAQ data={questions} />
          </div>

        </div>
      </section>

      <Reveal>

        <section className="bg-[#000000]">
          <div className="max-w-screen-xl mx-auto px-4 gap-12 md:grid md:grid-cols-2  sm:grid-cols-1   justify-around">




            <div className='flex-1 flex justify-start gap-[14px] md:flex-col justify-start flex-row gap-[10px] justify-around'>
              <div className="max-w-lg">
                <h3 className='font-semibold text-[#FF8000]'>
                  Case Study
                </h3>
                <p className='mt-3 text-[#fff] text-3xl font-extrabold sm:text-4xl'>
                  Latest Case Study
                </p>
              </div>
              <div>
                {/* <span className='Button_background bg-[#fff] rounded-[5px] px-8 py-3 relative right-[10px] z-[2] '></span> */}
                <div className=''>
                  <div className=' button_shadow relative top-[35px] right-[28px] inline-block rounded-[5px] bg-[#FF8000] z-[1]  px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100  focus-visible:ring md:text-base'>
                    <a href="/" className="">Download CV</a>
                  </div>
                  <div className='absolute py-[21px] px-[81px] bg-[#fff]  rounded-[5px]'>

                  </div>
                </div>

              </div>

            </div>
            <div className='flex  flex-col  h-[550px]  overflow-y-scroll parallex'>


              {
                faqsList.map((item, index) => {

                  return (
                    <div className={`w-[100%] h-[400px] rounded`} >

                      <li
                        className="py-5"
                        key={index}>
                        <summary
                          className="flex items-center justify-between font-semibold text-[#fff] text-[30px]">
                          {item.q}
                        </summary>
                        <p

                          className='mt-3 text-[#fff] leading-relaxed text-[30px]'>
                          {
                            item.a
                          }
                        </p>
                      </li>

                    </div>


                  )

                })
              }
            </div>


          </div>
        </section>
      </Reveal>
    </div>
  );
}

export default Service;