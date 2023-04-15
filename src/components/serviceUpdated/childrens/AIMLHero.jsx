import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'

const Hero = () => {
  return (
    
    <div className=' h-screen xl:h-[908px] bg-serv1 bg-cover bg-center w-full relative '>
        <Navbar />
        <div className='w-full h-full flex items-center justify-center'>
            <div className=' text-white w-[85%] flex justify-start h-full  items-center'>
                <div className=' w-90 flex flex-col gap-8 xl:gap-14 lg:mb-[180px] xl:mb-40'>
                    <div className=' text-[24px] md:text-[60px] lg:text-[70px] font-gilroy-bold mt-36 leading-tight lg:w-[700px]'>Smarter Business Decisions with AI/ML</div>
                    <p className=' text-[16px] w-[300px]  md:text-[24px] font-gilroy-semi-bold'>"Empowering Smarter Business Decisions with this"</p>
                    <button className='h-[23px] w-[91px] md:h-[44px] md:w-[140px] bg-violet-700 lg:py-[10px] px-5 border-t-0 border-l-0 relative bg-transparent rounded-full'>
                    <Link className=' w-full h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold md:text-[20px] text-[12px] absolute bg-white text-black -left-[3px] bottom-[4px] border-white border-2'>Get in touch</Link>
                  </button>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Hero