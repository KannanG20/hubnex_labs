import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Testimonials = () => {

    const [data, setData] = useState([])
    const [deleted, setDeleted] = useState(false);

    const successNotifs = (msg)=> {
        toast.success(msg);
    }
    const errorNotifs = (msg)=> {
        toast.error(msg);
    }

    const handleDelete = async (author, id) =>{
        const requestOptions = {
            method: 'DELETE'
          };
          try {
            const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/testimonial/${id}`, requestOptions)
            if(!res.ok){
              return  errorNotifs(data.error)
            }
            successNotifs('Deleted successfully')
            setDeleted((prev)=> !prev)
          } catch (error) {
            errorNotifs("somthing went wrong, try again")
          }
    }

    useEffect(()=>{
        const getTestimonials = async ()=> {
            try {
                const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/testimonials`)
                const data = await res.json();
                setData(data.results);
            } catch (error) {
                errorNotifs("Something went wrong, try again")
            }
        }
        getTestimonials();
    }, [deleted])

  return (
    <div className=' flex flex-col h-full w-full text-white relative'>
        <ToastContainer/>
        <div className=' flex justify-between w-full items-center py-5 border-b-[1px] border-b-white'>
            <span>Testimonials</span>
            <Link to='/addtestimonial' className=' py-2 px-5 bg-blue-500 rounded-full'>Add Testimonial</Link>
        </div>
        <div className=' flex flex-wrap w-full gap-5 h-auto py-5'>
        {data?.map((author)=>(
            <div key={author._id} className=' flex flex-col h-44 w-56 justify-between border-2 border-white'>
                <div className=' flex justify-center items-center w-full h-[90%]'>
                    <span>{author.author}</span>
                </div>
                <div className=' w-full flex justify-between items-center'>
                    <Link to={`/updatetestimonial/${author._id}`} className=' flex justify-center items-center py-1 px-3 bg-blue-500 w-full'>Update</Link>
                    <button onClick={()=> handleDelete(author.author, author._id)} className=' py-1 px-3 bg-red-500 w-full'>Delete</button>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Testimonials