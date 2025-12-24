import React from 'react'
import { Route, Link } from 'react-router-dom'

export default function Home() {
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

        <div class="flex justify-center mt-10">
            <div id="tabs" class="flex gap-12 border-b border-gray-300">
                <button class="tab-btn pb-3 text-sm font-semibold tracking-wide text-gray-500" id='feature'>FEATURED</button>
                <button class="tab-btn pb-3 text-sm font-semibold tracking-wide text-gray-500" id='new'>NEW ARRIVALS</button>
                <button class="tab-btn pb-3 text-sm font-semibold tracking-wide text-gray-500" id='best'>BEST SELLER</button>
            </div>
        </div>

        {/* Product-grid-1 */}
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="container-fluid">
                            <img src="/src/assets/image/imgi_63_product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.png" className='h-50' alt="" />
                            <p className='text-[15px] font-medium'>$25.00</p>
                            <p className='text-[15px] text-black font-medium'>Classic White Tennis <br /> Sneakers</p>
                            <span className='text-gray-500 text-[13px]'>SportyFeet</span><br /><hr className='text-gray-500' />
                            <button className='text-[10px]'><i class="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
                            <button className='px-1 text-black text-[13px] float-end'><a href=""><i class="bi bi-eye"></i></a></button>
                            <button className='px-1 text-black text-[13px] float-end'><a href=""><i class="bi bi-heart"></i></a></button>
                            <button className='px-1 text-black text-[13px] float-end'><a href=""><i class="bi bi-arrows-angle-contract"></i></a></button>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </div>

    </>
  )
}
