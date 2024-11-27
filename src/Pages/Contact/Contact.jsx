import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Hero from '../../Components/Hero/Hero'
import { IconPhone, IconMapPin, IconMail, IconClock } from '@tabler/icons-react';

function Contact() {
  return (
    <div className='max-w-7xl m-auto '>
        <Hero title={"If animals could talk, they’d talk about us!"}/>

        <div className='py-16 flex gap-28 text-left'>
          <form action="" className='bg-semiWhite flex flex-col gap-6 p-10 rounded-3xl basis-1/2'>
            <div className='w-full flex gap-6'>
              <div className='flex flex-col gap-[6px]'>
                <label htmlFor="" className='font-semibold text-base leading-5'>First Name</label>
                <input type="text" className='rounded-md px-4 py-[9px] bg-white placeholder:text-[#6C757D]' placeholder='First name'/>
              </div>
              <div className=''>
                <label htmlFor="" className='font-semibold text-base leading-5'>Last Name</label>
                <input type="text" className='rounded-md px-4 py-[9px] bg-white placeholder:text-[#6C757D]' placeholder='Last name'/>
              </div>
            </div>
            <div className="w-full ">
              <div className='flex flex-col gap-[6px]'>
                <label htmlFor="" className='font-semibold text-base leading-5'>Email Address</label>
                <input type="email" className='rounded-md px-4 py-[9px] bg-white placeholder:text-[#6C757D]' placeholder='E-mail address'/>
              </div>
            </div>
            <div className="w-full ">
              <div className='flex flex-col gap-[6px]'>
                <label htmlFor="" className='font-semibold text-base leading-5'>Message</label>
                <textarea type="text" className='w-full h-44 rounded-md px-4 py-[9px] bg-white placeholder:text-[#6C757D]' placeholder='Your message...'/>
              </div>
            </div>
            <div className="w-full ">
              <div className='flex flex-col gap-[6px]'>
                <button className='font-semibold text-white w-60 px-5 py-4 bg-orange rounded-lg'>Send Message</button>
              </div>
            </div>

          </form>

          <div className='flex flex-col gap-10 basis-1/2'>
            <div className=''>
              <h1 className='font-semibold text-4xl text-black mb-10'>Feel free to contact us</h1>
              <p className='font-normal text-black/80 text-base'>At et vehicula sodales est proin turpis pellentesque sinulla a aliquam 
              amet rhoncus quisque eget sit. Sociis blandit et pellentesque aliquet at quisque tortor lacinia nullam</p>
            </div>
            <div className='flex flex-col gap-10'>
              <div className='flex items-center gap-5'>
                <div className='bg-orange w-10 h-10 flex items-center justify-center rounded-full'><IconMapPin stroke={2} className='text-white' /></div>
                <p className='font-semibold text-xl'>8592 Fairground St.Tallahassee, FL 32303</p>
              </div>
              <div className='flex items-center gap-5'>
                <div className='bg-orange w-10 h-10 flex items-center justify-center rounded-full'><IconMail stroke={2} className='text-white' /></div>
                <p className='font-semibold text-xl'>contact@petshop.com</p>
              </div>
              <div className='flex items-center gap-5'>
                <div className='bg-orange w-10 h-10 flex items-center justify-center rounded-full'><IconPhone stroke={2} className='text-white' /></div>
                <p className='font-semibold text-xl'>+775 378-6348</p>
              </div>
              <div className='flex items-center gap-5'>
                <div className='bg-orange w-10 h-10 flex items-center justify-center rounded-full'><IconClock stroke={2} className='text-white'/></div>
                <p className='font-semibold text-xl'>Mon - Fri: 10AM - 10PM </p>
              </div>
            </div>
          </div>
        </div>

        {/* Localisation */}

        <div className="w-full rounded-3xl py-16">
          <div className="h-[420px]">
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              style={{ height: "100%", width: "100%", borderRadius: "inherit" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>A pretty popup inside your rounded container!</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
    </div>
  )
}

export default Contact