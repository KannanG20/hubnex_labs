import { content } from '@syncfusion/ej2-react-grids';
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Terms = () => {

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

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content : editorState})
};

  const handleUpdateTerms = async () =>{
    try {
      const termsApi = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/terms-and-conditions`)
      const tc = await termsApi.json();
      const putRes = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/terms-and-conditions/${tc._id}`, requestOptions)
      const putData = await putRes.json();
      if(!putRes.ok){
        return alert("something is wrong")
      }
      setEditorState(putData.content);
      alert("successfully updated!")
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    const termsData = async ()=>{
      try {
        const termsApi = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/terms-and-conditions`)
        const tc = await termsApi.json();
        setEditorState(tc.content);
      } catch (error) {
        console.log(error.message)
      }
    }
    termsData()
  }, [])


  return (
    <>
      <span className=' font-gilroy-bold text-[40px] text-white'>Content Management System</span>
      <div className=' w-full h-full flex border-2 border-gray-300 gap-5 flex-col shadow-md shadow-white rounded-md bg-white sticky overflow-y-auto'>
        <span className=' px-5  py-5 flex-2 font-gilroy-bold text-[25px] flex items-center border-b-2 border-b-gray-300'>Terms and Conditions</span> 
        <div className=' flex-1 px-5 flex flex-col gap-5 '>
          <span className=' text-lg font-semibold'>Page Description</span>
          <ReactQuill className=' bg-white text-black' theme="snow" formats={formats} modules={modules} value={editorState} onChange={(content)=> {setEditorState(content)}}/>
        </div>
        <div className=' flex-2 px-5 py-10 flex justify-end items-center'>
          <button onClick={handleUpdateTerms} className=' bg-blue-600 w-max py-[10px] px-5 text-white rounded-full'>Update Changes</button>
        </div>
      </div>
    </>
  )
}

export default Terms;