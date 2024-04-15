import React, { useEffect, useState } from 'react'
import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { NavLink,Link } from 'react-router-dom'

function Header() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  return (
    <>
      <header className='w-full h-25 gap-y-3 flex flex-col'>
        {/* TOP BAR */}
        <div className='bg-[#1AACDD] w-full h-10 flex justify-center items-center font-semibold text-white'>The ONLY Official MrBeast Merch Store</div>
        {/* NAVIGATION */}
        <nav className='w-full h-15 bg-white flex justify-between items-center'>
          {/* Leftbar Nav */}
          <div className='w-56 h-auto ml-4'>
            <img
              src='https://mrbeast.store/cdn/shop/files/mrbeaststore_logo.png?v=1707579423&width=285'
              alt='logo'
              className='w-full h-auto'
            />
          </div>
          {/* Middle Nav */}
          <div className='font-base flex flex-row gap-x-4'>
            <NavLink to='/' className={({ isActive }) => `${isActive ? 'bg-green-500 px-2 py-1 text-white rounded-2xl font-semibold' : ''} text-base`}>All Products</NavLink>
            {data && data.map((category) => {
              return (
                <NavLink to={`/${category}`} className={({ isActive }) => `capitalize ${isActive ? 'bg-green-500 px-2 py-1  text-white rounded-2xl font-semibold' : ''} text-base`}>{category} </NavLink>
              )
            })}
          </div>
          {/* Rightbar Nav */}
          <div className='flex flex-row gap-x-4 mr-8'>
            <div className='text-xl hover:bg-[#E74683] p-1 hover:rounded-lg hover:text-white'><CiSearch /> </div>
            <div className='text-xl hover:bg-[#E74683] p-1 hover:rounded-lg hover:text-white'><CiUser /></div>
            <Link to={`/cart`}> <div className='text-xl hover:bg-[#E74683] p-1 hover:rounded-lg hover:text-white'> <IoBagHandleOutline /></div></Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header