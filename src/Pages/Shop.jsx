import React, { useState } from 'react';

export default function Shop() {
  const categories = [
    { id: "athletic", label: "Athletic Footwear", count: 8 },
    { id: "boots", label: "Boots for Every Occasion", count: 8 },
    { id: "luxury", label: "Luxury Leather Shoes", count: 8 },
    { id: "sandals", label: "Sandals & Slides", count: 8 },
    { id: "sneakers", label: "Sneakerhead’s Haven", count: 10 },
  ];

  const [activeTab, setActiveTab] = useState("athletic");


  return (
    <>
      <div className="container-fluid border-b-2">
        <div className="container my-3">
          <span className='text-red-500 active:text-red-500'>Home</span><span> / Shop</span>
        </div>
      </div>

      <div className="container-fluid bgimg10">
        <div className="container p-0 bg-[#00000053]">
          <p className='text-4xl text-center py-[155px] text-white font-semibold'>Products</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative whitespace-nowrap px-6 py-4 text-sm font-medium transition
                  ${activeTab === cat.id
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                  }`}
              >
                {cat.label}{" "}
                <span className="text-gray-400">({cat.count})</span>

                {activeTab === cat.id && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === "athletic" && (
          <p className="text-lg font-medium"></p>
        )}
        {activeTab === "boots" && (
          <p className="text-lg font-medium"></p>
        )}
        {activeTab === "luxury" && (
          <p className="text-lg font-medium"></p>
        )}
        {activeTab === "sandals" && (
          <p className="text-lg font-medium"></p>
        )}
        {activeTab === "sneakers" && (
          <p className="text-lg font-medium"></p>
        )}
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-2">
              <div className="group relative flex items-center  justify-center overflow-hidden rounded">
                {/* IMAGE */}
                <img src="src/assets/image/imgi_58_col-5.png" alt="Athletic Footwear"
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-105"/>
                {/* HOVER MESSAGE */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100
                 transition-opacity duration-300">
                  <p className="text-white font-semibold text-center">
                    Athletic Footwear
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="group relative flex items-center  justify-center overflow-hidden rounded">
                {/* IMAGE */}
                <img src="src/assets/image/col-4.png" alt="Athletic Footwear"
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-105"/>
                {/* HOVER MESSAGE */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100
                 transition-opacity duration-300">
                  <p className="text-white font-semibold text-center">
                    Athletic Footwear
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="group relative flex items-center  justify-center overflow-hidden rounded">
                {/* IMAGE */}
                <img src="src/assets/image/col-6.png" alt="Athletic Footwear"
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-105"/>
                {/* HOVER MESSAGE */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100
                 transition-opacity duration-300">
                  <p className="text-white font-semibold text-center">
                    Athletic Footwear
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="group relative flex items-center  justify-center overflow-hidden rounded">
                {/* IMAGE */}
                <img src="src/assets/image/col-2.png" alt="Athletic Footwear"
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-105"/>
                {/* HOVER MESSAGE */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100
                 transition-opacity duration-300">
                  <p className="text-white font-semibold text-center">
                    Athletic Footwear
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="group relative flex items-center  justify-center overflow-hidden rounded">
                {/* IMAGE */}
                <img src="src/assets/image/col-3.png" alt="Athletic Footwear"
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-105"/>
                {/* HOVER MESSAGE */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100
                 transition-opacity duration-300">
                  <p className="text-white font-semibold text-center">
                    Athletic Footwear
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
