import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="w-10 h-10 bg-white justify-center items-center flex rounded-lg shadow-md">
            <p className='blue-gradient_text'>SH</p>
        </NavLink> 
        <nav  className="text-lg font-medium flex gap-7">
            <NavLink to="/about" className={({isActive})=>isActive ? 'text-blue-500':'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive})=>isActive ? 'text-blue-500':'text-black'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
