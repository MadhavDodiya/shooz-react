import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const [count, setCount] = useState();

    const navigate = useNavigate();

    return (
        <>
            {/* <div className="container-fluid bgimg1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-12"></div>
                        <div className="col-md-6 col-sm-6 col-12">
                            <div className="container-fluid py-5">
                                <p className='text-[15px] py-3 text-white'>ELEVET YOUR LOOK</p>
                                <h1 className='text-4xl py-2 font-semibold text-white'>Find The Perfect Pair Of Shoes To Complete</h1>
                                <p className='text-[18px] text-white py-3'>Explore our wide range of style, colors, and meterials to find the perfect shoes for any occasion</p>
                                <button className='bg-pink-500 hover:bg-black px-4 py-2.5 text-white'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="bgimg1 w-full">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] items-center">

                        {/* Empty Left Side (for background focus) */}
                        <div className="hidden md:block"></div>

                        {/* Content */}
                        <div className="py-12 md:py-20">
                            <p className="text-sm md:text-base text-white tracking-wide mb-3">
                                ELEVATE YOUR LOOK
                            </p>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4">
                                Find The Perfect Pair Of Shoes To Complete
                            </h1>

                            <p className="text-base md:text-lg text-white mb-6 max-w-lg">
                                Explore our wide range of styles, colors, and materials to find the
                                perfect shoes for any occasion.
                            </p>

                            <button className="bg-pink-500 hover:bg-black transition px-8 py-2 text-white text-sm md:text-base font-medium">
                                Shop Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            {/* <div className="container-fluid py-5">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="container bgimg2 py-5">
                                <p className='text-[12px] font-bold'>TRENDING</p>
                                <p className='text-3xl font-semibold py-4'>Men <br /> Collection</p>
                                <button className='text-pink-500 border-b border-pink-500 font-medium'><a href="">SHOP NOW</a></button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="container bgimg3 py-5">
                                <p className='text-[12px] font-bold'>TRENDING</p>
                                <p className='text-3xl font-semibold py-4'>Women <br /> Collection</p>
                                <button className='text-pink-500 border-b border-pink-500 font-medium'><a href="">SHOP NOW</a></button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="container bgimg4 py-5">
                                <p className='text-[12px] font-bold'>TRENDING</p>
                                <p className='text-3xl font-semibold py-4'>Kid <br /> Collection</p>
                                <button className='text-pink-500 border-b border-pink-500 font-medium'><a href="">SHOP NOW</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="bgimg2 min-h-[300px] flex items-center">
                            <div className="p-6">
                                <p className="text-xs font-bold">TRENDING</p>
                                <p className="text-3xl font-semibold py-4 leading-tight">
                                    Men <br /> Collection
                                </p>
                                <a
                                    href="#"
                                    className="text-pink-500 border-b border-pink-500 font-medium inline-block"
                                >
                                    SHOP NOW
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bgimg3 min-h-[300px] flex items-center">
                            <div className="p-6">
                                <p className="text-xs font-bold">TRENDING</p>
                                <p className="text-3xl font-semibold py-4 leading-tight">
                                    Women <br /> Collection
                                </p>
                                <a
                                    href="#"
                                    className="text-pink-500 border-b border-pink-500 font-medium inline-block"
                                >
                                    SHOP NOW
                                </a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bgimg4 min-h-[300px] flex items-center">
                            <div className="p-6">
                                <p className="text-xs font-bold">TRENDING</p>
                                <p className="text-3xl font-semibold py-4 leading-tight">
                                    Kid <br /> Collection
                                </p>
                                <a
                                    href="#"
                                    className="text-pink-500 border-b border-pink-500 font-medium inline-block"
                                >
                                    SHOP NOW
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container-fluid text-center text-gray-500">
                <p>The latest trends in athletic footwear</p>
                <p className='text-4xl text-black font-semibold py-3'>Sneakers & Kicks</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 mb-5">

                {/* Tabs */}
                <div className="flex justify-center gap-10 text-sm font-medium uppercase mb-10">
                    <button className="tab-btn" data-tab="featured">Featured</button>
                    <button className="tab-btn" data-tab="new">New Arrivals</button>
                    <button className="tab-btn" data-tab="best">Best Seller</button>
                </div>

                {/* Products Wrapper  */}
                <div id="product-wrapper container-fluid">

                    {/* FEATURED */}
                    {/* <div className="container tab-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" id="featured">
                        <div className="">
                            <img src="src/assets/image/imgi_63_product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.png" className="mx-auto mb-4" />
                            <p className="text-sm text-gray-500">$25.00</p>
                            <h3 className="font-semibold ">classNameic White Tennis</h3>
                            <p className="text-gray-400 text-sm">SportyFeet</p>
                            <hr className='text-gray-500 pt-2 mt-2' />
                            <button className='text-[15px] hover:text-red-500'><i className="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-eye"></i></a></button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-heart"></i></a></button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-arrows-angle-contract"></i></a></button>
                        </div>

                        <div className="">
                            <img src="src/assets/image/imgi_64_product-19_323f61e6-cfd6-4407-823a-273f154d188c.png" className="mx-auto mb-4" />
                            <p className="text-sm text-gray-500">$25.00</p>
                            <h3 className="font-semibold">Waterproof Hiking Boots</h3>
                            <p className="text-gray-400 text-sm">TrailGear</p>
                            <hr className='text-gray-500 pt-2 mt-2' />
                            <button className='text-[15px] hover:text-red-500'><i className="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-eye"></i></a></button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-heart"></i></a></button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-arrows-angle-contract"></i></a></button>
                        </div>

                        <div className="">
                            <img src="src/assets/image/imgi_65_product-3_be4a38ab-621f-46d5-a126-3488687e10f6.png" className="mx-auto mb-4" />
                            <p className="text-sm text-gray-500">$21.00</p>
                            <h3 className="font-semibold">classNameic Leather</h3>
                            <p className="text-gray-400 text-sm">UrbanStep</p>
                            <hr className='text-gray-500 pt-2 mt-2' />
                            <button className='text-[15px] hover:text-red-500'><i className="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-eye"></i></a></button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-heart"></i></a></button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-arrows-angle-contract"></i></a></button>
                        </div>

                        <div className="">
                            <img src="src/assets/image/imgi_66_product-26_a72ab182-4323-4754-aa41-d64401571e17.png" className="mx-auto mb-4" />
                            <p className="text-sm text-gray-500">$25.00</p>
                            <h3 className="font-semibold">High-Top Canvas Sneakers</h3>
                            <p className="text-gray-400 text-sm">TrendyFeet</p>
                            <hr className='text-gray-500 pt-2 mt-2' />
                            <button className='text-[15px] hover:text-red-500'><i className="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-eye"></i></a></button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-heart"></i></a></button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-arrows-angle-contract"></i></a></button>
                        </div>
                    </div> */}
                    <div
                        className="max-w-7xl mx-auto px-4 tab-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                        id="featured"
                    >
                        {/* CARD */}
                        <div className="border p-4 hover:shadow-lg transition">
                            <img
                                src="src/assets/image/imgi_63_product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.png"
                                className="mx-auto mb-4"
                                alt=""
                            />

                            <p className="text-sm text-gray-500">$25.00</p>
                            <h3 className="font-semibold">Classic White Tennis</h3>
                            <p className="text-gray-400 text-sm">SportyFeet</p>

                            <hr className="my-3" />

                            <div className="flex items-center justify-between text-sm">
                                <button className="hover:text-red-500 flex items-center gap-2">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    ADD TO CART
                                </button>

                                <div className="flex gap-3 text-base">
                                    <i className="bi bi-eye cursor-pointer"></i>
                                    <i className="bi bi-heart cursor-pointer"></i>
                                    <i className="bi bi-arrows-angle-contract cursor-pointer"></i>
                                </div>
                            </div>
                        </div>

                        {/* DUPLICATE SAME CARD STRUCTURE */}
                        <div className="border p-4 hover:shadow-lg transition">
                            <img
                                src="src/assets/image/imgi_64_product-19_323f61e6-cfd6-4407-823a-273f154d188c.png"
                                className="mx-auto mb-4"
                                alt=""
                            />
                            <p className="text-sm text-gray-500">$25.00</p>
                            <h3 className="font-semibold">Waterproof Hiking Boots</h3>
                            <p className="text-gray-400 text-sm">TrailGear</p>
                            <hr className="my-3" />
                            <div className="flex items-center justify-between text-sm">
                                <button className="hover:text-red-500 flex items-center gap-2">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    ADD TO CART
                                </button>
                                <div className="flex gap-3 text-base">
                                    <i className="bi bi-eye cursor-pointer"></i>
                                    <i className="bi bi-heart cursor-pointer"></i>
                                    <i className="bi bi-arrows-angle-contract cursor-pointer"></i>
                                </div>
                            </div>
                        </div>

                        <div className="border p-4 hover:shadow-lg transition">
                            <img
                                src="src/assets/image/imgi_64_product-19_323f61e6-cfd6-4407-823a-273f154d188c.png"
                                className="mx-auto mb-4"
                                alt=""
                            />
                            <p className="text-sm text-gray-500">$25.00</p>
                            <h3 className="font-semibold">Waterproof Hiking Boots</h3>
                            <p className="text-gray-400 text-sm">TrailGear</p>
                            <hr className="my-3" />
                            <div className="flex items-center justify-between text-sm">
                                <button className="hover:text-red-500 flex items-center gap-2">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    ADD TO CART
                                </button>
                                <div className="flex gap-3 text-base">
                                    <i className="bi bi-eye cursor-pointer"></i>
                                    <i className="bi bi-heart cursor-pointer"></i>
                                    <i className="bi bi-arrows-angle-contract cursor-pointer"></i>
                                </div>
                            </div>
                        </div>

                        <div className="border p-4 hover:shadow-lg transition">
                            <img
                                src="src/assets/image/imgi_64_product-19_323f61e6-cfd6-4407-823a-273f154d188c.png"
                                className="mx-auto mb-4"
                                alt=""
                            />
                            <p className="text-sm text-gray-500">$25.00</p>
                            <h3 className="font-semibold">Waterproof Hiking Boots</h3>
                            <p className="text-gray-400 text-sm">TrailGear</p>
                            <hr className="my-3" />
                            <div className="flex items-center justify-between text-sm">
                                <button className="hover:text-red-500 flex items-center gap-2">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    ADD TO CART
                                </button>
                                <div className="flex gap-3 text-base">
                                    <i className="bi bi-eye cursor-pointer"></i>
                                    <i className="bi bi-heart cursor-pointer"></i>
                                    <i className="bi bi-arrows-angle-contract cursor-pointer"></i>
                                </div>
                            </div>
                        </div>

                        {/* Repeat for remaining products */}
                    </div>
                </div>
            </div>

            {/* <div className="container-fluid bgimg5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-12"></div>
                        <div className="col-md-6 col-sm-6 col-12">
                            <div className="container-fluid py-5">
                                <p className='text-[15px] py-3 text-black'>COMFORT MEETS FASHION</p>
                                <h1 className='text-4xl py-2 font-semibold text-black'>Discover shoes that look great</h1>
                                <h1 className='text-4xl py-2 font-semibold text-black'>and feel even better</h1>
                                <p className='text-[12px] text-black py-3'>Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.</p>
                                <button className='bg-pink-500 hover:bg-black px-4 py-2.5 text-white'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="bgimg5 w-full">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[450px] items-center">

                        {/* Empty Left Column (for background focus) */}
                        <div className="hidden md:block"></div>

                        {/* Content */}
                        <div className="py-12 md:py-20">
                            <p className="text-sm md:text-base text-black mb-3 tracking-wide">
                                COMFORT MEETS FASHION
                            </p>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight">
                                Discover shoes that look great
                            </h1>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight mt-1">
                                and feel even better
                            </h1>

                            <p className="text-sm md:text-base text-black mt-4 max-w-lg">
                                Our collection features comfortable and stylish footwear designed to
                                keep your feet happy all day long.
                            </p>

                            <button className="mt-6 bg-pink-500 hover:bg-black transition px-6 py-3 text-white text-sm md:text-base font-medium">
                                Shop Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            {/* <div className="relative overflow-hidden bg-red-400 text-white text-sm">
                Marquee Wrapper
                <div className="flex overflow-hidden">
                    <div className="flex min-w-full animate-marquee gap-20 px-24 py-2">
                        <span>
                            Enjoy 20% off your entire order with the code <b>SHOEFRESH20</b>.
                        </span>
                        <span>
                            Get 15% off your first purchase when you sign up for our newsletter.
                        </span>
                    </div>
                    Duplicate for seamless loop
                    <div className="flex min-w-full animate-marquee gap-20 px-24 py-2">
                        <span>
                            Enjoy 20% off your entire order with the code <b>SHOEFRESH20</b>.
                        </span>
                        <span>
                            Get 15% off your first purchase when you sign up for our newsletter.
                        </span>
                    </div>
                </div>
            </div> */}

            <div className="relative overflow-hidden bg-red-400 text-white text-xs sm:text-sm">
                {/* Marquee Track */}
                <div className="flex overflow-hidden">

                    {/* Marquee Content */}
                    <div className="flex min-w-full animate-marquee gap-6 sm:gap-12 px-4 sm:px-12 py-2">
                        <span className="whitespace-nowrap">
                            Enjoy 20% off your entire order with the code <b>SHOEFRESH20</b>.
                        </span>
                        <span className="whitespace-nowrap">
                            Get 15% off your first purchase when you sign up for our newsletter.
                        </span>
                    </div>

                    {/* Duplicate for seamless loop */}
                    <div className="flex min-w-full animate-marquee gap-6 sm:gap-12 px-4 sm:px-12 py-2">
                        <span className="whitespace-nowrap">
                            Enjoy 20% off your entire order with the code <b>SHOEFRESH20</b>.
                        </span>
                        <span className="whitespace-nowrap">
                            Get 15% off your first purchase when you sign up for our newsletter.
                        </span>
                    </div>

                </div>
            </div>


            <div className="container-fluid text-center text-gray-500 my-5">
                <p className="text-[12px]">Stylish and comfortable for every season</p>
                <p className='text-4xl text-black font-semibold py-3'>Boots & Booties</p>
                <p className="text-[12px]">Check out our collection of the top New Products <br /> that encourage conversion.</p>
            </div>

            {/* <div className="container-fluid my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 d-flex justify-content-center img-card-wrapper position-relative " style={{ cursor: "pointer" }}>
                            <div className="img-card">
                                <img src="src/assets/image/imgi_31_col-5.png" className="img-fluid" alt="" />
                            </div>
                            <button className="absolute text-black bg-gray-50 hover:bg-pink-500 hover:text-gray-50 transition-all py-2 px-14 bottom-10">Athletic Footwear 8</button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 d-flex justify-content-center img-card-wrapper position-relative " style={{ cursor: "pointer" }}>
                            <div className="img-card">
                                <img src="src/assets/image/imgi_32_col-6.png" className="img-fluid" alt="" />
                            </div>
                            <button className="absolute text-black bg-gray-50 hover:bg-pink-500 hover:text-gray-50 transition-all py-2 px-14 bottom-10">Luxury Leather Shoes 8</button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 d-flex justify-content-center img-card-wrapper position-relative " style={{ cursor: "pointer" }}>
                            <div className="img-card">
                                <img src="src/assets/image/imgi_29_col-1.png" className="img-fluid" alt="" />
                            </div>
                            <button className="absolute text-black bg-gray-50 hover:bg-pink-500 hover:text-gray-50 transition-all py-2 px-14 bottom-10">Sustainble Footwear 8</button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 d-flex justify-content-center img-card-wrapper position-relative " style={{ cursor: "pointer" }}>
                            <div className="img-card">
                                <img src="src/assets/image/imgi_30_col-2.png" className="img-fluid" alt="" />
                            </div>
                            <button className="absolute text-black bg-gray-50 hover:bg-pink-500 hover:text-gray-50 transition-all py-2 px-14 bottom-10">Sandles & Slides 8</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                        {/* CARD */}
                        <div className="relative flex justify-center cursor-pointer group">
                            <img
                                src="src/assets/image/imgi_31_col-5.png"
                                alt=""
                                className="w-full object-cover"
                            />
                            <button className="absolute bottom-6 bg-gray-50 text-black px-6 py-2 text-sm font-medium 
          group-hover:bg-pink-500 group-hover:text-white transition">
                                Athletic Footwear 8
                            </button>
                        </div>

                        {/* CARD */}
                        <div className="relative flex justify-center cursor-pointer group">
                            <img
                                src="src/assets/image/imgi_32_col-6.png"
                                alt=""
                                className="w-full object-cover"
                            />
                            <button className="absolute bottom-6 bg-gray-50 text-black px-6 py-2 text-sm font-medium 
          group-hover:bg-pink-500 group-hover:text-white transition">
                                Luxury Leather Shoes 8
                            </button>
                        </div>

                        {/* CARD */}
                        <div className="relative flex justify-center cursor-pointer group">
                            <img
                                src="src/assets/image/imgi_29_col-1.png"
                                alt=""
                                className="w-full object-cover"
                            />
                            <button className="absolute bottom-6 bg-gray-50 text-black px-6 py-2 text-sm font-medium 
          group-hover:bg-pink-500 group-hover:text-white transition">
                                Sustainable Footwear 8
                            </button>
                        </div>

                        {/* CARD */}
                        <div className="relative flex justify-center cursor-pointer group">
                            <img
                                src="src/assets/image/imgi_30_col-2.png"
                                alt=""
                                className="w-full object-cover"
                            />
                            <button className="absolute bottom-6 bg-gray-50 text-black px-6 py-2 text-sm font-medium 
          group-hover:bg-pink-500 group-hover:text-white transition">
                                Sandals & Slides 8
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            {/* <div className="container-fluid bg-[#333333] my-5">
                <div className="container text-white text-center py-5">
                    <p className="text-[11px]">FASHION SNEAKERS</p>
                    <p className="text-[35px]">Timeless styles for everyday wear</p>
                    <span className="text-[11px]">High-performance footwear for sports and <br /> workouts</span>
                </div>

                <div className="container pb-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="container image1">
                                <div className="container pt-5">
                                    <span className="text-white text-[14px] py-2">COMFORT MEETS FASHION</span>
                                    <p className="text-white text-4xl py-3">Discover shoes <br />that look great</p>
                                    <button className="text-white border-b-2 px-2">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="container image2">
                                <div className="container pt-5">
                                    <span className="text-white text-[14px] py-2">COMFORT MEETS FASHION</span>
                                    <p className="text-white text-4xl py-3">Discover shoes <br />that look great</p>
                                    <button className="text-white border-b-2 px-2">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="container image3">
                                <div className="container pt-5">
                                    <span className="text-white text-[14px] py-2">COMFORT MEETS FASHION</span>
                                    <p className="text-white text-4xl py-3">Discover shoes <br />that look great</p>
                                    <button className="text-white border-b-2 px-2">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pb-5 mb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="container image4">
                                <div className="container pt-[100px] pb-5">
                                    <span className="text-white text-[14px] py-2">COMFORT MEETS FASHION</span>
                                    <p className="text-white text-4xl py-3">Discover shoes <br />that look great</p>
                                    <button className="text-white border-b-2 px-2">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="container image5">
                                <div className="container pt-[100px] pb-5">
                                    <span className="text-white text-[14px] py-2">COMFORT MEETS FASHION</span>
                                    <p className="text-white text-4xl py-3">Discover shoes <br />that look great</p>
                                    <button className="text-white border-b-2 px-2">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="bg-[#333333] my-10">

                {/* HEADER */}
                <div className="max-w-7xl mx-auto text-white text-center py-10 px-4">
                    <p className="text-xs tracking-widest">FASHION SNEAKERS</p>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-semibold py-3">
                        Timeless styles for everyday wear
                    </p>
                    <span className="text-xs sm:text-sm opacity-80">
                        High-performance footwear for sports and <br className="hidden sm:block" />
                        workouts
                    </span>
                </div>

                {/* TOP 3 IMAGES */}
                <div className="max-w-7xl mx-auto px-4 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {["image1", "image2", "image3"].map((img, index) => (
                            <div
                                key={index}
                                className={`h-[320px] sm:h-[360px] bg-cover bg-center ${img} flex items-start`}
                            >
                                <div className="p-6 text-white">
                                    <span className="text-sm block">COMFORT MEETS FASHION</span>
                                    <p className="text-2xl sm:text-3xl font-semibold py-3">
                                        Discover shoes <br /> that look great
                                    </p>
                                    <button className="border-b-2 border-white pb-1 hover:text-pink-400 transition">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* BOTTOM 2 IMAGES */}
                <div className="max-w-7xl mx-auto px-4 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {["image4", "image5"].map((img, index) => (
                            <div
                                key={index}
                                className={`h-[360px] md:h-[420px] bg-cover bg-center ${img} flex items-end`}
                            >
                                <div className="p-8 text-white">
                                    <span className="text-sm block">COMFORT MEETS FASHION</span>
                                    <p className="text-2xl sm:text-3xl font-semibold py-3">
                                        Discover shoes <br /> that look great
                                    </p>
                                    <button className="border-b-2 border-white pb-1 hover:text-pink-400 transition">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>


            <div className="container-fluid my-5">
                <div className="container text-center py-5">
                    <p className="text-[11px] text-gray-500">Season's End Sale</p>
                    <p className="text-[50px] font-semibold">Huge discounts on last season's styles</p>
                    <span className="text-[12px] text-gray-500">Himenaeos nascetur tristique consequat mus ad. <br /> Accumsan fringilla in laoreet id bibendum et.</span>
                </div>
            </div>

            {/* <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="src/assets/image/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.avif" className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <span className="hover:text-pink-500">Classic white tennis sneakers</span>
                                        <p>$ 25.00</p>
                                    </div><hr className="bg-gray-500 my-3" />
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="src/assets/image/product-17.avif" className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <span className="hover:text-pink-500">Waterproof Hiking Boots</span>
                                        <p>$ 25.00</p>
                                    </div><hr className="bg-gray-500 my-3" />
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="src/assets/image/imgi_58_product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <span className="hover:text-pink-500">Classic leather sneakers</span>
                                        <p>$ 25.00</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="src/assets/image/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.avif" className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <span className="hover:text-pink-500">Classic white tennis sneakers</span>
                                        <p>$ 25.00</p>
                                    </div><hr className="bg-gray-500 my-3" />
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="src/assets/image/product-17.avif" className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <span className="hover:text-pink-500">Waterproof Hiking Boots</span>
                                        <p>$ 25.00</p>
                                    </div><hr className="bg-gray-500 my-3" />
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="src/assets/image/imgi_58_product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <span className="hover:text-pink-500">Classic leather sneakers</span>
                                        <p>$ 25.00</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="src/assets/image/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.avif" className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <span className="hover:text-pink-500">Classic white tennis sneakers</span>
                                        <p>$ 25.00</p>
                                    </div><hr className="bg-gray-500 my-3" />
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="src/assets/image/product-17.avif" className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <span className="hover:text-pink-500">Waterproof Hiking Boots</span>
                                        <p>$ 25.00</p>
                                    </div><hr className="bg-gray-500 my-3" />
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="src/assets/image/imgi_58_product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <span className="hover:text-pink-500">Classic leather sneakers</span>
                                        <p>$ 25.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="max-w-7xl mx-auto px-4 py-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {[1, 2, 3].map((col) => (
                        <div key={col} className="space-y-6">

                            {/* ITEM */}
                            <div className="flex gap-4 items-start border-b border-gray-300 pb-4">
                                <img
                                    src="src/assets/image/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.avif"
                                    alt=""
                                    className="w-20 h-20 object-cover"
                                />
                                <div>
                                    <p className="text-sm font-medium hover:text-pink-500 cursor-pointer">
                                        Classic white tennis sneakers
                                    </p>
                                    <p className="text-sm font-semibold">$ 25.00</p>
                                </div>
                            </div>

                            {/* ITEM */}
                            <div className="flex gap-4 items-start border-b border-gray-300 pb-4">
                                <img
                                    src="src/assets/image/product-17.avif"
                                    alt=""
                                    className="w-20 h-20 object-cover"
                                />
                                <div>
                                    <p className="text-sm font-medium hover:text-pink-500 cursor-pointer">
                                        Waterproof Hiking Boots
                                    </p>
                                    <p className="text-sm font-semibold">$ 25.00</p>
                                </div>
                            </div>

                            {/* ITEM */}
                            <div className="flex gap-4 items-start">
                                <img
                                    src="src/assets/image/imgi_58_product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg"
                                    alt=""
                                    className="w-20 h-20 object-cover"
                                />
                                <div>
                                    <p className="text-sm font-medium hover:text-pink-500 cursor-pointer">
                                        Classic leather sneakers
                                    </p>
                                    <p className="text-sm font-semibold">$ 25.00</p>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </div>


            {/* <div className="container-fluid mt-20">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="container">
                                <p className="text-[15px] font-semibold">OUR MOST POPULAR STYLE</p>
                                <h1 className="text-[50px] font-semibold py-4">Save big on shoes <br /> from last season</h1>
                                <p className="text-[18px] text-justify">Morbi natoque id finibus natoque sapien turpis elementum maximus. Sociosqu auctor a urna consequat laoreet nisi accumsan magna. Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est habitant lacus sagittis vitae. <br />
                                    <br />Molestie dolor mus vitae penatibus sed lectus convallis ut neque. Leo elementum euismod penatibus cras sociosqu aliquet tellus.</p>
                                <button className="bg-red-500 hover:bg-black text-white font-semibold px-16 py-3 my-4">SHOP NOW</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="src/assets/image/imgi_38_video-pic.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="mt-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <p className="text-sm font-semibold tracking-wide">
                                OUR MOST POPULAR STYLE
                            </p>

                            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-semibold py-4 leading-tight">
                                Save big on shoes from last season
                            </h1>

                            <p className="text-base sm:text-lg text-justify text-gray-700">
                                Morbi natoque id finibus natoque sapien turpis elementum maximus.
                                Sociosqu auctor a urna consequat laoreet nisi accumsan magna.
                                Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex
                                est habitant lacus sagittis vitae.
                                <br /><br />
                                Molestie dolor mus vitae penatibus sed lectus convallis ut neque.
                                Leo elementum euismod penatibus cras sociosqu aliquet tellus.
                            </p>

                            <button className="mt-6 bg-red-500 hover:bg-black transition-all text-white font-semibold px-10 sm:px-16 py-3">
                                SHOP NOW
                            </button>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <img
                                src="src/assets/image/imgi_38_video-pic.png"
                                alt="Shoes"
                                className="w-full max-w-md lg:max-w-full object-contain"
                            />
                        </div>

                    </div>
                </div>
            </div>


            <div className="container-fluid gcolor py-12 mt-20">
                <div className="container text-center">
                    <p className="inline pe-36 text-white font-semibold">
                        Discover Our Stores: Your Local Shoe Haven
                    </p>
                    <button className="bg-blue-500 text-white font-semibold text-[15px] px-5 py-2 mx-12">FIND STORE</button>
                </div>
            </div>

            <div className="container-fluid bg-[#f9f9f9] pt-20">
                <div className="container text-center">
                    <p className="text-4xl font-semibold">Customer Feedback Highlight</p>
                    <p className="text-gray-500">Laoreet ridiculus congue magna malesuada <br /> phasellus condimentum taciti mus primis.</p>
                </div>
            </div>

            {/* <div className="container-fluid py-10 bg-[#f9f9f9]">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_39_text-logo-1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_40_text-logo-2.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_41_text-logo-3.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_42_text-logo-11.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_43_text-logo-5.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_44_text-logo-6.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_45_text-logo-7.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_46_text-logo-8.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_47_text-logo-9.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_48_text-logo-10.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
<div className="bg-[#f9f9f9] py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center">

      {[
        "imgi_39_text-logo-1.png",
        "imgi_40_text-logo-2.png",
        "imgi_41_text-logo-3.png",
        "imgi_42_text-logo-11.png",
        "imgi_43_text-logo-5.png",
        "imgi_44_text-logo-6.png",
        "imgi_45_text-logo-7.png",
        "imgi_46_text-logo-8.png",
        "imgi_47_text-logo-9.png",
        "imgi_48_text-logo-10.png",
      ].map((img, index) => (
        <div
          key={index}
          className="h-28 w-full flex items-center justify-center overflow-hidden"
        >
          <img
            src={`src/assets/image/${img}`}
            alt=""
            className="max-h-[150px] object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      ))}

    </div>

  </div>
</div>



            {/* <div className="container-fluid my-20">
                <div className="container">
                    <p className="text-gray-500 font-semibold text-[14px]">FROM THE BLOG</p>
                    <p className="text-5xl font-semibold py-3">Recentley Our Posts</p>
                    <p>Sit amet conse ctetur adipisicing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.</p>
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <img src="" alt="" />
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div> */}

            <section className="max-w-7xl mx-auto px-4 py-16">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-3">Recently Our Posts</h2>
                    <p className="text-gray-500 max-w-xl">
                        Sit amet consec tetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Featured Post */}
                    <div className="lg:col-span-2 relative rounded-lg overflow-hidden">
                        <img src="src/assets/image/blog-2.png" alt="Featured Post" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                            <div className="text-sm text-gray-200 flex gap-4 mb-2">
                                <span>Oct 28 2024</span>
                                <span>0 comments</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                The Future Of Footwear: A Look Ahead
                            </h3>
                        </div>
                    </div>

                    {/* Right Side Posts */}
                    <div className="flex flex-col gap-6">
                        {/* Post Item */}
                        <div className="flex gap-4">
                            <img src="" alt="" className="w-28 h-24 object-cover rounded-md" />
                            <div>
                                <div className="text-xs text-gray-400 flex gap-3 mb-1">
                                    <span>Oct 28 2024</span>
                                    <span>0 comments</span>
                                </div>
                                <h4 className="font-semibold leading-snug">
                                    Eco-Friendly Footwear: Sustainable Style
                                </h4>
                            </div>
                        </div>

                        {/* Post Item */}
                        <div className="flex gap-4">
                            <img src="" alt="" className="w-28 h-24 object-cover rounded-md" />
                            <div>
                                <div className="text-xs text-gray-400 flex gap-3 mb-1">
                                    <span>Oct 17 2024</span>
                                    <span>0 comments</span>
                                </div>
                                <h4 className="font-semibold leading-snug">
                                    The Ultimate Guide to Sneaker Care
                                </h4>
                            </div>
                        </div>

                        {/* Post Item */}
                        <div className="flex gap-4">
                            <img src="" alt="" className="w-28 h-24 object-cover rounded-md" />
                            <div>
                                <div className="text-xs text-gray-400 flex gap-3 mb-1">
                                    <span>Oct 17 2024</span>
                                    <span>0 comments</span>
                                </div>
                                <h4 className="font-semibold leading-snug">
                                    How to Style Your Favorite Sneakers
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
export default Home;
