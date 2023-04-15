import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import i1 from '../../assets/i1.png'
import i2 from '../../assets/i2.png'
import i3 from '../../assets/i3.png'
import i4 from '../../assets/i4.png'
import t1 from '@assets/team1.png'
import t2 from '@assets/team2.png'
import t3 from '@assets/team3.png'
import t4 from '@assets/team4.png'


// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

const Swiperpartners = () => {
  return (
    <div className='bg-black text-white h-auto w-full '>
        <div className="text-white font-bold text-4xl p-5 text-center"><h1>Our Partners</h1></div>
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
        <SwiperSlide>
            <div className='  bg-transparent w-full h-[409px]  relative flex flex-col justify-start pt-24  items-center '>
                <img src={t1} alt="" className=' absolute bottom-5 w-[250px] h-[365px]'/>               
                <img src={i1} alt="icon1" className=' z-10'/>
                <span className=' text-center z-10 text-[20px] font-gilroy-medium'>Design Team</span>
                <p className='text-center z-10 w-[195px] text-[16px] font-gilroy-medium pt-2 '>Our design team turns imagination into reality. What you think, you will have!</p>    
            </div>
          </SwiperSlide>

        <SwiperSlide >
        <div className='  bg-transparent w-full h-[409px]  relative flex flex-col justify-start pt-20  items-center '>
                    <img src={t2} alt="" className=' absolute bottom-5 w-[250px] h-[365px]'/>                  
                      <img src={i2} alt="icon2" className=' z-10'/>
                    <span className='text-center z-10 w-[195px] text-[20px] font-gilroy-medium'>Cloud Team</span>
                    <p className='text-center z-10 w-[195px] text-[16px] font-gilroy-medium pt-2'>ready to take your offline business online and use the cloud skills to connect to your business from anywhere.</p>
                </div>
          </SwiperSlide>

        <SwiperSlide className='mb-6' >
        <div className='  bg-transparent w-full h-[409px]  relative flex flex-col justify-start pt-20  items-center '>
                    <img src={t3} alt="" className=' absolute bottom-5 w-[250px] h-[365px]'/>
                    <img src={i3} alt="icon3" className='m-4 z-10' />
                    <span className='text-center z-10 w-[195px] text-[20px] font-gilroy-medium'>AI ML Team</span>
                    <p className=' text-center z-10 w-[195px] text-[16px] font-gilroy-medium pt-2'>Want to use the power of AI? With the help of our ML experts, we can build your product with the latest capabilities.</p>
                </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className=' bg-transparent w-full h-[409px]  relative flex flex-col justify-start pt-20 items-center '>
                    <img src={t4} alt="" className=' absolute bottom-5 w-[250px] h-[365px]'/>
                    <img src={i4} alt="icon4" className='z-10 pr-8' />
                    <span className=' text-center z-10 w-[195px] text-[20px] font-gilroy-medium pr-8'>Developer Team</span>
                    <p className=' text-center z-10 w-[195px] text-[16px] font-gilroy-medium pt-2 pr-8'> Get your things done with the help of the best developers on our team. Bring your ideas into reality.</p>
                </div>
        </SwiperSlide>
       
      </Swiper>
      
    </div>
  )
}

export default Swiperpartners