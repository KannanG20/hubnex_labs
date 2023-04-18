import React from 'react'
import './startup/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, FreeMode, Pagination } from "swiper";

const Aboutus = () => {
  return (
    <>
    <div className='w-full flex gap-5 md:gap-24 justify-center items-center h-[617px] flex-col xl:w-full ' id="display">
          <div className='font-gilroy lg:text-[70px] text-white font-gilroy-bold text-center  text-2xl'>
            <h1>what people say about us</h1>
          </div>
        
        <div className=' w-[80%] mx-auto justify-center items-center text-white'>
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
                  <SwiperSlide className=' py-12'>  
                  <div className=' flex flex-col gap-5 md:gap-8 justify-center items-center w-full'>          
                    <div className=' xl:text-[22px] font-gilroy-semi-bold'>
                      <p className=' text-center'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p></div>
                    <div className=' items-center flex flex-col justify-between'>
                      <h1 className='font-gilroy-bold text-[28px]'>Rahul Sarkar</h1>
                      <h2>UI/UX Designer</h2>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide className=' py-12'>  
                  <div className=' flex flex-col gap-5 md:gap-8 justify-center items-center w-full'>          
                    <div className=' xl:text-[22px] font-gilroy-semi-bold'>
                      <p className=' text-center'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p></div>
                    <div className=' items-center flex flex-col justify-between'>
                      <h1 className='font-gilroy-bold text-[28px]'>Rahul Sarkar</h1>
                      <h2>UI/UX Designer</h2>
                    </div>
                  </div>
                  </SwiperSlide>    
            </Swiper>
            </div>
    </div>
    </>
  )
}

export default Aboutus