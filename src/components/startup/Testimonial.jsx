import React from 'react'
import line from '@assets/lineDesign.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, FreeMode, Pagination } from "swiper";

const Testimonial = () => {
  return (
    <div className=' bg-black h-[700px] w-full relative flex py-10 justify-center text-white'>
      <div className='w-52 h-40 rounded-full bg-slate-400 absolute top-8 left-6 ' id="circle"></div>
      <div className=' w-[90%] md:w-[80%] flex flex-col md:justify-between'>
           <span className=' text-[20px] text-center md:text-start font-gilroy-medium'>Testimonial</span>
            <div className=' flex flex-col gap-5 md:gap-0 justify-between w-full xl:w-[90%] 2xl:w-[80%] m-auto md:h-[60%] items-center'>
              <h1 className=' text-[32px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-gilroy-bold text-center'>what people say about us</h1>
              <div className=' w-full justify-center items-center text-white'>
          <Swiper
                slidesPerView={1}
                spaceBetween={50}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination,Autoplay]}
                autoplay={true}
                className="mySwiper"
              >
                <SwiperSlide className=' py-12'>  
                  <div className=' flex flex-col gap-5 md:gap-8 justify-center items-center w-full'>          
                    <div className=' w-full xl:text-[22px] font-gilroy-semi-bold'>
                      <p className='text-center'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p></div>
                    <div className=' w-fulls items-center flex flex-col justify-between'>
                      <h1 className='font-gilroy-bold text-[28px]'>Rahul Sarkar</h1>
                      <h2>UI/UX Designer</h2>
                    </div>
                  </div>
                  </SwiperSlide>
                    
            </Swiper>
            </div>
            </div>
         <div className=' w-full flex justify-center items-center'>
          <img src={line} alt="" />
         </div>
      </div>
    </div>
  )
}

export default Testimonial