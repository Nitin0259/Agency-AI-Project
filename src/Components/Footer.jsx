import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-900 border-t border-slate-800 pt-10 sm:pt-10 px-4 sm:px-10 lg:px-24 xl:px-40'>

      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
         <div className='space-y-5 text-sm text-gray-400'>
            <a className='text-2xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent' href="#" >AI Agency</a>

            <p className='max-w-md mt-4 mb-4'>From strategy to execution, we craft digital solutions that move your business forward.</p>

            <ul className='flex gap-8 font-medium'>
                <li><a href="#Hero" className='text-gray-300 hover:text-purple-500'>Home</a></li>
                <li><a href="#Services" className='text-gray-300 hover:text-purple-500'>Service</a></li>
                <li><a href="#About" className='text-gray-300 hover:text-purple-500'>About</a></li>
                <li><a href="#Portfolio" className='text-gray-300 hover:text-purple-500'>Portfolio</a></li>
            </ul>
         </div>

         <div className='text-white'>
            <h3 className='font-semibold'>Stay Updated</h3>
            <p className='text-sm text-gray-400 mt-2 mb-6'>Subscribe to our newsletter for the latest AI insights.</p>
            <form className='flex gap-2'>
                <input type="email" placeholder='Your email'className='flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:border-purple-500 focus:outline-none text-sm' required/>
                <button type='submit' className='px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all'>→</button>
            </form>
         </div>
      </div>
      <hr className='border-gray-600 my-6'/>

      <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
        <p>© 2026 AI Agency. All rights reserved.</p>
        <div className='flex items-center justify-between gap-4'>
            <a href="https://x.com/?lang=en" className='w-10 h-10 bg-slate-800
            rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter w-5 h-5" data-fg-bb4411="1.21:1.5170:/src/app/components/Footer.tsx:28:17:1119:31:e:Twitter::::::IeX" data-fgid-bb4411=":r7k:"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>

            <a href="https://www.linkedin.com/in/nitin-singh-a6524a39a/" className='w-10 h-10 bg-slate-800
            rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-5 h-5" data-fg-bb4413="1.21:1.5170:/src/app/components/Footer.tsx:34:17:1377:32:e:Linkedin::::::BytQ" data-fgid-bb4413=":r7m:"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>

            <a href="https://github.com/" className='w-10 h-10 bg-slate-800
            rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-5 h-5" data-fg-bb4415="1.21:1.5170:/src/app/components/Footer.tsx:40:17:1636:30:e:Github::::::t8f" data-fgid-bb4415=":r7o:"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
        </div>

      </div>
    </div>
  )
}

export default Footer
