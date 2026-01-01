import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // ✅ ADDED

  // Simulate cart data (replace with real cart logic)
  useEffect(() => {
    setCartItems([
      { id: 1, name: 'Sneakers', price: 99, qty: 2, image: '/api/placeholder/60/60' },
      { id: 2, name: 'Jacket', price: 199, qty: 1, image: '/api/placeholder/60/60' },
    ]);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <>
      <header>
        <div className="relative overflow-hidden bg-red-400 text-white text-sm">
          <div className="flex overflow-hidden">
            <div className="flex min-w-full animate-marquee gap-20 px-24 py-2">
              <span>Enjoy 20% off your entire order with the code <b>SHOEFRESH20</b>.</span>
              <span>Get 15% off your first purchase when you sign up for our newsletter.</span>
            </div>
            <div className="flex min-w-full animate-marquee gap-20 px-24 py-2">
              <span>Enjoy 20% off your entire order with the code <b>SHOEFRESH20</b>.</span>
              <span>Get 15% off your first purchase when you sign up for our newsletter.</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 text-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
            <p>One Day Delivery Available</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:decoration-red-500 ">Login / Register</a>
              <i className="fab fa-facebook-f hover:text-red-500"></i>
              <i className="fab fa-twitter hover:text-red-500"></i>
              <i className="fab fa-instagram hover:text-red-500"></i>
            </div>
          </div>
        </div>

        <nav className="border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">

              <div className="text-2xl font-bold">
                <img src="/src/assets/image/imgi_2_logo.png" alt="" />
              </div>

              <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                <li className="text-red-500 hover:border-red-500 hover:border-b-2 pb-1"><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li>Product</li>
                <li><Link to="/blog">Blog</Link></li>
                <li>Pages</li>
              </ul>

              <div className="hidden md:flex items-center gap-5 text-lg">
                <i className="fas fa-search cursor-pointer hover:text-red-500"></i>

                {/* USER ICON (ONLY onClick added) */}
                <i
                  className="far fa-user cursor-pointer hover:text-red-500"
                  onClick={() => setIsLoginOpen(true)}
                ></i>

                <div className="relative cursor-pointer">
                  <Link to="/wishlist">
                    <i className="far fa-heart hover:text-red-500"></i>
                  </Link>
                </div>

                {/* CART ICON (UNCHANGED) */}
                <div className="relative cursor-pointer group">
                  <i
                    className="fas fa-shopping-bag hover:text-red-500"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsCartOpen(true); // 🔥 slidebar also uses this
                    }}
                  ></i>
                  <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                </div>

              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ================= LOGIN POPUP (ADDED) ================= */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]"
          onClick={() => setIsLoginOpen(false)}>
          <div className="bg-white w-full max-w-md rounded-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
              onClick={() => setIsLoginOpen(false)}>✕</button>

            <h2 className="text-2xl font-bold text-center mb-5">Login</h2>

            <form className="space-y-4">
              <input type="email" placeholder="Email"
                className="w-full border px-3 py-2 rounded" />
              <input type="password" placeholder="Password"
                className="w-full border px-3 py-2 rounded" />
              <button className="w-full bg-red-500 text-white py-2 rounded">
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= CART SLIDEBAR (ADDED) ================= */}
      <div className={`fixed inset-0 z-[998] ${isCartOpen ? "visible" : "invisible"}`}>
        <div className="absolute inset-0 bg-black/50"
          onClick={() => setIsCartOpen(false)}></div>

        <div className={`absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>

          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-bold">Shopping Cart ({totalItems})</h3>
            <button onClick={() => setIsCartOpen(false)}>✕</button>
          </div>

          <div className="overflow-y-auto flex-1">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-4 p-4 border-b">
                <img src={item.image} className="w-16 h-16 rounded" />
                <div className="flex-1">
                  <p>{item.name}</p>
                  <p className="text-sm">Qty: {item.qty}</p>
                  <p className="font-bold">${item.price * item.qty}</p>
                </div>
                <button className="text-red-500"
                  onClick={() => setCartItems(cartItems.filter(i => i.id !== item.id))}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex justify-between font-bold mb-3">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Link to="/cart" className="block bg-red-500 text-white text-center py-2 rounded">
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
