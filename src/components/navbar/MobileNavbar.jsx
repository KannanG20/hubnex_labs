import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const MobileNavbar = ({ open }) => {

  const [dropIndustries, setDropIndustries] = useState(false);
  const [dropServices, setDropServices] = useState(false);

  const handleIndustries = ()=>{
    setDropIndustries((prev)=> !prev);
    setDropServices(false)
  }
  const handleServices = ()=>{
    setDropServices((prev)=> !prev);
    setDropIndustries(false)
  }

  return (
    
    <div className=' absolute top-0 -right-full overflow-y-auto flex justify-center h-screen w-full z-40 xl:hidden '>

        <div className={`xl:hidden ${!open ? 'translate-x-0 ease-out' : '-translate-x-full overflow-y-auto fixed'} h-full w-full  transition-all text-xl duration-500 ease text-white font-gilroy-regular bg-gradient-to-br z-50 from-gray-600 to-gray-800 flex flex-col items-center`}>
          <div className=' flex flex-col h-auto  mt-[80px] overflow-y-auto  w-full  '>
            <NavLink to='/about' className='border-t-2 border-b-2 w-full border-b-gray-500 border-t-gray-500 py-5 px-5'>About Us</NavLink>
            
            <div className=' flex flex-col gap-5  '>
              <div className=' flex justify-between border-b-2 w-full border-b-gray-500 py-5 px-5 items-center relative'>
                <NavLink to='/service' className={({ isActive }) => isActive ? ` decoration-white underline decoration-2 underline-offset-4` : ''}>Services</NavLink>
                <span onClick={handleServices}>{dropServices ?<KeyboardArrowUpIcon/>:<KeyboardArrowDown/>}</span>
            </div>
            {
            dropServices && 
            <div className="flex flex-col w-[90%] m-auto  rounded-lg">
             <Link to='/service/ai-ml'><div className='text-white p-4 border-b-[1px] w-full border-b-gray-500 text-[15px]'>AI/ML</div></Link> 
             <Link to='/service/cloud-services'><div className='text-white p-4 border-b-[1px] w-full border-b-gray-500 text-[15px]'>Cloud Services</div></Link> 
             <Link to='/service/digital-marketing'><div className='text-white p-4 border-b-[1px] w-full border-b-gray-500 text-[15px]'>Digital Marketing</div></Link> 
             <Link to='/service/iot'><div className='text-white p-4 border-b-[1px] w-full border-b-gray-500 text-[15px]'>IOT</div></Link> 
             <Link to='/service/software-testing'><div className='text-white p-4 border-b-[1px] w-full border-b-gray-500 text-[15px]'>Software Testing</div></Link> 
            </div>
          }
          </div>
          <div className=' flex flex-col gap-5 '>
            <div className=' flex justify-between border-b-2 w-full border-b-gray-500 py-5 px-5 items-center relative'>
              <NavLink to='/industries' className={({ isActive }) => isActive ? ` underline decoration-white decoration-2 underline-offset-8  text-white` : ' flex items-center gap-2'}>Industries</NavLink>
              <span onClick={handleIndustries}>{dropIndustries ?<KeyboardArrowUpIcon/>:<KeyboardArrowDown/>}</span>
            </div>
            {
            dropIndustries && 
            <div className="flex flex-col   w-[90%] m-auto  rounded-lg">
              <Link to='/industries/communication'><div className='text-white p-4 border-b-[1px] w-full border-b-gray-500 '>industries 1</div></Link> 
             <Link to='/industries/hospitality'><div className='text-white p-4 border-b-[1px] w-full border-b-gray-500 '>industries 2</div></Link> 
             <Link to='/industries/logistics'><div className='text-white p-4 border-b-[1px] w-full border-b-gray-500 '>industries 3</div></Link> 
             <Link to='/industries/public-sector'><div className='text-white p-4 border-b-[1px] w-full border-b-gray-500 '>industries 4</div></Link> 
             <Link to='/industries/retail'><div className='text-white p-4 border-b-[1px] w-full border-b-gray-500 '>industries 5</div></Link> 
             <Link to='/industries/travel'><div className='text-white p-4 border-b-[1px] w-full border-b-gray-500 '>industries 6</div></Link>             
             </div>
          }
          </div>
          
          <NavLink to='/contact' className='border-b-2 w-full border-b-gray-500 py-5 px-5'>Contact</NavLink>
          <Link to='/startup-program' className=' mt-5 justify-center flex items-center w-full pb-5'>
            <button className={`  bg-black text-white border-none py-[10px] px-5 rounded-full text-[16px] font-gilroy-semi-bold`}>Startup Program</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default MobileNavbar