import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f2f1ea] mt-20">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-md">
          {/* Left */}
          <div className="bg-[#a6424d] text-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
              Subscribe to our news <br /> articals
            </h2>

            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 text-black outline-none"
              />
              <button className="bg-black text-white px-6 uppercase text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:block">
            <img src="src/assets/image/newslatter-image.jpg" alt="Sneaker" className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-center max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm text-gray-800">
        {/* Information */}
        <div>
          <h3 className="font-semibold mb-4 uppercase">Information</h3>
          <ul className="space-y-2 hover:text-pink-500">
            <li className="hover:text-pink-500">About Us</li>
            <li className="hover:text-pink-500">Privacy Policy</li>
            <li className="hover:text-pink-500">Returns Policy</li>
            <li className="hover:text-pink-500">Shipping Policy</li>
            <li className="hover:text-pink-500">Terms & Conditions</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 uppercase">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-500">My Account</li>
            <li className="hover:text-pink-500">My Cart</li>
            <li className="hover:text-pink-500">Size Chart</li>
            <li className="hover:text-pink-500">Wishlist</li>
            <li className="hover:text-pink-500">Gift Card</li>
          </ul>
        </div>

        {/* Brand */}
        <div>
          <h3 className="font-bold text-xl mb-4"><img src="src/assets/image/logo.png" alt="" /></h3>
          <p className="hover:text-pink-500">T: + (08) 9055 0269</p>
          <p className="mt-1">E: example@example.com</p>
          <p className="mt-3">
            50 Porana Place, West Casuarinas,
            <br />
            Western Australia, Australia.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4 uppercase">Categories</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-500">Athletic Footwear</li>
            <li className="hover:text-pink-500">Boots for Every Occasion</li>
            <li className="hover:text-pink-500">Luxury Leather Shoes</li>
            <li className="hover:text-pink-500">Sandals & Slides</li>
            <li className="hover:text-pink-500">Sneakerhead’s Haven</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 uppercase">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-500">Contact Us</li>
            <li className="hover:text-pink-500">Newsletter</li>
            <li className="hover:text-pink-500">Gift Cards</li>
            <li className="hover:text-pink-500">Sign In</li>
            <li className="hover:text-pink-500">My Account</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-6 text-center text-sm text-gray-600">
        © Copyright 2024 Shooz. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
