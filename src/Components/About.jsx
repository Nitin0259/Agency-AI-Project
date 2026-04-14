import React from 'react'
import ai_image from '../assets/ai-image.jpg';
import { motion } from "motion/react"

const About = () => {
    return (
        <section id='About' className='py-20 md:py-32 bg-slate-950 relative overflow-hidden'>

            <div className='absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>

            <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>

            <div className='mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>

                <div className='grid lg:grid-cols-2 gap-12
            lg:gap-16 items-center'>
                    <motion.div
                    initial={{opacity:0, x:-20}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 0.6}}
      viewport={{once: true}}
                    className='relative'>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img src={ai_image} className='w-full h-100 object-cover' alt="AI image" />
                            <div className='absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20'></div>
                        </div>

                        <div className='absolute -bottom-6 -right-6 p-6 bg-slate-800/90 backdrop-blur-md rounded-xl border border-purple-500/30 shadow-xl' style={{ opacity: "1", transform: "none" }}>

                            <h3 className='text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>10+ Years</h3>
                            <p className='text-xs text-gray-400 mt-1'>Of AI Excellence</p>
                        </div>
                    </motion.div>

                    <div>
                        <motion.h2
                        initial={{opacity:0, x:20}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 0.6}}
      viewport={{once: true}}
                        className='text-4xl text-white font-medium md:text-4xl lg:text-5xl mb-6'>Leading the Future of <span className='bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>AI Innovation</span></motion.h2>

                        <motion.p
                        initial={{opacity:0, x:20}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 0.7}}
      viewport={{once: true}}
                        className='text-sm text-gray-400 mb-8 leading-relaxed'>We are a team of passionate AI engineers, data scientists, and innovators dedicated to creating intelligent solutions that transform businesses. Our mission is to make advanced AI technology accessible and impactful for companies of all sizes.</motion.p>

                        <div className='space-y-6 mb-8'>

                            <motion.div
                            initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration:0.7, delay: 0.3}}
        viewport={{once: true}}
                            className='flex gap-4 items-start' style={{ opacity: "1", transform: "none" }}>
                                <div className='w-11 h-11 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target w-6 h-6 text-white" data-fg-d7ai30="1.18:1.4695:/src/app/components/About.tsx:88:21:4296:44:e:item.icon" data-fgid-d7ai30=":r3c:"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
                                    </svg>
                                </div>

                                <div>
                                    <h3 className='text-lg font-medium text-white mb-2'>Our Mission</h3>

                                    <p className='text-xs text-gray-400'>Democratizing AI technology to empower businesses globally</p>
                                </div>
                            </motion.div>

                            <motion.div
                            initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration:0.7, delay: 0.4}}
        viewport={{once: true}}
                            className='flex gap-4 items-start' style={{ opacity: "1", transform: "none" }}>
                                <div className='w-11 h-11 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award w-6 h-6 text-white" data-fg-d7ai30="1.18:1.4695:/src/app/components/About.tsx:88:21:4296:44:e:item.icon" data-fgid-d7ai30=":r3i:"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle>
                                    </svg>
                                </div>

                                <div>
                                    <h3 className='text-lg font-medium text-white mb-2'>Our Excellence</h3>

                                    <p className='text-xs text-gray-400'>Award-winning solutions recognized by industry leaders</p>
                                </div>
                            </motion.div>

                            <motion.div
                            initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration:0.7, delay: 0.5}}
        viewport={{once: true}}
                            className='flex gap-4 items-start' style={{ opacity: "1", transform: "none" }}>
                                <div className='w-11 h-11 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-6 h-6 text-white" data-fg-d7ai30="1.18:1.4695:/src/app/components/About.tsx:88:21:4296:44:e:item.icon" data-fgid-d7ai30=":r3o:"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>

                                <div>
                                    <h3 className='text-lg font-medium text-white mb-2'>Our Team</h3>

                                    <p className='text-xs text-gray-400'>World-class experts in AI, ML, and data science</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
