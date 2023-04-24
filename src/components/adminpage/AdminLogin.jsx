import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Admin from '../../pages/Admin';
function AdminLogin() {


  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [access, setAccess] = useState(false);

  const [err, setErr] = useState({errCred : false, errBackend : false});
  const [loading, setLoading] = useState(false);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
};

  const handleSubmit = async ()=>{
    setErr((prev)=> ({...prev, errCred: false, errBackend:false}))
    try {
      setLoading(true);
      const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/auth`, requestOptions)
      if(!res.ok){
        return setErr((prev)=> ({...prev, errCred : true}));
      }
      const data = await res.json()
      localStorage.setItem('token', data.result)
      setLoading(false);
      setAccess(true)
    } catch (error) {
      setLoading(false);
      setErr((prev)=> ({...prev, errBackend : true}))
    }
  }


  return (
    <>
    {access ? <Admin/> :
    <div className='w-full h-full  bg-black '>
   
     <Link to='/' className='  flex gap-2 items-center'>
        <img src={logo} alt='Logo' width={25} height={30}/>
        <span className='text-white font-gilroy-bold text-[20px] md:text-[80px] lg:text-[36px] '>hubnex labs</span>
    </Link>
    <div className="h-screen 2xl:h-[208px] bg-footerImg bg-cover bg-center w-full relative   min-h-screen  flex items-center justify-center ">
      <div className="bg-white p-14 m-0 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center font-gilroy-bold">
Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2 font-gilroy-bold" htmlFor="username">
              Username
            </label>
            <input
              className="  border-2 border-black appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              onChange={(e)=> setCredentials((prev)=> ({...prev, email: e.target.value}))}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 font-gilroy-bold" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border-2 border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e)=> setCredentials((prev)=> ({...prev, password: e.target.value}))}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-gilroy-bold"
              type="button"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          {loading && <div className=' w-full flex justify-center items-center'><CircularProgress size={20}/></div>}
          {err.errCred && <span className=' text-red-500'>Invalid Credentials</span>}
          {err.errBackend && <span className=' text-red-500'>Something went wrong, Please try again</span>}
        
        </form>
      </div>
    </div>
    </div>
  }
  </>
  )
}

export default AdminLogin