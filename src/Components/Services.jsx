import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <section id='Services' className='py-20 md:py-32 bg-slate-900 relative overflow-hidden'>

      <div className='absolute inset-0 bg-linear-to-b from-slate-950 to-slate-900'></div>

      <div className=' mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>

        <motion.div 
        initial={{opacity:0, y:20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6}}
      viewport={{once: true}}
        className='text-center mb-14' style={{ opacity: "1", transform: "none" }}>

          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>Our <span className='bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>AI Services</span></h2>

          <p className='text-lg sm:text-2xl md:text-xl lg:text-lg text-gray-400 mb-12 max-w-3xl mx-auto' style={{ opacity: "1", transform: "none" }}>Comprehensive AI solutions designed to transform your business and drive innovation</p>

        </motion.div>

        <motion.div
        initial={{opacity: 0, y: 26}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration:0.6, delay: 0.3}}
        viewport={{once: true}}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          <div className='group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10' style={{ opacity: "1", transform: "none" }}>
            <div className='w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain w-7 h-7 text-white" data-fg-d95f14="1.17:1.3305:/src/app/components/Services.tsx:69:17:2875:47:e:service.icon" data-fgid-d95f14=":r1s:"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
            </div>

            <h3 className='text-lg text-white md:text-2xl lg:text-lg font-bold mb-4 group-hover:text-purple-400 transition-colors'>Machine Learning</h3>

            <p className='text-sm text-gray-400 lg:text-xs leading-relaxed'>Custom ML models tailored to your specific business needs, from predictive analytics to computer vision.</p>

          </div>

          <div className='group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10' style={{ opacity: "1", transform: "none" }}>
            <div className='w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square w-7 h-7 text-white" data-fg-d95f14="1.17:1.3305:/src/app/components/Services.tsx:69:17:2875:47:e:service.icon" data-fgid-d95f14=":r21:"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>

            <h3 className='text-lg text-white md:text-2xl lg:text-lg font-bold mb-4 group-hover:text-purple-400 transition-colors'>Natural Language Processing</h3>

            <p className='text-sm text-gray-400 lg:text-xs leading-relaxed'>Seamlessly integrate AI capabilities into your existing systems and workflows.</p>

          </div>

          <div className='group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10' style={{ opacity: "1", transform: "none" }}>
            <div className='w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu w-7 h-7 text-white" data-fg-d95f14="1.17:1.3305:/src/app/components/Services.tsx:69:17:2875:47:e:service.icon" data-fgid-d95f14=":r26:"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
            </div>

            <h3 className='text-lg text-white md:text-2xl lg:text-lg font-bold mb-4 group-hover:text-purple-400 transition-colors'>AI Integration</h3>

            <p className='text-sm text-gray-400 lg:text-xs leading-relaxed'>Seamlessly integrate AI capabilities into your existing systems and workflows.</p>

          </div>

          <div className='group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10' style={{ opacity: "1", transform: "none" }}>
            <div className='w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database w-7 h-7 text-white" data-fg-d95f14="1.17:1.3305:/src/app/components/Services.tsx:69:17:2875:47:e:service.icon" data-fgid-d95f14=":r2b:"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
            </div>

            <h3 className='text-lg text-white md:text-2xl lg:text-lg font-bold mb-4 group-hover:text-purple-400 transition-colors'>Data Analytics</h3>

            <p className='text-sm text-gray-400 lg:text-xs leading-relaxed'>Transform raw data into actionable insights with our advanced analytics platforms.</p>

          </div>

          <div className='group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10' style={{ opacity: "1", transform: "none" }}>
            <div className='w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-line w-7 h-7 text-white" data-fg-d95f14="1.17:1.3305:/src/app/components/Services.tsx:69:17:2875:47:e:service.icon" data-fgid-d95f14=":r2g:"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
            </div>

            <h3 className='text-lg text-white md:text-2xl lg:text-lg font-bold mb-4 group-hover:text-purple-400 transition-colors'>Predictive Modeling</h3>

            <p className='text-sm text-gray-400 lg:text-xs leading-relaxed'>Forecast trends and behaviors with powerful predictive algorithms.</p>

          </div>

          <div className='group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10' style={{ opacity: "1", transform: "none" }}>
            <div className='w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-7 h-7 text-white" data-fg-d95f14="1.17:1.3305:/src/app/components/Services.tsx:69:17:2875:47:e:service.icon" data-fgid-d95f14=":r2l:"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            </div>

            <h3 className='text-lg text-white md:text-2xl lg:text-lg font-bold  mb-4 group-hover:text-purple-400 transition-colors'>Automation Solutions</h3>

            <p className='text-sm text-gray-400 lg:text-xs leading-relaxed'>Automate repetitive tasks and optimize operations with intelligent automation.</p>

          </div>



        </motion.div>

      </div>
    </section>
  )
}

export default Services
