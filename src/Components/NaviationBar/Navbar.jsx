import React from 'react'
import { Link } from 'react-router-dom';
import { IconSearch, IconHeart, IconShoppingCart } from '@tabler/icons-react';
import logo from '../../Assets/images/logo.png'


function Navbar() {
  return (
    <div className='flex justify-between items-center mx-auto mt-6 py-6 px-[40px] max-w-7xl rounded-[40px] bg-white shadow-figma-shadow'>
        <Link to="/" >
            <div className="logo flex gap-4 items-center justify-center cursor-pointer">
                <img src={logo} alt="" className='object-contain'/>
                <p className='font-Poppins font-bold text-[20px]'>Pet Shop</p>
            </div>
        </Link>
        <div className="navmenu ">
            <ul className='flex justify-center items-center gap-6 font-Poppins text-[20px] font-medium'>
                <li className='px-[10px] py-1 transition-all duration-100 hover:border-b-2 hover:text-orange hover:border-orange '><Link to="/">Home</Link></li>
                <li className='px-[10px] py-1 transition-all duration-100 hover:border-b-2 hover:text-orange hover:border-orange '><Link to="/shop">Shop</Link></li>
                <li className='px-[10px] py-1 transition-all duration-100 hover:border-b-2 hover:text-orange hover:border-orange '><Link to="/about">About Us</Link></li>
                <li className='px-[10px] py-1 transition-all duration-100 hover:border-b-2 hover:text-orange hover:border-orange '><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        <div className="flex items-center justify-between gap-6">
            <div className="bg-semiWhite w-[280px] h-10 flex items-center justify-between rounded-[20px] pr-[5px] py-[9px]">
                <input type="text" placeholder='Search products...' className='w-full h-full bg-transparent pl-4 outline-none'/>
                <div className="search-icon bg-black rounded-full h-7 w-8 flex items-center justify-center cursor-pointer">
                    <IconSearch stroke={2} className='w-4 text-white'/>
                </div>
            </div>
            <div className="icon-1  cursor-pointer">
                <IconHeart stroke={2} />
            </div>
            <Link to='/checkout' >
                <div className="icon-2 cursor-pointer">
                    <IconShoppingCart stroke={2} />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar