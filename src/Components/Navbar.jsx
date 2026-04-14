import React, { useState } from 'react'
import menu_icon from '../assets/menu_icon_dark.svg'
import close_icon from '../assets/close_icon.svg';
import { motion } from "motion/react"

const Navbar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='bg-slate-950 text-white'>

            <nav className='fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-4 sm:px-12 lg:px-16 xl:px-20 bg-slate-900/50 z-50 transition-all duration-300 backdrop-blur-md font-medium shadow-lg '>

            <a className='text-xl md:text-2xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent' href="#" >AI Agency</a>

            <div className={`text-gray-300 hover:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-65 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-slate-800 max-sm:text-white max-sm:pt-20 flex sm:items-center gap-6 transition-all`}>

                <img onClick={() => setSidebarOpen(false)} src={close_icon} className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer" alt="" />

                <a onClick={(e) => setSidebarOpen(false)} href="#" className='sm:hover:border-b transition-colors duration-300'>Home</a>

                <a onClick={(e) => setSidebarOpen(false)} href="#Services" className=' sm:hover:border-b transition-colors duration-300'>Services</a>

                <a onClick={(e) => setSidebarOpen(false)} href="#About" className=' sm:hover:border-b transition-colors duration-300'>About</a>

                <a onClick={(e) => setSidebarOpen(false)} href="#Portfolio" className=' sm:hover:border-b transition-colors duration-300'>Portfolio</a>
            </div>

            <div className='flex items-center gap-3 sm:gap-4'>
                <img src={menu_icon} className='w-8 sm:hidden cursor-pointer' onClick={(e) => setSidebarOpen(true)} alt="" />

                <a href="#Contact" className='text-white bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-5 py-2 rounded-full text-sm flex items-center transition-all max-sm:hidden gap-2 cursor-pointer'>Contact Us</a>
            </div>
        </nav>
        </motion.div>
    )
}

export default Navbar
