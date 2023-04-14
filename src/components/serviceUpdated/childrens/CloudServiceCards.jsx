import React from 'react'
import testImg1 from '@assets/costom devp.png';
import testImg2 from '@assets/Communication.png';
import testImg3 from '@assets/gg.png';
import testImg4 from '@assets/Management.png';
import testImg5 from '@assets/Mobile Development.png';
import testImg6 from '@assets/Group.png';
import '../Ourservice.css'



const CloudServiceCard = () => {
  return (
    <div className=' py-10 w-full bg-black flex justify-center items-center h-auto'>
        <div className=' h-full w-full flex justify-center items-center'>
            <div className='w-[90%] flex flex-col gap-10 md:justify-around h-full items-center text-black'>
                <div className='w-full gap-5 flex flex-col items-center justify-center'>
                    <h1 className=' text-white text-[50px] xl:text-[70px] font-gilroy-bold'>Our Services</h1>
                    <div className=' md:w-[700px] flex items-center justify-center'>
                        <span className='  text-white text-center text-[20px] font-gilroy-regular'>Our goal is to provide a comprehensive platform that empowers individuals and businesses to achieve their full potential. Whether you're looking to advance your career, improve your health and wellness, or grow your...  </span>
                    </div>
                </div>
                
                <div className='  flex flex-wrap w-full justify-center gap-[35px] '>

                <div className=' card h-auto py-5 lg:py-[35px] lg:h-[345px] w-[414px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly '>
                  <div className='  flex justify-between items-center bg-500'>
                    <img src={testImg1} alt="" className=' w-[70px] h-[70px] '/>
                    <span className=' text-[70px] text-gray-400 font-gilroy-bold'>01</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5 '>
                    <p className='   interFont text-[24px] text-white'>Cloud Discovery & Roadmap</p>
                    <p className=' font-gilroy-regular text-[18px] text-white '>Streamline cloud adoption and transformation based on an in-depth analysis of the current environment, possible opportunities, risks, and limitations using tried and tested technologies.</p>
                  </div>
                </div>

                <div className=' card h-auto py-5 lg:py-[35px] lg:h-[345px] relative w-[414px] px-5 rounded-md bg-black-100 bg-opacity-20    flex flex-col justify-evenly '>
                  
                  <div className=' flex justify-between items-center bg-500'>
                  <img src={testImg2} alt="" className=' w-[70px] h-[70px] '/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>02</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  interFont text-[24px] text-white'>Cloud Migration & Deployment</p>
                    <p className=' font-gilroy-regular text-[18px] text-white  '> We combine exhaustive practical experience with technological expertise to determine the best migration strategy based on business objectives and a future-proof roadmap.</p>
                  </div>
                </div>
                

                <div className='card h-auto py-5 lg:py-[35px] lg:h-[345px] relative w-[414px] px-5 rounded-md bg-black-100 bg-opacity-20    flex flex-col justify-evenly '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg3} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>03</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <span className='  interFont text-[24px] text-white'>Cloud Applications & Platforms</span>
                    <p className=' font-gilroy-regular text-[18px] text-white  '> We help you leverage Software as a Service (SaaS) platforms like Office, SharePoint and CRM for process automation, business productivity and maximizing ROI.</p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] lg:h-[345px] relative w-[414px] px-5 rounded-md bg-black-100 bg-opacity-20    flex flex-col justify-evenly '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg4} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>04</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  interFont text-[24px] text-white'>Cloud Integration & Orchestration</p>
                    <p className=' font-gilroy-regular text-[18px] text-white  '> We help you manage the core infrastructure & workflows across cloud environments and unite several independent automation processes into a cohesive system for effective infrastructure management.</p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] lg:h-[345px] relative w-[414px] px-5 rounded-md bg-black-100 bg-opacity-20    flex flex-col justify-evenly '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg5} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>05</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  interFont text-[24px] text-white'>Cloud Management & Maintenance</p>
                    <p className=' font-gilroy-regular text-[18px] text-white  '> OOur DevOps methodology increases speed and agility, helping our clients scale and flex rapidly to stay relevant in the evolving marketplace.</p>
                  </div>
                </div>
                

                <div className='card h-auto py-5 lg:py-[35px] lg:h-[345px] relative w-[414px] px-5 rounded-md bg-black-100 bg-opacity-20    flex flex-col justify-evenly '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg6} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>06</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  interFont text-[24px] text-white'>Cloud Governance & Security</p>
                    <p className=' font-gilroy-regular text-[18px] text-white  '> Our data management services comprise continuous monitoring, performance optimization, risk assessment, and data protection, and enabling secure & smooth data transfer. </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CloudServiceCard