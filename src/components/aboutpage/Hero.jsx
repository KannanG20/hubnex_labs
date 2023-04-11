import React from 'react'
import { Link } from 'react-router-dom'
import aboutLander from '../../assets/aboutLander.png'

const Hero = () => {
  return (
    <div className=' h-full w-full relative'>
        <img src={aboutLander} alt='aboutLanderPage' className=' absolute bottom-0 right-0 w-full object-cover h-[60%] lg:h-[1147px] lg:w-[1720px]'/>
        <div className=' w-full md:w-[70%] h-full md:m-auto flex items-center'>
            <div className=' flex flex-col h-full justify-center lg:justify-start lg:mt-32 xl:mt-96 text-white gap-14 absolute left-10 md:left-28'>
                <div className=' text-5xl font-gilroy-semi-bold lg:text-[70px] '>
                  <span>About Us</span>
                </div>
                <div className=' w-full text-[20px] md:w-[700px]  md:text-[28px]'>
                  <p className=' leading-tight font-gilroy-medium'>Passionate about exceptional IT services, delivering innovative solutions to meet unique needs.</p>
                </div>
              <div>
              <button className=' h-[44px] w-[140px] border-2 border-violet-600 lg:py-[10px] px-5 border-t-0 border-l-0 relative bg-transparent rounded-full'>
                    <Link className=' w-full h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[20px] absolute text-white -left-[3px] bottom-[4px] border-white border-2'>Read more</Link>
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero