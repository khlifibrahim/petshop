import React from 'react'
import { Link } from 'react-router';
import { IconPhone, IconMapPin, IconMail, IconUserFilled } from '@tabler/icons-react';

function Contact() {
  return (
    <div className='flex justify-between items-center mx-auto my-6 max-w-7xl'>
        <div className='flex gap-2 '>
            <IconPhone stroke={2} />
            <p className='mr-6'>+379 871-8371</p>
            <IconMail stroke={2} />
            <p>contact@petshop.com</p>
        </div>
        <div>
          <Link to="/login" >
            <IconUserFilled className='hover:text-orange'/>
          </Link>
        </div>
        <div className='flex gap-2 ml-4'>
            <IconMapPin stroke={2} />
            <p className='ml-6'>8592 Fairground St. Tallahassee, FL 32303</p>
        </div>
    </div>
  )
}

export default Contact