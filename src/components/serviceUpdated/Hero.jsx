import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const Hero = () => {
  return (
    
    <div className=' h-screen xl:h-[908px] bg-serviceLander bg-cover bg-center w-full relative '>
        <Navbar />
        <div className='w-full h-full flex items-center justify-center'>
            <div className=' text-white w-[85%] flex justify-start h-full  items-center'>
                <div className=' sm:w-[676px] flex flex-col gap-8 xl:gap-14 lg:mb-[180px] xl:mb-48'>
                    <span className=' text-[28px] sm:text-[70px] font-gilroy-bold leading-tight'>Services to help you grow</span>
                    <p className=' text-[16px] sm:text-[24px] font-gilroy-medium md:font-gilroy-semi-bold'>"Expert IT Consulting Services to Boost Your Business Growth"</p>
                    <button className=' h-[23px] w-[91px] md:h-[44px] md:w-[140px] bg-violet-700 lg:py-[10px] px-5 border-t-0 border-l-0 relative bg-transparent rounded-full'>
                    <Link className=' w-full h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[12px] md:text-[20px] absolute bg-white text-black -left-[3px] bottom-[4px] border-white border-2'>Get in touch</Link>
                  </button>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Hero