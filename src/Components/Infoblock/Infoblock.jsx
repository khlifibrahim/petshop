import React from 'react'
import { Link } from 'react-router-dom'
import infoShap from '../../Assets/images/info-shap.png'
import dog from '../../Assets/images/small-dog.png'

function Infoblock() {
  return (
    <div className='relative max-w-7xl m-auto py-[120px] flex justify-between items-start overflow-hidden'>
      <div className='basis-1/2 relative flex items-end justify-end h-full w-1/2'>
        <img src={dog} alt=""  className='object-cover w-full h-full z-20 top-0 bottom-0 rounded-full' />
        <div className='w-full h-full absolute '>
          <img src={infoShap} alt="" className=' object-contain w-full'/>
        </div>
      </div>
      <div className='text-left basis-1/2 py-20'>
        <span className='font-Inter font-bold text-[16px] text-orange mb-5'>Pet Shop</span>
        <h1 className='font-bold text-[40px]'>The smarter way to shop 
        for your pet</h1>
        <p className='font-Inter font-normal text-base text-black/80 mt-[45px]'>Lorem ipsum dolor sit amet consectetur. At et vehicula sodales est proin turpis pellentesque sinulla a aliquam amet rhoncus quisque eget sit</p>
        <Link to="/about">
          <button className='bg-dark text-white font-Poppins font-semibold rounded-xl px-10 py-[17px] mt-[45px] transition-colors hover:bg-orange'>Learn More</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Infoblock