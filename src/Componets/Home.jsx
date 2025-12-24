import React from 'react'
import { Route } from 'react-router-dom'

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

        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 bgimg2">
                        
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4"></div>
                </div>
            </div>    
        </div>      
    </>
  )
}
