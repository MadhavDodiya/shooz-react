import React from "react";

const Footer = () => {
  return (
    
    <footer className="bg-[#f2f1ea] mt-20">
      {/* ================= NEWSLETTER SECTION ================= */}

      {/* ================= FOOTER LINKS ================= */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm text-gray-800 text-left">
        {/* Information */}
        <div>
          <h3 className="font-semibold mb-4 uppercase">Information</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-500 cursor-pointer">About Us</li>
            <li className="hover:text-pink-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-pink-500 cursor-pointer">Returns Policy</li>
            <li className="hover:text-pink-500 cursor-pointer">Shipping Policy</li>
            <li className="hover:text-pink-500 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 uppercase">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-500 cursor-pointer">My Account</li>
            <li className="hover:text-pink-500 cursor-pointer">My Cart</li>
            <li className="hover:text-pink-500 cursor-pointer">Size Chart</li>
            <li className="hover:text-pink-500 cursor-pointer">Wishlist</li>
            <li className="hover:text-pink-500 cursor-pointer">Gift Card</li>
          </ul>
        </div>

        {/* Brand */}
        <div>
          <h3 className="font-bold text-xl mb-4">
            <img src="src/assets/image/logo.png" alt="Logo" className="h-10" />
          </h3>
          <p className="hover:text-pink-500 cursor-pointer">T: + (08) 9055 0269</p>
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
            <li className="hover:text-pink-500 cursor-pointer">Athletic Footwear</li>
            <li className="hover:text-pink-500 cursor-pointer">Boots for Every Occasion</li>
            <li className="hover:text-pink-500 cursor-pointer">Luxury Leather Shoes</li>
            <li className="hover:text-pink-500 cursor-pointer">Sandals & Slides</li>
            <li className="hover:text-pink-500 cursor-pointer">Sneakerhead’s Haven</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 uppercase">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-pink-500 cursor-pointer">Newsletter</li>
            <li className="hover:text-pink-500 cursor-pointer">Gift Cards</li>
            <li className="hover:text-pink-500 cursor-pointer">Sign In</li>
            <li className="hover:text-pink-500 cursor-pointer">My Account</li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-300 py-6 text-center text-sm text-gray-600">
        © Copyright 2024 Shooz. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
