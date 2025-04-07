import React, { useEffect, useRef, useState } from 'react'
import { RiCake3Fill } from 'react-icons/ri'
import { HiMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const menuRef= useRef(null)
  const toggleMenu=()=>setIsOpen((prevIsopen)=>!prevIsopen)
   
  useEffect(()=>{
    const clickOutside=(e)=>{
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setIsOpen(false)
      }
    }
    if(isOpen){
      document.addEventListener("mousedown",clickOutside)
    }
    return ()=>{
      document.removeEventListener('mousedown',clickOutside)
    }
  },[isOpen])

  return (
    <div className='bg-white fixed z-50 top-0 w-full '>
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
      <div className={`menu-link ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`} ref={menuRef}>
        <div className='p-3'>
          <a href="#home" className='block pb-[4px]'>Home</a>
          <a href="#about" className='block pb-[4px]'>About</a>
          <a href="#blog" className='block pb-[4px]'>Blog</a>
          <a href="#contact" className='block pb-[4px]'>Contact</a>
        </div>  
      </div>
    </div>
    
    
  )
}

export default Navbar 