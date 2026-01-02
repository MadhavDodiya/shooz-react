import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ✅ Mobile menu state

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  useEffect(() => {
    const updateCart = () => {
      const items = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(items);
    };
    updateCart();
    window.addEventListener("cartUpdated", updateCart);
    return () => window.removeEventListener("cartUpdated", updateCart);
  }, []);

  const updateQuantity = (id, type) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        if (type === "inc") return { ...item, qty: item.qty + 1 };
        if (type === "dec" && item.qty > 1) return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <header className="relative">
      {/* ================= TOP MARQUEE ================= */}
      <div className="bg-red-400 text-white text-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-20 px-4 py-2 md:px-24">
          <span>
            Enjoy 20% off your entire order with the code <b>SHOEFRESH20</b>.
          </span>
          <span>
            Get 15% off your first purchase when you sign up for our newsletter.
          </span>
        </div>
      </div>

      {/* ================= INFO BAR ================= */}
      <div className="bg-gray-100 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2 sm:gap-0">
          <p>One Day Delivery Available</p>
          <div className="flex items-center gap-4 text-gray-700 flex-wrap">
            <a href="#" className="hover:decoration-red-500">Login / Register</a>
            <i className="fab fa-facebook-f hover:text-red-500 cursor-pointer"></i>
            <i className="fab fa-twitter hover:text-red-500 cursor-pointer"></i>
            <i className="fab fa-instagram hover:text-red-500 cursor-pointer"></i>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 relative">
            {/* LOGO */}
            <div className="text-2xl font-bold">
              <img src="src/assets/image/imgi_2_logo.png" alt="Logo" className="h-10" />
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden flex items-center">
              <button
                className="text-2xl"
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
              >
                ☰
              </button>
            </div>

            {/* MENU LINKS */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              <li className="hover:border-red-500 hover:border-b-2 pb-1 hover:text-pink-500"><Link to="/">Home</Link></li>
              <li className="hover:border-red-500 hover:border-b-2 pb-1 hover:text-pink-500"><Link to="/shop">Shop</Link></li>
              <li className="hover:border-red-500 hover:border-b-2 pb-1 hover:text-pink-500">Product</li>
              <li className="hover:border-red-500 hover:border-b-2 pb-1 hover:text-pink-500"><Link to="/blog">Blog</Link></li>
              <li className="hover:border-red-500 hover:border-b-2 pb-1 hover:text-pink-500">Pages</li>
              <li className="hover:border-red-500 hover:border-b-2 pb-1 hover:text-pink-500">Buy Now</li>
            </ul>

            {/* ICONS */}
            <div className="hidden md:flex items-center gap-5 text-lg">
              <i className="fas fa-search cursor-pointer hover:text-red-500"></i>
              <i
                className="far fa-user cursor-pointer hover:text-red-500"
                onClick={() => setIsLoginOpen(true)}
              ></i>
              <div className="relative cursor-pointer">
                <Link to="/wishlist">
                  <i className="far fa-heart hover:text-red-500"></i>
                </Link>
              </div>
              <div className="relative cursor-pointer group">
                <i
                  className="fas fa-shopping-bag hover:text-red-500"
                  onClick={() => setIsCartOpen(true)}
                ></i>
                <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full z-50">
            <ul className="flex flex-col gap-4 p-4">
              <li className="hover:text-pink-500"><Link to="/">Home</Link></li>
              <li className="hover:text-pink-500"><Link to="/shop">Shop</Link></li>
              <li className="hover:text-pink-500">Product</li>
              <li className="hover:text-pink-500"><Link to="/blog">Blog</Link></li>
              <li className="hover:text-pink-500">Pages</li>
              <li className="hover:text-pink-500">Buy Now</li>
              <li className="hover:text-pink-500 cursor-pointer" onClick={() => setIsLoginOpen(true)}>Login / Register</li>
            </ul>
          </div>
        )}
      </nav>

      {/* ================= LOGIN POPUP ================= */}
      {isLoginOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]"
          onClick={() => setIsLoginOpen(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
              onClick={() => setIsLoginOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-center py-3">Login</h2>
            <p className="text-center pb-5 text-gray-500">Please enter your e-mail and password</p>
            <form className="space-y-4">
              <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" />
              <input type="password" placeholder="Password" className="w-full border px-3 py-2 rounded" />
              <p className="text-right text-gray-500 text-[13px] border-b-2 hover:text-pink-500 cursor-pointer">Forget Your Password</p>
              <button className="w-full bg-red-500 text-white py-2 rounded">Login</button>
              <p className="text-center py-3 text-gray-500">New Customer? Register</p>
            </form>
          </div>
        </div>
      )}

      {/* ================= CART SIDEBAR ================= */}
      <div className={`fixed inset-0 z-[998] ${isCartOpen ? "visible" : "invisible"}`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsCartOpen(false)}></div>
        <div
          className={`absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 flex flex-col ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-bold">Shopping Cart ({totalItems})</h3>
            <button onClick={() => setIsCartOpen(false)}>✕</button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-400 py-10">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border-b">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        className="w-7 h-7 border rounded hover:bg-gray-100 disabled:opacity-50"
                        onClick={() => updateQuantity(item.id, "dec")}
                        disabled={item.qty === 1}
                      >
                        −
                      </button>
                      <span className="min-w-[20px] text-center">{item.qty}</span>
                      <button
                        className="w-7 h-7 border rounded hover:bg-gray-100"
                        onClick={() => updateQuantity(item.id, "inc")}
                      >
                        +
                      </button>
                    </div>
                    <p className="font-bold mt-2">₹{(item.price * item.qty).toFixed(2)}</p>
                  </div>
                  <button className="text-red-500 text-sm" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              ))
            )}
          </div>
          <div className="p-4 border-t">
            <div className="flex justify-between font-bold mb-3">
              <span>Total</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <Link to="/shop" className="block bg-red-500 text-white text-center py-2 rounded">View Cart</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
