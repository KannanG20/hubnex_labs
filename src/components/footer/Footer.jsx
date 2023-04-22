import React, { useEffect, useReducer, useState } from 'react'
import arrow from '../../assets/arrowR.png'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { CircularProgress } from '@mui/material';

const Footer = () => {

  
  const isMobile=()=> {
    const match=window.matchMedia("(max-width:912px)");
    return(match && match.matches); 
  }

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNo, setPhoneNo] = useState(null);
  const [message, setMessage] = useState("")
  const [err, setErr]= useState(false)
  const [errFirstname, setErrFirstname] = useState(false)
  const [errLastname, setErrLastname] = useState(false)
  const [errEmail, setErrEmail] = useState(false)
  const [errPhone, setErrPhone] = useState(false)

  const [validEmail, setValidEmail] = useState(false)
  const [validPhone, setValidPhone] = useState(false)

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const [errCredentials, setErrCredentials] = useState(false)
  

  const userData = {
    method : 'POST',
    headers : { 'Content-Type': 'application/json' },
    body : JSON.stringify({
      firstname: firstName,
      lastname: lastName,
      email: email,
      phoneNo: phoneNo,
      message: message
    })
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidPhone(phone){
    return /(7|8|9)\d{9}/.test(phone)
  }
  
  const handleSubmit = async (e)=>{
    setErrEmail(false)
    setErrFirstname(false)
    setErrLastname(false)
    setErrPhone(false)
    setValidEmail(false)
    setValidPhone(false)
    setErr(false)
    e.preventDefault();
    
    try {
      if(!e.target[0].value){
        return setErrFirstname(true)
      }
      if(!e.target[1].value){
        return setErrLastname(true)
      }
      if(!e.target[2].value){
        return setErrEmail(true)
      }else if(!isValidEmail(e.target[2].value)){
        return setValidEmail(true)
      }
      if(!e.target[3].value){
        return setErrPhone(true)
      }else if(!isValidPhone(e.target[3].value)){
        return setValidPhone(true)
      }
      setLoading(true)
      const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/user`, userData)
      const data = await res.json()
      if(!res.ok){
        setLoading(false)
        if(data.error=="user already exists"){
          return setErrCredentials(true);
          
        }
        return setErr(true)
      }
      setSuccess(true);
      setLoading(false)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className=' flex flex-col justify-center items-center h-auto xl:min-h-full w-full bg-black'>
      <div className=' lg:w-[90%] xl:w-[70%] h-full lg:flex sm:justify-between items-center text-white py-5 lg:py-0 md:mt-28'>
        <div className=' flex flex-col gap-[36px] md:gap-8'>
          <div className=' text-4xl lg:text-[70px] font-gilroy-extrabold text-white'>
            <h1 className=' text-center lg:text-start'>let's talk</h1>
          </div>
          <div className=' w-[90%] mx-auto md:mx-0 md:w-[368px] lg:h-[330px] text-1xl lg:text-[48px] font-gilroy-light'>
            <p className=' text-center leading-tight lg:text-start'>have some great idea or brand to develop? Let's build it together</p>
          </div>
          <div className=' text-xs font-gilroy-light md:text-[16px]'>
            <p className=' text-center md:text-start leading-6'>our team will reach out to you as soon as possible</p>
          </div>
        </div>
          <form className='flex flex-col gap-4 m-auto text-[16px] w-[80%] md:w-auto md:m-0 mt-10  md:mt-0' onSubmit={handleSubmit}>
            <label className=' text-gray-200 ' htmlFor='first_name'>FIRST NAME {errFirstname ? <span className=' text-red-500 pl-3'>Firstname is mandatory</span> : <span className=' text-red-500'>*</span>}</label>
            <input className='  outline-none bg-transparent border-b-[1px] border-b-gray-300 w-full md:w-96' type='text' id='first_name'  maxLength={25} onChange={(e)=>setFirstName(e.target.value)}/>

            <label className=' text-gray-200 ' htmlFor='last_name'>LAST NAME {errLastname ? <span className=' text-red-500 pl-3'>Lastname is mandatory</span> : <span className=' text-red-500'>*</span>}</label>
            <input className='  outline-none bg-transparent border-b-[1px] border-b-gray-300 w-full md:w-96' type='text' id='last_name'  maxLength={25} onChange={(e)=>setLastName(e.target.value)}/>

            <label className=' text-gray-200 ' htmlFor='email'>EMAIL {errEmail ? <span className=' text-red-500 pl-3'>Email is mandatory</span> : <span className=' text-red-500'>*</span>}{validEmail &&  <span className=' text-red-500 pl-3'> Please provide valid email address </span>}</label>
            <input className='  outline-none bg-transparent border-b-[1px] border-b-gray-300 w-full md:w-96' type='text'  id='email'  onChange={(e)=>setEmail(e.target.value)}/>
            
            <label className=' text-gray-200 ' htmlFor='mobile_no'>PHONE NUMBER {errPhone ? <span className=' text-red-500 pl-3'>Phone No is mandatory</span> : <span className=' text-red-500'>*</span>}{validPhone &&  <span className='pl-3 text-red-500'> Please provide valid Phone Number </span>}</label>
            <input className='outline-none bg-transparent border-b-[1px] border-b-gray-300 w-full md:w-96' type='tel' id='mobile_no' maxLength={12} onChange={(e) => setPhoneNo(e.target.value)}/>
            <label className=' text-gray-200' htmlFor='message'>MESSAGE</label>
            <input className=' pt-5 outline-none bg-transparent border-b-[1px] border-b-gray-300 w-full md:w-96' type='text' id='message'  onChange={(e)=>setMessage(e.target.value)}/>
            <button className=' h-[41px] mt-10 w-[121px] py-1 px-5 border-violet-700 border-[2px] border-t-0 border-l-0 relative bg-transparent rounded-full'>
              <label htmlFor='submit' className='flex cursor-pointer gap-3 w-full h-full rounded-full font-gilroy-light items-center justify-center text-[18px] absolute -left-[2px] bottom-[2px] border-white border-2'>
                    <input type='submit' placeholder='SUBMIT' className=' cursor-pointer'/>
                    <img src={arrow} alt="arrow" width={15} height={15} className='object-contain'/>   
              </label>
            </button>
            {loading ? <CircularProgress/> : 
            <>
            {
              success && 
                <span className=' text-green-500 font-gilroy-regular'>Your Request has been Successfully Initiated</span>
            }
            {   
                errCredentials &&
                <span className='text-red-500 '> Credentials already exists</span> 
            }
            {
              err &&
              <span className='text-red-500 '>Something Went Wrong</span> 
            }
                </>
            }
            </form>
      </div>
      <div className=' flex flex-col w-full h-40 justify-center xl:mt-8 items-center gap-8 text-white sm:h-80 text-lg'>
        <span className=' font-gilroy-semi-bold text-[28px] md:text-[24px]'>Connect with us</span>
        <div className=' flex flex-wrap gap-5 items-center'>
          <Link to='/about'>{isMobile() ? <TwitterIcon fontSize='medium'/> : <TwitterIcon fontSize='large'/>}</Link>
          <Link to='/about'>{isMobile() ? <LinkedInIcon fontSize='medium'/> : <LinkedInIcon fontSize='large'/>}</Link>
          <Link to='/about'>{isMobile() ? <InstagramIcon fontSize='medium'/> : <InstagramIcon fontSize='large'/>}</Link>
          <Link to='/about'>{isMobile() ? <FacebookIcon fontSize='medium'/> : <FacebookIcon fontSize='large'/> }</Link>
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
  )
}

export default Footer