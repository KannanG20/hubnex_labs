import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import reddit from '../../assets/reddit.png'
import chorus from '../../assets/chorus.png'
import tcs from '../../assets/Tata Consultancy Services - png 0.png'
import pantera from '../../assets/pantera.png'


// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

const Swiperpartners = () => {
  return (
    <div className='bg-black text-white h-[200px] '>
        <div className="text-white font-bold text-4xl p-5 text-center"><h1>Our Partners</h1></div>
        <div className=' flex justify-center items-center w-full'>
     <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide className=' py-2 px-2' ><img src={reddit}  width={150} className='object-cover'  alt="reddit"></img></SwiperSlide>
        <SwiperSlide className=' py-2 px-2' ><img src={chorus} width={150} className='object-cover'  alt="chorus"></img></SwiperSlide>
        <SwiperSlide className=' py-2 px-2' ><img src={tcs} width={150} className='object-cover'  alt="tcs"></img></SwiperSlide>
        <SwiperSlide className=' py-2 px-2'><img src={pantera} width={150} className='object-cover'  alt="pantera"></img></SwiperSlide>
       
      </Swiper>
      </div>
    </div>
  )
}

export default Swiperpartners