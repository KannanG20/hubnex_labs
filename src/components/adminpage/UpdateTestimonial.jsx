import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const UpdateTestimonial = () => {

    const [loading, setLoading] = useState(false)

    const [data, setData]= useState({})
    const { id } = useParams()

    const navigate = useNavigate()
    const successNotifs = ()=>{
        return toast.success("Successfully Added to Testimonials")
    }
    const errorNotifs = (err)=>{
    return toast.error(err)
    }

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: data.description
        }),
    };
    
      const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true)
        try {
          const postTest = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/testimonial/${id}`, requestOptions);
          const data = await postTest.json()
          if(!postTest.ok){
            setLoading(false)
           return errorNotifs(data.error)
          }
          setLoading(false)
          successNotifs();
          navigate('/admin/testimonials')
        } catch (error) {
          setLoading(false)
          errorNotifs("Something went wrong, try again");
        }
      }
    
    useEffect(()=> {
        const getTesti = async ()=>{
            try {
                const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/testimonial/${id}`);
                const data = await res.json();
                if(!res.ok){
                    return errorNotifs(data.error)
                }
                setData(data.results);
            } catch (error) {
                setLoading(false)
                errorNotifs("Something went wrong, try again");
            }

        }
        getTesti()
    },[])

  return (
    <div className=' text-white h-auto sm:overflow-hidden overflow-y-auto'>
      <ToastContainer/>
      <div className=' w-full py-5 flex items-center border-b-[1px] border-b-white'>
        <span className=' text-[30px]'>Testimonial</span>
      </div>
      <form onSubmit={handleSubmit} className='h-full flex flex-col gap-10 py-5'>
        <div className='flex flex-col gap-5'>
          <label htmlFor="desc">Description (Message) :</label>
          <textarea cols='50' rows='6' type="text" id='desc' required value={data.description} placeholder='Description' onChange={(e)=> setData((prev)=> ({...prev, description: e.target.value}))} className=' p-5 text-black outline-none'/>
        </div>
        <div className='flex flex-col gap-5'>
          <label htmlFor="author">Author Name :</label>
          <input type="text" id='author' placeholder='ex: kannan G' value={data.author} className=' px-5 py-2 text-black outline-none'/>
        </div>
        <div className='flex flex-col gap-5'>
          <label htmlFor="role">Author Role :</label>
          <input type="text" id='role' placeholder='ex: Designer' value={data.role} className=' px-5 py-2 text-black outline-none'/>
        </div>
        <div className=' flex gap-5 items-center'>
        <input type='submit' className=' py-2 px-5 bg-blue-500 rounded-full w-max' placeholder='Submit'/>
        <Link to='/admin/testimonials' className=' py-2 px-5 rounded-full bg-red-500 text-white'>Discard</Link>
        {loading && <CircularProgress size={30}/>}
        </div>
      </form>
    </div>
  )
}

export default UpdateTestimonial