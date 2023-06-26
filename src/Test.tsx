  import React from 'react'

  function Test() {



      return (
          <div className='overflow-x-hidden pr-[15px]'>

              {/* <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                      <p className={styles.scrollText}>Scroll down</p>
                  </ParallaxLayer> */}
   
{
    /**
     * _________________________________________
     * 
     * 
     * import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Components/style/style.module.css"
interface FAQItem {
  id: number;
  question: string;
  imgUrl: string;
}

const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };
  function Square() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
        console.log("heelop")
      }
     
    }, [controls, inView]);
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className="square"
      >
        
      </motion.div>
    );
  }

     * _______________________________________
     */
}

          </div>
      )
  }

export default Test

// import * as React from 'react'
// // import { useScroll, animated, useSpring } from 'react-spring/web'
// import { useScroll, animated, useSpring } from 'react-spring'

// import styles from './styles.module.scss'

// const X_LINES = 40

// const PAGE_COUNT = 5

// const INITIAL_WIDTH = 20

// export default function Test() {
//   const containerRef = React.useRef<HTMLDivElement>(null!)
//   const barContainerRef = React.useRef<HTMLDivElement>(null!)

//   const [textStyles, textApi] = useSpring(() => ({
//     y: '100%',
//   }))



//   const { scrollYProgress } = useScroll({
//     container: containerRef,
//     onChange: ({ value: { scrollYProgress } }) => {
//       if (scrollYProgress > 0.7) {
//         textApi.start({ y: '0' })
//       } else {
//         textApi.start({ y: '100%' })
//       }
//     },
//     default: {
//       immediate: true,
//     },
//   })

//   return (
//     <div ref={containerRef} className={`${styles.body}`} >
//       <div className={styles.animated__layers}>
//        <animated.div ref={barContainerRef} className={styles.bar__container}>
//           {Array.from({ length: X_LINES }).map((_, i) => (
//             <animated.div
//               key={i}
//               className={`${styles.bar} animate-bounce`}
//               style={{
//                 width: scrollYProgress.to(scrollP => {
//                   const percentilePosition = (i + 1) / X_LINES

//                   return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
//                 }),
//               }}
//             />
//           ))}
//         </animated.div>
//         <animated.div className={styles.bar__container__inverted}>
//           {Array.from({ length: X_LINES }).map((_, i) => (
//             <animated.div
//               key={i}
//               className={styles.bar}
//               style={{
//                 width: scrollYProgress.to(scrollP => {
//                   const percentilePosition = 1 - (i + 1) / X_LINES

//                   return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
//                 }),
//               }}
//             />
//           ))}
//         </animated.div> 
//         <animated.div
//           className={styles.dot}
//           style={{
//             clipPath: scrollYProgress.to(val => `circle(${val * 100}%)`),
//           }}>
//           <h1 className={styles.title}>
//             <span>
//               <animated.span style={textStyles}>Aha!</animated.span>
//             </span>
//             <span>
//               <animated.span style={textStyles}>You found me!</animated.span>
//             </span>
//           </h1>
//         </animated.div>
//       </div>
//       {new Array(PAGE_COUNT).fill(null).map((_, index) => (
//         <div className={styles.full__page} key={index} />
//       ))}
//     </div>
//   )
// }
