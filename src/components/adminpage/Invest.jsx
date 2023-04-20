import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react'

const Invest = () => {

  const [companies, setCompanies] = useState([])
  const [status, setStatus ] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [companyOf, setCompanyOf] = useState("")

  const [loading, setLoading] = useState(true);

  const [err, setErr] = useState(false);

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(),
};

const handleStatus = async (id, message, company) => {
  try {
    const res = await fetch(`https://hubnex-api.vercel.app/api/v1/company/${id}`, requestOptions)
    if(!res.ok){
      return setShowMessage("Something went wrong")
    }
    setStatus((prev)=> !prev)
    setShowMessage(message);
    setCompanyOf(company)
  } catch (error) {
    console.log(error.message)
  }
  console.log(data);
}


useEffect(()=>{
  const getcompanies = async () => {
    try {
      const res = await fetch('https://hubnex-api.vercel.app/api/v1/companies');
      const data = await res.json();
      if(!res.ok) {
        console.log(data)
        setLoading(false)
        return setErr(true)
      }
      setCompanies(data.results)
      console.log(data);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }

  }
  return () => {
    getcompanies();
  }
}, [status])

  useEffect(()=>{
    const getcompanies = async () => {
      try {
        const res = await fetch('https://hubnex-api.vercel.app/api/v1/companies');
        const data = await res.json();
        if(!res.ok) {
          console.log(data)
          setLoading(false)
          return setErr(true)
        }
        setLoading(false)
        setCompanies(data.results)
        console.log(data); 
      } catch (error) {
        setLoading(false)
        console.log(error);
      }

    }
    return () => {
      getcompanies();
    }
  }, [])


  return (
    <div className=' h-full flex flex-col items-center gap-5 overflow-y-auto'>
      {loading ? <div className=' h-full w-full justify-center flex items-center'><CircularProgress/></div> :
      <>
      {err && <div className=' h-full w-full flex justify-center items-center'><span className=' text-red-500'>Something went wrong</span></div>}
      {status && 
      <div className=' w-full left-0 backdrop-blur-sm h-screen absolute top-0 flex justify-center items-center'>
        <div className=' h-56 flex flex-col gap-2 py-5 relative overflow-y-auto bg-gray-300 w-96 px-5'>
          <span onClick={()=> setStatus(false)} className=' cursor-pointer absolute top-0 right-3 text-red-500'>close</span>
          <span className=' font-gilroy-semi-bold text-xl'>Message from {companyOf}</span>
          <span className=' py-2'>{showMessage ? showMessage : "null"}</span>
        </div>
      </div>}
      <div className=' flex justify-between w-full h-20 items-center text-white font-gilroy-semi-bold border-b-[1px] border-b-white'>
        <span className=' flex-1 flex justify-center'>Company Name</span>
        <span className=' flex-1 flex justify-center'>Email</span>
        <span className=' flex-1 flex justify-center'>Mobile Number</span>
        <span className=' flex-1 flex justify-center'>Status</span>
        <span className=' flex-1 flex justify-center'>Action</span>
      </div>
      <div className=' flex flex-col w-full items-center text-white font-gilroy-semi-bold border-b-[1px] border-b-white'>
        {companies?.map((company)=> (
          <div className=' flex justify-between items-center w-full py-5 border-b-[1px] borber-b-white text-gray-300'>
            <span className='flex justify-center flex-1'>{company.companyName}</span>
            <span className='flex justify-center flex-1'>{company.email}</span>
            <span className='flex justify-center flex-1'>{company.phoneNo}</span>
            <span className={` ${company.status ? 'text-green-500' : 'text-red-500'} flex justify-center flex-1`}>{ ` ${company.status ? 'Read' : 'UnRead'}`  }</span>
            <div className=' flex-1 flex justify-center items-center'>
              <button onClick={() => handleStatus(company._id, company?.message, company.companyName)} className='  px-4 py-2 bg-blue-700 text-white'>view</button>
            </div>
          </div>
        ))}
      </div>
      </>
    }
    </div>
  )
}

export default Invest