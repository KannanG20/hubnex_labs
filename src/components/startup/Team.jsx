import React from 'react'
import line from '../../assets/lineDesign.png'
import mission from '@assets/Our-Mission.png.png';
import philosophy from '@assets/Our-Philosophy.png.png';
import strategy from '@assets/Our-Strategy.png.png';
import vision from '@assets/Our-Vision.png.png';
import t2 from '@assets/team2.png'

const Team = () => {
  return (
    <div className=' bg-black h-auto lg:min-h-screen w-full flex justify-center relative text-white'>
      <div className='w-52 h-40 rounded-full bg-slate-400 absolute top-8 right-6 ' id="circle"></div> 
       <div className='w-[95%] flex justify-center'>
           <div className=' flex flex-col gap-10 md:gap-0 justify-between items-center m-7'>
             <span className=' font-gilroy-medium text-[20px]'>Teams</span>
             <div className=' flex flex-col items-center w-full gap-3 '>
              <h1 className=' text-[28px] md:text-[50px] lg:text-[70px] text-center font-gilroy-bold'>What We Do</h1>
              <span className=' text-[16px] md:text-[24px] text-center font-gilroy-medium'>delivering exponential value throughout the care ecosystem</span>

              <div className=' flex flex-wrap gap-10 w-full justify-center items-center mt-5 lg:gap-5 '>

                <div className=' h-[220px] w-[190px] md:h-[320px] md:w-[292px] px-2 md:px-10 rounded-md bg-gray-100 bg-opacity-20  lg:m-3 box flex flex-col justify-evenly items-center'>
                  <div className='  w-[43.31px] h-[43.31px] md:w-[70px] md:h-[70px] rounded-full flex justify-center items-center bg-[#7B7DB7]'>
                  <img src={mission} alt="mission" className=' w-[19.18px] h-[19.18px] rounded-full md:w-[31px] md:h-[31px] '/>
                  </div>
                  <div className='w-52 h-40 rounded-full bg-slate-400 absolute left-11 ' id="circle"></div>
                  <div className=' w-full flex flex-col gap-5 md:gap-0 items-center justify-center'>
                    <span className=' text-[15px] md:text-[24px] font-semibold'>Our Mission</span>
                    <p className=' text-center text-[9.9px] md:text-[16px] font-regular md:w-[250px] md:h-[119px]'>Use the power of technology and our deep understanding of the industry to solve engineering challenges of any nature, scale, or complexity</p>
                  </div>
                </div>
                

                <div className=' h-[220px] w-[190px] md:h-[320px] md:w-[292px] px-2 md:px-10 rounded-md bg-gray-100 bg-opacity-20  lg:m-3 box  flex flex-col justify-evenly items-center'>
                  <div className='  w-[43.31px] h-[43.31px] md:w-[70px] md:h-[70px] rounded-full flex justify-center items-center bg-[#7B7DB7]   '>
                    <img src={philosophy} alt="philosophy" className=' w-[19.18px] h-[19.18px] rounded-full md:w-[31px] md:h-[31px]   '/>
                  </div>
                  <div className=' w-full flex flex-col gap-5 md:gap-0 items-center justify-center'>
                    <span className=' text-[15px] md:text-[24px] font-semibold'>Our Philosophy</span>
                    <p className=' text-center text-[9.9px] md:text-[16px] font-regular md:w-[250px] md:h-[119px]'>Go above and beyond to bring in new perspectives, relentless energy, and utmost dedication to driving client success</p>
                  </div>
                </div>

                <div className=' h-[220px] w-[190px] md:h-[320px] md:w-[292px] px-2 md:px-10 rounded-md bg-gray-100 bg-opacity-20  lg:m-3 box  flex flex-col justify-evenly items-center'>
                  <div className='  w-[43.31px] h-[43.31px] md:w-[70px] md:h-[70px] rounded-full flex justify-center items-center bg-[#7B7DB7] '>
                  <img src={strategy} alt="strategy" className=' w-[19.18px] h-[19.18px] rounded-full md:w-[31px] md:h-[31px] '/>
                  </div>
                  <div className=' w-full flex flex-col gap-5 md:gap-0 items-center justify-center'>
                    <span className=' text-[15px] md:text-[24px] font-semibold'>Our Vision</span>
                    <p className=' text-center text-[9.9px] md:text-[16px] font-regular md:w-[250px] md:h-[119px]'>Harness innovation to accelerate digital transformation and drive change & client success</p>
                  </div>
                </div>
                <div className='w-52 h-40 rounded-full bg-slate-400 absolute right-4' id="circle"></div>


                <div className=' h-[220px] w-[190px] md:h-[320px] md:w-[292px] px-2 md:px-10 rounded-md bg-gray-100 bg-opacity-20  lg:m-3 box flex flex-col justify-evenly items-center'>
                  <div className='  w-[43.31px] h-[43.31px] md:w-[70px] md:h-[70px] rounded-full flex justify-center items-center bg-[#7B7DB7]'>
                  <img src={vision} alt="vision" className=' w-[19.18px] h-[19.18px] rounded-full md:w-[31px] md:h-[31px]'/>
                  </div>
                  <div className=' w-full flex flex-col gap-5 md:gap-0 items-center justify-center'>
                    <span className=' text-[15px] md:text-[24px] font-semibold'>Our Strategy</span>
                    <p className=' text-center text-[9.9px] md:text-[16px] font-regular md:w-[250px] md:h-[119px]'>Leverage next-gen technologies, robust internal frameworks, and defined processes to provide best-in-class services within timelines</p>
                  </div>
                </div>
                
              </div>
             </div>
             <div className=' w-full flex justify-center items-center'>
              <img src={line} alt="" />
             </div>
           </div>
       </div>
    </div>
  )
}

export default Team