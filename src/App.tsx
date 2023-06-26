import * as React from 'react'
import { useScroll, animated, useSpring } from '@react-spring/web'

import "./App.css"
import Gallary from './Gallery'
import Hero from './Hero'
import Test from './Test'
import Service from './Service'
import Footer from './Footer'
import { Reveal } from './Reval/Revale'

export default function App() {

  return (
 < >

 <Hero />
  <Gallary/>
  <Service/>
  {/* <Test/> */}
  <Footer/>
 </> 
  )
}
