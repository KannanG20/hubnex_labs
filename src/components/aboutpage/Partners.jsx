import React, { useEffect, useState } from 'react'
import reddit from '../../assets/reddit.png'
import chorus from '../../assets/chorus.png'
import tcs from '../../assets/Tata Consultancy Services - png 0.png'
import pantera from '../../assets/pantera.png'


const Partners = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    const getPartners = async ()=>{
      try {
        const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/partners`)
        const data = await res.json()
        setData(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPartners();
  },[])
 
  return (
    <div className=' h-56 bg-black w-full flex flex-col justify-center items-center gap-10 md:gap-12' id="backgorund">
        <span className=' text-[60px] text-white font-gilroy-semi-bold'>Our Partners</span>
        <div className=' flex flex-wrap justify-around md:justify-evenly items-center w-full px-5 md:px-0'>
          {data.map((data)=> (
             <img key={data._id} src={`https://${import.meta.env.VITE_API_URL}/${data.image}`} className= ' w-[158px] h-[70] object-cover'/>
          ))}
        </div>
    </div>
  )
}

export default Partners