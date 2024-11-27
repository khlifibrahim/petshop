import React, {useState} from 'react'
import { IconArrowLeft, IconArrowRight, IconPlayerPlayFilled } from '@tabler/icons-react';

import Hero from '../../Components/Hero/Hero'
import man from '../../Assets/images/man.jpg'
import logoMan from '../../Assets/images/name-logo.png'
import w1 from '../../Assets/images/woman-1.jpg'
import w2 from '../../Assets/images/woman-2.jpg'
import w3 from '../../Assets/images/woman-3.jpg'
import t1 from '../../Assets/images/t1.jpg'
import t2 from '../../Assets/images/t2.jpg'
import shap from '../../Assets/images/testimonoial-shap.png'
import bg from '../../Assets/images/cat-fornitures.jpg'

function About() {
    const testimonials = [
        {
            image: t1,
            name: "Gerald Ferguson",
            role: "Customer",
            testimonial: "Morbi viverra eleifend in cras orci a leo tellus. Nunc purus adipiscing diam aliquet lorem nunc. Ipsum euismod risus amet eget non. Pulvinar condimentum ultricies tellus a non pellentesque odio pellentesque blandit. Aliquet et massa eget vitae justo tellus donec ac enim. Rhoncus adipiscing cursus...",
            rating: 5
        },
        {
            image: t2,
            name: "Jane Doe",
            role: "Business Owner",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
            rating: 4
        },
        {
            image: w1,
            name: "John Smith",
            role: "Freelancer",
            testimonial: "This product has been a game-changer for my business. It's easy to use and highly effective.",
            rating: 5
        },
        {
            image: w2,
            name: "Sarah Johnson",
            role: "Student",
            testimonial: "I've been using this service for a year now, and I'm always impressed with the quality of work.",
            rating: 4
        },
        {
            image: w3,
            name: "Michael Brown",
            role: "Marketer",
            testimonial: "This tool has helped me streamline my marketing efforts and increase my ROI.",
            rating: 5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };


  return (
    <div className='max-w-7xl m-auto '>
        <Hero title={"If animals could talk, they’d talk about us!"}/>

    {/* About Store */}
        <div className="div py-[60px] flex flex-col gap-[47px] text-left">
            <h1 className="title font-semibold text-4xl">About our store</h1>
            <div className="div text-base font-normal flex justify-between gap-[110px]">
                <p>At et vehicula sodales est proin turpis pellentesque sinulla a aliquam amet rhoncus quisque eget sit. Sociis blandit et pellentesque aliquet at quisque tortor lacinia nullam. Mattis aenean scelerisque dui libero cras arcu in egestas sagittis.</p>
                <p>Aliquet ultrices risus dolor gravida. Faucibus sodales semper a magnis sapien viverra purus sed tortor. Amet risus blandit nunc odio rutrum. Adipiscing tincidunt imperdiet at cursus ipsum vulputate pharetra.</p>
            </div>
            <div className="div flex justify-between items-start">
                <div className="div">
                    <p className="font-Inter font-semibold text-orange text-3xl">2K+</p>
                    <p className="text-base">Happy Clints</p>
                </div>
                <div className="div">
                    <p className="font-Inter font-semibold text-orange text-3xl">72</p>
                    <p className="text-base">Brands</p>
                </div>
                <div className="div">
                    <p className="font-Inter font-semibold text-orange text-3xl">1.8K+</p>
                    <p className="text-base">Products</p>
                </div>
                <div className="div">
                    <p className="font-Inter font-semibold text-orange text-3xl">28</p>
                    <p className="text-base">Years in business</p>
                </div>
            </div>
        </div>
    {/* Founder */}
        <div className="div py-[60px] flex items-start gap-28">
            <div className="founder min-w-[550px] h-[580px] overflow-hidden rounded-3xl">
                <img src={man} alt="" />
            </div>
            <div className="text-left my-20 flex flex-col gap-10">
                <div className='flex flex-col'>
                    <h1 className='font-semibold text-4xl text-black'>Taylor Joshua</h1>
                    <p className='font-semibold text-black/60 text-base leading-[48px]'>Founder</p>
                </div>
                <p className='text-base italic text-black/80'>Nisl nunc vitae integer ridiculus ultrices quam a scelerisque est. Sollicitudin volutpat blandit maecenas ornare dictum tempor. Amet sem non rutrum et duis. Id nisi ac vitae enim neque sapien.
                Eu arcu consectetur etiam bibendum fermentum sed lobortis fringilla imperdiet. Aliquet ultrices risus dolor gravida. Faucibus sodales semper a magnis sapien viverra purus sed tortor. Amet risus blandit nunc odio rutrum
                </p>
                <img src={logoMan} alt="" className='mt-7 w-48'/>
            </div>
        </div>
    {/* Our Team */}
        <div className='pt-16 pb-32'>
            <h1 className='font-semibold text-4xl mb-10'>Our Team</h1>
            <div className='flex justify-between items-center gap-6'>
                <div className="member w-[416px]">
                    <img src={w1} className='rounded-3xl h-[416px] w-full object-cover mb-6' alt="" />
                    <div className=''>
                        <p className='font-semibold text-2xl'>Caroline Washington</p>
                        <p>Seller</p>
                    </div>
                </div>
                <div className="member w-[416px]">
                    <img src={w2} className='rounded-3xl h-[416px] w-full object-cover mb-6' alt="" />
                    <div className=''>
                        <p className='font-semibold text-2xl'>Amanda Ferguson</p>
                        <p>Seller</p>
                    </div>
                </div>
                <div className="member w-[416px]">
                    <img src={w3} className='rounded-3xl h-[416px] w-full object-cover mb-6' alt="" />
                    <div className=''>
                        <p className='font-semibold text-2xl'>Averi Maddox</p>
                        <p>Seller</p>
                    </div>
                </div>
            </div>
        </div>

    {/* Testimonials */}
    <div className="testimonial">
        <div className="inner py-12">
            <div className='flex justify-between items-center gap-[72px]'>
                <div className='flex flex-col gap-10 text-left'>
                    <div className='gap-5'>
                        <span className='text-orange font-bold text-base'>Testimonials</span>
                        <h1 className='font-semibold leading-10 text-[40px]'>What people say about us</h1>
                    </div>
                    <p className='italic text-black/80 leading-[160%] text-xl'>{testimonials[currentIndex].testimonial}</p>
                    <div className="bottom flex justify-between items-center">
                        <div className='flex flex-col gap-0'>
                            <div className="name font-semibold text-2xl">{testimonials[currentIndex].name}</div>
                            <div className="role font-semibold leading-10 text-base text-black/60">{testimonials[currentIndex].role}</div>
                        </div>
                        <div>
                            <div className='flex gap-10'>
                                <button onClick={handlePrev} className='bg-black w-10 h-10 flex items-center justify-center cursor-pointer rounded-full transition-colors hover:bg-orange'><IconArrowLeft stroke={2} className='text-white'/></button>
                                <button onClick={handleNext} className='bg-black w-10 h-10 flex items-center justify-center cursor-pointer rounded-full transition-colors hover:bg-orange'><IconArrowRight stroke={2} className='text-white'/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='min-w-[567px] min-h-[540px] relative flex justify-center items-center'>
                    <div className='absolute -top-90 right-0 -z-10'>
                        <img src={shap} alt="" />
                    </div>
                    <div className=''>
                        <img src={testimonials[currentIndex].image} alt="" className='w-[366px] h-[366px] rounded-full object-cover' />
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Tutorial */}
    <div className="pt-[120px] pb-16">
        <div className="video relative h-[680px] overflow-hidden rounded-[40px] flex items-center justify-center">
            <img src={bg} alt="" className='w-full h-full blur-lg absolute object-cover -z-10'/>
            <div className="icon w-20 h-20 bg-orange rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-95">
                <IconPlayerPlayFilled className='text-white'/>
            </div>
        </div>
    </div>

    {/* instagram */}
    <div className='pt-16 pb-32'>
            <h1 className='font-semibold text-4xl mb-10'>Follow our instagram</h1>
            <div className='flex justify-between items-center gap-6'>
                <div className="member w-[306px]">
                    <img src={w1} className='rounded-3xl h-[306px] w-full object-cover mb-6' alt="" />
                </div>
                <div className="member w-[306px]">
                    <img src={w2} className='rounded-3xl h-[306px] w-full object-cover mb-6' alt="" />
                </div>
                <div className="member w-[306px]">
                    <img src={w3} className='rounded-3xl h-[306px] w-full object-cover mb-6' alt="" />
                </div>
                <div className="member w-[306px]">
                    <img src={t1} className='rounded-3xl h-[306px] w-full object-cover mb-6' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About