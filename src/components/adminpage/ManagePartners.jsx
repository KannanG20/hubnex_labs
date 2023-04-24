import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManagePartners = () => {

  const [data, setData] = useState([])
  const [addImg, setAddImg] = useState(false)
  const [imgData, setImgData] = useState(null)
  const [file, setFile] = useState(null)
  const [invalidImg, setInvalidImg] = useState(false)

  const handleSubmit = async () => {
    try {
      setFile(null)
      setAddImg(false)
      const formData = new FormData()
      if (!imgData) {
        return errorNotifs("Please add a Image")
      }

      formData.append('image', imgData)
      const requestOptions = {
        method: 'POST',
        body: formData
      };
      const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/partner`, requestOptions)
      const data = await res.json()
      console.log(data);
      successNotifs()
    } catch (error) {
      errorNotifs("something went wrong, try again")
    }

  }

  const handleImage = (e) => {
    setInvalidImg(false)
    if (!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/)) {
      return setInvalidImg(true)
    }
    setFile(URL.createObjectURL(e.target.files[0]))
    setImgData(e.target.files[0])
  }

  const handleDelete = async (id) => {
    const requestOptions = {
      method: 'DELETE',
    };
    try {
      const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/partner/${id}`, requestOptions)
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  const errorNotifs = (err) => {
    return toast.error(err)
  }
  const successNotifs = () => {
    return toast.success("Successfully added a partner")
  }

  useEffect(() => {
    const getPartners = async () => {
      try {
        const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/partners`)
        const data = await res.json()
        setData(data.results)
      } catch (error) {
        errorNotifs("Unable to fetch data")
      }
    }
    getPartners();
  }, [handleSubmit, handleDelete])

  return (
    <div className='text-white'>
      <ToastContainer />
      <div className='flex justify-between items-center py-2 border-b-2 border-b-white'>
        <span className=' text-[30px]'>Manage Partners</span>
        <button onClick={() => {
          setInvalidImg(false)
          setAddImg(true)
        }} className=' bg-blue-500 py-2 px-5 rounded-full'>Add Partner</button>
      </div>
      {addImg &&
        <div className=' backdrop-blur-lg left-0 right-0 h-screen absolute top-0 w-full flex justify-center items-center'>
          <div className=' flex flex-col gap-5 h-52 w-80 relative'>
            <span onClick={() => setAddImg(false)} className=' absolute -top-10 right-8 text-red-500 cursor-pointer'>close</span>
            {file ?
              <img src={file} className=' h-36 w-72 object-cover' />
              :
              <>
                {invalidImg ?
                  <span className=' h-36 w-72 bg-gray-400 text-red-500 flex justify-center items-center'>Invalid File</span>
                  :
                  <span className=' h-36 w-72 bg-gray-400 text-black flex justify-center items-center'>Preview Slot</span>
                }
              </>

            }
            <div className=' flex justify-between w-72'>
              <label htmlFor='img' className='bg-blue-300 py-2 px-5'>Add Image</label>
              <input type='file' className='hidden' id='img' onChange={handleImage} />
              <button onClick={handleSubmit} className='bg-blue-500 py-2 px-5'>Submit</button>
            </div>
          </div>
        </div>}
      <div className='flex flex-wrap gap-5 w-full h-auto py-5'>
        {data?.map((data) => (
          <div className=' flex flex-col h-40 w-52 border-2 border-white'>
            <img src={`https://${import.meta.env.VITE_API_URL}/${data.image}`} className='w-full h-[85%] object-cover' />
            <button onClick={() => handleDelete(data._id)} className=' w-full bg-white flex items-center justify-center text-red-500'>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManagePartners