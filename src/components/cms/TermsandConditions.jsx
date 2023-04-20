import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { CircularProgress } from '@mui/material';


const TermsandConditions = () => {

    const [content, setContent] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      setLoading(true);
        const getTerms = async ()=>{
          try {
            const res = await fetch('https://hubnex-api.vercel.app/api/v1/terms-and-conditions')
            const data = await res.json();
            if(!res.ok){
              return setLoading(false)
            }
            console.log(data);
            setContent(data.content);
            setLoading(false);
          } catch (error) {
            setLoading(false)
            console.log(error.message)
          }
        }
        return () =>{
            getTerms();
        }
    }, [])


  return (
    <div className=' h-auto w-full flex flex-col '>
        <div className=' bg-black w-full'>
            <Navbar/>
        </div>
    <div className=' w-full flex flex-col'>
        <div className=' bg-gradient-to-tr from-[#363434] to-gray-400 w-full flex justify-center'>
            <span className=' text-white py-5 w-[90%] font-gilroy-bold text-[40px] '>Terms and Conditions</span>
        </div>
        {loading ?  <div className=' h-[calc(100vh-210px)] w-full flex justify-center items-center'><CircularProgress/></div>
        :
        <div className=' py-10 w-[90%] mx-auto' dangerouslySetInnerHTML = {{__html : content}}></div>
      }
    </div>
    <div className=' h-auto bg-black'>
    <div className=' flex flex-col w-full h-44 justify-center items-center gap-8 text-white text-lg'>
        <span className=' font-gilroy-semi-bold text-[28px] md:text-[24px]'>Connect with us</span>
        <div className=' flex flex-wrap gap-5 items-center'>
          <Link to='/about'> <TwitterIcon fontSize='large'/></Link>
          <Link to='/about'><LinkedInIcon fontSize='large'/></Link>
          <Link to='/about'><InstagramIcon fontSize='large'/></Link>
          <Link to='/about'> <FacebookIcon fontSize='large'/></Link>
        </div>
      </div>
      <hr className=' w-full border-t-white border-t-[1px]'/>
      <div className=' h-10 w-[90%] xl:w-[80%] m-auto flex justify-center xl:justify-between text-white items-center'>
        <div>
          <span className=' text-[9.3px] md:text-[15px] font-gilroy-light'>Copyright <CopyrightIcon fontSize='small'/> 2023 Hubnex. All Rights Reserved</span>
        </div>
        <div className='hidden xl:flex gap-2 text-[15px] font-gilroy-light '>
        <Link to='/about'>About Us</Link>
          <hr className=' border-r-[1px] h-5'/>
          <Link to='/data-protection'>Data Protection</Link>
          <hr className=' border-r-[1px] h-5'/>
          <Link to='/terms-and-conditions'>Terms and Conditions</Link>
          <hr className=' border-r-[1px] h-5'/>
          <Link to='/privacy-policy'>Privacy Policy</Link>
          <hr className=' border-r-[1px] h-5'/>
          <Link to='/contact'>Contact Us</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TermsandConditions