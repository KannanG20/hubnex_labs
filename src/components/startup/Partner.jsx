import React from 'react'
import pantera from '../../assets/pantera.png'
import chorus from '../../assets/chorus.png'
import tcs from '../../assets/Tata Consultancy Services - png 0.png'
import reddit from '../../assets/reddit.png'
import line from '../../assets/lineDesign.png'
import Swiperpartners from '../aboutpage/Swiperpartners'


const Partner = () => {

  const isMobile=()=> {
    const match=window.matchMedia('(pointer:coarse)');
    return(match && match.matches); 
  }

  return (
    <div className=' bg-black h-screen text-white w-full justify-center py-10 flex'>
       <div className=' w-full md:w-[80%] flex flex-col justify-between'>
         {isMobile() ?  
          <Swiperpartners/>
         :
          <div className=' flex flex-col gap-10 w-full'>
           <span className=' text-xl'>our partners</span>
            <div className=' flex justify-between flex-wrap'>
              <img src={pantera} alt="" />
              <img src={reddit} alt="" />
              <img src={tcs} alt="" />
              <img src={chorus} alt="" />
              <img src={pantera} alt="" />
            </div>
           </div>
           }

           <div className=' flex w-full lg:justify-between md:flex-row flex-col  flex-wrap items-center justify-evenly h-full md:justify-center '>
            <div className=' flex lg:gap-10 h-auto '>
              <div className=' flex flex-col lg:gap-5 w-44 items-center'>
                <span className=' text-5xl font-bold'>75,000+</span>
                <p className=' text-center text-xl'>Startups & Service Providers</p>
              </div>
            </div>
            <hr className=' border-[1px] border-white h-[20%] hidden md:flex'/>

            <div className=' flex lg:gap-10 h-auto  flex-col lg:flex-row '>
              <div className=' flex flex-col lg:gap-5 w-44 items-center '>
                <span className=' text-5xl font-bold'>1,500+</span>
                <p className=' text-center text-xl'>Institutional Investors</p>
              </div>
            </div>
            <hr className=' border-[1px] border-white h-[20%] hidden md:flex'/>

            <div className=' flex lg:gap-10 h-auto'>
              <div className=' flex flex-col lg:gap-5 w-44 items-center '>
                <span className=' text-5xl font-bold'>9,000+</span>
                <p className=' text-center text-xl'>Angel <br/>Investors</p>
              </div>
            </div>
           </div>
           
           <div className=' w-full flex justify-center items-center'>
            <img src={line} alt="" />
           </div>   
       </div>
       <div className='w-52 h-40 rounded-full bg-slate-400 absolute  top-[1000px] left-40 ' id="circle"></div>
    </div>
  )
}

export default Partner