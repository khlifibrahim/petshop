import React from 'react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import categ1 from '../../Assets/images/cat-bags.jpg'
import categ2 from '../../Assets/images/cat-food.jpg'
import categ3 from '../../Assets/images/cat-fornitures.jpg'
import categ4 from '../../Assets/images/cat-toys.jpg'

function Category() {
  const categories = [
    {
        "category": "Accessories",
        "productCount": 84,
        "image": categ1
    },
    {
        "category": "Food",
        "productCount": 64,
        "image": categ2
    },
    {
        "category": "Furniture",
        "productCount": 22,
        "image": categ3
    },
    {
        "category": "Bags",
        "productCount": 18,
        "image": categ4
    }
]
  return (
    <div className='max-w-7xl m-auto flex flex-col gap-[60px] py-16'>
      <div className='head flex justify-between items-center w-full'>
        <p className='font-semibold text-[40px]'>Browse by category</p>
        <div className='flex gap-10'>
          <span className='bg-black w-10 h-10 flex items-center justify-center cursor-pointer rounded-full transition-colors hover:bg-orange'><IconArrowLeft stroke={2} className='text-white'/></span>
          <span className='bg-black w-10 h-10 flex items-center justify-center cursor-pointer rounded-full transition-colors hover:bg-orange'><IconArrowRight stroke={2} className='text-white'/></span>
        </div>
      </div>
      <div className='cards flex gap-5'>
        {categories.map((category) => (
          <div className='relative text-left rounded-[20px] w-[306px] h-[308px] overflow-hidden'>
            <img src={category.image} alt="" className='w-full h-full object-cover bg-center'/>
            <div className="flex justify-between bg-white px-4 py-5 absolute bottom-0 w-full z-10">
                <div className="flex flex-col gap-3">
                  <p className='font-semibold text-[20px]'>{category.category}</p>
                  <p className='font-normal text-[16px] text-black/60'>{category.productCount} products</p>
                </div>
                <IconArrowRight stroke={2} className='text-orange cursor-pointer transition-transform hover:translate-x-1'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category