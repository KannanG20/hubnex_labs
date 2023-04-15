import React from 'react';
import mission from '@assets/Our-Mission.png.png';
import philosophy from '@assets/Our-Philosophy.png.png';
import strategy from '@assets/Our-Strategy.png.png';
import vision from '@assets/Our-Vision.png.png';


const Aboutsection3 = () => {
  return (
    <>
      <div className='bg-ablack w-full min-h-screen 2xl:h-[1024px] flex justify-evenly items-center gap-5 flex-col '>
          <div className='text-white font-gilroy-bold text-[28px] flex justify-center items-center  md:text-[3rem] lg:text-[70px] text-center px-5 md:px-0 pt-20 lg:w-[747px]'>
            <h1 className='text-twhite h-full w-full  '>Your success is our top priority -always.</h1>
          </div>
          <div className='text-white flex justify-center items-center font-gilroy-regular leading-[34px] text-[18px] md:text-[1.3rem] xl:text-[23px] text-center p-5 xl:max-w-[1200px]'>
            <p>At our IT consultancy firm, we prioritize certain values and approaches that have helped us build a reputation for excellence in the industry. First and foremost, we prioritize customer satisfaction, and we always go the extra mile to ensure our clients' needs are met.</p>
          </div>

        <div className='flex flex-wrap gap-10 md:gap-0 justify-center'>
          
          <div className=" flex flex-col justify-evenly md:justify-start w-[180px] h-[198px] md:w-[292px] md:h-[320px] rounded-lg md:m-6 md:p-5 lg:p-8 bg-white items-center font-gilroy-bold  overflow-hidden">
            <div className='md:mt-[25px] w-[43.31px] h-[43.31px] md:w-[70px] md:h-[70px] shadow-xl flex justify-center items-center  md:p-5 bg-orange rounded-full'>
              <img src={mission} alt="mission" className='  w-[19.18px] h-[19.18px] rounded-full md:w-[31px] md:h-[31px]'/>
            </div>
            <h1 className='text-center  md:mt-[28px] text-grey text-[14.85px] md:text-[24px] font-poppins-semibold'>Our Mission</h1>
            <p className='text-center  text-grey text-[9.9px] md:text-[16px] px-2 md:px-0 font-poppins-regular'>Use the power of technology and our deep understanding of the industry to solve engineering challenges of any nature, scale, or complexity</p>

          </div>

          <div className=" flex flex-col justify-evenly md:justify-start w-[180px] h-[198px] md:w-[292px] md:h-[320px] rounded-lg md:m-6 md:p-5 lg:p-8 bg-white items-center font-gilroy-bold  overflow-hidden">
            <div className='md:mt-[25px] w-[43.31px] h-[43.31px] md:w-[70px] md:h-[70px] shadow-xl flex justify-center items-center  md:p-5 bg-orange  rounded-full '>
              <img src={philosophy} alt="mission" className='w-[19.18px] rounded-full h-[19.18px] md:w-[31px] md:h-[31px]'/></div>
            <h1 className='text-center md:mt-[28px] text-grey text-[14.85px] md:text-[24px] font-poppins-semibold '>Our Philosophy</h1>
            <p className='text-center  text-grey text-[9.9px] md:text-[16px] px-2 md:px-0 font-poppins-regular'>Go above and beyond to bring in new perspectives, relentless energy, and utmost dedication to driving client success</p>

          </div>
          <div className=" flex flex-col justify-evenly md:justify-start w-[180px] h-[198px] md:w-[292px] md:h-[320px] rounded-lg md:m-6 md:p-5 lg:p-8 bg-white items-center font-gilroy-bold  overflow-hidden">
            <div className='md:mt-[25px]  w-[43.31px] h-[43.31px] md:w-[70px] md:h-[70px] shadow-xl flex justify-center items-center  md:p-5 bg-orange  rounded-full '>
              <img src={vision} alt="mission" className='w-[19.18px] h-[19.18px] md:w-[31px] rounded-full md:h-[31px]'></img></div>
            <h1 className='text-center md:mt-[28px] text-grey text-[14.85px] md:text-[24px] font-poppins-semibold'>Our Vision</h1>
            <p className='text-center  text-grey text-[9.9px] md:text-[16px] px-2 md:px-0 font-poppins-regular'>Harness innovation to accelerate digital transformation and drive change & client success</p>

          </div>
          <div className=" flex flex-col justify-evenly md:justify-start w-[180px] h-[198px] md:w-[292px] md:h-[320px] rounded-lg md:m-6 md:p-5 lg:p-8 bg-white items-center font-gilroy-bold  overflow-hidden">
            <div className='md:mt-[25px]  w-[43.31px] h-[43.31px] md:w-[70px] md:h-[70px] shadow-xl flex justify-center items-center  md:p-5 bg-orange  rounded-full '>
              <img src={strategy} alt="mission" className='w-[19.18px] h-[19.18px] rounded-full md:w-[31px] md:h-[31px]'></img></div>
            <h1 className='text-center md:mt-[28px] text-grey text-[14.85px] md:text-[24px] font-poppins-semibold'>Our Strategy</h1>
            <p className='text-center  text-grey text-[9.9px] md:text-[16px] px-2 md:px-0 font-poppins-regular'>Leverage next-gen technologies, robust internal frameworks, and defined processes to provide best-in-class services within timelines</p>
          </div>     
        </div>
      </div>
    </>
  )
}

export default Aboutsection3