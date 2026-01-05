// Wishlist.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('wishlistItems');
    if (saved) setWishlistItems(JSON.parse(saved));
  }, []);

  const removeFromWishlist = (productId) => {
    const updated = wishlistItems.filter(item => item.id !== productId);
    setWishlistItems(updated);
    localStorage.setItem('wishlistItems', JSON.stringify(updated));
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      const updated = cart.map(item => 
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updated));
    } else {
      localStorage.setItem('cartItems', JSON.stringify([...cart, { ...product, qty: 1 }]));
    }
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">My Wishlist ({wishlistItems.length})</h1>
          {wishlistItems.length > 0 && (
            <Link to="/shop" className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
              Continue Shopping
            </Link>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-24">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              {/* Filled heart icon with color */}
              <i className="fas fa-heart text-3xl text-red-400"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Wishlist is Empty</h3>
            <p className="text-gray-500 mb-8">You have no items in your wishlist.</p>
            <Link to="/shop" className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-48 w-48 object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-black mb-6">₹{product.price}</p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition"
                    >
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => removeFromWishlist(product.id)}
                      className="p-3 text-red-500 rounded-lg"
                      title="Remove from wishlist"
                    >
                      <i className="fas fa-trash text-xl"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
