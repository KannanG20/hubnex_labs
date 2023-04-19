import React, { useEffect } from 'react'
import { useState } from 'react'
import Admin from '../../pages/Admin';
import AdminLogin from './AdminLogin';

const ProtectedRoute = () => {

    const [isLogged, setIsLogged] = useState(false);
    
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token == "PERMISSION ACCESSED"){
            setIsLogged(true)
        }
    }, [])

  return ( 
    <>
    {isLogged ? <Admin /> : <AdminLogin/>}
    </>
  )
}

export default ProtectedRoute