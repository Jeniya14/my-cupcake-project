import React, { useState } from 'react'
import { RiCake3Fill } from 'react-icons/ri'
import { HiMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const toggleMenu=()=>setIsOpen((prevIsopen)=>!prevIsopen)
  return (
    <div className='bg-gray-50 shadow-lg sticky top-0'>
      <div className='p-4 flex justify-between items-center '>
        <a className=' font-pacifico text-pink-300  flex ' href="/">
          <p className='text-3xl'>J</p><RiCake3Fill className='text-4xl' /> <p className='text-3xl'>Cakes</p>
        </a>
        <div className='hidden md:flex space-x-7 text-gray-500 font-semibold text-xl'>
          <a href="#home" className="nav-link" >Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div className='md:hidden text-gray-500 '>
          <button className='text-3xl' onClick={toggleMenu}>
            {isOpen ? <IoCloseOutline /> :<HiMenu className='hover:drop-shadow-sm'/>  }
          </button>
        </div>
      </div>
      <div className={`menu-link ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className='p-3'>
          <a href="#home" className='block '>Home</a>
          <a href="#about" className='block'>About</a>
          <a href="#blog" className='block'>Blog</a>
          <a href="#contact" className='block'>Contact</a>
        </div>  
      </div>
    </div>
    
    
  )
}

export default Navbar 