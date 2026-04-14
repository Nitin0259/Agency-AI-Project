import React from 'react'
import arrow_icon from '../assets/arrow_icon.svg'
import { motion } from "motion/react"

const Hero = () => {

  return (
    <div id='Hero' className='relative flex flex-col items-center gap-6 px-4 md:px-20 lg:px-30 lg:pt-10 xl:px-46 text-center w-full overflow-hidden  bg-linear-to-r from-slate-900 to-slate-950'>

      <motion.h1
      initial={{opacity:0, y:40}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6, delay: 0.8}}
      viewport={{once: true}}

      className='text-4xl font-medium sm:text-4xl md:text-7xl lg:text-7xl mb-4 leading-tight text-white pt-20' style={{opacity:"1", transform:"none"}}>Transform Your Business <br/> <span className='bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>With AI Innovation</span></motion.h1>

      <motion.p 
      initial={{opacity:0, y:30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6, delay: 1}}
      viewport={{once: true}}

      className='text-lg sm:text-2xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto' style={{opacity:"1", transform:"none"}}>We build cutting-edge AI solutions that drive growth, automate processes, and unlock new possibilities for businesses worldwide.</motion.p>

      <motion.div 
      initial={{opacity: 0, scale: 0.9}}
      whileInView={{opacity: 1, scale:1}}
      transition={{duration: 0.5, delay: 1.1}}
      viewport={{once: true}}

      className='flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col justify-center items-center mb-12 gap-6'>

        <a href="#Contact" className='text-white group px-6 py-3.5 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full transition-all text-lg flex items-center gap-2 shadow-lg shadow-purple-500/25 cursor-pointer'>Get Started <span className='group-hover:translate-x-1 transition-transform'><img src={arrow_icon} className='w-4 ' alt="" /></span></a>

        <a href="#Portfolio" className='text-white border border-gray-700 group px-6 py-3.5 rounded-full hover:border-purple-500 transition-all text-lg cursor-pointer'>View Our Work</a>
      </motion.div>

      <motion.div 
      initial={{opacity: 0, scale: 0.8}}
      whileInView={{opacity: 1, scale:1}}
      transition={{duration: 0.5, delay: 1.3}}
      viewport={{once: true}}

      className='mt-15 grid grid-cols-2 md:grid-cols-4 gap-x-26 gap-y-8' style={{opacity:"1", transform:"none"}}>

        <div className='text-center'>
          <h2 className='text-3xl md:text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>500+</h2>

          <p className='text-sm text-gray-500 mt-2'>Projects Completed</p>
        </div>

        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>98%</h2>
          
          <p className='text-sm text-gray-500 mt-2'>Client Satisfaction</p>
        </div>

        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>50+</h2>
          
          <p className='text-sm text-gray-500 mt-2'>AI Models Deployed</p>
        </div>

        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>24/7</h2>
          
          <p className='text-sm text-gray-500 mt-2'>Support Available</p>
        </div>
      </motion.div>

      <motion.div 
      initial={{opacity: 0, scale: 0.8}}
      whileInView={{opacity: 1, scale:1}}
      transition={{duration: 0.5, delay: 1.3}}
      viewport={{once: true}}
      className='absolute bottom-8 left-1/2 transform -translate-x-1/2' style={{opacity:"1"}}>
        <div className='w-6 h-9 border-2 border-gray-600 rounded-full flex items-start justify-center p-2'>
          <div className='w-1.5 h-1.5 bg-purple-500 rounded-full scroll-dot'></div>
        </div>
      </motion.div>

    </div>
  )
}

export default Hero
