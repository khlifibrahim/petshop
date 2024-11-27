import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png'
import hands from '../../Assets/images/footer-hands.png'
import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconBrandYoutubeFilled, IconBrandVisa, IconBrandMastercard, IconBrandPaypal } from '@tabler/icons-react';

function Footer() {
  return (
    <div className='relative bg-semiWhite'>
      <div className='absolute top-0 left-0'>
        <img src={hands} alt="" />
      </div>
        <div className="inner max-w-7xl m-auto py-[72px] flex flex-col gap-10">
          <div className='flex justify-between text-left'>
            <div className="about flex flex-col gap-5 w-80">
                <Link to="/">
                  <div className="logo flex gap-4 items-center cursor-pointer">
                      <img src={logo} alt="" className='object-contain'/>
                      <p className='font-Poppins font-bold text-[20px]'>Pet Shop</p>
                  </div>
                </Link>
              <p className="">Sed viverra eget fames sit varius. Pellentesque mattis libero viverra dictumst ornaresed justo convallis vitae</p>
              <div className="icons flex gap-5">
                <span className='flex items-center cursor-pointer p-2 bg-black rounded-full w-8 h-8 transition-colors hover:bg-orange/70 '><IconBrandFacebook stroke={2} className='text-white'/></span>
                <span className='flex items-center cursor-pointer p-2 bg-black rounded-full w-8 h-8 transition-colors hover:bg-orange/70'><IconBrandInstagram stroke={2} className='text-white'/></span>
                <span className='flex items-center cursor-pointer p-2 bg-black rounded-full w-8 h-8 transition-colors hover:bg-orange/70'><IconBrandX stroke={2} className='text-white'/></span>
                <span className='flex items-center cursor-pointer p-2 bg-black rounded-full w-8 h-8 transition-colors hover:bg-orange/70'><IconBrandYoutubeFilled stroke={2} className='text-white'/></span>
              </div>
            </div>
            <div className="links ">
              <p className='mb-5 font-semibold text-base'>Company</p>
              <div className='flex flex-col gap-4'>
                <p className='font-normal text-base cursor-pointer hover:text-orange'><Link to="/about">About Us</Link></p>
                <p className='font-normal text-base cursor-pointer hover:text-orange'><Link to="/">Blog</Link></p>
                <p className='font-normal text-base cursor-pointer hover:text-orange'><Link to="/">Gift Cards</Link></p>
                <p className='font-normal text-base cursor-pointer hover:text-orange'><Link to="/">Careers</Link></p>
              </div>
            </div>
            <div className="navigation">
              <p className='mb-5 font-semibold text-base'>useful links</p>
              <div className='flex flex-col gap-4'>
                <p className='font-normal text-base cursor-pointer hover:text-orange'><Link to="/">New products</Link></p>
                <p className='font-normal text-base cursor-pointer hover:text-orange'><Link to="/">Best sellers</Link></p>
                <p className='font-normal text-base cursor-pointer hover:text-orange'><Link to="/">Discount</Link></p>
                <p className='font-normal text-base cursor-pointer hover:text-orange'><Link to="/">F.A.Q</Link></p>
              </div>
            </div>
            <div className="custom">
              <p className='mb-5 font-semibold text-base'>Customer Service</p>
              <div className='flex flex-col gap-4'>
                <p className='font-normal text-base cursor-pointer hover:text-orange'><Link to="/contact">Contact Us</Link></p>
                <p className='font-normal text-base cursor-pointer hover:text-orange'><Link to="/">Shipping</Link></p>
                <p className='font-normal text-base cursor-pointer hover:text-orange'><Link to="/">Returns</Link></p>
                <p className='font-normal text-base cursor-pointer hover:text-orange'><Link to="/">Order Tracking</Link></p>
              </div>
            </div>
            <div className="localisation w-44">
              <p className='mb-5 font-semibold text-base'>Store</p>
              <div className='flex flex-col gap-4'>
                <p className='font-normal text-base'>8592 Fairground St. Tallahassee, FL 32303</p>
                <div>
                  <p className='font-normal text-base'>+379 871-8371</p>
                  <p className='font-normal text-base'>contact@petshop.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className='flex justify-between'>
              <p className='text-sm text-black/50'> © Copyright Pet Shop  2024. Design by Figma. guru</p>
              <div className="carts flex gap-4">
                <span><IconBrandVisa stroke={2} /></span>
                <span><IconBrandMastercard stroke={2} /></span>
                <span><IconBrandPaypal stroke={2} /></span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer