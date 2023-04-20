import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react'

const Contact = () => {

  const [users, setUsers] = useState([])
  const [status, setStatus ] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [userOf, setUserOf] = useState("")

  const [loading, setLoading] = useState(true);

  const [err, setErr] = useState(false)

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(),
};

const handleStatus = async (id, message, firstname, lastname) => {
  try {
    const res = await fetch(`https://hubnex-api.vercel.app/api/v1/user/${id}`, requestOptions)
    if(!res.ok){
      return setShowMessage("Something went wrong")
    }
    const user = firstname + " " + lastname
    setStatus((prev)=> !prev)
    setShowMessage(message);
    setUserOf(user);
  } catch (error) {
    console.log(error.message)
  }
}


// useEffect(()=>{
//   const getUsers = async () => {
//     try {
//       const res = await fetch('https://hubnex-api.vercel.app/api/v1/users');
//       const data = await res.json();
//       if(!res.ok) {
//         setLoading(false);
//         return setErr(true)
//       }
//       setUsers(data.results)
//     } catch (error) {
//       setLoading(false)
//       console.log(error.message)
//     }
//   }
//   return () => {
//     getUsers();
//   }
// }, [status])

  useEffect(()=>{
    const getUsers = async () => {
      try {
        const res = await fetch('https://hubnex-api.vercel.app/api/v1/users');
        const data = await res.json();
        if(!res.ok){
          setLoading(false);
          return setErr(true)
        } 
        setUsers(data.results)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error);
      }

    }
    return () => {
      getUsers();
    }
  }, [status])


  return (
    <div className=' h-full flex flex-col items-center gap-5 overflow-y-auto'>
    {/* { loading ? <div className=' h-full w-full justify-center flex items-center'><CircularProgress/></div> : */}
      <>
      {err && <div className=' flex justify-center items-center h-full w-full'><span className='text-red-500'>Something went wrong</span></div>}
      {status && 
      <div className=' w-full left-0 backdrop-blur-sm h-screen absolute top-0 flex justify-center items-center'>
        <div className=' h-56 flex flex-col gap-2 py-5 relative overflow-y-auto bg-gray-300 w-96 px-5'>
          <span onClick={()=> setStatus(false)} className=' cursor-pointer absolute top-0 right-3 text-red-500'>close</span>
          <span className=' font-gilroy-semi-bold text-xl'>Message from {userOf}</span>
          <span className=' py-2'>{showMessage ? showMessage : "null"}</span>
        </div>
      </div>}
      <div className=' flex justify-between w-full h-20 items-center text-white font-gilroy-semi-bold border-b-[1px] border-b-white'>
        <span className=' flex-1 flex justify-center'>Fullname</span>
        <span className=' flex-1 flex justify-center'>Email</span>
        <span className=' flex-1 flex justify-center'>Mobile Number</span>
        <span className=' flex-1 flex justify-center'>Status</span>
        <span className=' flex-1 flex justify-center'>Action</span>
      </div>
      <div className=' flex flex-col w-full items-center text-white font-gilroy-semi-bold border-b-[1px] border-b-white'>
        {users?.map((user)=> (
          <div className=' flex justify-between items-center w-full py-5 border-b-[1px] borber-b-white text-gray-300'>
            <span className='flex justify-center flex-1'>{user.firstname} {user.lastname}</span>
            <span className='flex justify-center flex-1'>{user.email}</span>
            <span className='flex justify-center flex-1'>{user.phoneNo}</span>
            <span className={` ${user.status ? 'text-green-500' : 'text-red-500'} flex justify-center flex-1`}>{ ` ${user.status ? 'Read' : 'UnRead'}`  }</span>
            <div className=' flex-1 flex justify-center items-center'>
            <button onClick={() => handleStatus(user._id, user?.message, user.firstname, user.lastname)} className='  px-4 py-2 bg-blue-700 text-white'>view</button>
            </div>
          </div>
        ))}
      </div>
      </>
{/* } */}
    </div>
  )
}

export default Contact