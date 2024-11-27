import React, { useState } from 'react'
import { IconHeart ,IconArrowLeft, IconArrowRight} from '@tabler/icons-react';
import ReactSlider from "react-slider";
import './style.css'
import bg from '../../Assets/images/cat-fornitures.jpg'
import w2 from '../../Assets/images/woman-2.jpg'

import img from '../../Assets/images/products/Img.png'
import img1 from '../../Assets/images/products/Img-1.png'
import img2 from '../../Assets/images/products/Img-2.png'
import img3 from '../../Assets/images/products/Img-3.png'
import img4 from '../../Assets/images/products/Img-4.png'
import img5 from '../../Assets/images/products/Img-5.png'
import img6 from '../../Assets/images/products/Img-6.png'
import img7 from '../../Assets/images/products/Img-7.png'
import img8 from '../../Assets/images/products/Img-8.png'
import img9 from '../../Assets/images/products/Img-9.png'
import img10 from '../../Assets/images/products/Img-10.png'
import img11 from '../../Assets/images/products/Img-11.png'

function Shop() {
  const products = [
    { id: 1, image: img1, name: "Pet Carrier", price: 29.99, category: "Furniture", brand: "Pet care" },
    { id: 2, image: img2, name: "Cat Bowl", price: 20.99, category: "Bowls", brand: "Natural food" },
    { id: 3, image: img3, name: "Cat Bowl", price: 18.99, category: "Bowls", brand: "Natural food" },
    { id: 4, image: img4, name: "Premium Cat Food", price: 20.99, category: "Food", brand: "Favorite pet" },
    { id: 5, image: img5, name: "Dog Bowl", price: 4.99, category: "Bowls", brand: "Dogs friend" },
    { id: 6, image: img6, name: "Cat Bed", price: 49.99, category: "Furniture", brand: "Pet care" },
    { id: 7, image: img7, name: "Dog Leash", price: 9.99, category: "Clothing", brand: "Dogs friend" },
    { id: 8, image: img8, name: "Dog Bed", price: 49.99, category: "Furniture", brand: "Favorite pet" },
    { id: 9, image: img9, name: "Premium Dog Food", price: 29.99, category: "Food", brand: "Pet food" },
    { id: 10, image: img10, name: "Dog Bowl", price: 19.99, category: "Bowls", brand: "Natural food" },
    { id: 11, image: img11, name: "Premium Dog Food", price: 24.99, category: "Food", brand: "Pet food" },
    { id: 12, image: img1, name: "Portable Pet Carrier", price: 39.99, category: "Furniture", brand: "Pet travels" },
    { id: 13, image: img2, name: "Stainless Steel Cat Bowl", price: 15.99, category: "Bowls", brand: "Natural food" },
    { id: 14, image: img3, name: "Ceramic Cat Bowl", price: 22.99, category: "Bowls", brand: "Eco pet" },
    { id: 15, image: img4, name: "Organic Cat Food", price: 25.99, category: "Food", brand: "Nature's best" },
    { id: 16, image: img5, name: "Eco-Friendly Dog Bowl", price: 6.99, category: "Bowls", brand: "Dogs care" },
    { id: 17, image: img6, name: "Luxury Cat Bed", price: 69.99, category: "Furniture", brand: "Pet dreams" },
    { id: 18, image: img7, name: "Adjustable Dog Leash", price: 12.99, category: "Clothing", brand: "Walk happy" },
    { id: 19, image: img8, name: "Comfortable Dog Bed", price: 59.99, category: "Furniture", brand: "Pet dreams" },
    { id: 20, image: img9, name: "Grain-Free Dog Food", price: 35.99, category: "Food", brand: "Healthy pet" },
    { id: 21, image: img10, name: "Large Dog Bowl", price: 14.99, category: "Bowls", brand: "Natural food" },
    { id: 22, image: img11, name: "High-Protein Dog Food", price: 30.99, category: "Food", brand: "Pet energy" },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Filter States
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const categories = [...new Set(products.map((product) => product.category))];
  const brands = [...new Set(products.map((product) => product.brand))];

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleCheckboxChange = (value, setState, state) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
    applyFilters(selectedCategories, selectedBrands, priceRange);
  };

  const handlePriceChange = (values) => {
    setPriceRange(values);
    applyFilters(selectedCategories, selectedBrands, values);
  };

  const applyFilters = (categories, brands, range) => {
    let filtered = products;

    if (categories.length > 0) {
      filtered = filtered.filter((product) => categories.includes(product.category));
    }

    if (brands.length > 0) {
      filtered = filtered.filter((product) => brands.includes(product.brand));
    }

    filtered = filtered.filter((product) => product.price >= range[0] && product.price <= range[1]);

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page
  };


  return (
    <div className='max-w-7xl m-auto '>

    <div className="inner flex py-16">
      <div className="filters w-[306px] text-left flex flex-col gap-7">
        
        <div className="filt">
          <h1 className='font-semibold text-xl mb-4'>Filter by Categories</h1>
          {categories.map((category) => (
            <div key={category}>
              <label>
                <input
                  className='mr-4 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  type="checkbox"
                  value={category}
                  onChange={() => handleCheckboxChange(category, setSelectedCategories, selectedCategories)}
                />
                {category}
              </label>
            </div>
          ))}
        </div>

          {/* price filter */}
        {/* <div className="filt">
          <h1 className='font-semibold text-xl mb-4'>Filter by Price</h1>
          
        </div> */}

        <div className="filt">
          <h1 className='font-semibold text-xl mb-4'>Filter by brands</h1>
          {categories.map((category) => (
              <div key={category}>
                <label>
                  <input
                    className='mr-4 w-4 h-4'
                    type="checkbox"
                    value={category}
                    onChange={() => handleCheckboxChange(category, setSelectedCategories, selectedCategories)}
                  />
                  {category}
                </label>
              </div>
            ))}
        </div>
        
        <div className="filt">
          <h1 className='font-semibold text-xl mb-4'>Popular products</h1>
          <div className='flex flex-col gap-3'>
            {products.slice(0, 5).map(el => (
              <div className="item flex gap-3">
                <div className="w-20 h-[56px] overflow-hidden"><img src={el.image} alt="" className='w-full h-full object-cover rounded-lg'/></div>
                <div className="details">
                  <p className='font-medium'>{el.name} </p>
                  <p>${el.price} </p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
        
        
      </div>
      <div className="products w-full">
        <div className="header flex justify-between items-center">
          <p className='font-medium text-[#6C757D] text-xl'>Showing 12-12 of 14 results</p>
          <select name="" id="">
            <option value="">Sort by latest</option>
            <option value="">Sort by latest</option>
            <option value="">Sort by latest</option>
          </select>
        </div>
        
        <div className='cards flex justify-between flex-wrap gap-6 my-16'>
            {products.map((product) => (
              <div key={product.id} className='relative text-left rounded-[20px] w-[306px] h-[400px] overflow-hidden'>
                <img src={product.image} alt="" className='w-full h-full bg-cover'/>
                <div className="flex justify-between bg-white p-4 absolute bottom-0 w-full z-10">
                    <div className="flex flex-col gap-3">
                      <p className='font-semibold text-[20px]'>{product.name}</p>
                      <p className='font-normal text-[16px] text-black'>${product.price}</p>
                    </div>
                    <IconHeart stroke={2} className='text-orange cursor-pointer transition-transform hover:scale-105'/>
                </div>
              </div>
            ))}
        </div>
        <div className="navigation">
            <div className='flex justify-between'>
              <div className="prev">
                <button className='px-[16px] py-[15px] text-[#6C757D] rounded-xl border-[#6C757D] border flex'><IconArrowLeft/> Previous</button>
              </div>
              <div className="btns flex gap-4">
                <button className='px-[9px] py-[7px] w-10 h-10 bg-orange text-white rounded-xl border-orange border'>1</button>
                <button className='px-[9px] py-[7px] w-10 h-10 text-[#6C757D] rounded-xl border-[#6C757D] border'>2</button>
              </div>
              <div className="next">
                <button className='px-[16px] py-[15px] text-[#6C757D] rounded-xl border-[#6C757D] border flex'>Next <IconArrowRight/> </button>
              </div>
            </div>
        </div>
      </div>
    </div>


    {/* Banners */}
      <div className="py-16 flex gap-6">
        <div className="video w-[636px] h-[360px] overflow-hidden rounded-[40px] flex items-center justify-center">
            <img src={bg} alt="" className='w-full h-full blur-lg object-cover'/>
        </div>
        <div className="video w-[636px] h-[360px] overflow-hidden rounded-[40px] flex items-center justify-center">
            <img src={w2} alt="" className='w-full h-full blur-lg object-cover'/>
        </div>
    </div>
    </div>
  )
}

export default Shop