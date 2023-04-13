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
  }
  const handleServices = ()=>{
    setDropServices((prev)=> !prev);
  }

  return (
    
    <div className=' absolute top-0 -right-full overflow-hidden  h-screen w-full z-40 xl:hidden inline-block'>
        <div className={`xl:hidden ${!open ? 'translate-x-0 ease-out' : '-translate-x-full fixed'} h-full w-full gap-10 transition-all text-xl duration-500 ease text-white font-semibold bg-gradient-to-br z-50 from-gray-600 to-gray-800 flex flex-col items-center justify-center`}>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'decoration-white underline decoration-2 underline-offset-4' : ''}>About Us</NavLink>
          
          <div className=' flex flex-col gap-5 items-center relative'>
            <div className=' flex items-center relative'>
              <NavLink to='/service' className={({ isActive }) => isActive ? ` decoration-white underline decoration-2 underline-offset-4` : ''}>Services</NavLink>
              <span onClick={handleServices}>{dropServices ?<KeyboardArrowUpIcon/>:<KeyboardArrowDown/>}</span>
            </div>
            {
            dropServices && 
            <div className="flex flex-col  bg-white/40 backdrop-blur-2xl w-[150px]  rounded-lg">
             <Link to='/service/ai-ml'><div className='text-white p-4 text-center'>service 1</div></Link> 
             <Link to='/service/cloud-services'><div className='text-white p-4 text-center'>service 2</div></Link> 
             <Link to='/service/digital-marketing'><div className='text-white p-4 text-center'>service 3</div></Link> 
             <Link to='/service/iot'><div className='text-white p-4 text-center'>service 4</div></Link> 
             <Link to='/service/software-testing'><div className='text-white p-4 text-center'>service 5</div></Link> 
            </div>
          }
          </div>
          <div className=' flex flex-col gap-5 items-center relative'>
            <div className=' flex items-center relative'>
              <NavLink to='/industries' className={({ isActive }) => isActive ? ` underline decoration-red-600 decoration-2 underline-offset-8  text-white` : ' flex items-center gap-2'}>Industries</NavLink>
              <span onClick={handleIndustries}>{dropIndustries ?<KeyboardArrowUpIcon/>:<KeyboardArrowDown/>}</span>
            </div>
            {
            dropIndustries && 
            <div className="flex flex-col  bg-white/40 backdrop-blur-2xl w-[150px]  rounded-lg">
            <Link to='/industries/communication'><div className='text-white p-4 text-center'>industries 1</div></Link> 
             <Link to='/industries/hospitality'><div className='text-white p-4 text-center'>industries 2</div></Link> 
             <Link to='/industries/logistics'><div className='text-white p-4 text-center'>industries 3</div></Link> 
             <Link to='/industries/public-sector'><div className='text-white p-4 text-center'>industries 4</div></Link> 
             <Link to='/industries/retail'><div className='text-white p-4 text-center'>industries 5</div></Link> 
             <Link to='/industries/travel'><div className='text-white p-4 text-center'>industries 6</div></Link>             </div>
          }
          </div>
          
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'decoration-white underline decoration-2 underline-offset-4' : ''}>Contact</NavLink>
          <Link to='/startup-program'><button className={` bg-black text-white border-none py-[10px] px-5 rounded-full text-[20px] font-semibold`}>Startup Program</button></Link>
        </div>
    </div>
  )
}

export default MobileNavbar