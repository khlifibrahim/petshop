import React from 'react'
import { IconHeart } from '@tabler/icons-react';
import prod1 from '../../Assets/images/pet-food-1.jpg'
import prod2 from '../../Assets/images/pet-food-2.jpg'
import prod3 from '../../Assets/images/pet-food-3.jpg'

function Best() {
  const products = [
    {
        "name": "Premium Dog Food",
        "price": "$18.99",
        "image": prod2
    },
    {
      "name": "Premium Cat Food",
        "price": "$18.99",
        "image": prod1
    },
    {
        "name": "Premium Dog Food",
        "price": "$18.99",
        "image": prod3
      },
      {
          "name": "Premium Dog Food",
          "price": "$18.99",
          "image": prod2
      },
    {
        "name": "Premium Cat Food",
        "price": "$18.99",
        "image": prod1
    },
    {
        "name": "Premium Dog Food",
        "price": "$18.99",
        "image": prod3
    },
    {
        "name": "Premium Cat Food",
        "price": "$18.99",
        "image": prod1
    },
    {
        "name": "Premium Dog Food",
        "price": "$18.99",
        "image": prod3
    }
]
  return (
    <div className='max-w-7xl m-auto flex flex-col gap-16 justify-center items-center pt-14 pb-[120px]'>
      <h1 className='font-semibold text-[40px] text-center'>Featured products</h1>
      <div className='cards flex justify-between items-center flex-wrap gap-6'>
        {products.map((product) => (
          <div className='relative text-left rounded-[20px] w-[280px] h-[398px] overflow-hidden'>
            <img src={product.image} alt="" className='w-full h-full bg-bottom bg-cover'/>
            <div className="flex justify-between bg-white p-4 absolute bottom-0 w-full z-10">
                <div className="flex flex-col gap-3">
                  <p className='font-semibold text-[20px]'>{product.name}</p>
                  <p className='font-normal text-[16px] text-black/60'>{product.price}</p>
                </div>
                <IconHeart stroke={2} className='text-orange cursor-pointer transition-transform hover:scale-105'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Best