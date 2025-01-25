import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { navItems } from '../containts';
import { Menu, X } from 'lucide-react';
const Nav = () => {
    const [MobileDrawer, setMobileDrawer] =useState();

    const toogleNavbar =()=>{
        setMobileDrawer(!MobileDrawer)
    }
  return (
        <>
        <nav className='z-50 top-0 py-3 border-b border-neutral-700/80 backdrop-blur sticky '>
        <div className="container mx-auto px-4 relative text-sm">
            <div className="flex justify-between items-center">
                <div className='flex items-center flex-shrink-0'>
                     <img src={logo} alt='Logo'className=' h-10 w-10 mr-2' />
                     <span className="text-xl tracking-light">
                        VirtualaR
                     </span>
                </div>
                <ul className="lg:flex ml-14  space-x-12 hidden">
                    {
                        navItems.map((items,index)=>(
                            <li key={index}>
                                <a href={items.href}>{items.label}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className="hidden lg:flex justify-center items-center space-x-14">
                    <a href='#' className=' py-2 px-3 border rounded-md'>
                        Sign In
                    </a>
                    <a href='#' className=' py-2 px-3  rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>
                        Create an account
                    </a>
                </div>
                <div className="md:flex justify-end items-center lg:hidden">
                <button onClick={toogleNavbar} >
                    {
                        MobileDrawer ?  <X /> :  <Menu />                    }
                </button>
                </div>
            </div>
            {
                MobileDrawer && (
                    <div className="flex flex-col z-40 bg-neutral-900 w-full
          fixed right-0 justify-center items-center p-12 lg:hidden">
                        <ul>
                            {
                                navItems.map((items,index)=>(
                                    <li key={index} className=' py-4'>
                                        {items.label}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex space-x-8 ">
                            <a href="#" className="border rounded-md py-2 px-3">
                                Sign In
                            </a>
                            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                                Create an account
                            </a>
                        </div>
                    </div>
                )
            }
        </div>
        </nav>
        </>
  )
}

export default Nav
