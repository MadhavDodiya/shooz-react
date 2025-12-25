import React from "react";

function Home() {
    return (
        <>
            <div className="container-fluid bgimg1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
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
                        <div className="col-lg-4">
                            <div className="container bgimg2 py-5">
                                <p className='text-[12px] font-bold'>TRENDING</p>
                                <p className='text-3xl font-semibold py-4'>Men <br /> Collection</p>
                                <button className='text-pink-500 border-b border-pink-500 font-medium'><a href="">SHOP NOW</a></button>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="container bgimg3 py-5">
                                <p className='text-[12px] font-bold'>TRENDING</p>
                                <p className='text-3xl font-semibold py-4'>Women <br /> Collection</p>
                                <button className='text-pink-500 border-b border-pink-500 font-medium'><a href="">SHOP NOW</a></button>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
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
                <p className='text-5xl text-black font-semibold py-3'>Sneakers & Kicks</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">

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
                            <h3 className="font-semibold">classNameic Leather Sneakers</h3>
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
                        <div className="col-lg-4"></div>
                        <div className="col-lg-8">
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

            

        </>
    );
}

export default Home;
