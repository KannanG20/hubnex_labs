import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
function AdminLogin() {
  return (
    <div className='w-full h-full  bg-black '>
   
        <Link  className='  flex gap-2 items-center'>
        <img src={logo} alt='Logo' width={25} height={30}/>
        <span className='text-white font-gilroy-bold text-[20px] md:text-[80px] lg:text-[36px] '>hubnex labs</span>
    </Link>
    <div className="h-screen 2xl:h-[208px] bg-footerImg bg-cover bg-center w-full relative   min-h-screen  flex items-center justify-center ">
      <div className="bg-white p-14 m-0 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center font-gilroy-bold">
Admin Login</h1>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2 font-gilroy-bold" htmlFor="username">
              Username
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 font-gilroy-bold" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-gilroy-bold"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div></div>
  )
}

export default AdminLogin