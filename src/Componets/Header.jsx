import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
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

    <div class="bg-gray-100 text-sm">
      <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        <p>One Day Delivery Available</p>
        <div class="flex items-center gap-4">
          <a href="#" class="hover:decoration-red-500 ">Login / Register</a>
          <i class="fab fa-facebook-f hover:text-red-500"></i>
          <i class="fab fa-twitter hover:text-red-500"></i>
          <i class="fab fa-instagram hover:text-red-500"></i>
        </div>
      </div>
    </div>

    {/* NAVBAR */}
    <nav class="border-b">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between h-16">

          <div class="text-2xl font-bold">
            <img src="/src/assets/image/imgi_2_logo.png" alt="" />
          </div>

          <ul class="hidden md:flex items-center gap-8 text-sm font-medium">
            <li class="text-red-500 border-b-2 border-red-500 pb-1"><a href="#"></a>Home</li>

            <li class="flex items-center gap-1 cursor-pointer">
              <a href="">Shop <i class="fas fa-chevron-down text-xs"></i></a>
            </li>

            <li class="flex items-center gap-1 cursor-pointer">
              <a href="">Product <i class="fas fa-chevron-down text-xs"></i></a>
            </li>

            <li class="flex items-center gap-1 cursor-pointer">
              <a href="">Product <i class="fas fa-chevron-down text-xs"></i></a>
            </li>

            <li class="flex items-center gap-1 cursor-pointer">
              <a href="">Product <i class="fas fa-chevron-down text-xs"></i></a>
            </li>

            <li class="relative">
              <a href="">Buy Now</a>
              <span class="absolute -top-3 -right-6 bg-green-500 text-white text-xs px-2 rounded-full">
                <a href="">Sale</a>
              </span>
            </li>
          </ul>

          <div class="hidden md:flex items-center gap-5 text-lg">
            <i class="fas fa-search cursor-pointer hover:text-red-500"></i>
            <i class="far fa-user cursor-pointer hover:text-red-500"></i>

            <div class="relative cursor-pointer">
              <i class="far fa-heart hover:text-red-500"></i>
              <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>

            <div class="relative cursor-pointer">
              <i class="fas fa-shopping-bag hover:text-red-500"></i>
              <span class="absolute -top-2 -right-2 bg-gray-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>
          <button id="menuBtn" class="md:hidden text-2xl">
            ☰
          </button>
        </div>
      </div>
      <div id="mobileMenu" class="hidden md:hidden border-t">
        <ul class="flex flex-col gap-4 p-4 text-sm font-medium">
          <li class="text-red-500">Home</li>
          <li>Shop</li>
          <li>Product</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Buy Now</li>
        </ul>
      </div>
    </nav>

    </>
  );
}
