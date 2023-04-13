import React from 'react'
import testImg1 from '../../assets/costom devp.png';
import testImg2 from '../../assets/Communication.png';
import testImg3 from '../../assets/gg.png';
import testImg4 from '../../assets/Management.png';
import testImg5 from '../../assets/Mobile Development.png';
import testImg6 from '../../assets/Group.png';
import testImg7 from '../../assets/API Programming.png';
import testImg8 from '../../assets/Ux Design.png';
import testImg9 from '../../assets/Address marker.png';
import './Ourservice.css'



const Ourservice = () => {
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
                    <p className='   font-semibold text-[24px] text-white'>Search Engine Optimization</p>
                    <p className=' font-gilroy-regular text-[18px] text-white '>In the world of digital revolution, a fantastic user friendly website making good business sense will fetch you far more customers than a regular website. We provide you with cutting edge website and app development technology for giving your brand a strong digital presence</p>
                  </div>
                </div>

                <div className=' card h-auto py-5 lg:py-[35px] lg:h-[345px] relative w-[414px] px-5 rounded-md bg-black-100 bg-opacity-20    flex flex-col justify-evenly '>
                  
                  <div className=' flex justify-between items-center bg-500'>
                  <img src={testImg2} alt="" className=' w-[70px] h-[70px] '/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>02</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-semibold text-[24px] text-white'>PR & Brand Management</p>
                    <p className=' font-gilroy-regular text-[18px] text-white  '>PR & Brand Management is prominent for every business to attain perfect growth, whether you have a worldwide business with millions of customers or just a simple start-up that is making its first journey into the world of the internet, how others see and feel about your brand is extremely important.</p>
                  </div>
                </div>
                

                <div className='card h-auto py-5 lg:py-[35px] lg:h-[345px] relative w-[414px] px-5 rounded-md bg-black-100 bg-opacity-20    flex flex-col justify-evenly '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg3} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>03</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <span className='  font-semibold text-[24px] text-white'>Social Media Optimisation</span>
                    <p className=' font-gilroy-regular text-[18px] text-white  '>Social media optimization uses social media as a catalyst to increase your brand presence. Through strategy and creative campaigns, we increase the awareness of the product or brand to generate viral publicity on various social media channels like Facebook, Twitter, Instagram, Youtube, LinkedIn etc</p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] lg:h-[345px] relative w-[414px] px-5 rounded-md bg-black-100 bg-opacity-20    flex flex-col justify-evenly '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg4} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>04</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <pre className='  font-semibold text-[24px] text-white'>Political Campaign Management</pre>
                    <p className=' font-gilroy-regular text-[18px] text-white  '>At HubNex we have an experienced team with a proven track record in managing successful political and election campaigns at state and national level. Our team undertakes extensive strategic political surveys, campaign planning & training, perception management, voters connect, media advertising, social media management and much more to help you in online and offline election campaigns</p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] lg:h-[345px] relative w-[414px] px-5 rounded-md bg-black-100 bg-opacity-20    flex flex-col justify-evenly '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg5} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>05</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-semibold text-[24px] text-white'>Content Management</p>
                    <p className=' font-gilroy-regular text-[18px] text-white  '>Content is King! We provide you with relatable high quality content, logo designs, promotional graphics, infographics and videos to give your brand an outstanding presence on various social media platforms. Good content undoubtedly brings more customers, and also gives you an extra edge over your competitors.</p>
                  </div>
                </div>
                

                <div className='card h-auto py-5 lg:py-[35px] lg:h-[345px] relative w-[414px] px-5 rounded-md bg-black-100 bg-opacity-20    flex flex-col justify-evenly '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg6} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>06</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-semibold text-[24px] text-white'>Outdoor Media Marketing</p>
                    <p className=' font-gilroy-regular text-[18px] text-white  '>The outdoor media advertising comprises billboards, taxis, interior and exterior of buses, and business vehicles. The transit advertising, bus benches, billboards are the efficacious outdoor campaigns. We, at HubNex, provide a multitude of outdoor advertising solutions, all of them have their own unique importance and impactwalls, advertising posters, billboards, street furniture, rail media, bus, and much more that effectively meet</p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] lg:h-[345px] relative w-[414px] px-5 rounded-md bg-black-100 bg-opacity-20    flex flex-col justify-evenly '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg7} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>07</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-semibold text-[24px] text-white'>Business Consulting</p>
                    <p className=' font-gilroy-regular text-[18px] text-white  '> We provide excellent strategic business solutions to various corporates. We develop distinctive and adaptive strategies that help companies succeed in today’s complex and uncertain world.Our solutions are the unique product of an intensely creative, highly contextual, and deeply collaborative process</p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] lg:h-[345px] relative w-[414px] px-5 rounded-md bg-black-100 bg-opacity-20    flex flex-col justify-evenly '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg8} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>08</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-semibold text-[24px] text-white'>Video Production</p>
                    <p className=' font-gilroy-regular text-[18px] text-white  '>We live in a world driven by images and visual storytelling. HubNex has helped countless businesses tell their unique stories. And we have the delighted customers to prove it! Whether you need a commercial about your products or services, an internal sales or training video, testimonial videos, a video to help optimize your website, or videos to embed into your social media posts, we’ll deliver eye-catching productions that turn your brand into a star.</p>
                  </div>
                </div>
                

                <div className=' h-auto py-5 lg:py-[35px] lg:h-[345px] w-[414px] relative px-5 rounded-md bg-black-100 bg-opacity-20 card flex flex-col justify-evenly '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg9} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>09</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-semibold text-[24px] text-white'>Print Media</p>
                    <p className=' font-gilroy-regular text-[18px] text-white  '>Print Media Marketing is a physical form of advertising that uses physical printed media platforms such as newspapers, magazines, catalogs, pamphlets, etc. Despite the fact that print media has been overridden by digital media, the existence is not lost. In order to reach a huge audience, advertisers are using mobile advertising, banner ads, social media ads, etc.The collective efforts of sourcing, producing, and creative specialists are working smartly to deliver corporate communication and promotional fundamentals in the time-efficient, reliable, and professional approach. Print Media is a c ombination of spectacular solutions, innovative ideas and we offer professional print media advertising.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Ourservice