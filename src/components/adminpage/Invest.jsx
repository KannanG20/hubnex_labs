import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Invest = () => {

  const [companies, setCompanies] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [filterOption, setFilterOption] = useState("")
  const [status, setStatus ] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [companyOf, setCompanyOf] = useState("")

  const [loading, setLoading] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false)
  const [emptyData, setEmptyData] = useState(false);

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
  if (filterOption === "read") {
    setFilteredData(companies.filter((item) => item.status === true));
  } else if (filterOption === "unread") {
    setFilteredData(companies.filter((item) => item.status === false));
  } else {
    setFilteredData(companies);
  }
}, [companies, filterOption])


  useEffect(()=>{
    setLoading(true);
    const getcompanies = async () => {
      try {
        const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/companies`);
        const data = await res.json();
        if(!res.ok) {
          setLoading(false)
          return setErr(true)
        }
        if(data.results.length <= 0){
          setLoading(false)
         return setEmptyData(true);
        }
        setLoading(false)
        setCompanies(data.results)
      } catch (error) {
        setLoading(false)
        console.log(error);
      }

    }
    getcompanies();
  }, [status])


  return (
    <>
    <div className=' text-white h-24 flex justify-between items-center w-full border-b-2 border-b-white'>
    <span className=' text-[30px] font-gilroy-bold'>Invest Form</span>
    <div className='flex relative'>
        <button onClick={()=> setFilterToggle((prev)=> !prev)} className=' bg-white text-black px-5 py-1'>Filter</button>
        {filterToggle &&
          <div className=' absolute top-12 right-0 flex flex-col bg-gray-300 text-black px-5 py-1'>
          <button onClick={()=> {
            setFilterToggle(false);
            setFilterOption("all")}} className=' py-2'>All</button>
          <button onClick={()=> {
            setFilterToggle(false);
            setFilterOption("read")}} className=' py-2 '>Read</button>
          <button onClick={()=> {
            setFilterToggle(false);
            setFilterOption("unread")}} className=' py-2'>Unread</button>
          </div>
        }
    </div>
  </div>
    <div className=' h-full flex flex-col items-center gap-5 overflow-y-auto'>
      {loading ? <div className=' h-full w-full justify-center flex items-center'><CircularProgress/></div> :
      <>
      {err && <div className=' h-full w-full flex justify-center items-center'><span className=' text-red-500'>Something went wrong</span></div>}
      {status && 
      <div className=' w-full left-0 backdrop-blur-sm h-screen absolute top-0 flex justify-center items-center'>
        <div className=' h-56 flex flex-col gap-2 py-5 relative overflow-y-auto bg-gray-300 w-96 px-5'>
          <span onClick={()=> setStatus(false)} className=' cursor-pointer absolute top-1 right-3 text-red-500'><CloseIcon/></span>
          <span className=' font-gilroy-semi-bold text-xl'>Message from {companyOf}</span>
          <span className=' py-2'>{showMessage ? showMessage : "null"}</span>
        </div>
      </div>}
      <table className=' text-white w-full overflow-x-auto sm:overflow-x-hidden'>
        <tr className=' flex w-full justify-between items-center border-b-2 border-b-white pb-5'>
          <th className=' sm:flex-1'>Company</th>
          <th className=' sm:flex-1'>Email</th>
          <th className=' sm:flex-1'>Mobile No</th>
          <th className=' sm:flex-1'>Status</th>
          <th className=' sm:flex-1'>Action</th>
        </tr>
          {filteredData?.map((company)=> (
            <tr key={company._id} className='flex w-full justify-center gap-5 sm:gap-0 sm:justify-between items-center py-5 border-b-[1px] border-b-gray-200'>
              <td className=' sm:flex-1 sm:flex sm:justify-center'>{company.companyName}</td>
              <td className=' sm:flex-1 sm:flex sm:justify-center'>{company.email}</td>
              <td className=' sm:flex-1 sm:flex sm:justify-center'>{company.phoneNo}</td>
              <td className={` ${company.status ? 'text-green-500' : 'text-red-500'} sm:flex-1 sm:flex sm:justify-center`}>{ ` ${company.status ? 'Read' : 'UnRead'}`  }</td>
              <td className=' sm:flex-1 sm:flex sm:justify-center'>
                <button onClick={() => handleStatus(company._id, company?.message, company.firstname, company.lastname)} className='  px-4 py-2 bg-blue-700 text-white'>view</button>
                </td>
            </tr>
          ))}
       
       {emptyData && <div className=' flex justify-center items-center py-20 w-full'><span>No Company Data</span></div> }
      </table>
      </>
    }
    </div>
    </>
  )
}

export default Invest