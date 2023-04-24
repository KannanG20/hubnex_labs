import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SmsIcon from '@mui/icons-material/Sms';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import { CircularProgress, formLabelClasses, TextareaAutosize } from '@mui/material';

const Contact = () => {


  const [Name, setName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNo, setPhoneNo] = useState(null);
  const [message, setMessage] = useState("")

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false);
  

  const companyData = {
    method : 'POST',
    headers : { 'Content-Type': 'application/json' },
    body : JSON.stringify({
      Name: Name,
      companyName: companyName,
      email: email,
      phoneNo: phoneNo,
      message: message
    })
  };
  
  const errorName = ()=> {
    return toast.error("Please provide your name");
  }

  const errorCompanyName = ()=> {
    return toast.error("Please Provide Company Name");
  }

  const validEmail = () =>{
    return toast.error("Provide a valid Email address");
  }

  const validPhone = () =>{
    return toast.error("Provide a valid Phone Number");
  }

  const errorEmail = ()=> {
    return toast.error("Please Provide Email address");
  }

  const errorPhone = ()=> {
    return toast.error("Please Provide Phone Number");
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const errorCredentials = ()=>{
    return toast.error("Credentials already exists")
    }

  function isValidPhone(phone){
    return /(7|8|9)\d{9}/.test(phone)
  }


  const handleSubmit = async (e)=>{
    setEmail("")
    setName("")
    setCompanyName("")
    setPhoneNo("")
    setMessage("")
    e.preventDefault();
    try {
      if(!e.target[0].value){
        return errorName()
      }
      if(!e.target[1].value){
       return errorCompanyName()
      }
      if(!e.target[2].value){
      return errorEmail()
      }else if(!isValidEmail(e.target[2].value)){
        return validEmail()
      }
      if(!e.target[3].value){
        return errorPhone()
      }else if(!isValidPhone(e.target[3].value)){
        return validPhone()
      }
      setLoading(true)
      const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/company`, companyData)
      const data = await res.json()
      if(!res.ok){
        setLoading(false)
        return errorCredentials()
      }
      setSuccess(true);
      setLoading(false)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    
    <div className='bg-black h-[1024px] w-full flex flex-col justify-between pt-10 text-white overflow-hidden'>
      <ToastContainer/>
       <div className=' w-full md:w-[90%] flex flex-col h-full m-auto justify-between items-center'>
          <div className=' flex w-full justify-between h-full items-center flex-col lg:flex-row'>

            <div className=' flex flex-col gap-5 md:gap-20 w-full md:w-[50%] items-center lg:items-start'>
                <span className=' text-[32px] md:text-[50px] xl:text-[70px] font-gilroy-semi-bold'>Connect with us</span>
                <p className=' md:text-[28px] text-[16px] text-center lg:text-start font-gilroy-medium'>Revolutionize Your Startup's IT Strategy with Our Consultancy Services</p>
            </div>

            <div className='  formDesign box h-auto py-5 rounded-md flex flex-col  items-center justify-center gap-10 w-[95%] md:w-[70%] lg:w-[592px]'>
              <span className='  text-[24px] md:m-5 lg:text-[40px] text-center font-gilroy-bold'>Let's build it together</span>
              <form onSubmit={handleSubmit} className=' flex flex-col gap-5 w-full px-5 md:px-10 font-gilroy-medium text-[20px] z-50'>
                <label htmlFor="name" className=' flex border-b-2 border-b-gray-600 py-2 gap-5 w-full'>
                  <PersonIcon/>
                  <input type="text" id='name' onChange={(e)=> setName(e.target.value)} className=' w-full border-none outline-none bg-transparent' placeholder='Name *'/>
                </label>
                <label htmlFor="companyname" className=' flex border-b-2 border-b-gray-600 py-2 gap-5 w-full'>
                  <BusinessIcon/>
                  <input type="text" id='companyname' onChange={(e)=> setCompanyName(e.target.value)} className=' w-full border-none outline-none bg-transparent' placeholder='Company Name *'/>
                </label>
                <label htmlFor="email" className=' flex border-b-2 border-b-gray-600 py-2 gap-5 w-full'>
                  <MailOutlineIcon/>
                  <input type="email" id='email' onChange={(e)=> setEmail(e.target.value)} className=' w-full border-none outline-none bg-transparent' placeholder='Email *'/>
                </label>
                <label htmlFor="phone" className=' flex border-b-2 border-b-gray-600 py-2 gap-5 w-full'>
                  <PhoneInTalkIcon/>

                <input className='w-full border-none outline-none bg-transparent'
                  type='tel'
                  id='phone'
                  placeholder='Phone *'
                
                  maxLength={12}
                  pattern="^[0-9]{10,12}$"
                  onChange={(e) => {
                    const phoneNo = e.target.value;
                    const phoneNoRegex = /^[0-9]{10,12}$/; // Regular expression to check if phone number is valid
                    if (phoneNoRegex.test(phoneNo)) {
                      setPhoneNo(phoneNo);
                    } else {
                      // Display an error message or prevent the form submission
                    }
                  }}
                />
              
                </label>
                <label htmlFor="message" className=' flex border-b-2 border-b-gray-600 h-24 gap-5 w-full'>
                  <SmsIcon/>
                  <textarea rows='4' id='message' onChange={(e)=> setMessage(e.target.value)} cols='50' placeholder='Your Message ' className=' h-full w-full bg-transparent outline-none'/>
                </label>
                
                <button className=' h-[41px] w-[121px] py-1 px-5 border-violet-700 border-[2px] border-t-0 border-l-0 relative bg-transparent rounded-full'>
                  <input type='submit' placeholder='Submit' className=' w-full h-full rounded-full font-gilroy-light text-[18px] absolute -left-1 bottom-1 border-white border-2'/>
                  </button>
                  {loading ? <CircularProgress/> : 

                    success && 
                      <span className=' text-green-500 font-gilroy-regular'>Your Request has been Successfully Initiated</span>
                    }              
                </form>
            </div>
           </div>
          <div className=' w-full flex flex-col items-center py-10 gap-5 justify-center'>
               <span className=' text-[24px] font-gilroy-semi-bold'>Connect with us</span>
               <div className=' flex gap-5'>
                <TwitterIcon fontSize='medium'/>
                <LinkedInIcon fontSize='medium'/>
                <InstagramIcon fontSize='medium'/> 
                <FacebookIcon fontSize='medium'/>

               </div>
           </div>
       </div>
       <div className=' w-full border-t-2 h-14 border-t-white flex items-center justify-center'>
               <div className=' w-[90%]  flex justify-center xl:justify-between items-center h-full'>

                    <div className=' flex font-gilroy-light text-[8px] md:text-[15px]'>
                      <span>Copyright <CopyrightIcon/> 2023 Hubnex, All Rights Reserved</span>
                    </div>

                    <div className='hidden xl:flex gap-2 text-[15px] font-gilroy-light '>
                       <Link to='/about'>About Us</Link>
                       <hr className=' border-[1px] h-5'/>
                        <Link to='service'>Data Protection</Link>
                       <hr className=' border-[1px] h-5'/>
                       <Link to='/about'>Terms and Conditions</Link>
                        <hr className=' border-[1px] h-5'/>
                        <Link to='/about'>Privacy Policy</Link>
                        <hr className=' border-[1px] h-5'/>
                        <Link to='/contact'>Contact Us</Link>
                         <hr className=' border-[1px] h-5'/>
                        <Link to='/'>Invest in Us</Link>
                        <hr className=' border-[1px] h-5'/>
                    </div>
               </div>
           </div>
    </div>
  )
}

export default Contact