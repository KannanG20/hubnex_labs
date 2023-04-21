import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dataprotection = () => {

  const [editorState, setEditorState] = useState("");

// change this value to HTMl -> dangerouslySetInnerHTML={{__html: editorState}}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ size: [] }],
    [{ font: [] }],
    [{ align: ["right", "center", "justify"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ color: ["red", "#785412"] }],
    [{ background: ["red", "#785412"] }]
  ]
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "color",
  "image",
  "background",
  "align",
  "size",
  "font"
];

const errorNotifs = ()=> {
  toast.error("Something is wrong! try again")
}
const successNotifs = () =>{
  toast.success("successfully Updated ")
}

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content : editorState})
};

  const handleUpdateDataProtection = async () =>{
    try {
      const dataApi = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/data-protection`)
      const tc = await dataApi.json();
      const putRes = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/data-protection/${tc._id}`, requestOptions)
      const putData = await putRes.json();
      if(!putRes.ok){
        return errorNotifs()
      }
      setEditorState(putData.content);
      successNotifs()
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    const dataProtectionData = async ()=>{
      try {
        const dataApi = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/data-protection`)
        const tc = await dataApi.json();
        if(!dataApi.ok){
          return errorNotifs()
        }
        setEditorState(tc.content);
      } catch (error) {
        console.log(error.message)
      }
    }
    dataProtectionData();
  }, [])

  return (
    <>
      <span className=' font-gilroy-bold text-[40px] text-white'>Content Management System</span>
      <div className=' w-full h-full flex border-2 border-gray-300 gap-5 flex-col shadow-md shadow-white rounded-md bg-white sticky overflow-y-auto'>
        <span className=' px-5  py-5 flex-2 font-gilroy-bold text-[25px] flex items-center border-b-2 border-b-gray-300'>Data Protection</span> 
        <div className=' flex-1 px-5 flex flex-col gap-5 '>
          <span className=' text-lg font-semibold'>Page Description</span>
          <ReactQuill className=' bg-white text-black' theme="snow" formats={formats} modules={modules} value={editorState} onChange={(content)=> setEditorState(content)} />
        </div>
        <div className=' flex-2 px-5 py-10 flex justify-end items-center'>
          <button onClick={handleUpdateDataProtection} className=' bg-blue-600 w-max py-[10px] px-5 text-white rounded-full'>Update Changes</button>
        </div>
      </div>
    </>
  )
}

export default Dataprotection
