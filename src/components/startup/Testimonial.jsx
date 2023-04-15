import React from 'react'
import line from '@assets/lineDesign.png'

const Testimonial = () => {
  return (
    <div className=' bg-black h-[700px] w-full relative flex py-10 justify-center text-white'>
      <div className='w-52 h-40 rounded-full bg-slate-400 absolute top-8 left-6 ' id="circle"></div>
      <div className=' w-[90%] md:w-[80%] flex flex-col md:justify-between'>
           <span className=' text-[20px] text-center md:text-start font-gilroy-medium'>Testimonial</span>
            <div className=' flex flex-col gap-5 md:gap-0 justify-between w-full xl:w-[90%] 2xl:w-[80%] m-auto md:h-[60%] items-center'>
              <h1 className=' text-[32px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-gilroy-bold text-center'>what people say about us</h1>
              <p className=' text-center md:m-5 font-gilroy-regular text-[16px] md:text-[24px]'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
              <span className=' text-center flex flex-col items-center gap-1 text-[20px] md:text-[28px] font-gilroy-bold'>Rahul Sarkar <span className=' text-[14px] md:text-[20px] font-gilroy-medium'>UI/UX Design</span></span>
            </div>
         <div className=' w-full flex justify-center items-center'>
          <img src={line} alt="" />
         </div>
      </div>
    </div>
  )
}

export default Testimonial