import React, { useEffect, useState } from 'react'
import SideNav from '../components/adminpage/SideNav'
import Header from '../components/adminpage/Header'
import { Navigate } from 'react-router-dom'


const Admin = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=' flex w-full h-screen bg-black'>
      <SideNav menuOpen={menuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}

export default Admin