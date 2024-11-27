import React from 'react'
import { Link } from 'react-router'
import { IconArrowLeft, } from '@tabler/icons-react';

function Register() {
    return (
        <div className='flex justify-center items-center'>
            <Link to="/" >
                <div className="absolute top-10 left-8 z-40 flex gap-4 text-black hover:text-orange cursor-pointer">
                    <IconArrowLeft  stroke={2}/>
                    <p>Back Home</p>
                </div>
            </Link>
            <div className='bg-semiWhite h-screen w-screen flex justify-center items-center'>
                <div className='w-[480px]  m-auto'>
                    <h1 className='text-center font-bold text-[77px]'>Welcome !</h1>
                    <div className="w-full flex flex-col gap-5">
                        <div className='flex flex-col gap-[6px]'>
                            <label htmlFor="" className='font-semibold text-base leading-5'>Full name</label>
                            <input type="text" className='rounded-md px-4 py-[9px] bg-white placeholder:text-[#6C757D]' placeholder='Full name'/>
                        </div>
                        <div className='flex flex-col gap-[6px]'>
                            <label htmlFor="" className='font-semibold text-base leading-5'>Mobile Number</label>
                            <input type="text" className='rounded-md px-4 py-[9px] bg-white placeholder:text-[#6C757D]' placeholder='Mobile Number'/>
                        </div>
                        <div className='flex flex-col gap-[6px]'>
                            <label htmlFor="" className='font-semibold text-base leading-5'>Email Address</label>
                            <input type="email" className='rounded-md px-4 py-[9px] bg-white placeholder:text-[#6C757D]' placeholder='E-mail address'/>
                        </div>
                        <div className='flex flex-col gap-[6px]'>
                            <label htmlFor="" className='font-semibold text-base leading-5'>Password</label>
                            <input type="password" className='rounded-md px-4 py-[9px] bg-white placeholder:text-[#6C757D]' placeholder='Your password'/>
                        </div>
                        <div className='flex flex-col gap-[6px]'>
                            <button className='font-semibold text-white w-full px-5 py-4 bg-orange rounded-lg'>Register</button>
                        </div>
                        <div className='flex gap-[6px]'>
                            Already have account? <Link to='/login'><p >Login!</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Register