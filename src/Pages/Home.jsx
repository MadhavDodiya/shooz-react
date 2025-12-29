import React from "react";

function Home() {
    return (
        <>
            <div className="container-fluid bgimg1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <div className="container-fluid py-5">
                                <p className='text-[15px] py-3 text-white'>ELEVET YOUR LOOK</p>
                                <h1 className='text-4xl py-2 font-semibold text-white'>Find The Perfect Pair Of Shoes To Complete</h1>
                                <p className='text-[18px] text-white py-3'>Explore our wide range of style, colors, and meterials to find the perfect shoes for any occasion</p>
                                <button className='bg-pink-500 hover:bg-black px-4 py-2.5 text-white'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="container bgimg2 py-5">
                                <p className='text-[12px] font-bold'>TRENDING</p>
                                <p className='text-3xl font-semibold py-4'>Men <br /> Collection</p>
                                <button className='text-pink-500 border-b border-pink-500 font-medium'><a href="">SHOP NOW</a></button>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="container bgimg3 py-5">
                                <p className='text-[12px] font-bold'>TRENDING</p>
                                <p className='text-3xl font-semibold py-4'>Women <br /> Collection</p>
                                <button className='text-pink-500 border-b border-pink-500 font-medium'><a href="">SHOP NOW</a></button>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="container bgimg4 py-5">
                                <p className='text-[12px] font-bold'>TRENDING</p>
                                <p className='text-3xl font-semibold py-4'>Kid <br /> Collection</p>
                                <button className='text-pink-500 border-b border-pink-500 font-medium'><a href="">SHOP NOW</a></button>
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
                    <div className="container tab-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" id="featured">
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
                    </div>

                    {/* NEW ARRIVALS */}
                    <div className="tab-content hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" id="new">
                        <div className="">
                            <img src="src/assets/image/imgi_66_product-26_a72ab182-4323-4754-aa41-d64401571e17.png" className="mx-auto mb-4" />
                            <p className="text-sm text-gray-500">$25.00</p>
                            <h3 className="font-semibold">High-Top Canvas Sneakers</h3>
                            <p className="text-gray-400 text-sm">TrendyFeet</p>
                            <hr className='text-gray-500 pt-2 mt-2' />
                            <button className='text-[15px] hover:bg-red-500'><i className="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
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
                            <button className='text-[15px]'><i className="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
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
                            <button className='text-[15px]'><i className="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
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
                            <button className='text-[15px]'><i className="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-eye"></i></a></button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-heart"></i></a></button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-arrows-angle-contract"></i></a></button>
                        </div>
                    </div>

                    {/* BEST SELLER */}
                    <div className="tab-content hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" id="best">
                        <div className="">
                            <img src="src/assets/image/imgi_66_product-26_a72ab182-4323-4754-aa41-d64401571e17.png" className="mx-auto mb-4" />
                            <p className="text-sm text-gray-500">$25.00</p>
                            <h3 className="font-semibold">High-Top Canvas Sneakers</h3>
                            <p className="text-gray-400 text-sm">TrendyFeet</p>
                            <hr className='text-gray-500 pt-2 mt-2' />
                            <button className='text-[15px]'><i className="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
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
                            <button className='text-[15px]'><i className="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
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
                            <button className='text-[15px]'><i className="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
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
                            <button className='text-[15px]'><i className="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-eye"></i></a></button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-heart"></i></a></button>
                            <button className='px-1 text-black text-[15px] float-end'><a href=""><i className="bi bi-arrows-angle-contract"></i></a></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bgimg5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <div className="container-fluid py-5">
                                <p className='text-[15px] py-3 text-black float-end'>COMFORT MEETS FASHION</p>
                                <h1 className='text-4xl py-2 font-semibold text-black float-right'>Discover shoes that look great</h1>
                                <h1 className='text-4xl py-2 font-semibold text-black float-right'>and feel even better</h1>
                                <p className='text-[12px] text-black py-3 float-right'>Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.</p>
                                <button className='bg-pink-500 hover:bg-black px-4 py-2.5 text-white float-right'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden bg-red-400 text-white text-sm">
                {/* Marquee Wrapper */}
                <div className="flex overflow-hidden">
                    <div className="flex min-w-full animate-marquee gap-20 px-24 py-2">
                        <span>
                            Enjoy 20% off your entire order with the code <b>SHOEFRESH20</b>.
                        </span>
                        <span>
                            Get 15% off your first purchase when you sign up for our newsletter.
                        </span>
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex min-w-full animate-marquee gap-20 px-24 py-2">
                        <span>
                            Enjoy 20% off your entire order with the code <b>SHOEFRESH20</b>.
                        </span>
                        <span>
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

            <div className="container-fluid my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center img-card-wrapper position-relative " style={{ cursor: "pointer" }}>
                            <div className="img-card">
                                <img src="src/assets/image/imgi_31_col-5.png" className="img-fluid" alt="" />
                            </div>
                            <button className="absolute text-black bg-gray-50 hover:bg-pink-500 hover:text-gray-50 transition-all py-2 px-14 bottom-10">Athletic Footwear 8</button>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center img-card-wrapper position-relative " style={{ cursor: "pointer" }}>
                            <div className="img-card">
                                <img src="src/assets/image/imgi_32_col-6.png" className="img-fluid" alt="" />
                            </div>
                            <button className="absolute text-black bg-gray-50 hover:bg-pink-500 hover:text-gray-50 transition-all py-2 px-14 bottom-10">Luxury Leather Shoes 8</button>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center img-card-wrapper position-relative " style={{ cursor: "pointer" }}>
                            <div className="img-card">
                                <img src="src/assets/image/imgi_29_col-1.png" className="img-fluid" alt="" />
                            </div>
                            <button className="absolute text-black bg-gray-50 hover:bg-pink-500 hover:text-gray-50 transition-all py-2 px-14 bottom-10">Sustainble Footwear 8</button>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center img-card-wrapper position-relative " style={{ cursor: "pointer" }}>
                            <div className="img-card">
                                <img src="src/assets/image/imgi_30_col-2.png" className="img-fluid" alt="" />
                            </div>
                            <button className="absolute text-black bg-gray-50 hover:bg-pink-500 hover:text-gray-50 transition-all py-2 px-14 bottom-10">Sandles & Slides 8</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-[#333333] my-5">
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
            </div>

            <div className="container-fluid my-5">
                <div className="container text-center py-5">
                    <p className="text-[11px] text-gray-500">Season's End Sale</p>
                    <p className="text-[50px] font-semibold">Huge discounts on last season's styles</p>
                    <span className="text-[12px] text-gray-500">Himenaeos nascetur tristique consequat mus ad. <br /> Accumsan fringilla in laoreet id bibendum et.</span>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="src/assets/image/imgi_56_product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.png" className="img-fluid" alt="" />
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
                                        <img src="src/assets/image/imgi_56_product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.png" className="img-fluid" alt="" />
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
                                        <img src="src/assets/image/imgi_56_product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.png" className="img-fluid" alt="" />
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
                                        <img src="src/assets/image/imgi_56_product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.png" className="img-fluid" alt="" />
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
                                        <img src="src/assets/image/imgi_56_product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.png" className="img-fluid" alt="" />
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
                                        <img src="src/assets/image/imgi_56_product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.png" className="img-fluid" alt="" />
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
                                        <img src="src/assets/image/imgi_56_product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.png" className="img-fluid" alt="" />
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
                                        <img src="src/assets/image/imgi_56_product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.png" className="img-fluid" alt="" />
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
                                        <img src="src/assets/image/imgi_56_product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.png" className="img-fluid" alt="" />
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
            </div>

            <div className="container-fluid mt-20">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="container">
                                <p className="text-[15px] font-semibold">OUR MOST POPULAR STYLE</p>
                                <h1 className="text-[50px] font-semibold py-4">Save big on shoes <br /> from last season</h1>
                                <p className="text-[18px] text-justify">Morbi natoque id finibus natoque sapien turpis elementum maximus. Sociosqu auctor a urna consequat laoreet nisi accumsan magna. Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est habitant lacus sagittis vitae. <br />
                                    <br />Molestie dolor mus vitae penatibus sed lectus convallis ut neque. Leo elementum euismod penatibus cras sociosqu aliquet tellus.</p>
                                <button className="bg-red-500 text-white font-semibold px-16 py-3 my-4">SHOP NOW</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="src/assets/image/imgi_38_video-pic.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid gcolor py-12 mt-20 mb-20">
                <div className="container text-center">
                    <p className="inline pe-36 text-white font-semibold">
                        Discover Our Stores: Your Local Shoe Haven
                    </p>
                    <button className="bg-blue-500 text-white font-semibold text-[15px] px-5 py-2 mx-12">FIND STORE</button>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container text-center">
                    <p className="text-4xl font-semibold">Customer Feedback Highlight</p>
                    <p className="text-gray-500">Laoreet ridiculus congue magna malesuada <br /> phasellus condimentum taciti mus primis.</p>
                </div>
            </div>

            <div className="container-fluid my-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_39_text-logo-1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_39_text-logo-1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_39_text-logo-1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_39_text-logo-1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_39_text-logo-1.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_39_text-logo-1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_39_text-logo-1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_39_text-logo-1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_39_text-logo-1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-2 mx-4">
                            <img src="src/assets/image/imgi_39_text-logo-1.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-20">
                <div className="container">
                    <p className="text-gray-500 font-semibold text-[14px]">FROM THE BLOG</p>
                    <p className="text-5xl font-semibold py-3">Recentley Our Posts</p>
                    <p>Sit amet conse ctetur adipisicing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.</p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 bgimg">
                            <img src="src/assets/image/blog-2.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-md-6">
                            <div className="container">
                                <img src="src/assets/image/blog-1.png" className="float-start h-[150px] px-3 inline w-auto" alt="" />
                                <p className="px-3 py-5 inline">Oct 28 2024 <i class="fa-regular fa-comment"></i> Comment</p><br />
                                <p className="ps-3 inline">Eco-Friendly Footwear: Sustainable Style</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
