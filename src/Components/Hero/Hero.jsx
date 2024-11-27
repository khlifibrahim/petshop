import React from 'react'
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact'
import Navbar from '../NaviationBar/Navbar';
import heroImage from '../../Assets/images/hero.png'
import paws from '../../Assets/images/paws.png'
import shapTop from '../../Assets/images/Shape-top.svg'
import shapBottom from '../../Assets/images/Shape-bottom.svg'
import berd from '../../Assets/images/berd.png'
import dogs from '../../Assets/images/big-dog.png'

function Hero({ title }) {
  return (
      <div className='relative max-w-7xl m-auto flex justify-between items-start overflow-hidden'>
        <img src={shapTop} alt="" className='absolute -top-28 left-52'/>
        <img src={berd} alt="" className='absolute left-1/3'/>
        <div className='text-left basis-1/2 py-20'>
          <span className='font-Inter font-bold text-[16px] text-orange mb-5'>Pet Shop</span>
          <h1 className='font-bold text-[54px]'>{title}</h1>
          <p className='font-Inter font-normal text-base text-black/80 mt-[45px]'>Sociis blandit et pellentesque aliquet at quisque tortor lacinia nullam. Mattis aenean scelerisque dui libero</p>
          <Link to="/shop"><button className='bg-dark text-white font-Poppins font-semibold rounded-xl px-10 py-[17px] mt-[45px] transition-colors hover:bg-orange'>Shop Now</button></Link>
        </div>
        <div className='basis-1/2 relative flex items-end justify-end h-[607px] w-1/2'>
          <div className='w-full h-full absolute top-0 left-0'>
            <img src={heroImage} alt="" className=' object-contain'/>
          </div>
          <div className='absolute top-0 left-0 '>
            <img src={dogs} alt="" className='w-full object-cover'/>
            <img src={paws} alt="" className='object-cover '/>
          </div>
        </div>
        {/* <img src={shapBottom} alt="" className='absolute -bottom-24 left-80'/> */}
      </div>
  )
}

export default Hero